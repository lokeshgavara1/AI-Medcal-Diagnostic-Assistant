import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY environment variable not set. Email functionality will be disabled in demo mode.");
}

const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  // If no API key is set, return success for demo purposes
  if (!process.env.SENDGRID_API_KEY) {
    console.log("Demo mode: Contact form submitted", data);
    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true;
  }

  try {
    const msg = {
      to: 'lokeshgavara1@gmail.com', // Your email address
      from: 'noreply@medai-assistant.com', // Change to your verified sender when you configure SendGrid
      subject: `Contact Form: ${data.subject}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}
      `,
      html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${data.name}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Subject:</strong> ${data.subject}</p>
<p><strong>Message:</strong></p>
<p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await mailService.send(msg);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}