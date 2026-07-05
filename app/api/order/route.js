import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(request) {
  try {
    const body = await request.json();
    const { formData, cart, subTotal, discountAmount, grandTotal } = body;

    // 1. Configure SMTP email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. Prepare dynamic inline image attachments
    const attachments = [];
    
    // 3. Format the cart items layout
    const itemsHtml = cart
      .map((item, index) => {
        const cidName = `plant_image_${index}`;
        
        // Handle local image paths safely (assuming images are inside the /public folder)
        if (item.image.startsWith("/")) {
          const localPath = path.join(process.cwd(), "public", item.image);
          if (fs.existsSync(localPath)) {
            attachments.push({
              filename: path.basename(localPath),
              path: localPath,
              cid: cidName
            });
          }
        } else {
          // If it's already an external online URL link
          attachments.push({
            path: item.image,
            cid: cidName
          });
        }

        return `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center; width: 70px;">
            <img src="cid:${cidName}" alt="${item.name}" width="60" height="60" style="object-fit: cover; border-radius: 8px; border: 1px solid #ddd; display: block;" />
          </td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">
            <strong style="color: #111;">${item.name}</strong><br/>
            <span style="font-size: 12px; color: #666; font-style: italic;">${item.scientificName || ''}</span>
          </td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center; color: #444;">
            ${item.quantity}
          </td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right; font-weight: bold; color: #111;">
            Rs. ${item.numericPrice * item.quantity}/-
          </td>
        </tr>
      `;
      })
      .join("");

    // 4. Compose the final email structure
    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="background-color: #10b981; color: white; padding: 15px; margin-bottom: 20px; border-radius: 8px; text-align: center;">
          New Plant Order Received! 🌿
        </h2>
        
        <p>A customer has just submitted an order via <strong>Cash on Delivery</strong>.</p>
        
        <h3 style="border-bottom: 2px solid #eee; padding-bottom: 5px; color: #111;">Customer Details:</h3>
        <ul style="list-style: none; padding-left: 0; line-height: 1.6;">
          <li><strong>Name:</strong> ${formData.name}</li>
          <li><strong>Email:</strong> ${formData.email}</li>
          <li><strong>City:</strong> ${formData.city}</li>
          <li><strong>Postal Code:</strong> ${formData.postalCode}</li>
          <li><strong>Shipping Address:</strong> ${formData.address}</li>
        </ul>

        <h3 style="border-bottom: 2px solid #eee; padding-bottom: 5px; color: #111; margin-top: 25px;">Items Ordered:</h3>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
          <thead>
            <tr style="background-color: #f9fafb; text-align: left; font-size: 13px; color: #666;">
              <th style="padding: 10px; text-align: center;">Image</th>
              <th style="padding: 10px;">Plant Details</th>
              <th style="padding: 10px; text-align: center;">Qty</th>
              <th style="padding: 10px; text-align: right;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
        </table>

        <div style="text-align: right; margin-top: 20px; font-size: 14px; border-top: 2px solid #eee; padding-top: 15px; line-height: 1.8;">
          <div><strong>Subtotal:</strong> Rs. ${subTotal}/-</div>
          ${discountAmount > 0 ? `<div style="color: #10b981;"><strong>Discount:</strong> - Rs. ${discountAmount}/-</div>` : ""}
          <div><strong>Shipping Fees:</strong> <span style="color: #10b981; font-weight: bold;">FREE</span></div>
          <div style="font-size: 18px; margin-top: 10px; color: #111;">
            <strong>Grand Total:</strong> <span style="color: #059669; font-weight: 900;">Rs. ${grandTotal}/-</span>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Store Manager" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
      subject: `🚨 New Plant Order from ${formData.name} (${formData.city})`,
      html: emailHtml,
      attachments: attachments // Injects inline embedded images securely
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Order Email Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}