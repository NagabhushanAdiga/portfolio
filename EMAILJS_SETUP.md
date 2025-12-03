# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to send emails from your React contact form without a backend server.

## Step 1: Install EmailJS Package

The package is already added to your `package.json`. Run:

```bash
npm install
```

## Step 2: Create EmailJS Account (FREE)

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. The free plan includes **200 emails per month** (perfect for a portfolio site!)

## Step 3: Set Up Email Service

1. Log in to your EmailJS dashboard
2. Go to **Email Services** in the left sidebar
3. Click **Add New Service**
4. Choose your email provider (Gmail, Outlook, etc.)
5. Follow the connection steps to connect your email account
6. **Note down your Service ID** (you'll need this later)

## Step 4: Create Email Template

1. Go to **Email Templates** in the left sidebar
2. Click **Create New Template**
3. Use the following template content:

```
Subject: {{subject}}

Hello,

You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio website.
```

4. Save the template
5. **Note down your Template ID** (you'll need this later)

## Step 5: Get Your Public Key

1. Go to **Account** > **General** in EmailJS dashboard
2. Find your **Public Key**
3. **Copy this key** (you'll need this later)

## Step 6: Configure Your React App

### Option A: Using Environment Variables (Recommended for Security)

1. Create a `.env` file in your project root (same level as `package.json`)
2. Add the following variables:

```env
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
```

3. Replace the placeholder values with your actual credentials
4. **Important**: Add `.env` to your `.gitignore` file to keep your keys private

### Option B: Direct Configuration (Quick Test)

If you want to test quickly, you can directly replace the values in `src/components/Contact.js`:

```javascript
const PUBLIC_KEY = 'your_public_key_here';
const SERVICE_ID = 'your_service_id_here';
const TEMPLATE_ID = 'your_template_id_here';
```

## Step 7: Update Template Variables (if needed)

If your EmailJS template uses different variable names, update the `templateParams` object in `Contact.js`:

```javascript
const templateParams = {
  from_name: formData.name,
  from_email: formData.email,
  subject: formData.subject,
  message: formData.message,
  to_email: 'nagbhushan.adiga@gmail.com'
};
```

Make sure these variable names match your EmailJS template variables (the `{{variable_name}}` placeholders).

## Step 8: Test Your Contact Form

1. Start your React app: `npm start`
2. Navigate to the contact section
3. Fill out the form and submit
4. Check your email inbox for the message!

## Troubleshooting

### Emails not sending?

1. **Check browser console** - Look for error messages
2. **Verify all credentials** - Make sure Public Key, Service ID, and Template ID are correct
3. **Check EmailJS dashboard** - Look at the "Logs" section to see if emails are being sent
4. **Verify template variables** - Ensure variable names match between template and code

### Environment variables not working?

1. Make sure the `.env` file is in the root directory
2. Variable names must start with `REACT_APP_`
3. Restart your development server after creating/updating `.env`
4. Check that `.env` is not in `.gitignore` incorrectly

### Free tier limits?

- Free plan: 200 emails/month
- If you exceed this, you'll need to upgrade or wait for the next month
- Check your usage in the EmailJS dashboard

## Security Notes

- **Never commit** your `.env` file to Git
- The Public Key is safe to expose in frontend code (it's designed for this)
- Service ID and Template ID can be exposed but it's better to use environment variables
- For production, use environment variables or a backend API route

## Alternative: Formspree (Another Free Option)

If you prefer a simpler alternative, you can use [Formspree](https://formspree.io/):

1. Sign up at Formspree
2. Create a form endpoint
3. Update your form's action to the Formspree URL
4. No coding required!

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Check their website for support options

---

**Your contact form is now ready to send emails! 🎉**

