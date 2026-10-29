/**
 * Configuração central da Lumière Odontologia
 * Contatos oficiais e dados da clínica
 */

export const CLINIC_CONFIG = {
  name: "Lumière Odontologia",
  tagline: "Sorrisos que transformam histórias",
  whatsappNumber: "5511987654321", // 55 + DDD + Número sem espaços ou traços
  whatsappFormatted: "(11) 98765-4321",
  phone: "(11) 98765-4321",
  email: "contato@lumiereodontologia.com.br",
  address: "Av. Paulista, 1000 - Bela Vista, SP",
  instagram: "@lumiereodontologia",
};

/**
 * Gera a URL oficial de redirecionamento para o WhatsApp da clínica
 */
export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${CLINIC_CONFIG.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
