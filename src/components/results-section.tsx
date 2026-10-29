import { useState } from "react";
import { ArrowUpRight, ArrowRight, Calendar, Clock, Sparkles, CheckCircle2 } from "lucide-react";
import { BeforeAfterSlider } from "@/components/before-after-slider";

// Imagens de Thumbnails dos Casos Clínicos
import thumbVeneers from "@/assets/images/case_thumb_veneers_1793299226278.jpg";
import thumbAligners from "@/assets/images/case_thumb_aligners_1793299228199.jpg";
import thumbImplants from "@/assets/images/case_thumb_implants_1793299226407.jpg";

// Imagens de Alta Resolução Antes e Depois
import veneersBefore from "@/assets/images/macro_veneers_before_1793299284972.jpg";
import veneersAfter from "@/assets/images/macro_veneers_after_1793299285270.jpg";

import alignBefore from "@/assets/images/macro_align_before_1793299300076.jpg";
import alignAfter from "@/assets/images/macro_align_after_1793299299348.jpg";

import implantBefore from "@/assets/images/macro_implant_before_1793299301071.jpg";
import implantAfter from "@/assets/images/macro_implant_after_1793299300568.jpg";

interface ResultsSectionProps {
  onOpenAppointment: (treatmentName?: string) => void;
  isVisible?: boolean;
}

interface CaseItem {
  id: string;
  caseNumber: string;
  category: string;
  title: string;
  tagline: string;
  duration: string;
  thumb: string;
  beforeImg: string;
  afterImg: string;
  altBefore: string;
  altAfter: string;
  highlightTitle: string;
  highlightDesc: string;
}

const CLINICAL_CASES: CaseItem[] = [
  {
    id: "lentes",
    caseNumber: "CASO 01",
    category: "Estética do sorriso",
    title: "Lentes de porcelana",
    tagline: "Harmonia áurea, fechamento de diastemas e alinhamento",
    duration: "3 sessões clínicas",
    thumb: thumbVeneers,
    beforeImg: veneersBefore,
    afterImg: veneersAfter,
    altBefore: "Sorriso com espaçamento e tom natural antes de lentes de porcelana",
    altAfter: "Sorriso perfeitamente alinhado e iluminado com lentes de porcelana pura",
    highlightTitle: "Lentes de porcelana para um sorriso mais harmônico e natural.",
    highlightDesc: "Fechamento de diastemas, alinhamento estético e clareamento integrado.",
  },
  {
    id: "alinhadores",
    caseNumber: "CASO 02",
    category: "Ortodontia invisível",
    title: "Alinhadores invisíveis",
    tagline: "Correção suave, previsível e sem bráquetes metálicos",
    duration: "7 meses de tratamento",
    thumb: thumbAligners,
    beforeImg: alignBefore,
    afterImg: alignAfter,
    altBefore: "Arcada dentária com apinhamento antes dos alinhadores invisíveis",
    altAfter: "Arcada perfeitamente nivelada e alinhada após o uso de alinhadores transparentes",
    highlightTitle: "Alinhadores invisíveis para correção suave e imperceptível.",
    highlightDesc:
      "Nivelamento de apinhamentos, ajuste de oclusão e estética sem bráquetes metálicos.",
  },
  {
    id: "implantes",
    caseNumber: "CASO 03",
    category: "Reabilitação oral",
    title: "Implantes guiados",
    tagline: "Cirurgia milimétrica sem cortes amplos e carga imediata",
    duration: "1 sessão cirúrgica",
    thumb: thumbImplants,
    beforeImg: implantBefore,
    afterImg: implantAfter,
    altBefore: "Área com ausência dental antes de implante guiado",
    altAfter: "Restauração definitiva com coroa em zircônia e gengiva perfeitamente integrada",
    highlightTitle: "Implantes guiados para restauração funcional e estética completa.",
    highlightDesc:
      "Instalação precisa sem cortes amplos, rápida cicatrização e prótese em zircônia pura.",
  },
];

export function ResultsSection({ onOpenAppointment, isVisible = true }: ResultsSectionProps) {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeCase = CLINICAL_CASES[activeCaseIndex] ?? CLINICAL_CASES[0]!;

  const handleSelectCase = (index: number) => {
    if (index === activeCaseIndex) return;
    setIsTransitioning(true);
    setActiveCaseIndex(index);
    setSliderPosition(50);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 350);
  };

  return (
    <section
      id="resultados"
      className="relative py-12 sm:py-18 lg:py-22 bg-[#FAF7F2] transition-colors"
      aria-label="Resultados reais e transformações de sorrisos"
    >
      <div className="site-container">
        {/* Cabeçalho Superior */}
        <div
          className={`flex flex-col gap-3 sm:gap-5 lg:flex-row lg:items-end lg:justify-between transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="max-w-[780px]">
            <div className="flex items-center gap-2">
              <span className="h-px w-5 sm:w-6 bg-[#966D38]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#966D38] uppercase">
                Resultados reais, histórias únicas
              </span>
            </div>

            <h2 className="mt-2 font-serif text-[26px] xs:text-[30px] sm:text-4xl lg:text-[44px] leading-[1.14] font-normal tracking-tight text-[#221B16]">
              O sorriso que transforma começa aqui.
            </h2>

            <p className="mt-1.5 sm:mt-2.5 text-[13.5px] sm:text-base text-[#665D53] leading-relaxed max-w-[700px]">
              Explore as transformações e descubra o cuidado por trás de cada resultado.
            </p>
          </div>

          <div className="shrink-0 pt-1 sm:pt-0">
            <button
              type="button"
              onClick={() => onOpenAppointment("Abordagem e Planejamento Clínico")}
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#221B16] hover:text-[#8C6239] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              <span>Conheça nossa abordagem</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* -------------------- SELETOR DE CASOS MOBILE (sm:hidden) -------------------- */}
        <div className="sm:hidden mt-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {CLINICAL_CASES.map((item, idx) => {
              const isActive = activeCaseIndex === idx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectCase(idx)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all shrink-0 border ${
                    isActive
                      ? "bg-[#3B2920] text-white border-[#3B2920] shadow-xs"
                      : "bg-white text-[#4A3E33] border-[#E8DFD3]"
                  }`}
                >
                  <img src={item.thumb} alt="" className="h-6 w-6 rounded-md object-cover" />
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bloco Central: Comparador à Esquerda e Casos à Direita */}
        <div
          className={`mt-4 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-stretch transition-all duration-700 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {/* Coluna da Esquerda: Comparador + Barra Dinâmica */}
          <div className="lg:col-span-7 flex flex-col justify-between overflow-hidden rounded-[20px] sm:rounded-[28px] border border-[#EBE3D7] bg-white shadow-[0_4px_30px_rgba(72,51,35,0.04)]">
            <div
              className={`relative w-full overflow-hidden transition-opacity duration-350 ease-in-out ${
                isTransitioning ? "opacity-75" : "opacity-100"
              }`}
            >
              <BeforeAfterSlider
                beforeImage={activeCase.beforeImg}
                afterImage={activeCase.afterImg}
                altBefore={activeCase.altBefore}
                altAfter={activeCase.altAfter}
                beforeLabel="Antes"
                afterLabel="Depois"
                sliderPos={sliderPosition}
                onSliderChange={setSliderPosition}
              />
            </div>

            {/* Controles de Toque Rápido Mobile: Ver Antes / 50% / Ver Depois */}
            <div className="p-3 sm:hidden bg-[#FAF7F2] border-t border-[#F0EAE0] flex items-center justify-between gap-1.5">
              <button
                type="button"
                onClick={() => setSliderPosition(2)}
                className={`flex-1 py-1.5 px-2 rounded-lg text-center text-[11px] font-medium transition-all ${
                  sliderPosition <= 10
                    ? "bg-[#3B2920] text-white shadow-xs font-semibold"
                    : "bg-white text-[#483323] border border-[#E8DFD3]"
                }`}
              >
                Ver Antes
              </button>
              <button
                type="button"
                onClick={() => setSliderPosition(50)}
                className={`flex-1 py-1.5 px-2 rounded-lg text-center text-[11px] font-medium transition-all ${
                  sliderPosition > 35 && sliderPosition < 65
                    ? "bg-[#3B2920] text-white shadow-xs font-semibold"
                    : "bg-white text-[#483323] border border-[#E8DFD3]"
                }`}
              >
                50% / 50%
              </button>
              <button
                type="button"
                onClick={() => setSliderPosition(98)}
                className={`flex-1 py-1.5 px-2 rounded-lg text-center text-[11px] font-medium transition-all ${
                  sliderPosition >= 90
                    ? "bg-[#3B2920] text-white shadow-xs font-semibold"
                    : "bg-white text-[#483323] border border-[#E8DFD3]"
                }`}
              >
                Ver Depois
              </button>
            </div>

            {/* Barra Dinâmica Inferior */}
            <div className="p-4 sm:p-6 lg:p-6.5 bg-white border-t border-[#F0EAE0]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div className="space-y-1.5 sm:space-y-2 shrink-0">
                  <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#665D53]">
                    <span className="font-mono font-semibold tabular-nums text-[#221B16]">
                      0{activeCaseIndex + 1} / 0{CLINICAL_CASES.length}
                    </span>
                    <span className="text-[#B8AEA2]">•</span>
                    <span className="font-medium text-[#7A6E63]">{activeCase.category}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {CLINICAL_CASES.map((_, idx) => {
                      const isActive = activeCaseIndex === idx;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSelectCase(idx)}
                          aria-label={`Ver caso ${idx + 1}`}
                          className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                            isActive ? "w-8 bg-[#8C6239]" : "w-5 bg-[#E8DFD3] hover:bg-[#D5C4B0]"
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>

                <div className="h-10 w-px bg-[#EFE8DE] hidden sm:block mx-1" />

                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-base sm:text-[17px] font-normal text-[#221B16] leading-snug">
                    {activeCase.highlightTitle}
                  </h4>
                  <p className="mt-1 text-xs sm:text-[13px] text-[#665D53] leading-relaxed">
                    {activeCase.highlightDesc}
                  </p>
                </div>
              </div>

              {/* Botão de Agendamento do Caso Ativo no Mobile */}
              <div className="mt-3 pt-3 border-t border-[#F2ECE3] flex sm:hidden items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-[#7A6E63]">
                  <Clock className="h-3.5 w-3.5 text-[#966D38]" />
                  <span>{activeCase.duration}</span>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenAppointment(`Resultado: ${activeCase.title}`)}
                  className="rounded-lg bg-[#3B2920] px-3.5 py-1.5 text-xs font-medium text-white shadow-xs active:scale-95 whitespace-nowrap shrink-0"
                >
                  Quero esse resultado
                </button>
              </div>
            </div>
          </div>

          {/* Coluna da Direita (Desktop): 3 Cards Verticais Detalhados */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-between gap-3.5 sm:gap-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif text-2xl sm:text-[25px] font-normal text-[#221B16] tracking-tight">
                  Explore outros resultados
                </h3>
                <span className="text-xs font-medium text-[#8C6239] hidden sm:inline">
                  3 Casos Clínicos
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {CLINICAL_CASES.map((item, idx) => {
                  const isActive = activeCaseIndex === idx;

                  return (
                    <article
                      key={item.id}
                      onClick={() => handleSelectCase(idx)}
                      className={`group relative flex items-center justify-between p-4 sm:p-4.5 rounded-2xl border transition-all duration-300 ease-out cursor-pointer ${
                        isActive
                          ? "border-[#B89264] bg-[#FAF5EF] shadow-md ring-1 ring-[#B89264]/40"
                          : "border-[#EBE3D7] bg-white hover:border-[#D5C4B0] hover:bg-[#FAF7F2] shadow-2xs"
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="relative h-18 w-18 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-xl bg-[#EBE3D7] shadow-inner">
                          <img
                            src={item.thumb}
                            alt={`Foto paciente do ${item.title}`}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-106"
                          />
                          {isActive && (
                            <div className="absolute inset-0 border-2 border-[#8C6239]/60 rounded-xl pointer-events-none" />
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider ${
                                isActive ? "text-[#8C6239]" : "text-[#966D38]"
                              }`}
                            >
                              {item.caseNumber}
                            </span>
                            {isActive && (
                              <span className="rounded-full bg-[#8C6239] px-2 py-0.5 text-[9px] font-semibold text-white tracking-wide">
                                ATIVO
                              </span>
                            )}
                          </div>

                          <h4
                            className={`mt-0.5 font-serif text-lg sm:text-[19px] leading-snug transition-colors ${
                              isActive ? "text-[#221B16] font-medium" : "text-[#2A231E]"
                            }`}
                          >
                            {item.title}
                          </h4>

                          <p className="mt-0.5 text-xs text-[#665D53] truncate">{item.tagline}</p>

                          <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-[#7A6E63]">
                            <Clock className="h-3 w-3 text-[#966D38]" />
                            <span>{item.duration}</span>
                          </div>
                        </div>
                      </div>

                      <div className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white border border-[#E8DFD3] text-[#3B2920] shadow-2xs transition-transform duration-300 group-hover:translate-x-0.5">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-[#E8DFD3] bg-[#FAF8F5] p-4.5 sm:p-5 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-[#8C6239] uppercase tracking-wider">
                  Avaliação Personalizada
                </span>
                <p className="mt-0.5 text-xs text-[#554C42]">
                  Descubra o tratamento ideal para o seu perfil.
                </p>
              </div>

              <button
                type="button"
                onClick={() => onOpenAppointment("Agendamento Lateral Resultados")}
                className="group shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-[#3B2920] px-4 py-2.5 text-xs font-medium text-white shadow-xs hover:bg-[#281B14] active:scale-95 transition-all cursor-pointer"
              >
                <span>Agendar</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
