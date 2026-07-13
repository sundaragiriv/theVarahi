// Cloudflare Worker — serves the built SPA (dist, via the ASSETS binding with
// single-page-application fallback) and handles the contact form at /api/contact.
//
// Env vars (set in the dashboard → Settings → Variables and secrets):
//   RESEND_API_KEY   your Resend API key (secret)
//   CONTACT_TO       where submissions land, e.g. venkata@thevarahi.com
//   CONTACT_FROM     verified sender, e.g. "Varahi Contact <contact@venkata.info>"

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

async function handleContact(request, env) {
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

  const to = env.CONTACT_TO || 'venkata@thevarahi.com';
  const from = env.CONTACT_FROM || 'Varahi Contact <contact@venkata.info>';
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

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/contact') {
      if (request.method !== 'POST') return json({ error: 'Method not allowed.' }, 405);
      return handleContact(request, env);
    }
    // Everything else: static assets + SPA fallback to index.html.
    return env.ASSETS.fetch(request);
  },
};
