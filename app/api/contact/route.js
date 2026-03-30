import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Ensure credentials are available
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailAppPassword) {
      return Response.json(
        {
          error: 'Missing Gmail credentials',
          details:
            'Set GMAIL_USER and GMAIL_APP_PASSWORD in your .env.local and restart the server.',
        },
        { status: 500 }
      );
    }

    // Create transporter with Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    // Email to you (with full details)
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>Reply to: ${email}</p>
      `,
    });

    // Optional: Send confirmation email to user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'We received your message!',
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>I received your message and will get back to you soon.</p>
        <p><strong>Your message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p>Best regards,<br>Rakesh</p>
      `,
    });

    return Response.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      cmd: error.cmd,
    });
    return Response.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}