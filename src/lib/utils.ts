import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\d{2})(?=\d)/g, "$1 ");
}

export function getWhatsAppLink(phone: string, message?: string): string {
  const cleanPhone = phone.replace(/\s/g, "");
  const encodedMessage = message
    ? encodeURIComponent(message)
    : encodeURIComponent(
        "Bonjour, je souhaiterais obtenir des informations sur vos services."
      );
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

export function getPhoneLink(phone: string): string {
  const cleanPhone = phone.replace(/\s/g, "");
  return `tel:${cleanPhone}`;
}

export function getEmailLink(email: string, subject?: string): string {
  const encodedSubject = subject
    ? encodeURIComponent(subject)
    : encodeURIComponent("Demande d'information - Satisfait Services");
  return `mailto:${email}?subject=${encodedSubject}`;
}
