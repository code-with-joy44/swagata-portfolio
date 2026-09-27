import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, isEmailJSConfigured } from '../config/emailjs';

export interface ContactMessagePayload {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}

export interface SendEmailResponse {
  success: boolean;
  message: string;
}

/**
 * Sends a validated contact message using EmailJS official browser SDK.
 * Delivers parameters matching the template:
 * - from_name
 * - from_email
 * - subject
 * - message
 * - reply_to (standard alias for sender's email)
 */
export const sendContactMessage = async (
  payload: ContactMessagePayload
): Promise<SendEmailResponse> => {
  if (!isEmailJSConfigured()) {
    throw new Error(
      'EmailJS credentials are not configured yet. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in .env or in src/config/emailjs.ts.'
    );
  }

  const templateParams: Record<string, string> = {
    from_name: payload.from_name.trim(),
    from_email: payload.from_email.trim(),
    subject: payload.subject.trim(),
    message: payload.message.trim(),
    reply_to: payload.from_email.trim(),
  };

  try {
    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId.trim(),
      EMAILJS_CONFIG.templateId.trim(),
      templateParams,
      EMAILJS_CONFIG.publicKey.trim()
    );

    if (result.status === 200) {
      return {
        success: true,
        message: "Message sent successfully! I'll get back to you soon.",
      };
    } else {
      throw new Error(`Delivery returned status ${result.status}: ${result.text}`);
    }
  } catch (error: any) {
    // Extract real message from EmailJS or error object
    const errorMessage =
      error?.text ||
      error?.message ||
      'Something went wrong. Please try again.';
    throw new Error(errorMessage);
  }
};
