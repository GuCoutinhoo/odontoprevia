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

  // Filtra dinamicamente os tratamentos com base na categoria
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
      className="relative py-8 sm:py-12 bg-[#FAF8F5]"
      aria-label="Nossos Tratamentos"
    >
      <div className="mx-auto w-[min(calc(100%-48px),1440px)]">
        {/* Cabeçalho da Seção com Identidade Editorial */}
        <div
          className={`flex flex-col gap-4 md:flex-row md:items-end md:justify-between transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="max-w-[760px]">
            <div className="flex items-center gap-2.5">
              <span className="h-px w-5 bg-[#9E732B]" />
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-[#966D38] uppercase">
                Especialidades Clínicas
              </p>
            </div>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl lg:text-[38px] leading-[1.14] font-normal tracking-tight text-[#1E1B18]">
              Cuidados para cada sorriso.
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-[#5C554C] leading-relaxed">
              Procedimentos de alta precisão que combinam tecnologia 3D avançada, biomimética
              dentária e planejamento individualizado para preservar sua saúde e realçar sua beleza
              natural.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenAppointment("Consulta de Especialidades")}
              className="group inline-flex items-center gap-2 rounded-xl bg-[#483323] hover:bg-[#342417] px-5 py-2.5 text-xs sm:text-[13px] font-medium text-white shadow-xs transition-all duration-300 hover:shadow-md active:scale-95 cursor-pointer"
            >
              <span>Agendar avaliação</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Barra de Filtros Interativos e Contador */}
        <div
          className={`mt-6 sm:mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:justify-between border-b border-[#EAE3D9] pb-3.5 transition-all duration-700 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 touch-pan-x">
            <span className="text-xs font-medium text-[#7D7368] mr-2 hidden sm:inline whitespace-nowrap">
              Filtrar por área:
            </span>
            {TREATMENT_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-[#483323] text-white shadow-xs ring-1 ring-[#483323]"
                      : "bg-[#F3EDE5] text-[#4A3E33] hover:bg-[#EAE2D7] hover:text-[#1E1B18]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Contador Dinâmico */}
          <div className="flex items-center gap-2 text-xs text-[#7D7368] shrink-0">
            <span className="inline-block h-2 w-2 rounded-full bg-[#966D38]" />
            <span className="font-semibold text-[#483323]">{countLabel}</span>
          </div>
        </div>

        {/* Grade de Cards de Tratamentos: 4 por Fileira em Desktop, Rente aos Textos */}
        <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-3.5 transition-all duration-500">
          {filteredTreatments.map((treatment, idx) => {
            const imgSrc = IMAGE_MAP[treatment.imageKey];
            const isFeatured =
              treatment.imageKey === "clareamento" || treatment.imageKey === "lentes";

            return (
              <article
                key={treatment.id}
                style={{
                  transitionDelay: `${idx * 35}ms`,
                }}
                className={`group flex flex-col overflow-hidden rounded-xl border bg-white shadow-[0_2px_8px_rgba(72,51,35,0.04)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#C5A059] hover:shadow-[0_8px_20px_rgba(72,51,35,0.07)] ${
                  isFeatured ? "border-[#C5A059]/80 ring-1 ring-[#C5A059]/30" : "border-[#E8DFD3]"
                } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
              >
                {/* Imagem do Tratamento com Altura Compacta (h-28 sm:h-32) */}
                <div
                  onClick={() => handleSelectTreatment(treatment)}
                  className="relative h-28 sm:h-32 w-full overflow-hidden bg-[#F3EFEA] cursor-pointer"
                >
                  <img
                    src={imgSrc}
                    alt={treatment.t}
                    loading="lazy"
                    width={560}
                    height={320}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Gradiente sutil na base da foto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60" />

                  {/* Etiqueta de Categoria Superior Esquerda */}
                  <div className="absolute top-2 left-2 pointer-events-none">
                    <span className="inline-block rounded-md bg-white/95 backdrop-blur-md px-2 py-0.5 text-[9.5px] font-semibold text-[#483A2E] shadow-2xs border border-black/5">
                      {treatment.category}
                    </span>
                  </div>

                  {/* Selo Tecnológico Superior Direito */}
                  <div className="absolute top-2 right-2 pointer-events-none">
                    <span className="inline-flex items-center gap-1 rounded-md bg-[#2D241F]/85 backdrop-blur-md px-2 py-0.5 text-[8.5px] font-medium text-white shadow-2xs">
                      <Sparkles className="h-2 w-2 text-[#ECC87E]" />
                      {treatment.sessions}
                    </span>
                  </div>
                </div>

                {/* Conteúdo do Card Rente aos Textos (Sem Espaço Vazio Sobrando) */}
                <div className="flex flex-col p-3 sm:p-3.5 bg-white">
                  {/* Título do Procedimento */}
                  <h3
                    onClick={() => handleSelectTreatment(treatment)}
                    className="font-serif text-sm sm:text-[15px] font-normal leading-snug text-[#1E1B18] transition-colors duration-200 group-hover:text-[#483323] cursor-pointer"
                  >
                    {treatment.t}
                  </h3>

                  {/* Descrição Explicativa Detalhada */}
                  <p className="mt-1 text-[11px] text-[#5C554C] leading-snug line-clamp-2">
                    {treatment.longDesc}
                  </p>

                  {/* Todos os 3 Diferenciais Clínicos Rente ao Texto */}
                  <div className="mt-2 pt-1.5 border-t border-[#F2ECE3] space-y-0.5">
                    {treatment.benefits.slice(0, 3).map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center gap-1.5 text-[10.5px] text-[#483A2E] leading-tight"
                      >
                        <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-[#F3EDE5] text-[#966D38] font-bold text-[8px]">
                          <Check className="h-2 w-2" />
                        </span>
                        <span className="truncate">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Rodapé do Card Rente aos Diferenciais */}
                  <div className="mt-2 flex items-center justify-between border-t border-[#F2ECE3] pt-1.5">
                    <div className="flex flex-col">
                      <span className="text-[8.5px] font-semibold uppercase tracking-wider text-[#9E8B7A] flex items-center gap-0.5">
                        <Clock className="h-2.5 w-2.5" />
                        Tempo
                      </span>
                      <span className="text-[10.5px] font-semibold text-[#3A322A]">
                        {treatment.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleSelectTreatment(treatment)}
                        aria-label={`Saiba mais sobre ${treatment.t}`}
                        className="group/link inline-flex items-center gap-0.5 text-[10.5px] font-semibold text-[#9E6D38] transition-colors duration-200 hover:text-[#765123] cursor-pointer"
                      >
                        <span className="underline underline-offset-2 decoration-[#9E6D38]/40 hover:decoration-[#765123]">
                          Saiba mais
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleSelectTreatment(treatment)}
                        aria-label={`Ver detalhes de ${treatment.t}`}
                        className={`flex h-6.5 w-6.5 items-center justify-center rounded-full transition-all duration-300 cursor-pointer active:scale-95 ${
                          isFeatured
                            ? "bg-[#483323] text-white shadow-2xs group-hover:bg-[#342417] group-hover:scale-105"
                            : "border border-[#D4C8BC] text-[#483323] hover:bg-[#483323] hover:border-[#483323] hover:text-white group-hover:scale-105"
                        }`}
                      >
                        <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Faixa Inferior de Conversão Concierge */}
        <div
          className={`mt-8 sm:mt-10 rounded-xl border border-[#E5DAD0] bg-[#F4EFE8] p-4.5 sm:p-5 shadow-[0_2px_12px_rgba(72,51,35,0.03)] transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#DDD3C5] bg-white text-[#483323] shadow-2xs">
                <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
              </div>

              <div>
                <h4 className="font-serif text-base sm:text-lg font-normal leading-snug text-[#1E1B18]">
                  Não sabe qual tratamento é o mais indicado para seu momento?
                </h4>
                <p className="mt-0.5 text-xs text-[#665D53]">
                  Nossa equipe clínica realiza sua avaliação diagnóstica com escaneamento 3D sem
                  compromisso para orientar o plano ideal.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex flex-wrap items-center gap-2.5">
              <a
                href={getWhatsAppUrl(
                  "Olá! Gostaria de uma orientação com a equipe clínica da Lumière sobre os tratamentos disponíveis.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#483323] hover:bg-[#342417] px-4.5 py-2.5 text-xs font-medium text-white shadow-2xs transition-all duration-300 hover:shadow-xs active:scale-95 cursor-pointer"
              >
                <span>Falar com especialista</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                type="button"
                onClick={() => onOpenAppointment("Avaliação Geral de Tratamentos")}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D5C7B7] bg-white hover:bg-[#FAF8F5] px-4 py-2.5 text-xs font-medium text-[#483323] transition-all cursor-pointer"
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
