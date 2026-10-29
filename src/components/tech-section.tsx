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
  Users,
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
      className="relative py-12 sm:py-16 lg:py-22 bg-[#FAF7F2] transition-colors"
      aria-label="Tecnologia e Inovação para o seu sorriso"
    >
      <div className="site-container">
        {/* Cabeçalho Superior */}
        <div
          className={`flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="max-w-[780px]">
            <div className="flex items-center gap-2.5">
              <span className="h-px w-6 bg-[#966D38]" />
              <span className="text-xs font-semibold tracking-[0.24em] text-[#966D38] uppercase">
                Tecnologia e Inovação
              </span>
            </div>

            <h2 className="mt-2 font-serif text-[26px] sm:text-4xl lg:text-[44px] leading-[1.14] font-normal tracking-tight text-[#221B16]">
              Mais precisão para cuidar do seu sorriso.
            </h2>

            <p className="mt-2 text-xs sm:text-base text-[#665D53] leading-relaxed max-w-[700px]">
              Utilizamos tecnologia de ponta para oferecer diagnósticos mais precisos, tratamentos
              mais previsíveis e uma experiência muito mais confortável.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => onOpenAppointment("Tecnologias Odontológicas")}
              className="group inline-flex items-center gap-2 rounded-full bg-[#3B2920] hover:bg-[#281B14] px-4.5 py-2.5 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-medium text-white shadow-sm transition-all duration-300 hover:shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span>Conheça nossas tecnologias</span>
              <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* =========================================================================
            LAYOUT MOBILE E TABLET (lg:hidden):
            Em vez de empilhar uma imagem gigante + 3 acordeões inteiros um embaixo do outro,
            oferece um seletor em abas horizontais com card interativo e benefícios lado a lado.
           ========================================================================= */}
        <div className="lg:hidden mt-6 rounded-2xl border border-[#EBE3D7] bg-white p-4 sm:p-6 shadow-sm">
          {/* Seletor de Abas em Grade / Linha Horizontal */}
          <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-[#F4EFE6] border border-[#E8DFC8]">
            {TECH_ITEMS.map((item, idx) => {
              const isSelected = activeTechIndex === idx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectTech(idx)}
                  className={`py-2 px-1 text-center rounded-lg text-xs font-medium transition-all ${
                    isSelected
                      ? "bg-[#3B2920] text-white shadow-xs font-semibold"
                      : "text-[#5C5044] hover:text-[#1E1B18]"
                  }`}
                >
                  <span className="block text-[10px] text-[#C5A059]">{item.number}</span>
                  <span className="truncate block leading-tight">{item.title.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Card Interativo com Imagem Compacta e Informações Lado a Lado */}
          <div className="mt-4">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#EBE3D7] shadow-inner">
              <img
                src={activeTech.image}
                alt={activeTech.imageAlt}
                className="h-full w-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Controles Flutuantes Prev/Next */}
              <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 rounded-full bg-black/65 backdrop-blur-md px-2 py-1 text-white border border-white/15">
                <button
                  type="button"
                  onClick={() => handlePrev()}
                  aria-label="Anterior"
                  className="p-1 hover:text-[#ECC87E]"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                </button>
                <span className="text-[10px] font-mono tabular-nums">0{activeTechIndex + 1}/03</span>
                <button
                  type="button"
                  onClick={() => handleNext()}
                  aria-label="Próximo"
                  className="p-1 hover:text-[#ECC87E]"
                >
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="absolute bottom-2.5 left-2.5">
                <span className="rounded-md bg-white/95 backdrop-blur-md px-2 py-0.5 text-[10px] font-semibold text-[#3D2C22] shadow-xs">
                  {activeTech.badge}
                </span>
              </div>
            </div>

            {/* Conteúdo Explicativo e Benefícios Lado a Lado */}
            <div className="mt-3.5 space-y-2.5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-serif text-lg font-normal text-[#1E1B18] leading-tight">
                    {activeTech.title}
                  </h3>
                  <p className="text-xs text-[#5C554C] mt-1 leading-relaxed">
                    {activeTech.shortDesc}
                  </p>
                </div>
              </div>

              {/* Benefícios em Grade de 2 Colunas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-2 border-t border-[#F0EAE0]">
                {activeTech.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-1.5 text-[11px] text-[#423930]">
                    <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#8C6239] text-white">
                      <Check className="h-2 w-2 stroke-[3]" />
                    </span>
                    <span className="leading-tight">{b}</span>
                  </div>
                ))}
              </div>

              {/* Ação do Procedimento */}
              <div className="pt-2 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setProcedureModalItem(activeTech)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#8C6239] hover:text-[#5F3E1E] py-1 cursor-pointer"
                >
                  <span>Entenda o procedimento em 3 etapas</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            LAYOUT DESKTOP (hidden lg:block):
            Preservado integralmente conforme a versão restaurada para telas grandes.
           ========================================================================= */}
        <div
          className={`hidden lg:block mt-8 sm:mt-10 rounded-[24px] sm:rounded-[32px] border border-[#EBE3D7] bg-white p-5 sm:p-7 lg:p-8 shadow-[0_4px_30px_rgba(72,51,35,0.04)] transition-all duration-700 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Coluna da Esquerda: Imagem preenche a altura total */}
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

                {/* Badge Flutuante Inferior Esquerdo */}
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

                {/* Controles Flutuantes Inferiores Direitos */}
                <div className="absolute bottom-4 sm:bottom-5 right-4 sm:right-5 z-10">
                  <div className="flex items-center gap-1.5 rounded-full bg-black/65 backdrop-blur-md px-2 py-1.5 text-white border border-white/15 shadow-md">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Tecnologia anterior"
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 hover:bg-white/30 text-white transition-all active:scale-90 cursor-pointer"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>

                    <span className="px-2 font-mono text-[11px] sm:text-xs font-semibold tabular-nums tracking-wider text-white/90">
                      0{activeTechIndex + 1} / 0{TECH_ITEMS.length}
                    </span>

                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Próxima tecnologia"
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 hover:bg-white/30 text-white transition-all active:scale-90 cursor-pointer"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna da Direita: Acordeão Desktop */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h3 className="font-sans font-bold text-2xl sm:text-[25px] text-[#221B16] tracking-tight mb-4">
                  Conheça as tecnologias
                </h3>

                <div className="flex flex-col gap-3">
                  {TECH_ITEMS.map((item, idx) => {
                    const isExpanded = expandedIndex === idx;
                    const isSelected = activeTechIndex === idx;

                    return (
                      <div
                        key={item.id}
                        onClick={() => handleSelectTech(idx)}
                        className={`group relative rounded-2xl border transition-all duration-300 ease-out cursor-pointer overflow-hidden ${
                          isSelected
                            ? "border-[#B89264] bg-[#FAF5EF] shadow-xs"
                            : "border-[#EBE3D7] bg-white hover:border-[#D5C4B0] hover:bg-[#FAF7F2]"
                        }`}
                      >
                        <div className="p-4 sm:p-4.5 flex items-center justify-between gap-3.5">
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors ${
                              isSelected
                                ? "border-[#A37845] bg-white text-[#8C6239] font-semibold"
                                : "border-[#E2D8CC] text-[#7A6E63] group-hover:border-[#B89264]"
                            }`}
                          >
                            <span className="text-xs sm:text-[13px] font-sans tracking-wide">
                              {item.number}
                            </span>
                          </div>

                          <div className="flex-1 min-w-0">
                            <h4
                              className={`text-base sm:text-[17px] font-semibold leading-snug transition-colors ${
                                isSelected ? "text-[#221B16]" : "text-[#2A231E]"
                              }`}
                            >
                              {item.title}
                            </h4>
                            <p className="mt-0.5 text-xs sm:text-[13px] text-[#665D53] leading-relaxed">
                              {item.shortDesc}
                            </p>

                            <div className="mt-1.5 flex items-center gap-1">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setProcedureModalItem(item);
                                }}
                                className="inline-flex items-center gap-1 text-xs font-semibold text-[#8C6239] hover:text-[#5F3E1E] transition-colors underline-offset-3 hover:underline cursor-pointer"
                              >
                                <span>{item.procedureText}</span>
                                <ArrowUpRight className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleToggleAccordion(idx);
                            }}
                            aria-label={isExpanded ? "Recolher detalhes" : "Expandir detalhes"}
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${
                              isExpanded
                                ? "bg-[#8C6239] text-white rotate-180 shadow-2xs"
                                : "border border-[#D8CEBF] text-[#554A40] hover:border-[#8C6239] hover:text-[#8C6239]"
                            }`}
                          >
                            {isExpanded ? (
                              <Minus className="h-4 w-4" />
                            ) : (
                              <Plus className="h-4 w-4" />
                            )}
                          </button>
                        </div>

                        <div
                          className={`grid transition-all duration-300 ease-in-out ${
                            isExpanded
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0 pointer-events-none"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="px-5 pb-4.5 pt-1 border-t border-[#EAE0D3]/80 space-y-3 text-xs sm:text-[13.5px]">
                              <p className="text-[#554C42] leading-relaxed font-normal">
                                {item.longDesc}
                              </p>

                              <div className="space-y-1.5 pt-0.5">
                                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C6239] block">
                                  Destaques clínicos:
                                </span>
                                <div className="space-y-1">
                                  {item.benefits.map((benefit) => (
                                    <div
                                      key={benefit}
                                      className="flex items-start gap-2 text-[#423930]"
                                    >
                                      <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#8C6239] text-white">
                                        <Check className="h-2.5 w-2.5 stroke-[3]" />
                                      </div>
                                      <span className="leading-snug">{benefit}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Faixa Inferior de 3 Benefícios Tecnológicos + Botão CTA (Disposição 3 Colunas no Tablet e Desktop) */}
        <div
          className={`mt-4 sm:mt-6 rounded-[20px] sm:rounded-[26px] border border-[#EBE3D7] bg-white p-4 sm:p-6 shadow-[0_3px_20px_rgba(72,51,35,0.03)] flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-5 transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 flex-1">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-[#F6EFE6] text-[#8C6239]">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-[#221B16]">Diagnóstico rápido</h4>
                <p className="text-[11px] sm:text-xs text-[#6B6156] mt-0.5 leading-snug">
                  Mais agilidade e precisão.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-[#F6EFE6] text-[#8C6239]">
                <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-[#221B16]">Visualização em tempo real</h4>
                <p className="text-[11px] sm:text-xs text-[#6B6156] mt-0.5 leading-snug">
                  Acompanhamento 3D interativo.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-[#F6EFE6] text-[#8C6239]">
                <Users className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-[#221B16]">
                  Planejamento exclusivo
                </h4>
                <p className="text-[11px] sm:text-xs text-[#6B6156] mt-0.5 leading-snug">
                  Resultados naturais e duradouros.
                </p>
              </div>
            </div>
          </div>

          <div className="shrink-0 pt-3 sm:pt-4 lg:pt-0 border-t lg:border-t-0 border-[#EFE8DC] flex justify-end">
            <button
              type="button"
              onClick={() => onOpenAppointment("Avaliação com Scanner 3D")}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#3B2920] hover:bg-[#281B14] px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-medium text-white shadow-sm transition-all duration-300 hover:shadow-md active:scale-95 cursor-pointer whitespace-nowrap w-full sm:w-auto"
            >
              <span>Agendar avaliação</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal Rico: "Entenda o Procedimento" */}
      <Dialog
        open={!!procedureModalItem}
        onOpenChange={(open) => !open && setProcedureModalItem(null)}
      >
        <DialogContent className="max-w-[94vw] sm:max-w-[620px] p-0 overflow-hidden rounded-[24px] sm:rounded-[28px] border border-[#E8DFD3] bg-[#FAF7F2] shadow-2xl">
          {procedureModalItem && (
            <div>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#EBE3D7]">
                <img
                  src={procedureModalItem.image}
                  alt={procedureModalItem.imageAlt}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <span className="text-[11px] font-semibold text-white/80 uppercase tracking-widest block">
                    Tecnologia {procedureModalItem.number}
                  </span>
                  <DialogTitle className="font-serif text-2xl sm:text-3xl font-normal text-white mt-1 leading-tight">
                    {procedureModalItem.title}
                  </DialogTitle>
                </div>
              </div>

              <div className="p-5 sm:p-7 space-y-4 sm:space-y-5">
                <DialogDescription className="text-xs sm:text-sm text-[#5C5348] leading-relaxed">
                  {procedureModalItem.longDesc}
                </DialogDescription>

                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8C6239]">
                    Como funciona na prática:
                  </h4>
                  <div className="space-y-2 sm:space-y-2.5">
                    {procedureModalItem.steps.map((st, i) => (
                      <div
                        key={st.title}
                        className="flex items-start gap-2.5 sm:gap-3 rounded-xl bg-white p-2.5 sm:p-3 border border-[#EBE3D7]"
                      >
                        <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-[#F6EFE6] text-[11px] sm:text-xs font-semibold text-[#8C6239]">
                          {i + 1}
                        </span>
                        <div>
                          <strong className="text-xs sm:text-sm font-semibold text-[#221B16] block">
                            {st.title}
                          </strong>
                          <span className="text-[11px] sm:text-xs text-[#6B6156] leading-relaxed">{st.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const t = procedureModalItem.title;
                      setProcedureModalItem(null);
                      onOpenAppointment(`Consulta com ${t}`);
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#3B2920] hover:bg-[#281B14] py-3 sm:py-3.5 px-5 sm:px-6 text-xs sm:text-sm font-medium text-white shadow-sm transition-all active:scale-95 cursor-pointer"
                  >
                    <span>Agendar com esta tecnologia</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setProcedureModalItem(null)}
                    className="rounded-xl border border-[#DCD3C7] bg-white px-5 py-3 text-xs sm:text-sm font-medium text-[#4A3D31] hover:bg-[#F4EFE8] transition-colors cursor-pointer"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
