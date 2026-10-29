import { useState } from "react";
import {
  ArrowUpRight,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  Box,
  Zap,
  Eye,
  Check,
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

import scanImg from "@/assets/images/tech_scanner_3d_1793299223439.jpg";
import dsdImg from "@/assets/images/tech_smile_design_1793299225316.jpg";
import roomImg from "@/assets/images/tech_luxury_clinic_1793299226267.jpg";

interface TechSectionProps {
  onOpenAppointment: (treatmentName?: string) => void;
  isVisible?: boolean;
}

interface TechItem {
  id: string;
  number: string;
  badge: string;
  title: string;
  shortDesc: string;
  image: string;
  imageAlt: string;
  procedureText: string;
  longDesc: string;
  benefits: string[];
  steps: { title: string; desc: string }[];
}

const TECH_ITEMS: TechItem[] = [
  {
    id: "scanner",
    number: "01",
    badge: "Scanner intraoral 3D",
    title: "Escaneamento 3D",
    shortDesc: "Mapeamento digital preciso, sem moldes desconfortáveis.",
    image: scanImg,
    imageAlt: "Dentista utilizando scanner intraoral 3D de alta precisão em paciente",
    procedureText: "Entenda o procedimento",
    longDesc:
      "Substitui as tradicionais pastas de moldagem por um escaneamento óptico 3D de altíssima definição em cores reais. Em menos de 3 minutos, gera o modelo digital milimétrico da sua arcada.",
    benefits: [
      "Zero náuseas, sem pastas ou materiais que provocam desconforto",
      "Visualização 3D instantânea da arcada em tela de alta definição",
      "Encaixe milimétrico para confecção de lentes e alinhadores",
    ],
    steps: [
      {
        title: "Captura Óptica Digital",
        desc: "Uma ponta suave e esterilizada percorre a boca, registrando contornos e cores reais.",
      },
      {
        title: "Reconstrução Tridimensional",
        desc: "O software de computação gráfica reconstrói a oclusão e anatomia em tempo real.",
      },
      {
        title: "Confecção Digital Imediata",
        desc: "Dados transmitidos diretamente para fresadoras e impressoras 3D com precisão máxima.",
      },
    ],
  },
  {
    id: "dsd",
    number: "02",
    badge: "Planejamento digital do sorriso",
    title: "Planejamento digital do sorriso",
    shortDesc: "Visualize seu novo sorriso antes do tratamento.",
    image: dsdImg,
    imageAlt: "Especialista analisando simulação digital do sorriso em monitor 3D",
    procedureText: "Entenda o procedimento",
    longDesc:
      "Através do Digital Smile Design (DSD), projetamos as proporções perfeitas para o seu novo sorriso em consonância com as linhas do seu rosto, permitindo aprovação conjunta antes de qualquer intervenção.",
    benefits: [
      "Visualização prévia do resultado final integrado à sua face",
      "Participação ativa do paciente na escolha de formato e tonalidade",
      "Guias computadorizados para procedimentos minimamente invasivos",
    ],
    steps: [
      {
        title: "Estudo Fotográfico Facial",
        desc: "Documentação de alta resolução das expressões espontâneas e proporções faciais.",
      },
      {
        title: "Design Biomimético",
        desc: "Ajuste milimétrico do comprimento, curvatura e zênites gengivais na tela.",
      },
      {
        title: "Simulação Real (Mock-up)",
        desc: "Teste prático nos dentes com resina estética para você se ver no espelho.",
      },
    ],
  },
  {
    id: "biosseguranca",
    number: "03",
    badge: "Conforto e biossegurança",
    title: "Conforto e biossegurança",
    shortDesc: "Tecnologia que torna sua experiência mais segura e tranquila.",
    image: roomImg,
    imageAlt: "Consultório odontológico de alto padrão com biossegurança hospitalar",
    procedureText: "Entenda o procedimento",
    longDesc:
      "Consultórios privativos projetados para promover serenidade. Equipados com centrais de esterilização hospitalar com rastreamento digital, climatização com filtros HEPA e isolamento acústico.",
    benefits: [
      "Esterilização cirúrgica rastreada com máxima segurança hospitalar",
      "Isolamento acústico avançado e fones antirruído com playlist privativa",
      "Poltronas ergonômicas desenhadas para alívio da pressão lombar",
    ],
    steps: [
      {
        title: "Rastreamento Cirúrgico Digital",
        desc: "Instrumental com autoclave médica e selo de validação química individual.",
      },
      {
        title: "Filtragem Contínua do Ar",
        desc: "Renovação contínua com filtros que eliminam micropartículas e aerossóis.",
      },
      {
        title: "Conforto Sensorial",
        desc: "Iluminação indireta quente, aromaterapia suave e sedação consciente opcional.",
      },
    ],
  },
];

export function TechSection({ onOpenAppointment, isVisible = true }: TechSectionProps) {
  const [activeTechIndex, setActiveTechIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [procedureModalItem, setProcedureModalItem] = useState<TechItem | null>(null);

  const activeTech = TECH_ITEMS[activeTechIndex] ?? TECH_ITEMS[0]!;

  const handleSelectTech = (index: number) => {
    setActiveTechIndex(index);
    setExpandedIndex(index);
  };

  const handleToggleAccordion = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
      setActiveTechIndex(index);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const newIdx = activeTechIndex === 0 ? TECH_ITEMS.length - 1 : activeTechIndex - 1;
    handleSelectTech(newIdx);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const newIdx = activeTechIndex === TECH_ITEMS.length - 1 ? 0 : activeTechIndex + 1;
    handleSelectTech(newIdx);
  };

  return (
    <section
      id="tecnologia"
      className="relative py-12 sm:py-18 lg:py-22 bg-[#FAF7F2] transition-colors"
      aria-label="Tecnologia e Inovação para o seu sorriso"
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
                Tecnologia e Inovação
              </span>
            </div>

            <h2 className="mt-2 font-serif text-[26px] xs:text-[30px] sm:text-4xl lg:text-[44px] leading-[1.14] font-normal tracking-tight text-[#221B16]">
              Mais precisão para cuidar do seu sorriso.
            </h2>

            <p className="mt-2 text-[13.5px] sm:text-base text-[#665D53] leading-relaxed max-w-[700px]">
              Utilizamos tecnologia de ponta para oferecer diagnósticos mais precisos, tratamentos
              mais previsíveis e uma experiência muito mais confortável.
            </p>
          </div>

          <div className="shrink-0 pt-1 sm:pt-0">
            <button
              type="button"
              onClick={() => onOpenAppointment("Tecnologias Odontológicas")}
              className="inline-flex items-center gap-2 rounded-full bg-[#3B2920] hover:bg-[#281B14] active:scale-95 px-5 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-sm font-medium text-white shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              <span>Conheça nossas tecnologias</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* -------------------- 1. SHOWCASE MOBILE DINÂMICO (sm:hidden) -------------------- */}
        <div className="sm:hidden mt-5">
          {/* Seletor de Tecnologia em Abas Horizontais */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-[#E8DFD3] shadow-2xs">
            {TECH_ITEMS.map((item, idx) => {
              const isActive = activeTechIndex === idx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectTech(idx)}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-center text-xs font-medium transition-all ${
                    isActive
                      ? "bg-[#3B2920] text-white shadow-xs"
                      : "text-[#635A50] hover:text-[#1E1B18]"
                  }`}
                >
                  <span className="block text-[10px] opacity-75 font-mono">{item.number}</span>
                  <span className="truncate block font-semibold">{item.title.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Card Ativo da Tecnologia com Imagem Integrada e Controles Touch */}
          <div className="mt-3 overflow-hidden rounded-2xl border border-[#E8DFD3] bg-white shadow-sm">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EBE3D7]">
              <img
                src={activeTech.image}
                alt={activeTech.imageAlt}
                className="h-full w-full object-cover animate-in fade-in duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

              {/* Tag de Tecnologia */}
              <div className="absolute top-2.5 left-2.5">
                <span className="inline-block rounded-md bg-black/65 backdrop-blur-md px-2.5 py-1 text-[10px] font-medium text-white border border-white/15">
                  {activeTech.badge}
                </span>
              </div>

              {/* Botões de Navegação Anterior/Próximo sobrepostos */}
              <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 z-10">
                <button
                  type="button"
                  onClick={() => handlePrev()}
                  className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/60 backdrop-blur-md text-white border border-white/20 active:scale-90"
                  aria-label="Tecnologia anterior"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleNext()}
                  className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/60 backdrop-blur-md text-white border border-white/20 active:scale-90"
                  aria-label="Próxima tecnologia"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Conteúdo Explicativo com Benefícios */}
            <div className="p-4">
              <h3 className="font-serif text-lg font-medium text-[#1E1B18]">{activeTech.title}</h3>
              <p className="mt-1 text-xs text-[#5C554C] leading-relaxed">{activeTech.longDesc}</p>

              {/* 3 Benefícios Principais */}
              <div className="mt-3 pt-2.5 border-t border-[#F2ECE3] space-y-1.5">
                {activeTech.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2 text-xs text-[#3D3328]">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#F6EFE6] text-[#8C6239] mt-0.5">
                      <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                    </span>
                    <span className="leading-tight">{b}</span>
                  </div>
                ))}
              </div>

              {/* Gatilho para Modal de Procedimento */}
              <div className="mt-3.5 pt-2.5 border-t border-[#F2ECE3] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setProcedureModalItem(activeTech)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C6239] hover:underline"
                >
                  <span>Ver as 3 etapas clínicas</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenAppointment(activeTech.title)}
                  className="rounded-lg bg-[#3B2920] px-3 py-1.5 text-xs font-medium text-white active:scale-95"
                >
                  Agendar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------- 2. BLOCO DESKTOP / TABLET (hidden sm:block) -------------------- */}
        <div
          className={`hidden sm:block mt-8 sm:mt-10 rounded-[24px] sm:rounded-[32px] border border-[#EBE3D7] bg-white p-5 sm:p-7 lg:p-8 shadow-[0_4px_30px_rgba(72,51,35,0.04)] transition-all duration-700 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Coluna da Esquerda: Imagem com Crossfade */}
            <div className="lg:col-span-7 flex flex-col min-h-[360px] sm:min-h-[420px] lg:min-h-full">
              <div className="relative h-full w-full min-h-[340px] sm:min-h-[400px] overflow-hidden rounded-2xl sm:rounded-3xl bg-[#EBE3D7] shadow-inner select-none flex-1">
                {TECH_ITEMS.map((item, index) => {
                  const isCurrent = activeTechIndex === index;
                  return (
                    <div
                      key={item.id}
                      className={`absolute inset-0 transition-all duration-500 ease-out ${
                        isCurrent
                          ? "opacity-100 scale-100 pointer-events-auto"
                          : "opacity-0 scale-102 pointer-events-none"
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        loading={index === 0 ? "eager" : "lazy"}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none" />
                    </div>
                  );
                })}

                <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 z-10">
                  <div className="flex items-center gap-2.5 rounded-xl bg-black/65 backdrop-blur-md px-3.5 py-2 text-white border border-white/15 shadow-md">
                    <div className="flex h-5 w-5 items-center justify-center rounded-md bg-white/20 text-white">
                      <Box className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-medium tracking-wide">
                      {activeTech.badge}
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-4 sm:bottom-5 right-4 sm:right-5 z-10 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/65 backdrop-blur-md text-white border border-white/15 shadow-md transition hover:bg-black/80 active:scale-95"
                    aria-label="Tecnologia anterior"
                  >
                    <ChevronLeft className="h-4.5 w-4.5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/65 backdrop-blur-md text-white border border-white/15 shadow-md transition hover:bg-black/80 active:scale-95"
                    aria-label="Próxima tecnologia"
                  >
                    <ChevronRight className="h-4.5 w-4.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Coluna da Direita: Acordeão com os Itens */}
            <div className="lg:col-span-5 flex flex-col justify-between py-1">
              <div className="space-y-3">
                {TECH_ITEMS.map((item, index) => {
                  const isCurrent = activeTechIndex === index;
                  const isExpanded = expandedIndex === index;

                  return (
                    <div
                      key={item.id}
                      onClick={() => handleSelectTech(index)}
                      className={`rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isCurrent
                          ? "border-[#B89264] bg-[#FAF8F5] shadow-xs"
                          : "border-[#ECE5DA] bg-white hover:border-[#D5C7B5]"
                      }`}
                    >
                      <div className="p-4 sm:p-4.5">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <span
                              className={`font-mono text-xs font-semibold ${
                                isCurrent ? "text-[#8C6239]" : "text-[#A89C8F]"
                              }`}
                            >
                              {item.number}
                            </span>
                            <h3 className="font-serif text-base sm:text-lg font-medium text-[#1E1B18]">
                              {item.title}
                            </h3>
                          </div>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleToggleAccordion(index);
                            }}
                            className="flex h-7 w-7 items-center justify-center rounded-full bg-white border border-[#E2D6C6] text-[#483323]"
                            aria-label={isExpanded ? "Recolher detalhes" : "Expandir detalhes"}
                          >
                            {isExpanded ? (
                              <Minus className="h-3.5 w-3.5" />
                            ) : (
                              <Plus className="h-3.5 w-3.5" />
                            )}
                          </button>
                        </div>

                        {/* Conteúdo Expandido */}
                        {isExpanded && (
                          <div className="mt-3 pt-3 border-t border-[#EAE2D5] animate-in fade-in duration-300">
                            <p className="text-xs sm:text-[13px] text-[#554C42] leading-relaxed">
                              {item.longDesc}
                            </p>

                            <div className="mt-3 space-y-1.5">
                              {item.benefits.map((benefit) => (
                                <div
                                  key={benefit}
                                  className="flex items-start gap-2 text-xs text-[#3D3328]"
                                >
                                  <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#F6EFE6] text-[#8C6239] mt-0.5">
                                    <Check className="h-2 w-2 stroke-[2.5]" />
                                  </span>
                                  <span>{benefit}</span>
                                </div>
                              ))}
                            </div>

                            <div className="mt-4 pt-3 border-t border-[#EAE2D5] flex items-center justify-between">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setProcedureModalItem(item);
                                }}
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C6239] hover:text-[#5E3F1F] transition-colors"
                              >
                                <span>{item.procedureText}</span>
                                <ArrowUpRight className="h-3.5 w-3.5" />
                              </button>

                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onOpenAppointment(item.title);
                                }}
                                className="inline-flex items-center gap-1.5 rounded-lg bg-[#3B2920] px-3.5 py-1.5 text-xs font-medium text-white hover:bg-[#281B14] active:scale-95 transition-all shadow-2xs"
                              >
                                <span>Agendar avaliação</span>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Procedimento Clínico */}
      <Dialog
        open={!!procedureModalItem}
        onOpenChange={(open) => !open && setProcedureModalItem(null)}
      >
        <DialogContent className="max-w-lg rounded-3xl bg-[#FAF8F5] p-6 sm:p-7 border border-[#E8DFD3]">
          {procedureModalItem && (
            <div>
              <DialogTitle className="font-serif text-xl sm:text-2xl font-normal text-[#1E1B18]">
                {procedureModalItem.title}
              </DialogTitle>
              <DialogDescription className="mt-1 text-xs sm:text-sm text-[#665D53]">
                {procedureModalItem.badge} • Padrão de precisão Lumière
              </DialogDescription>

              <div className="mt-4 space-y-3">
                {procedureModalItem.steps.map((step, idx) => (
                  <div
                    key={step.title}
                    className="p-3.5 rounded-2xl bg-white border border-[#E8DFD3]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3B2920] text-[10px] font-bold text-white">
                        {idx + 1}
                      </span>
                      <h4 className="text-xs sm:text-sm font-semibold text-[#1E1B18]">
                        {step.title}
                      </h4>
                    </div>
                    <p className="mt-1.5 text-xs text-[#5C554C] pl-7 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-[#E8DFD3] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setProcedureModalItem(null)}
                  className="rounded-xl px-4 py-2 text-xs font-medium text-[#483323] hover:bg-[#F2EDE5]"
                >
                  Fechar
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const title = procedureModalItem.title;
                    setProcedureModalItem(null);
                    onOpenAppointment(title);
                  }}
                  className="rounded-xl bg-[#3B2920] px-4 py-2 text-xs font-medium text-white shadow-xs hover:bg-[#281B14] active:scale-95"
                >
                  Agendar com esta tecnologia
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
