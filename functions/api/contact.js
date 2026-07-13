// Cloudflare Pages Function — contact form handler.
// The site form POSTs JSON to /api/contact; this validates it and emails the
// submission via Resend (https://resend.com), then returns JSON.
//
// Required env vars (Cloudflare Pages → Settings → Environment variables):
//   RESEND_API_KEY   your Resend API key
//   CONTACT_TO       where submissions are delivered (e.g. hello@thevarahi.com)
//   CONTACT_FROM     verified sender, e.g. "Varahi <hello@thevarahi.com>"
//                    (until your domain is verified in Resend you may use
//                    "Varahi <onboarding@resend.dev>" for testing)
//
// And point the form at it: VITE_CONTACT_ENDPOINT=/api/contact

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export async function onRequestPost({ request, env }) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ error: 'Invalid request.' }, 400);
  }

  // Honeypot — bots fill hidden fields. Pretend success and drop it.
  if (data._gotcha) return json({ ok: true });

  const name = (data.name || '').trim();
  const email = (data.email || '').trim();
  const message = (data.message || '').trim();

  if (!name || !email || !message) {
    return json({ error: 'Name, email and a short description are required.' }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'Please enter a valid email address.' }, 400);
  }

  if (!env.RESEND_API_KEY) {
    return json({ error: 'Contact endpoint is not configured yet.' }, 500);
  }

  const to = env.CONTACT_TO || 'hello@thevarahi.com';
  const from = env.CONTACT_FROM || 'Varahi <onboarding@resend.dev>';
  const subject = `Varahi enquiry — ${data.interest || 'General'} — ${data.company || name}`;
  const text =
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Company: ${data.company || '—'}\n` +
    `Interest: ${data.interest || '—'}\n\n` +
    `${message}\n`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from, to, reply_to: email, subject, text }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    return json({ error: 'Could not send right now.', detail }, 502);
  }

  return json({ ok: true });
}
