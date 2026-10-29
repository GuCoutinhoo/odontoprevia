import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Monitor,
  Cpu,
  ShieldCheck,
  Sparkles,
  Check,
  Layers,
} from "lucide-react";
import scannerImg from "@/assets/tech-scanner.jpg";
import roomImg from "@/assets/room.jpg";
import beforeAfterImg from "@/assets/before-after.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface TechSectionProps {
  onOpenAppointment: (treatmentName?: string) => void;
  isVisible?: boolean;
}

interface TechDetail {
  number: string;
  title: string;
  desc: string;
  img: string;
  longDesc: string;
  benefits: string[];
}

const TECH_ITEMS: TechDetail[] = [
  {
    number: "01 / 03",
    title: "Scanner Intraoral 3D de Alta Resolução",
    desc: "Mapeamento óptico em cores reais sem necessidade de moldagem tradicional.",
    img: scannerImg,
    longDesc:
      "Substitui completamente as tradicionais e desconfortáveis pastas de moldagem por um escaneamento óptico de altíssima definição. Em menos de 3 minutos, gera um modelo tridimensional exato da sua arcada dentária, com precisão micrométrica para confecção de lentes e alinhadores.",
    benefits: [
      "Zero náuseas ou desconforto associados a moldagens antigas",
      "Geração instantânea do modelo 3D em cores reais e alta fidelidade",
      "Precisão microscópica na adaptação de facetas, coroas e próteses",
      "Simulação imediata do resultado estético na primeira consulta",
    ],
  },
  {
    number: "02 / 03",
    title: "Planejamento Digital e DSD (Digital Smile Design)",
    desc: "Simulação milimétrica do novo sorriso antes de qualquer intervenção.",
    img: beforeAfterImg,
    longDesc:
      "Softwares avançados de Digital Smile Design (DSD) e guias cirúrgicos computadorizados permitem planejar cada detalhe milimétrico antes de iniciar o procedimento, garantindo previsibilidade total e segurança para o paciente.",
    benefits: [
      "Visualização prévia do novo sorriso no formato do seu rosto",
      "Integração com tomografias tridimensionais de feixe cônico",
      "Cirurgias guiadas sem cortes com cicatrização acelerada",
      "Participação ativa do paciente na escolha de formato e tom",
    ],
  },
  {
    number: "03 / 03",
    title: "Conforto Ergonômico e Biossegurança Hospitalar",
    desc: "Salas privativas com esterilização rastreada e controle acústico.",
    img: roomImg,
    longDesc:
      "Salas clínicas equipadas com sistemas rigorosos de esterilização hospitalar com rastreamento digital, climatização com filtros antibacterianos e iluminação calmante para transformar a consulta em uma experiência relaxante.",
    benefits: [
      "Biossegurança total com esterilização rastreada em autoclave médica",
      "Cadeiras ergonômicas com tecnologia de alívio de pressão lombar",
      "Isolamento acústico com fones antirruído e playlist privativa",
      "Protocolo de atendimento humanizado e sedação consciente opcional",
    ],
  },
];

export function TechSection({ onOpenAppointment, isVisible = true }: TechSectionProps) {
  const [selectedTech, setSelectedTech] = useState<TechDetail | null>(null);
  const [activeCompareTab, setActiveCompareTab] = useState<"digital" | "tradicional">("digital");

  const mainTech = TECH_ITEMS[0]!;
  const secondaryTech1 = TECH_ITEMS[1]!;
  const secondaryTech2 = TECH_ITEMS[2]!;

  return (
    <section
      id="tecnologia"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#FAF8F5]"
      aria-label="Tecnologia e Inovação na Odontologia"
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
                Tecnologia & Inovação Digital
              </p>
            </div>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[44px] leading-[1.12] font-normal tracking-tight text-[#1E1B18]">
              Tecnologia a favor do seu sorriso.
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-[#5C554C] leading-relaxed">
              Recursos digitais que apoiam diagnósticos rápidos, simulações em tempo real e uma
              experiência livre de moldagens desconfortáveis.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => onOpenAppointment("Checkup com Scanner 3D")}
              className="group inline-flex items-center gap-2 rounded-xl border border-[#9E732B]/50 bg-white hover:bg-[#FAF8F5] hover:border-[#9E732B] px-6 py-3 text-xs sm:text-sm font-medium text-[#2E241B] shadow-2xs transition-all duration-300 hover:shadow-xs active:scale-95 cursor-pointer"
            >
              <span>Conhecer nossa tecnologia</span>
              <ArrowUpRight className="h-4 w-4 text-[#966D38] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Grade Bento de 3 Cards Tecnológicos */}
        <div
          className={`mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 transition-all duration-700 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {/* Card Principal Bento (Esquerda - Scanner 3D) */}
          <article
            onClick={() => setSelectedTech(mainTech)}
            className="lg:col-span-7 group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E8DFD3] bg-white shadow-[0_6px_24px_rgba(72,51,35,0.04)] transition-all duration-400 ease-out hover:-translate-y-1.5 hover:border-[#C5A059] hover:shadow-[0_20px_44px_rgba(72,51,35,0.1)] cursor-pointer"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EFE9DF]">
              <img
                src={mainTech.img}
                alt={mainTech.title}
                loading="lazy"
                width={1000}
                height={600}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="rounded-lg bg-white/95 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-[#483A2E] shadow-2xs border border-black/5">
                  Destaque Clínico
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex items-center justify-between gap-5 bg-white">
              <div>
                <span className="text-[11px] font-semibold text-[#8C6A3C] tracking-wider uppercase block">
                  {mainTech.number}
                </span>
                <h3 className="mt-1 font-serif text-xl sm:text-2xl font-normal text-[#1E1B18] leading-tight group-hover:text-[#483323] transition-colors">
                  {mainTech.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#5C554C] leading-relaxed">
                  {mainTech.desc}
                </p>
              </div>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#483323] text-white transition-all duration-300 group-hover:bg-[#342417] group-hover:scale-108 shadow-2xs">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </article>

          {/* Coluna da Direita (2 Cards Bento Secundários) */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-7 justify-between">
            {/* Card 02 */}
            <article
              onClick={() => setSelectedTech(secondaryTech1)}
              className="group flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-[#E8DFD3] bg-white shadow-[0_6px_24px_rgba(72,51,35,0.04)] transition-all duration-400 ease-out hover:-translate-y-1.5 hover:border-[#C5A059] hover:shadow-[0_20px_44px_rgba(72,51,35,0.1)] cursor-pointer flex-1"
            >
              <div className="relative aspect-[16/10] sm:w-[46%] shrink-0 overflow-hidden bg-[#EFE9DF]">
                <img
                  src={secondaryTech1.img}
                  alt={secondaryTech1.title}
                  loading="lazy"
                  width={500}
                  height={350}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                />
              </div>
              <div className="p-5 sm:p-6 flex flex-1 flex-col justify-between">
                <div>
                  <span className="text-[10px] font-semibold text-[#8C6A3C] tracking-wider uppercase block">
                    {secondaryTech1.number}
                  </span>
                  <h3 className="mt-1 font-serif text-lg sm:text-xl font-normal text-[#1E1B18] leading-snug group-hover:text-[#483323] transition-colors">
                    {secondaryTech1.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#5C554C] leading-relaxed line-clamp-2">
                    {secondaryTech1.desc}
                  </p>
                </div>
                <div className="mt-4 flex justify-end">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DCD3C7] text-[#4A3D31] transition-all duration-300 group-hover:bg-[#483323] group-hover:border-[#483323] group-hover:text-white group-hover:scale-105">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </article>

            {/* Card 03 */}
            <article
              onClick={() => setSelectedTech(secondaryTech2)}
              className="group flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-[#E8DFD3] bg-white shadow-[0_6px_24px_rgba(72,51,35,0.04)] transition-all duration-400 ease-out hover:-translate-y-1.5 hover:border-[#C5A059] hover:shadow-[0_20px_44px_rgba(72,51,35,0.1)] cursor-pointer flex-1"
            >
              <div className="relative aspect-[16/10] sm:w-[46%] shrink-0 overflow-hidden bg-[#EFE9DF]">
                <img
                  src={secondaryTech2.img}
                  alt={secondaryTech2.title}
                  loading="lazy"
                  width={500}
                  height={350}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                />
              </div>
              <div className="p-5 sm:p-6 flex flex-1 flex-col justify-between">
                <div>
                  <span className="text-[10px] font-semibold text-[#8C6A3C] tracking-wider uppercase block">
                    {secondaryTech2.number}
                  </span>
                  <h3 className="mt-1 font-serif text-lg sm:text-xl font-normal text-[#1E1B18] leading-snug group-hover:text-[#483323] transition-colors">
                    {secondaryTech2.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#5C554C] leading-relaxed line-clamp-2">
                    {secondaryTech2.desc}
                  </p>
                </div>
                <div className="mt-4 flex justify-end">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DCD3C7] text-[#4A3D31] transition-all duration-300 group-hover:bg-[#483323] group-hover:border-[#483323] group-hover:text-white group-hover:scale-105">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Faixa Inferior de 3 Pilares Tecnológicos */}
        <div
          className={`mt-6 sm:mt-8 rounded-2xl border border-[#E5DAD0] bg-[#F4EFE8] px-6 py-4.5 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-[#E2D6C8] transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 pt-1 md:pt-0">
            <Monitor className="h-5 w-5 text-[#8C6A3C] shrink-0" strokeWidth={1.75} />
            <div>
              <span className="text-xs sm:text-[13px] font-semibold text-[#2E241B] block">
                Diagnóstico digital 3D
              </span>
              <span className="text-[11px] text-[#7A7065]">
                Visualização instantânea em tela 4K
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-6">
            <Cpu className="h-5 w-5 text-[#8C6A3C] shrink-0" strokeWidth={1.75} />
            <div>
              <span className="text-xs sm:text-[13px] font-semibold text-[#2E241B] block">
                Planejamento individualizado
              </span>
              <span className="text-[11px] text-[#7A7065]">Design de sorriso biomimético</span>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-6">
            <ShieldCheck className="h-5 w-5 text-[#8C6A3C] shrink-0" strokeWidth={1.75} />
            <div>
              <span className="text-xs sm:text-[13px] font-semibold text-[#2E241B] block">
                Biossegurança hospitalar
              </span>
              <span className="text-[11px] text-[#7A7065]">
                Esterilização rastreável grau cirúrgico
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Detalhes da Tecnologia */}
      <Dialog open={!!selectedTech} onOpenChange={(open) => !open && setSelectedTech(null)}>
        <DialogContent className="max-w-[92vw] sm:max-w-[580px] p-0 overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#E8DFD3] bg-[#FAF8F5] shadow-2xl">
          {selectedTech && (
            <div>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F0EAE1]">
                <img
                  src={selectedTech.img}
                  alt={selectedTech.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-[11px] font-medium text-white/90 uppercase tracking-widest block">
                    {selectedTech.number}
                  </span>
                  <DialogTitle className="font-serif text-2xl sm:text-3xl text-white font-normal mt-1 leading-snug">
                    {selectedTech.title}
                  </DialogTitle>
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-5">
                <DialogDescription className="text-xs sm:text-sm leading-relaxed text-[#5F574E]">
                  {selectedTech.longDesc}
                </DialogDescription>

                <div className="space-y-2.5 pt-3 border-t border-[#EAE2D7]">
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#8C6A3C]">
                    Benefícios para o seu tratamento
                  </h4>
                  <div className="space-y-2">
                    {selectedTech.benefits.map((b) => (
                      <div
                        key={b}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#483E34]"
                      >
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#483323] text-white">
                          <Check className="h-2.5 w-2.5" />
                        </div>
                        <span className="leading-tight">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const t = selectedTech.title;
                      setSelectedTech(null);
                      onOpenAppointment(t);
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#483323] hover:bg-[#342417] py-3.5 px-6 text-xs sm:text-sm font-medium text-white shadow-sm transition-all active:scale-95 cursor-pointer"
                  >
                    <span>Agendar com esta tecnologia</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedTech(null)}
                    className="rounded-xl border border-[#DCD3C7] px-6 py-3.5 text-xs sm:text-sm font-medium text-[#4A3D31] hover:bg-[#EFE8DE] transition-colors cursor-pointer"
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
