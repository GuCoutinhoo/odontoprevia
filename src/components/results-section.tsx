import { useState, useRef, useCallback } from "react";
import { ArrowUpRight, ArrowRight, Calendar, Sparkles, CheckCircle2 } from "lucide-react";
import baImg from "@/assets/before-after.jpg";
import tClar from "@/assets/t-clareamento.jpg";
import tOrto from "@/assets/t-orto.jpg";
import tEst from "@/assets/t-estetica.jpg";

interface ResultsSectionProps {
  onOpenAppointment: (treatmentName?: string) => void;
  isVisible?: boolean;
}

interface CaseItem {
  id: string;
  title: string;
  desc: string;
  thumb: string;
  beforeImg: string;
  afterImg: string;
  caption: string;
  details: string;
  duration: string;
  elements: string;
}

const CASES: CaseItem[] = [
  {
    id: "estetica",
    title: "Estética do sorriso & Lentes Cerâmicas",
    desc: "Harmonia áurea, alinhamento e tom ultra natural.",
    thumb: tClar,
    beforeImg: baImg,
    afterImg: baImg,
    caption: "Planejamento estético do sorriso com lentes ultrafinas",
    details: "Fechamento de diastemas, nivelamento gengival e clareamento biomimético prévio.",
    duration: "3 sessões clínicas",
    elements: "8 lentes de porcelana pura",
  },
  {
    id: "alinhamento",
    title: "Ortodontia & Alinhadores Invisíveis",
    desc: "Correção de apinhamento sem bráquetes metálicos.",
    thumb: tOrto,
    beforeImg: baImg,
    afterImg: baImg,
    caption: "Correção ortodôntica 100% digital com alinhadores",
    details: "Escaneamento intraoral 3D e movimentação sequencial com placas transparentes.",
    duration: "7 meses de tratamento",
    elements: "14 pares de alinhadores",
  },
  {
    id: "reabilitacao",
    title: "Reabilitação Oral & Implantes Guiados",
    desc: "Função mastigatória e harmonia estética integradas.",
    thumb: tEst,
    beforeImg: baImg,
    afterImg: baImg,
    caption: "Reabilitação com prótese cerâmica sobre implante",
    details:
      "Cirurgia guiada por computador sem cortes amplos, cicatrização rápida e carga imediata.",
    duration: "Cirurgia em 1 sessão",
    elements: "Coroas em zircônia pura",
  },
];

export function ResultsSection({ onOpenAppointment, isVisible = true }: ResultsSectionProps) {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100%
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const activeCase = CASES[activeCaseIndex] ?? CASES[0]!;

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <section
      id="resultados"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#FAF8F5]"
      aria-label="Resultados e Histórias de Sorrisos"
    >
      <div className="mx-auto w-[min(calc(100%-48px),1440px)]">
        {/* Cabeçalho */}
        <div
          className={`flex flex-col gap-4 md:flex-row md:items-end md:justify-between transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="max-w-[760px]">
            <div className="flex items-center gap-2.5">
              <span className="h-px w-5 bg-[#9E732B]" />
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-[#966D38] uppercase">
                Galeria Clínica & Transformações
              </p>
            </div>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[44px] leading-[1.12] font-normal tracking-tight text-[#1E1B18]">
              Cada sorriso tem uma história.
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-[#5C554C] leading-relaxed">
              Arraste a linha para comparar a evolução do antes e depois com planejamento digital em
              3D e cuidado individualizado.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => onOpenAppointment("Avaliação de Resultados")}
              className="group inline-flex items-center gap-2 rounded-xl bg-[#483323] hover:bg-[#342417] px-6 py-3 text-xs sm:text-sm font-medium text-white shadow-sm transition-all duration-300 hover:shadow-md active:scale-95 cursor-pointer"
            >
              <span>Agendar minha transformação</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Grade: Comparador Antes/Depois à Esquerda e 3 Casos Interativos à Direita */}
        <div
          className={`mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8 items-stretch transition-all duration-700 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {/* Comparador Interativo de Antes e Depois */}
          <div className="lg:col-span-7 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E8DFD3] bg-white shadow-[0_6px_28px_rgba(72,51,35,0.06)]">
            <div
              ref={containerRef}
              onMouseDown={() => (isDragging.current = true)}
              onMouseUp={() => (isDragging.current = false)}
              onMouseLeave={() => (isDragging.current = false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative aspect-[16/11] sm:aspect-[16/10] w-full select-none overflow-hidden cursor-ew-resize bg-[#EFE9DF]"
            >
              {/* Imagem do "Depois" (Fundo Completo) */}
              <img
                src={activeCase.afterImg}
                alt="Resultado final do sorriso"
                className="absolute inset-0 h-full w-full object-cover filter brightness-[1.03]"
                style={{ objectPosition: "50% 50%" }}
              />

              {/* Tag "Depois" */}
              <div className="absolute top-4 right-4 z-10 pointer-events-none">
                <span className="rounded-md bg-[#2D241F]/85 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white shadow-xs">
                  Depois (Resultado Final)
                </span>
              </div>

              {/* Imagem do "Antes" (Recortada pelo Slider) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeCase.beforeImg}
                  alt="Sorriso antes do procedimento"
                  className="absolute inset-0 h-full w-full max-w-none object-cover filter contrast-[0.95]"
                  style={{
                    width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%",
                    objectPosition: "50% 50%",
                  }}
                />

                {/* Tag "Antes" */}
                <div className="absolute top-4 left-4 z-10 pointer-events-none">
                  <span className="rounded-md bg-[#483323]/85 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white shadow-xs">
                    Antes (Inicial)
                  </span>
                </div>
              </div>

              {/* Linha Divisória e Alça Central Arrastável Dourada */}
              <div
                className="absolute top-0 bottom-0 z-20 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-[#483323] text-white shadow-lg border-2 border-white cursor-ew-resize text-[10px] font-bold">
                  &lt;&nbsp;&gt;
                </div>
              </div>
            </div>

            {/* Legenda e Metadados do Caso Ativo */}
            <div className="p-5 sm:p-6 bg-white border-t border-[#F2ECE3] space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h4 className="font-serif text-base sm:text-lg font-normal text-[#1E1B18]">
                    {activeCase.caption}
                  </h4>
                  <p className="text-xs text-[#665D53] mt-0.5">{activeCase.details}</p>
                </div>
                <span className="text-[11px] font-semibold text-[#8C6A3C] uppercase tracking-wider shrink-0 bg-[#F4EFE8] px-3 py-1 rounded-lg">
                  {activeCase.elements}
                </span>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#F5EFE8] text-[11px] text-[#7A7065]">
                <span className="flex items-center gap-1.5 font-medium text-[#483323]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#966D38]" />
                  Duração: {activeCase.duration}
                </span>
                <span className="text-[#8C8377]">← Arraste o cursor para comparar →</span>
              </div>
            </div>
          </div>

          {/* Lista de Casos Selecionáveis à Direita */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {CASES.map((item, idx) => {
              const isActive = activeCaseIndex === idx;
              return (
                <article
                  key={item.id}
                  onClick={() => setActiveCaseIndex(idx)}
                  className={`group flex items-center justify-between p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-[#C5A059] bg-white shadow-[0_8px_24px_rgba(72,51,35,0.08)] ring-1 ring-[#C5A059]"
                      : "border-[#E8DFD3] bg-white/75 hover:bg-white hover:border-[#D1B58C] shadow-2xs"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-20 sm:h-20 sm:w-24 shrink-0 overflow-hidden rounded-xl bg-[#EFE9DF]">
                      <img
                        src={item.thumb}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-106"
                      />
                    </div>

                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9E732B]">
                        Caso {idx + 1} • {item.duration}
                      </span>
                      <h3
                        className={`font-serif text-base sm:text-lg font-normal leading-snug transition-colors mt-0.5 ${
                          isActive
                            ? "text-[#483323] font-medium"
                            : "text-[#1E1B18] group-hover:text-[#483323]"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#6B6359] leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ml-2 ${
                      isActive
                        ? "bg-[#483323] text-white shadow-2xs"
                        : "border border-[#DCD3C7] text-[#4A3D31] group-hover:border-[#483323] group-hover:bg-[#483323] group-hover:text-white"
                    }`}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Faixa Inferior de Agendamento Personalizado */}
        <div
          className={`mt-6 sm:mt-8 rounded-2xl border border-[#E5DAD0] bg-[#F4EFE8] px-6 py-4 sm:px-7 sm:py-5 transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-[#DDD3C5] text-[#483323] shadow-2xs">
                <Calendar className="h-5 w-5" strokeWidth={1.75} />
              </div>

              <div>
                <h4 className="font-serif text-base sm:text-lg font-normal text-[#1E1B18] leading-snug">
                  Seu resultado começa com uma avaliação personalizada.
                </h4>
                <p className="text-xs text-[#665D53]">
                  Simulação 3D prévia incluída na primeira consulta com visualização imediata.
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={() => onOpenAppointment("Avaliação Personalizada de Resultados")}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#483323] hover:bg-[#342417] px-6 py-3 text-xs sm:text-sm font-medium text-white shadow-2xs transition-all active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span>Agendar avaliação agora</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
