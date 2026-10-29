import { useState, useMemo } from "react";
import { ArrowUpRight, ArrowRight, MessageCircle, Sparkles, Check, Clock } from "lucide-react";
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
import { getWhatsAppUrl } from "@/config/clinic";

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

  return (
    <section
      id="tratamentos"
      className="relative py-12 sm:py-16 lg:py-20 bg-[#FAF7F2] transition-colors"
      aria-label="Nossos Tratamentos"
    >
      <div className="site-container">
        {/* Cabeçalho da Seção com Identidade Editorial */}
        <div
          className={`flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="max-w-[760px]">
            <div className="flex items-center gap-2.5">
              <span className="h-px w-6 bg-[#966D38]" />
              <span className="text-xs font-semibold tracking-[0.24em] text-[#966D38] uppercase">
                Especialidades Clínicas
              </span>
            </div>

            <h2 className="mt-2.5 font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.14] font-normal tracking-tight text-[#221B16]">
              Cuidados para cada sorriso.
            </h2>

            <p className="mt-2 text-sm sm:text-base text-[#665D53] leading-relaxed max-w-[680px]">
              Procedimentos de alta precisão que combinam tecnologia 3D avançada, biomimética
              dentária e planejamento individualizado para preservar sua saúde e realçar sua beleza
              natural.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => onOpenAppointment("Consulta de Especialidades")}
              className="group inline-flex items-center gap-2 rounded-xl bg-[#3B2920] hover:bg-[#281B14] px-5 py-3 text-xs sm:text-sm font-medium text-white shadow-sm transition-all duration-300 hover:shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span>Agendar avaliação</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Barra de Filtros Interativos e Contador */}
        <div
          className={`mt-6 sm:mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-[#EAE3D9] pb-3 transition-all duration-700 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 touch-pan-x">
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
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
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

          <div className="flex items-center gap-2 text-xs text-[#7D7368] shrink-0">
            <span className="inline-block h-2 w-2 rounded-full bg-[#966D38]" />
            <span className="font-semibold text-[#3B2920]">{countLabel}</span>
          </div>
        </div>

        {/* Grade de Cards Compacta e Perfeitamente Alinhada: 4 Colunas no Desktop Grande, 3 no Padrão, 2 no Tablet, 1 no Mobile */}
        <div className="mt-6 sm:mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-4.5 items-stretch transition-all duration-500">
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
                {/* 1. Imagem Compacta com Altura e Proporções Otimizadas (Redução de Espaço Vertical) */}
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

                  {/* Badge de Categoria */}
                  <div className="absolute top-2.5 left-2.5 pointer-events-none">
                    <span className="inline-block rounded-md bg-white/95 backdrop-blur-md px-2 py-0.5 text-[9.5px] font-semibold text-[#3D2C22] shadow-2xs border border-black/5">
                      {treatment.category}
                    </span>
                  </div>

                  {/* Selo de Sessões */}
                  <div className="absolute top-2.5 right-2.5 pointer-events-none">
                    <span className="inline-flex items-center gap-1 rounded-md bg-[#221B16]/85 backdrop-blur-md px-2 py-0.5 text-[9px] font-medium text-white shadow-2xs">
                      <Sparkles className="h-2.5 w-2.5 text-[#ECC87E]" />
                      {treatment.sessions}
                    </span>
                  </div>
                </div>

                {/* 2. Corpo do Card: Espaçamento Interno Equilibrado com Alinhamento Vertical Rigoroso */}
                <div className="flex flex-1 flex-col justify-between p-4 sm:p-4.5 bg-white">
                  <div>
                    {/* Título com Altura Mínima Padronizada */}
                    <h3
                      onClick={() => handleSelectTreatment(treatment)}
                      className="font-serif text-base sm:text-[17px] font-normal leading-snug text-[#1E1B18] transition-colors duration-200 group-hover:text-[#8C6239] cursor-pointer min-h-[2.5rem] flex items-start line-clamp-2"
                    >
                      {treatment.t}
                    </h3>

                    {/* Descrição Explicativa Padronizada */}
                    <p className="mt-1 text-xs text-[#5C554C] leading-relaxed line-clamp-2 min-h-[2.2rem]">
                      {treatment.longDesc}
                    </p>

                    {/* Lista dos 3 Diferenciais Clínicos com Altura Padronizada */}
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

                  {/* 3. Rodapé do Card Perfeitamente Alinhado na Base de Todos os Cards */}
                  <div className="mt-3 flex items-center justify-between border-t border-[#F2ECE3] pt-2.5">
                    <div className="flex flex-col">
                      <span className="text-[9.5px] font-semibold uppercase tracking-wider text-[#9E8B7A] flex items-center gap-1">
                        <Clock className="h-2.5 w-2.5" />
                        Tempo estimado
                      </span>
                      <span className="text-[11.5px] font-semibold text-[#221B16] mt-0.5">
                        {treatment.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleSelectTreatment(treatment)}
                        aria-label={`Saiba mais sobre ${treatment.t}`}
                        className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-[#8C6239] hover:text-[#5F3E1E] transition-colors underline-offset-2 hover:underline cursor-pointer"
                      >
                        <span>Saiba mais</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleSelectTreatment(treatment)}
                        aria-label={`Ver detalhes de ${treatment.t}`}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D5C9BC] text-[#3B2920] hover:bg-[#3B2920] hover:border-[#3B2920] hover:text-white transition-all duration-300 cursor-pointer active:scale-95"
                      >
                        <ArrowUpRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Faixa Inferior de Conversão Concierge Compacta */}
        <div
          className={`mt-8 sm:mt-9 rounded-2xl border border-[#E8DFD3] bg-[#F5EDE3] p-4.5 sm:p-5 shadow-2xs transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-[#E2D8CC] text-[#3B2920] shadow-2xs">
                <MessageCircle className="h-5 w-5" strokeWidth={1.8} />
              </div>

              <div>
                <h4 className="font-serif text-base sm:text-[17px] font-normal leading-snug text-[#1E1B18]">
                  Não sabe qual tratamento é o mais indicado para você?
                </h4>
                <p className="mt-0.5 text-xs text-[#665D53]">
                  Nossa equipe clínica realiza sua avaliação diagnóstica com escaneamento 3D para
                  orientar o plano ideal.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex flex-wrap items-center gap-2">
              <a
                href={getWhatsAppUrl(
                  "Olá! Gostaria de uma orientação com a equipe clínica da Lumière sobre os tratamentos disponíveis.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#3B2920] hover:bg-[#281B14] px-4.5 py-2.5 text-xs sm:text-sm font-medium text-white shadow-sm transition-all duration-300 hover:shadow-md active:scale-95 cursor-pointer"
              >
                <span>Falar com especialista</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                type="button"
                onClick={() => onOpenAppointment("Avaliação Geral de Tratamentos")}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#D5C7B7] bg-white hover:bg-[#FAF8F5] px-4 py-2.5 text-xs sm:text-sm font-medium text-[#3B2920] transition-all cursor-pointer"
              >
                <span>Agendar consulta presencial</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
