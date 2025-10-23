# EmailJS Setup Guide for Varahi Enterprise

This guide will walk you through setting up EmailJS to enable functional contact forms and newsletter subscriptions on your website.

## 🚀 Quick Setup (15 minutes)

### Step 1: Create EmailJS Account
1. Visit [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account (1000 emails/month included)
3. Verify your email address

### Step 2: Configure Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for testing)
   - **Outlook/Hotmail**
   - **Custom SMTP** (for business email)

#### For Gmail:
1. Select Gmail service
2. Connect your Gmail account
3. Note the **Service ID** (e.g., `service_1234567`)

### Step 3: Create Email Templates

#### Contact Form Template:
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

```
Subject: New Contact Form Submission from {{from_name}}

Hello Varahi Team,

You have received a new contact form submission:

**Contact Information:**
Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}

**Inquiry Details:**
Type: {{inquiry_type}}
Urgency: {{urgency}}
Budget: {{budget}}
Timeline: {{timeline}}

**Message:**
{{message}}

**Submitted:** {{submitted_at}}

---
Reply directly to: {{reply_to}}
```

4. Save and note the **Template ID** (e.g., `template_contact123`)

#### Newsletter Subscription Template:
1. Create another template for newsletter subscriptions:

```
Subject: New Newsletter Subscription

Hello Varahi Team,

New newsletter subscription:

**Subscriber Details:**
Email: {{subscriber_email}}
Name: {{subscriber_name}}
Preferences: {{preferences}}
Subscribed: {{subscribed_at}}

Please add this subscriber to your mailing list.
```

5. Save and note the **Template ID** (e.g., `template_newsletter456`)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abcd1234567890`)

### Step 5: Configure Environment Variables
1. Create a `.env` file in your project root:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_1234567
VITE_EMAILJS_TEMPLATE_CONTACT=template_contact123
VITE_EMAILJS_TEMPLATE_NEWSLETTER=template_newsletter456
VITE_EMAILJS_PUBLIC_KEY=abcd1234567890
```

2. Make sure `.env` is in your `.gitignore` file

### Step 6: Test Your Setup
1. Run your development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out and submit the contact form
4. Check your email for the test submission

## 📧 Email Template Variables Reference

### Contact Form Variables:
- `{{to_name}}` - Recipient name (Varahi Team)
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{company}}` - Sender's company
- `{{phone}}` - Phone number
- `{{inquiry_type}}` - Type of inquiry
- `{{urgency}}` - Urgency level
- `{{message}}` - Main message
- `{{budget}}` - Budget range
- `{{timeline}}` - Project timeline
- `{{reply_to}}` - Reply-to email
- `{{submitted_at}}` - Timestamp

### Newsletter Variables:
- `{{subscriber_email}}` - Subscriber's email
- `{{subscriber_name}}` - Subscriber's name (optional)
- `{{preferences}}` - Content preferences
- `{{subscribed_at}}` - Subscription timestamp

## 🔧 Advanced Configuration

### Custom Email Styling
You can add HTML formatting to your EmailJS templates:

```html
<h2>New Contact Form Submission</h2>
<table style="border-collapse: collapse; width: 100%;">
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Name:</strong></td>
    <td style="border: 1px solid #ddd; padding: 8px;">{{from_name}}</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Email:</strong></td>
    <td style="border: 1px solid #ddd; padding: 8px;">{{from_email}}</td>
  </tr>
</table>
```

### Webhook Integration (Pro Feature)
For enterprise needs, you can set up webhooks to automatically:
- Add subscribers to Mailchimp/ConvertKit
- Create tickets in your CRM
- Send to Slack/Teams notifications

### Security Considerations
1. **Rate Limiting**: EmailJS has built-in rate limiting
2. **Spam Protection**: Enable CAPTCHA in EmailJS dashboard
3. **Email Validation**: Client-side validation is already implemented
4. **Error Handling**: Fallback to mailto links when EmailJS fails

## 🚨 Troubleshooting

### Common Issues:

**"Service ID not found"**
- Check your `.env` file has correct service ID
- Restart your development server after changing `.env`

**"Template not found"** 
- Verify template ID in EmailJS dashboard
- Ensure template is published (not draft)

**"Emails not sending"**
- Check EmailJS dashboard for error logs
- Verify email service connection
- Check spam folder

**"Development vs Production"**
- Create separate EmailJS projects for dev/staging/production
- Use different environment variables for each environment

### Testing Checklist:
- [ ] EmailJS account created and verified
- [ ] Email service connected (Gmail/Outlook/SMTP)
- [ ] Contact form template created and published
- [ ] Newsletter template created and published
- [ ] Environment variables set correctly
- [ ] Contact form submits successfully
- [ ] Newsletter subscription works
- [ ] Emails received in inbox (check spam folder)

## 📊 Analytics & Monitoring

EmailJS provides analytics in the dashboard:
- Total emails sent
- Success/failure rates
- Usage by day/month
- Template performance

For advanced analytics, consider integrating with:
- Google Analytics (form submission events)
- Hotjar (form interaction tracking)
- Your CRM system (lead tracking)

## 🔄 Migration to Production Email Service

Once you outgrow EmailJS limits (1000 emails/month on free plan):

1. **Upgrade EmailJS Pro** ($15/month for 10,000 emails)
2. **Custom Backend**: Implement server-side email with:
   - SendGrid API
   - Mailgun API
   - Amazon SES
   - Nodemailer + SMTP

The current implementation will make this migration easier by abstracting email logic in the `EmailService` class.

## 💡 Best Practices

1. **Test Regularly**: Set up automated testing for critical forms
2. **Monitor Delivery**: Check EmailJS analytics weekly
3. **Backup Plan**: Always have mailto fallbacks for critical contact forms
4. **User Experience**: Show clear success/error messages
5. **Performance**: EmailJS calls are async and don't block UI

## 🆘 Support

- **EmailJS Documentation**: https://www.emailjs.com/docs/
- **EmailJS Community**: https://www.emailjs.com/support/
- **This Implementation**: Check `src/services/emailService.ts` for code reference

---

After completing this setup, your contact forms and newsletter subscriptions will be fully functional and professional-grade!