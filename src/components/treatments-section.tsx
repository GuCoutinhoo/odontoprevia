import { useState, useMemo } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Check,
  Clock,
  Layers,
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
  Star,
  ShieldCheck,
  ScanLine,
} from "lucide-react";
import tLentes from "@/assets/t-lentes.jpg";
import tClar from "@/assets/t-clareamento.jpg";
import tImpl from "@/assets/t-implante.jpg";
import tOrto from "@/assets/t-orto.jpg";
import tHarm from "@/assets/t-harmonizacao.jpg";
import tEst from "@/assets/t-estetica.jpg";
import {
  TREATMENTS,
  TREATMENT_CATEGORIES,
  filterTreatments,
  getTreatmentCountLabel,
  type TreatmentCategory,
  type TreatmentData,
  type TreatmentImageKey,
} from "@/lib/treatments-data";
import { type TreatmentInfo } from "@/components/treatment-modal";

const IMAGE_MAP: Record<TreatmentImageKey, string> = {
  lentes: tLentes,
  clareamento: tClar,
  implante: tImpl,
  ortodontia: tOrto,
  harmonizacao: tHarm,
  estetica: tEst,
};

interface TreatmentsSectionProps {
  onOpenAppointment: (treatmentName?: string) => void;
  onOpenDetails: (item: TreatmentInfo) => void;
  isVisible?: boolean;
}

export function TreatmentsSection({
  onOpenAppointment,
  onOpenDetails,
  isVisible = true,
}: TreatmentsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<TreatmentCategory>("Todos");
  const [mobileViewMode, setMobileViewMode] = useState<"carousel" | "grid">("carousel");
  const [carouselIndex, setCarouselIndex] = useState(0);

  const filteredTreatments = useMemo(() => {
    return filterTreatments(TREATMENTS, selectedCategory);
  }, [selectedCategory]);

  const countLabel = getTreatmentCountLabel(filteredTreatments.length);

  const handleSelectTreatment = (item: TreatmentData) => {
    onOpenDetails({
      img: IMAGE_MAP[item.imageKey],
      category: item.category,
      t: item.t,
      d: item.d,
      longDesc: item.longDesc,
      benefits: item.benefits,
      duration: item.duration,
      sessions: item.sessions,
    });
  };

  const handleNextCard = () => {
    setCarouselIndex((prev) => (prev + 1) % filteredTreatments.length);
  };

  const handlePrevCard = () => {
    setCarouselIndex((prev) => (prev === 0 ? filteredTreatments.length - 1 : prev - 1));
  };

  return (
    <section
      id="tratamentos"
      className="relative py-10 sm:py-16 lg:py-20 bg-[#FAF7F2] transition-colors"
      aria-label="Nossos Tratamentos"
    >
      <div className="site-container">
        {/* Cabeçalho da Seção */}
        <div
          className={`flex flex-col gap-3 sm:gap-4 lg:flex-row lg:items-end lg:justify-between transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="max-w-[760px]">
            <div className="flex items-center gap-2">
              <span className="h-px w-5 sm:w-6 bg-[#966D38]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#966D38] uppercase">
                Especialidades Clínicas
              </span>
            </div>

            <h2 className="mt-2 font-serif text-[26px] xs:text-[30px] sm:text-4xl lg:text-[42px] leading-[1.14] font-normal tracking-tight text-[#221B16]">
              Cuidados para cada sorriso.
            </h2>

            <p className="mt-1.5 sm:mt-2 text-[13.5px] sm:text-base text-[#665D53] leading-relaxed max-w-[680px]">
              Procedimentos de alta precisão que combinam tecnologia 3D avançada, biomimética
              dentária e planejamento individualizado para preservar sua saúde e realçar sua beleza
              natural.
            </p>
          </div>

          <div className="shrink-0 flex items-center justify-between sm:justify-end gap-3 pt-1 sm:pt-0">
            {/* Seletor de Modo no Mobile (Carrossel vs Grade 2 Colunas) */}
            <div className="flex sm:hidden items-center p-1 bg-white rounded-xl border border-[#E8DFD3] shadow-2xs">
              <button
                type="button"
                onClick={() => setMobileViewMode("carousel")}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  mobileViewMode === "carousel"
                    ? "bg-[#3B2920] text-white shadow-xs"
                    : "text-[#635A50] hover:text-[#1E1B18]"
                }`}
                aria-label="Visualização em carrossel deslizável"
              >
                <Layers className="h-3.5 w-3.5" />
                <span>Carrossel</span>
              </button>
              <button
                type="button"
                onClick={() => setMobileViewMode("grid")}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  mobileViewMode === "grid"
                    ? "bg-[#3B2920] text-white shadow-xs"
                    : "text-[#635A50] hover:text-[#1E1B18]"
                }`}
                aria-label="Visualização em grade compacta de 2 colunas"
              >
                <LayoutGrid className="h-3.5 w-3.5" />
                <span>Grade</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => onOpenAppointment("Consulta de Especialidades")}
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-[#3B2920] hover:bg-[#281B14] px-5 py-3 text-xs sm:text-sm font-medium text-white shadow-sm transition-all duration-300 hover:shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span>Agendar avaliação</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Faixa Editorial de Confiança Mobile Relocada do Hero (Ratings Google + Links Rápidos) */}
        <div
          className={`mt-3.5 mb-1 sm:hidden flex flex-col gap-2 transition-all duration-700 delay-75 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-white border border-[#E8DFD3] shadow-2xs text-[11.5px]">
            <div className="flex items-center gap-1.5 font-semibold text-[#1A1613]">
              <Star className="h-3.5 w-3.5 fill-[#C5A059] text-[#C5A059] shrink-0" />
              <span>4.9 no Google</span>
              <span className="text-[#8C8072] font-normal">(1.200+ avaliações)</span>
            </div>
            <div className="h-3.5 w-px bg-[#E8DFD3]" />
            <div className="flex items-center gap-1 text-[#665D53]">
              <ShieldCheck className="h-3.5 w-3.5 text-[#966D38] shrink-0" />
              <span>Scanner 3D • Sem dor</span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-1.5 text-[11.5px] px-1 text-[#665D53]">
            <span className="text-[#8C8072]">Atalhos da clínica:</span>
            <div className="flex items-center gap-2">
              <a
                href="#tecnologia"
                className="inline-flex items-center gap-0.5 text-[#8C6239] font-medium hover:underline"
              >
                <span>Scanner 3D</span>
                <ArrowRight className="h-3 w-3" />
              </a>
              <span className="text-[#D0C5B8]">•</span>
              <a
                href="#resultados"
                className="inline-flex items-center gap-0.5 text-[#8C6239] font-medium hover:underline"
              >
                <span>Antes & Depois</span>
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Barra de Filtros Interativos e Contador */}
        <div
          className={`mt-4 sm:mt-7 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between border-b border-[#EAE3D9] pb-3 transition-all duration-700 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 touch-pan-x -mx-1 px-1">
            <span className="text-xs font-medium text-[#7D7368] mr-1 hidden sm:inline whitespace-nowrap">
              Filtrar por especialidade:
            </span>
            {TREATMENT_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCarouselIndex(0);
                  }}
                  className={`rounded-lg px-2.5 sm:px-3 py-1.5 text-[11.5px] sm:text-xs font-medium transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? "bg-[#3B2920] text-white shadow-xs"
                      : "bg-white text-[#4A3E33] hover:bg-[#EAE2D7] border border-[#E8DFD3]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-2 text-xs text-[#7D7368] shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-[#966D38]" />
              <span className="font-semibold text-[#3B2920]">{countLabel}</span>
            </div>

            {/* No modo carrossel mobile: botões para avançar/voltar */}
            {mobileViewMode === "carousel" && filteredTreatments.length > 1 && (
              <div className="flex sm:hidden items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrevCard}
                  className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-[#E8DFD3] text-[#3B2920] active:scale-90"
                  aria-label="Ver tratamento anterior"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="text-[11px] font-semibold text-[#3B2920]">
                  {carouselIndex + 1}/{filteredTreatments.length}
                </span>
                <button
                  type="button"
                  onClick={handleNextCard}
                  className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-[#E8DFD3] text-[#3B2920] active:scale-90"
                  aria-label="Ver próximo tratamento"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* -------------------- 1. VISUALIZAÇÃO MOBILE (sm:hidden) -------------------- */}
        <div className="sm:hidden mt-4">
          {mobileViewMode === "carousel" ? (
            /* Modo Carrossel Deslizável com Toque: Mostra o card em destaque com navegação intuitiva */
            <div className="relative">
              {filteredTreatments.map((treatment, idx) => {
                if (idx !== carouselIndex) return null;
                const imgSrc = IMAGE_MAP[treatment.imageKey];

                return (
                  <article
                    key={treatment.id}
                    className="flex flex-col overflow-hidden rounded-2xl border border-[#B89264]/40 bg-white shadow-[0_4px_18px_rgba(72,51,35,0.08)] animate-in fade-in duration-300"
                  >
                    {/* Imagem do Tratamento */}
                    <div
                      onClick={() => handleSelectTreatment(treatment)}
                      className="relative h-44 w-full overflow-hidden bg-[#F3EFEA] cursor-pointer"
                    >
                      <img src={imgSrc} alt={treatment.t} className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute top-2.5 left-2.5">
                        <span className="inline-block rounded-md bg-white/95 backdrop-blur-md px-2 py-0.5 text-[10px] font-semibold text-[#3D2C22] shadow-2xs border border-black/5">
                          {treatment.category}
                        </span>
                      </div>

                      <div className="absolute top-2.5 right-2.5">
                        <span className="inline-flex items-center gap-1 rounded-md bg-[#221B16]/85 backdrop-blur-md px-2 py-0.5 text-[9.5px] font-medium text-white shadow-2xs">
                          <Sparkles className="h-2.5 w-2.5 text-[#ECC87E]" />
                          {treatment.sessions}
                        </span>
                      </div>

                      <div className="absolute bottom-2.5 left-3 right-3 text-white">
                        <h3 className="font-serif text-lg font-medium leading-tight text-white drop-shadow-sm">
                          {treatment.t}
                        </h3>
                      </div>
                    </div>

                    {/* Conteúdo Explicativo Compacto */}
                    <div className="p-3.5 flex flex-col justify-between flex-1">
                      <p className="text-xs text-[#5C554C] leading-relaxed line-clamp-2">
                        {treatment.longDesc}
                      </p>

                      {/* 2 Benefícios em linha ou pills lado a lado */}
                      <div className="mt-3 pt-2.5 border-t border-[#F2ECE3] grid grid-cols-1 gap-1.5">
                        {treatment.benefits.slice(0, 2).map((benefit) => (
                          <div
                            key={benefit}
                            className="flex items-center gap-1.5 text-[11px] text-[#483A2E]"
                          >
                            <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#F6EFE6] text-[#8C6239]">
                              <Check className="h-2 w-2 stroke-[2.5]" />
                            </span>
                            <span className="truncate leading-tight">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Rodapé do Card com Duração e Ações */}
                      <div className="mt-3.5 pt-2.5 border-t border-[#F2ECE3] flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1 text-[11px] text-[#6E6458]">
                          <Clock className="h-3 w-3 text-[#966D38]" />
                          <span>{treatment.duration}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleSelectTreatment(treatment)}
                            className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-[#4A3E33] bg-[#F4EFE8] hover:bg-[#EAE2D7] active:scale-95 transition-all"
                          >
                            Detalhes
                          </button>
                          <button
                            type="button"
                            onClick={() => onOpenAppointment(treatment.t)}
                            className="rounded-lg px-3 py-1.5 text-xs font-medium text-white bg-[#3B2920] active:scale-95 transition-all"
                          >
                            Agendar
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}

              {/* Indicadores de Ponto do Carrossel */}
              <div className="flex justify-center items-center gap-1.5 mt-3">
                {filteredTreatments.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCarouselIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === carouselIndex ? "w-5 bg-[#3B2920]" : "w-1.5 bg-[#DCD3C7]"
                    }`}
                    aria-label={`Ir para tratamento ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            /* Modo Grade 2 Colunas Compacta: Permite comparar procedimentos sem scroll vertical infinito */
            <div className="grid grid-cols-2 gap-2.5 animate-in fade-in duration-300">
              {filteredTreatments.map((treatment) => {
                const imgSrc = IMAGE_MAP[treatment.imageKey];
                return (
                  <article
                    key={treatment.id}
                    onClick={() => handleSelectTreatment(treatment)}
                    className="flex flex-col justify-between overflow-hidden rounded-xl border border-[#E8DFD3] bg-white shadow-2xs active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F3EFEA]">
                      <img src={imgSrc} alt={treatment.t} className="h-full w-full object-cover" />
                      <div className="absolute top-1.5 left-1.5">
                        <span className="inline-block rounded bg-white/95 px-1.5 py-0.5 text-[8.5px] font-semibold text-[#3D2C22]">
                          {treatment.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-2.5 flex flex-col justify-between flex-1">
                      <div>
                        <h4 className="font-serif text-[13px] font-medium leading-tight text-[#1E1B18] line-clamp-1">
                          {treatment.t}
                        </h4>
                        <p className="mt-1 text-[10px] text-[#7A7065] line-clamp-1">
                          {treatment.duration}
                        </p>
                      </div>

                      <div className="mt-2 pt-1.5 border-t border-[#F2ECE3] flex items-center justify-between text-[10.5px] font-medium text-[#966D38]">
                        <span>Ver detalhes</span>
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>

        {/* -------------------- 2. GRADE DESKTOP / TABLET (hidden sm:grid) -------------------- */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-4.5 items-stretch transition-all duration-500 mt-6 sm:mt-7">
          {filteredTreatments.map((treatment) => {
            const imgSrc = IMAGE_MAP[treatment.imageKey];
            const isFeatured =
              treatment.imageKey === "clareamento" || treatment.imageKey === "lentes";

            return (
              <article
                key={treatment.id}
                className={`group flex flex-col justify-between h-full overflow-hidden rounded-2xl border bg-white shadow-[0_2px_10px_rgba(72,51,35,0.03)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#B89264] hover:shadow-[0_10px_24px_rgba(72,51,35,0.08)] ${
                  isFeatured ? "border-[#B89264]/70 ring-1 ring-[#B89264]/30" : "border-[#E8DFD3]"
                }`}
              >
                {/* Imagem do Card */}
                <div
                  onClick={() => handleSelectTreatment(treatment)}
                  className="relative h-32 sm:h-34 w-full overflow-hidden bg-[#F3EFEA] cursor-pointer shrink-0"
                >
                  <img
                    src={imgSrc}
                    alt={treatment.t}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-2.5 left-2.5 pointer-events-none">
                    <span className="inline-block rounded-md bg-white/95 backdrop-blur-md px-2 py-0.5 text-[9.5px] font-semibold text-[#3D2C22] shadow-2xs border border-black/5">
                      {treatment.category}
                    </span>
                  </div>

                  <div className="absolute top-2.5 right-2.5 pointer-events-none">
                    <span className="inline-flex items-center gap-1 rounded-md bg-[#221B16]/85 backdrop-blur-md px-2 py-0.5 text-[9px] font-medium text-white shadow-2xs">
                      <Sparkles className="h-2.5 w-2.5 text-[#ECC87E]" />
                      {treatment.sessions}
                    </span>
                  </div>
                </div>

                {/* Corpo do Card */}
                <div className="flex flex-1 flex-col justify-between p-4 sm:p-4.5 bg-white">
                  <div>
                    <h3
                      onClick={() => handleSelectTreatment(treatment)}
                      className="font-serif text-base sm:text-[17px] font-normal leading-snug text-[#1E1B18] transition-colors duration-200 group-hover:text-[#8C6239] cursor-pointer min-h-[2.5rem] flex items-start line-clamp-2"
                    >
                      {treatment.t}
                    </h3>

                    <p className="mt-1 text-xs text-[#5C554C] leading-relaxed line-clamp-2 min-h-[2.2rem]">
                      {treatment.longDesc}
                    </p>

                    <div className="mt-2.5 pt-2 border-t border-[#F2ECE3] space-y-1 min-h-[4rem]">
                      {treatment.benefits.slice(0, 3).map((benefit) => (
                        <div
                          key={benefit}
                          className="flex items-center gap-1.5 text-[11px] text-[#483A2E]"
                        >
                          <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#F6EFE6] text-[#8C6239]">
                            <Check className="h-2 w-2 stroke-[2.5]" />
                          </span>
                          <span className="truncate leading-tight">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Rodapé do Card */}
                  <div className="mt-3 flex items-center justify-between border-t border-[#F2ECE3] pt-2.5">
                    <div className="flex flex-col">
                      <span className="text-[9.5px] font-semibold uppercase tracking-wider text-[#9E8B7A] flex items-center gap-1">
                        <Clock className="h-2.5 w-2.5 text-[#966D38]" />
                        Duração
                      </span>
                      <span className="text-xs font-semibold text-[#1E1B18]">
                        {treatment.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleSelectTreatment(treatment)}
                        className="rounded-lg px-2.5 py-1 text-xs font-medium text-[#483323] hover:bg-[#F2EDE5] transition-colors cursor-pointer"
                      >
                        Detalhes
                      </button>
                      <button
                        type="button"
                        onClick={() => onOpenAppointment(treatment.t)}
                        className="group/btn inline-flex items-center gap-1 rounded-lg bg-[#3B2920] px-3 py-1.5 text-xs font-medium text-white shadow-2xs hover:bg-[#281B14] transition-all cursor-pointer"
                      >
                        <span>Avaliar</span>
                        <ArrowUpRight className="h-3 w-3 text-[#D8C4B0] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
