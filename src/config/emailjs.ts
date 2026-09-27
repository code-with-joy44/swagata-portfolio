/**
 * ============================================================================
 * EMAILJS CONFIGURATION
 * ============================================================================
 * Configure your EmailJS credentials here or via environment variables in .env:
 *
 *   VITE_EMAILJS_SERVICE_ID=your_service_id
 *   VITE_EMAILJS_TEMPLATE_ID=your_template_id
 *   VITE_EMAILJS_PUBLIC_KEY=your_public_key
 *
 * If you set the environment variables in your environment or .env,
 * they will automatically be loaded below. You can also paste them directly into
 * the fallback strings below if you prefer.
 *
 * SECURITY NOTICE:
 * - Only the Public Key, Service ID, and Template ID belong here.
 * - NEVER enter your Gmail password, private keys, or personal tokens.
 * ============================================================================
 */

export interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export const EMAILJS_CONFIG: EmailJSConfig = {
  // 1. Service ID (Found in EmailJS Dashboard -> "Email Services")
  serviceId: (import.meta.env.VITE_EMAILJS_SERVICE_ID as string) || 'service_jax3gmi',

  // 2. Template ID (Found in EmailJS Dashboard -> "Email Templates")
  templateId: (import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string) || 'template_y6c0lwv',

  // 3. Public Key (Found in EmailJS Dashboard -> "Account" -> "Public Key")
  publicKey: (import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string) || 'AogJoQzRzee-AWqj7',
};

/**
 * Checks whether all three required EmailJS credentials have been populated
 */
export const isEmailJSConfigured = (): boolean => {
  const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;
  return Boolean(
    serviceId &&
    serviceId.trim().length > 0 &&
    serviceId !== 'YOUR_SERVICE_ID' &&
    templateId &&
    templateId.trim().length > 0 &&
    templateId !== 'YOUR_TEMPLATE_ID' &&
    publicKey &&
    publicKey.trim().length > 0 &&
    publicKey !== 'YOUR_PUBLIC_KEY'
  );
};
