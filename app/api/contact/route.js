import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    // 1. Parse incoming form data from the client side
    const { name, email, phone, subject, message } = await request.json();

    // 2. Validate that the required elements exist
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // 3. Setup Nodemailer Transporter using your Gmail settings
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Will use asmasaleem65654@gmail.com
        pass: process.env.EMAIL_PASS, // Will use your App Password
      },
    });

    // 4. Draft the HTML Email Template
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, 
      replyTo: email, // Clicking "Reply" in your inbox goes directly to the user's email
      to: process.env.EMAIL_USER, // Sends the email directly back to you
      subject: `🚨 Planto Contact Form: ${subject}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; background-color: #f9f9f9; border-radius: 12px; max-width: 600px;">
          <h2 style="color: #16a34a; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">New Inquiry from Planto PK</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 6px 0; font-weight: bold; width: 120px;">Full Name:</td>
              <td style="padding: 6px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Email:</td>
              <td style="padding: 6px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Phone Number:</td>
              <td style="padding: 6px 0;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Subject:</td>
              <td style="padding: 6px 0;">${subject}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 15px; background-color: #ffffff; border-left: 4px solid #16a34a; border-radius: 4px;">
            <p style="margin: 0; font-weight: bold; margin-bottom: 8px; color: #555;">Message:</p>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <p style="font-size: 11px; color: #9ca3af; margin-top: 25px; text-align: center;">
            This email was automatically generated from the Planto website contact form.
          </p>
        </div>
      `,
    };

    // 5. Fire off the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Email Error Log:", error);
    return NextResponse.json(
      { message: "Internal server error. Could not send email." },
      { status: 500 }
    );
  }
}