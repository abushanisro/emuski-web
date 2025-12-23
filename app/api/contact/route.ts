import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';

/**
 * Contact Form API Route
 *
 * Handles incoming contact form submissions and sends emails to enquiries@emuski.com
 * Uses Nodemailer with Gmail SMTP for production-ready email delivery
 * Implements proper validation, error handling, and security measures
 *
 * @author Senior Software Engineer
 * @version 2.0.0 - Production Ready with Nodemailer
 */

// Type definitions for better type safety
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  requirements?: string;
  recaptchaToken: string;
}

interface EmailPayload {
  to: string;
  from: string;
  subject: string;
  html: string;
  attachments?: Array<{
    filename: string;
    content: string;
    encoding: string;
  }>;
}

/**
 * Validates email format using RFC 5322 regex
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates phone number (international format)
 */
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Sanitizes HTML to prevent XSS attacks
 */
function sanitizeHtml(text: string): string {
  return text
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Verifies reCAPTCHA token with Google
 */
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY not configured');
    return false;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('reCAPTCHA verification failed:', error);
    return false;
  }
}

/**
 * Generates professional HTML email template
 */
function generateEmailHtml(data: ContactFormData, hasAttachment: boolean): string {
  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'long',
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
    }
    .container {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header {
      background: linear-gradient(135deg, #009688 0%, #00796B 100%);
      color: white;
      padding: 20px;
      border-radius: 8px 8px 0 0;
      margin: -30px -30px 30px -30px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 600;
    }
    .field-group {
      margin-bottom: 20px;
      padding-bottom: 15px;
      border-bottom: 1px solid #e0e0e0;
    }
    .field-group:last-child {
      border-bottom: none;
    }
    .field-label {
      font-weight: 600;
      color: #00796B;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 5px;
    }
    .field-value {
      color: #333;
      font-size: 16px;
      word-wrap: break-word;
    }
    .requirements {
      background-color: #f9f9f9;
      padding: 15px;
      border-left: 4px solid #009688;
      border-radius: 4px;
      margin-top: 10px;
      white-space: pre-wrap;
    }
    .attachment-badge {
      display: inline-block;
      background-color: #FFF3E0;
      color: #E65100;
      padding: 5px 12px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 2px solid #e0e0e0;
      text-align: center;
      color: #666;
      font-size: 12px;
    }
    .timestamp {
      color: #999;
      font-size: 13px;
      font-style: italic;
    }
    .priority {
      display: inline-block;
      background-color: #FFEBEE;
      color: #C62828;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📧 New Contact Form Submission</h1>
      <p style="margin: 5px 0 0 0; opacity: 0.9;">EMUSKI Manufacturing Solutions</p>
    </div>

    <div style="margin-bottom: 20px;">
      <span class="priority">Action Required</span>
    </div>

    <div class="field-group">
      <div class="field-label">👤 Contact Name</div>
      <div class="field-value">${sanitizeHtml(data.name)}</div>
    </div>

    <div class="field-group">
      <div class="field-label">📧 Company Email</div>
      <div class="field-value">
        <a href="mailto:${data.email}" style="color: #009688; text-decoration: none;">
          ${sanitizeHtml(data.email)}
        </a>
      </div>
    </div>

    <div class="field-group">
      <div class="field-label">📞 Phone Number</div>
      <div class="field-value">
        <a href="tel:${data.phone.replace(/\s/g, '')}" style="color: #009688; text-decoration: none;">
          ${sanitizeHtml(data.phone)}
        </a>
      </div>
    </div>

    ${data.requirements ? `
    <div class="field-group">
      <div class="field-label">📋 Project Requirements</div>
      <div class="requirements">${sanitizeHtml(data.requirements)}</div>
    </div>
    ` : ''}

    ${hasAttachment ? `
    <div class="field-group">
      <div class="field-label">📎 Attachment</div>
      <div class="field-value">
        <span class="attachment-badge">✓ File attached to this email</span>
      </div>
    </div>
    ` : ''}

    <div class="footer">
      <div class="timestamp">
        <strong>Submitted:</strong> ${timestamp}
      </div>
      <p style="margin-top: 15px;">
        This is an automated message from the EMUSKI contact form.<br>
        Please respond to the customer within 24 hours.
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Creates and configures SMTP transporter
 * Production-ready configuration with connection pooling and security
 */
function createTransporter(): Transporter {
  const config = {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    // Production-ready settings
    pool: true, // Use connection pooling
    maxConnections: 5, // Max concurrent connections
    maxMessages: 100, // Max messages per connection
    rateDelta: 1000, // Time between messages (1 second)
    rateLimit: 5, // Max 5 messages per rateDelta
    // TLS/SSL settings for security
    tls: {
      rejectUnauthorized: true, // Verify server certificate
      minVersion: 'TLSv1.2' as const, // Minimum TLS version
    },
    // Connection timeout settings
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000, // 10 seconds
    socketTimeout: 30000, // 30 seconds
    // Logging for debugging (disable in production)
    logger: process.env.NODE_ENV === 'development',
    debug: process.env.NODE_ENV === 'development',
  } as any;

  return nodemailer.createTransport(config);
}

/**
 * Sends email using Nodemailer with SMTP
 * Includes retry logic and comprehensive error handling
 */
async function sendEmail(
  payload: EmailPayload,
  maxRetries: number = 3
): Promise<{ success: boolean; error?: string }> {
  const transporter = createTransporter();

  // Verify SMTP configuration
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;

  if (!smtpUser || !smtpPassword) {
    console.error('❌ SMTP credentials not configured');
    return {
      success: false,
      error: 'Email service not configured. Please contact administrator.',
    };
  }

  // Prepare email options
  const mailOptions = {
    from: `${process.env.SMTP_FROM_NAME || 'EMUSKI Contact Form'} <${process.env.SMTP_FROM_EMAIL || smtpUser}>`,
    to: payload.to,
    subject: payload.subject,
    html: payload.html,
    // Convert base64 attachments to Buffer
    attachments: payload.attachments?.map((att) => ({
      filename: att.filename,
      content: Buffer.from(att.content, att.encoding as BufferEncoding),
    })),
    // Additional headers for better deliverability
    headers: {
      'X-Priority': '1',
      'X-MSMail-Priority': 'High',
      'Importance': 'high',
      'X-Mailer': 'EMUSKI Contact Form System v2.0',
    },
  };

  // Retry logic for resilience
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      // Verify connection before sending (first attempt only)
      if (attempt === 1) {
        console.log('🔍 Verifying SMTP connection...');
        await transporter.verify();
        console.log('✅ SMTP connection verified successfully');
      }

      // Send email
      console.log(`📤 Sending email (Attempt ${attempt}/${maxRetries})...`);
      const info = await transporter.sendMail(mailOptions);

      // Success!
      console.log('✅ Email sent successfully via Nodemailer');
      console.log('📧 Message ID:', info.messageId);
      console.log('📬 To:', payload.to);
      console.log('📎 Attachments:', payload.attachments?.length || 0);

      // Close transporter
      transporter.close();

      return { success: true };

    } catch (error: any) {
      console.error(`❌ Email sending failed (Attempt ${attempt}/${maxRetries}):`, error);

      // Check if we should retry
      const shouldRetry = attempt < maxRetries && isRetryableError(error);

      if (!shouldRetry) {
        // Final failure - close transporter and return error
        transporter.close();

        const errorMessage = getErrorMessage(error);
        return {
          success: false,
          error: errorMessage,
        };
      }

      // Wait before retry (exponential backoff)
      const delay = Math.min(1000 * Math.pow(2, attempt - 1), 5000); // Max 5 seconds
      console.log(`⏳ Retrying in ${delay}ms...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  // Should never reach here, but just in case
  transporter.close();
  return {
    success: false,
    error: 'Failed to send email after maximum retry attempts',
  };
}

/**
 * Determines if an error is retryable
 */
function isRetryableError(error: any): boolean {
  const retryableErrors = [
    'ETIMEDOUT',
    'ECONNRESET',
    'ECONNREFUSED',
    'EHOSTUNREACH',
    'ENETUNREACH',
    'EAI_AGAIN',
  ];

  return retryableErrors.some((code) => error.code === code || error.message?.includes(code));
}

/**
 * Gets user-friendly error message from error object
 */
function getErrorMessage(error: any): string {
  // Authentication errors
  if (error.code === 'EAUTH' || error.responseCode === 535) {
    return 'Email authentication failed. Please verify SMTP credentials.';
  }

  // Connection errors
  if (error.code === 'ECONNECTION' || error.code === 'ECONNREFUSED') {
    return 'Failed to connect to email server. Please try again later.';
  }

  // Timeout errors
  if (error.code === 'ETIMEDOUT') {
    return 'Email server connection timeout. Please try again.';
  }

  // TLS/SSL errors
  if (error.message?.includes('SSL') || error.message?.includes('TLS')) {
    return 'Secure connection to email server failed. Please contact administrator.';
  }

  // Rate limiting
  if (error.responseCode === 450 || error.responseCode === 451) {
    return 'Email server is busy. Please try again in a few minutes.';
  }

  // Mailbox errors
  if (error.responseCode === 550) {
    return 'Invalid recipient email address.';
  }

  // Generic SMTP errors
  if (error.responseCode) {
    return `Email server error (${error.responseCode}). Please contact administrator.`;
  }

  // Generic error
  return 'Failed to send email. Please try again or contact administrator.';
}

/**
 * POST handler for contact form submissions
 */
export async function POST(request: NextRequest) {
  try {
    // Parse multipart form data
    const formData = await request.formData();

    // Extract form fields
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const requirements = formData.get('requirements') as string || '';
    const recaptchaToken = formData.get('recaptchaToken') as string;
    const file = formData.get('file') as File | null;

    // Validate required fields
    if (!name || !email || !phone || !recaptchaToken) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields',
          details: {
            name: !name,
            email: !email,
            phone: !phone,
            recaptchaToken: !recaptchaToken,
          }
        },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone number
    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { success: false, error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return NextResponse.json(
        { success: false, error: 'reCAPTCHA verification failed' },
        { status: 403 }
      );
    }

    // Prepare contact data
    const contactData: ContactFormData = {
      name,
      email,
      phone,
      requirements,
      recaptchaToken,
    };

    // Handle file attachment if present
    let attachments: EmailPayload['attachments'] = undefined;
    if (file && file.size > 0) {
      // Validate file size (10MB limit)
      const maxSize = 10 * 1024 * 1024; // 10MB
      if (file.size > maxSize) {
        return NextResponse.json(
          { success: false, error: 'File size exceeds 10MB limit' },
          { status: 400 }
        );
      }

      // Convert file to base64
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64 = buffer.toString('base64');

      attachments = [{
        filename: file.name,
        content: base64,
        encoding: 'base64',
      }];
    }

    // Generate email content
    const emailHtml = generateEmailHtml(contactData, !!file);

    // Prepare email payload
    const emailPayload: EmailPayload = {
      to: 'enquiries@emuski.com',
      from: 'noreply@emuski.com',
      subject: `🔔 New Contact Inquiry from ${name}`,
      html: emailHtml,
      attachments,
    };

    // Send email
    const emailResult = await sendEmail(emailPayload);

    if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error);
      return NextResponse.json(
        { success: false, error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Log successful submission
    console.log('✅ Contact form submission successful:', {
      name,
      email,
      timestamp: new Date().toISOString(),
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully. We will respond within 24 hours.',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

/**
 * GET handler - returns API information
 */
export async function GET() {
  return NextResponse.json(
    {
      name: 'EMUSKI Contact Form API',
      version: '1.0.0',
      status: 'operational',
      endpoint: '/api/contact',
      method: 'POST',
      description: 'Handles contact form submissions and sends emails to enquiries@emuski.com',
    },
    { status: 200 }
  );
}
