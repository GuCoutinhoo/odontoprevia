import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Star,
  Clock,
  Calendar,
} from "lucide-react";
import heroImg from "@/assets/hero.png";

interface HeroSectionProps {
  onOpenAppointment: (treatmentName?: string) => void;
  isVisible?: boolean;
}

export function HeroSection({ onOpenAppointment, isVisible = true }: HeroSectionProps) {
  const [quickTreatment, setQuickTreatment] = useState("Lentes de Contato Dental");
  const [quickPeriod, setQuickPeriod] = useState("Manhã");

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenAppointment(`${quickTreatment} (${quickPeriod})`);
  };

  return (
    <section
      id="início"
      className="relative min-h-[640px] sm:min-h-[720px] lg:min-h-[88vh] w-full flex items-center overflow-hidden bg-[#FAF8F5] pt-24 pb-14 sm:pt-28 sm:pb-16 lg:py-28"
      aria-label="Início - Lumière Odontologia de Alto Padrão"
    >
      {/* Imagem Cinematográfica em Tela Cheia (Full-bleed Background) */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Clínica Lumière Odontologia e recepção de alto padrão"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="h-full w-full object-cover object-[75%_center] sm:object-[80%_center] lg:object-[85%_center] scale-100 transition-transform duration-1000 ease-out"
        />

        {/* Gradiente Scrim Sofisticado para Contraste Impecável */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/96 via-52% sm:via-55% lg:via-50% to-[#FAF8F5]/20 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/50 to-transparent sm:hidden" />
      </div>

      <div className="relative z-10 mx-auto w-[min(calc(100%-48px),1440px)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Conteúdo Textual e Comercial (Esquerda) */}
          <div
            className={`lg:col-span-7 xl:col-span-7 flex flex-col justify-center transition-all duration-700 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {/* Eyebrow Editorial com Traço Dourado */}
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[#9E732B]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-[#966D38] uppercase">
                Odontologia Boutique • São Paulo
              </span>
              <span className="text-[11px] font-medium text-[#7D7368] hidden sm:inline">
                • Responsabilidade Técnica CRO-SP
              </span>
            </div>

            {/* Título Principal Editorial */}
            <h1 className="mt-4 font-serif text-3xl sm:text-5xl lg:text-[54px] xl:text-[60px] leading-[1.08] font-normal tracking-tight text-[#1E1B18]">
              A arte da odontologia que{" "}
              <span className="font-serif italic font-normal text-[#966D38]">
                transforma sua confiança.
              </span>
            </h1>

            {/* Descrição Exclusiva */}
            <p className="mt-4 text-sm sm:text-base lg:text-[17px] text-[#524B43] leading-relaxed max-w-[580px]">
              Onde o rigor científico encontra a sensibilidade estética. Planejamento 100% digital
              em 3D, procedimentos sem dor e acolhimento singular para desenhar o sorriso que
              combina perfeitamente com você.
            </p>

            {/* Prova Social Rápida com Google Reviews */}
            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#483A2E]">
              <div className="flex items-center gap-1 text-[#C5A059]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-[#1E1B18]">4.9 no Google</span>
              <span className="text-[#968E82]">•</span>
              <span className="text-[#6B6359]">+1.200 sorrisos cuidados com excelência</span>
            </div>

            {/* Barra Concierge Interativa de Agendamento Rápido */}
            <form
              onSubmit={handleQuickSubmit}
              className="mt-6 sm:mt-7 rounded-2xl border border-[#E8DFD3] bg-white/95 p-3 sm:p-3.5 shadow-[0_12px_36px_rgba(72,51,35,0.08)] backdrop-blur-md max-w-[620px]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-center">
                <div className="sm:col-span-5">
                  <label
                    htmlFor="quick-treatment"
                    className="block text-[10px] font-semibold uppercase tracking-wider text-[#8A7460] pl-2"
                  >
                    Procedimento desejado
                  </label>
                  <select
                    id="quick-treatment"
                    value={quickTreatment}
                    onChange={(e) => setQuickTreatment(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-[#E0D5C7] bg-[#FAF8F5] px-3 py-2 text-xs font-medium text-[#1E1B18] focus:border-[#9E732B] focus:outline-none transition-colors"
                  >
                    <option value="Lentes de Contato Dental">Lentes de Contato Dental</option>
                    <option value="Clareamento Dental Supervisionado">
                      Clareamento Dental a Laser
                    </option>
                    <option value="Ortodontia com Alinhadores Invisíveis">
                      Alinhadores Invisíveis
                    </option>
                    <option value="Implantes Dentários Guiados 3D">
                      Implantes Dentários Guiados
                    </option>
                    <option value="Harmonização Facial Sutil">Harmonização Facial</option>
                    <option value="Odontologia Estética e Biomimética">Odontologia Estética</option>
                    <option value="Avaliação Geral com Scanner 3D">Avaliação Geral 3D</option>
                  </select>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="quick-period"
                    className="block text-[10px] font-semibold uppercase tracking-wider text-[#8A7460] pl-2"
                  >
                    Preferência
                  </label>
                  <select
                    id="quick-period"
                    value={quickPeriod}
                    onChange={(e) => setQuickPeriod(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-[#E0D5C7] bg-[#FAF8F5] px-3 py-2 text-xs font-medium text-[#1E1B18] focus:border-[#9E732B] focus:outline-none transition-colors"
                  >
                    <option value="Manhã">Manhã</option>
                    <option value="Tarde">Tarde</option>
                    <option value="Sábado">Sábado</option>
                  </select>
                </div>

                <div className="sm:col-span-4 pt-1 sm:pt-4">
                  <button
                    type="submit"
                    className="group shimmer-button flex w-full items-center justify-center gap-2 rounded-xl bg-[#483323] hover:bg-[#342417] px-4 py-2.5 text-xs font-medium text-white shadow-sm transition-all duration-300 active:scale-95 cursor-pointer"
                  >
                    <span>Consultar agenda</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </form>

            {/* Botões Secundários & Links Rápidos */}
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <a
                href="#tratamentos"
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#483323] hover:text-[#966D38] transition-colors"
              >
                <span>Explorar todas as especialidades</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <span className="text-[#D0C4B6]">•</span>

              <a
                href="#tecnologia"
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#483323] hover:text-[#966D38] transition-colors"
              >
                <span>Conhecer o Scanner 3D</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* 3 Pilares Clínicos de Excelência */}
            <div className="mt-8 pt-6 border-t border-[#EAE3D9]/90 grid grid-cols-3 gap-3 sm:gap-6 max-w-[620px]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-2xs border border-[#EAE3D9] text-[#7A5328]">
                  <Sparkles className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <div className="leading-tight">
                  <span className="block text-xs font-semibold text-[#1E1B18]">Scanner 3D</span>
                  <span className="text-[11px] text-[#7A7065] hidden sm:block">Sem moldagem</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-2xs border border-[#EAE3D9] text-[#7A5328]">
                  <ShieldCheck className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <div className="leading-tight">
                  <span className="block text-xs font-semibold text-[#1E1B18]">Sem dor</span>
                  <span className="text-[11px] text-[#7A7065] hidden sm:block">Sedação suave</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-2xs border border-[#EAE3D9] text-[#7A5328]">
                  <Clock className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <div className="leading-tight">
                  <span className="block text-xs font-semibold text-[#1E1B18]">Pontualidade</span>
                  <span className="text-[11px] text-[#7A7065] hidden sm:block">
                    Respeito ao tempo
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Destaque Flutuante na Direita (Sobre a Fotografia) */}
          <div className="hidden lg:flex lg:col-span-5 justify-end">
            <div className="flex flex-col gap-3">
              <div className="rounded-2xl bg-white/95 backdrop-blur-md p-4 shadow-[0_16px_36px_rgba(72,51,35,0.12)] border border-[#E8DFD3] max-w-[280px]">
                <div className="flex items-center gap-2 text-[#966D38] text-xs font-semibold uppercase tracking-wider">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Atendimento Exclusivo</span>
                </div>
                <p className="mt-1.5 text-xs text-[#483A2E] leading-relaxed">
                  Consultas com horário dedicado, sem filas e com estacionamento privativo com
                  manobrista.
                </p>
                <div className="mt-3 pt-2.5 border-t border-[#F0EAE1] flex items-center justify-between text-[11px] text-[#7D7063]">
                  <span>Vila Nova Conceição</span>
                  <span className="text-[#966D38] font-semibold">São Paulo - SP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
