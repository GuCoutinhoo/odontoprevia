import {
  ArrowUpRight,
  ArrowRight,
  Users,
  Instagram,
  Facebook,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";
import ctaImg from "@/assets/cta.jpg";
import { CLINIC_CONFIG, getWhatsAppUrl } from "@/config/clinic";

interface CtaFooterSectionProps {
  onOpenAppointment: (treatmentName?: string) => void;
  isVisible?: boolean;
}

export function CtaFooterSection({ onOpenAppointment, isVisible = true }: CtaFooterSectionProps) {
  return (
    <footer
      id="contato"
      className="relative pt-16 sm:pt-20 lg:pt-24 pb-12 bg-[#FAF8F5]"
      aria-label="Contato e Rodapé da Clínica Lumière"
    >
      <div className="mx-auto w-[min(calc(100%-48px),1440px)]">
        {/* Banner de Conversão Principal de Alto Impacto */}
        <div
          className={`relative overflow-hidden rounded-3xl bg-[#2D241F] text-white shadow-[0_20px_50px_rgba(45,36,31,0.22)] transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {/* Curvas Douradas Decorativas em Vetor */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
            viewBox="0 0 1200 480"
            fill="none"
            preserveAspectRatio="none"
          >
            <path d="M-50 480 C 400 350, 650 200, 1250 80" stroke="#C5A059" strokeWidth="1.5" />
            <path d="M-50 420 C 350 320, 600 180, 1250 30" stroke="#ECC87E" strokeWidth="0.8" />
          </svg>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Coluna de Texto (Esquerda) */}
            <div className="p-8 sm:p-10 lg:p-14 xl:p-16 lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2.5">
                <span className="h-px w-6 bg-[#ECC87E]" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-[#ECC87E] uppercase">
                  O Próximo Passo
                </span>
              </div>

              <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal leading-[1.1] tracking-tight text-white">
                Seu próximo sorriso começa com uma{" "}
                <span className="italic font-serif text-[#ECC87E]">conversa.</span>
              </h2>

              <p className="mt-3.5 text-sm sm:text-base text-white/85 leading-relaxed max-w-[500px]">
                Agende sua avaliação diagnóstica com escaneamento 3D sem moldagem tradicional. Nossa
                equipe de especialistas está pronta para orientar você com máxima transparência e
                cuidado.
              </p>

              {/* Botões de Ação */}
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenAppointment("Avaliação - CTA Final")}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#9E732B] hover:bg-[#855F20] px-7 py-4 text-xs sm:text-sm font-medium text-white shadow-md transition-all duration-300 hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Agendar minha avaliação</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <a
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de conversar com a equipe da Lumière Odontologia e entender o melhor tratamento para mim.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 px-6 py-4 text-xs sm:text-sm font-medium text-white backdrop-blur-xs transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  <span>Falar no WhatsApp</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              {/* Selo de Garantia e Confiança */}
              <div className="mt-7 pt-5 border-t border-white/15 flex flex-wrap items-center gap-4 text-xs text-white/75">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#ECC87E]" />
                  Biossegurança Médica Certificada
                </span>
                <span className="text-white/40">•</span>
                <span>Pontualidade Rigorosa</span>
                <span className="text-white/40">•</span>
                <span>Responsabilidade Técnica CRO-SP</span>
              </div>
            </div>

            {/* Coluna da Imagem Humana (Direita) */}
            <div className="lg:col-span-5 relative h-72 sm:h-80 lg:h-full min-h-[300px] lg:min-h-[460px] overflow-hidden">
              <img
                src={ctaImg}
                alt="Paciente feliz e com sorriso transformado na Lumière"
                loading="lazy"
                width={800}
                height={600}
                className="h-full w-full object-cover object-[center_35%]"
              />
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#2D241F] to-transparent hidden lg:block" />
            </div>
          </div>
        </div>

        {/* Informações da Clínica e Rodapé de Luxo */}
        <div className="mt-14 pt-10 border-t border-[#EAE3D9] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-xs text-[#5C554C]">
          {/* Coluna 1: Marca & Identidade */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="font-serif text-xl tracking-[0.16em] text-[#1E1B18] font-medium">
                LUMIÈRE
              </span>
              <span className="text-[9px] tracking-[0.28em] text-[#966D38] uppercase">
                ODONTOLOGIA
              </span>
            </div>
            <p className="text-xs text-[#665D53] leading-relaxed max-w-[320px]">
              Clínica boutique de odontologia estética, reabilitação oral e ortodontia digital.
              Excelência clínica, tecnologia 3D e acolhimento humano.
            </p>
            <div className="pt-2 text-[11px] text-[#8C8377]">
              <span>Responsável Técnico: Dra. Lumière • CRO-SP 123.456</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="lg:col-span-3 space-y-2.5">
            <h5 className="font-semibold text-[#1E1B18] uppercase tracking-wider text-[11px]">
              Especialidades
            </h5>
            <div className="flex flex-col space-y-1.5">
              <a href="#tratamentos" className="hover:text-[#966D38] transition-colors">
                Lentes de Contato Dental
              </a>
              <a href="#tratamentos" className="hover:text-[#966D38] transition-colors">
                Alinhadores Invisíveis
              </a>
              <a href="#tratamentos" className="hover:text-[#966D38] transition-colors">
                Implantes Dentários Guiados 3D
              </a>
              <a href="#tratamentos" className="hover:text-[#966D38] transition-colors">
                Clareamento a Laser Supervisionado
              </a>
              <a href="#tratamentos" className="hover:text-[#966D38] transition-colors">
                Harmonização Facial Sutil
              </a>
            </div>
          </div>

          {/* Coluna 3: Localização & Horários */}
          <div className="lg:col-span-3 space-y-2.5">
            <h5 className="font-semibold text-[#1E1B18] uppercase tracking-wider text-[11px]">
              Atendimento & Localização
            </h5>
            <div className="space-y-2 text-[#665D53]">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#966D38] shrink-0 mt-0.5" />
                <span>Rua Afonso Braz, 850 — Vila Nova Conceição, São Paulo - SP</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#966D38] shrink-0" />
                <span>Seg a Sex: 08h às 20h • Sáb: 08h às 14h</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#966D38] shrink-0" />
                <span>(11) 3456-7890 • WhatsApp disponível</span>
              </div>
            </div>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="font-semibold text-[#1E1B18] uppercase tracking-wider text-[11px]">
              Conecte-se
            </h5>
            <div className="flex items-center gap-3 text-[#786F64]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#DCD3C7] bg-white hover:bg-[#483323] hover:text-white transition-all shadow-2xs"
                aria-label="Instagram da Lumière"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#DCD3C7] bg-white hover:bg-[#483323] hover:text-white transition-all shadow-2xs"
                aria-label="Facebook da Lumière"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#DCD3C7] bg-white hover:bg-[#483323] hover:text-white transition-all shadow-2xs"
                aria-label="YouTube da Lumière"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
            <p className="text-[11px] text-[#8C8377] pt-2">© 2026 Lumière Odontologia.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
