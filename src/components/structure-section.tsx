import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Armchair,
  Sparkles,
  Flower2,
  Check,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import aboutMain from "@/assets/about-main.jpg";
import roomImg from "@/assets/room.jpg";
import techScanner from "@/assets/tech-scanner.jpg";
import consultImg from "@/assets/www.jpg";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface StructureSectionProps {
  onOpenAppointment: (treatmentName?: string) => void;
  isVisible?: boolean;
}

interface RoomPhoto {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  features: string[];
}

const ROOM_PHOTOS: RoomPhoto[] = [
  {
    id: "recepcao",
    number: "01 / 04",
    title: "Recepção & Lounge de Boas-Vindas",
    subtitle: "Acolhimento imediato sem esperas",
    desc: "Bancada em mármore italiano com retroiluminação suave, painéis em madeira nobre e poltronas aconchegantes para receber você com total privacidade e conforto.",
    img: aboutMain,
    features: [
      "Cafeteria com grãos especiais",
      "Wi-Fi de alta velocidade",
      "Atendimento estritamente pontual",
    ],
  },
  {
    id: "consultorio",
    number: "02 / 04",
    title: "Suíte Master Clínica & Jardim Privativo",
    subtitle: "Equilíbrio entre ergonomia e tranquilidade",
    desc: "Cadeira odontológica ergonômica com sistema anti-pressão, iluminação indireta calmante e ampla vista para o jardim de inverno privativo.",
    img: roomImg,
    features: [
      "Fones com cancelamento de ruído",
      "Aromaterapia suave e relaxante",
      "Privacidade sonora total",
    ],
  },
  {
    id: "sala-avaliacao",
    number: "03 / 04",
    title: "Ateliê de Planejamento Digital 3D",
    subtitle: "Onde o seu novo sorriso é desenhado",
    desc: "Estúdio equipado com monitores de alta precisão cromática onde paciente e especialista desenham juntos cada detalhe e simulação milimétrica do novo sorriso.",
    img: consultImg,
    features: [
      "Visualização 3D em tempo real",
      "Softwares DSD originais",
      "Aprovação prévia do paciente",
    ],
  },
  {
    id: "sala-scanner",
    number: "04 / 04",
    title: "Central de Imagem Digital & Biossegurança",
    subtitle: "Rastreamento e precisão cirúrgica",
    desc: "Ambiente médico de tecnologia diagnóstica com esterilização de grau hospitalar rastreada e escaneamento intraoral 3D sem moldes desconfortáveis.",
    img: techScanner,
    features: [
      "Sem massas de moldagem",
      "Esterilização hospitalar classe B",
      "Filtros HEPA médicos contínuos",
    ],
  },
];

export function StructureSection({ onOpenAppointment, isVisible = true }: StructureSectionProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<RoomPhoto | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const mainPhoto = ROOM_PHOTOS[activePhotoIndex] ?? ROOM_PHOTOS[0]!;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev === 0 ? ROOM_PHOTOS.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev + 1) % ROOM_PHOTOS.length);
  };

  return (
    <section
      id="estrutura"
      className="relative py-14 sm:py-18 lg:py-22 bg-[#FAF7F2] transition-colors"
      aria-label="Nossa Estrutura e Ambientes Acolhedores"
    >
      <div className="site-container">
        {/* Grade Rebalanceada: Proporções Perfeitas entre Texto e Galeria */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Coluna de Texto (Esquerda): Tipografia Maior, Melhor Leitura e Zero Espaço Vazio */}
          <div
            className={`lg:col-span-5 flex flex-col justify-center transition-all duration-700 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span className="h-px w-6 bg-[#966D38]" />
              <span className="text-xs font-semibold tracking-[0.24em] text-[#966D38] uppercase">
                Arquitetura & Conforto
              </span>
            </div>

            <h2 className="mt-2.5 font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.14] font-normal tracking-tight text-[#1E1B18]">
              Um espaço feito para você se sentir bem.
            </h2>

            <p className="mt-3 text-sm sm:text-base text-[#554D43] leading-relaxed max-w-[480px]">
              Cada ambiente foi planejado para afastar a sensação impessoal de consultório e acolher
              você com tranquilidade, conforto sensorial e biossegurança médica absoluta.
            </p>

            {/* 3 Diferenciais Estruturados com Ícones Elegantes e Textos Ricos */}
            <div className="mt-6 space-y-3.5">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F2EDE5] text-[#7A5328] shadow-2xs mt-0.5">
                  <Armchair className="h-4.5 w-4.5" strokeWidth={1.8} />
                </div>
                <div>
                  <h4 className="text-sm sm:text-[15px] font-semibold text-[#221B16]">
                    Ambientes privativos e silenciosos
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#6B6156] mt-0.5 leading-snug">
                    Salas individuais com controle acústico e lounge intimista de recepção.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F2EDE5] text-[#7A5328] shadow-2xs mt-0.5">
                  <Sparkles className="h-4.5 w-4.5" strokeWidth={1.8} />
                </div>
                <div>
                  <h4 className="text-sm sm:text-[15px] font-semibold text-[#221B16]">
                    Tecnologia integrada de precisão 3D
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#6B6156] mt-0.5 leading-snug">
                    Estúdio de simulação em tempo real e centro de imagem digital.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F2EDE5] text-[#7A5328] shadow-2xs mt-0.5">
                  <Flower2 className="h-4.5 w-4.5" strokeWidth={1.8} />
                </div>
                <div>
                  <h4 className="text-sm sm:text-[15px] font-semibold text-[#221B16]">
                    Conforto sensorial e bem-estar
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#6B6156] mt-0.5 leading-snug">
                    Iluminação indireta quente, aromaterapia calmante e vista para jardim.
                  </p>
                </div>
              </div>
            </div>

            {/* Botão de Ação */}
            <div className="mt-7">
              <button
                type="button"
                onClick={() => onOpenAppointment("Visita à Estrutura")}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#3B2920] hover:bg-[#281B14] px-6 py-3.5 text-xs sm:text-sm font-medium text-white shadow-sm transition-all duration-300 hover:shadow-md active:scale-95 cursor-pointer"
              >
                <span>Conheça nossa estrutura</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Coluna da Galeria (Direita): Proporção Reduzida em ~20% e Altura Perfeitamente Integrada */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-150 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-3">
              {/* Imagem Principal da Galeria com Altura Controlada e Transição Fluida */}
              <div
                onClick={() => setSelectedPhoto(mainPhoto)}
                className="group relative h-[260px] sm:h-[310px] lg:h-[330px] w-full overflow-hidden rounded-2xl sm:rounded-[22px] border border-[#E8DFD3] bg-[#EFE9DF] shadow-[0_4px_24px_rgba(72,51,35,0.06)] cursor-pointer"
              >
                {ROOM_PHOTOS.map((room, idx) => {
                  const isActive = activePhotoIndex === idx;
                  return (
                    <div
                      key={room.id}
                      className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                        isActive
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-102 pointer-events-none"
                      }`}
                    >
                      <img
                        src={room.img}
                        alt={room.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                      />
                    </div>
                  );
                })}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

                {/* Badge Superior Direito: Expandir Foto */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/50 backdrop-blur-md text-white/90 hover:text-white transition-colors">
                    <Maximize2 className="h-3.5 w-3.5" />
                  </span>
                </div>

                {/* Identificação Inferior do Ambiente Ativo */}
                <div className="absolute bottom-3.5 left-4 sm:bottom-4 sm:left-5 text-white/95 max-w-[80%]">
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-[#ECC87E] uppercase block">
                    {mainPhoto.number} • {mainPhoto.subtitle}
                  </span>
                  <span className="font-serif text-base sm:text-lg lg:text-xl font-normal text-white mt-0.5 block leading-snug">
                    {mainPhoto.title}
                  </span>
                </div>

                {/* Botões de Navegação Flutuantes Anterior / Próximo */}
                <div className="absolute bottom-3.5 right-3.5 sm:bottom-4 sm:right-4 flex items-center gap-1.5 z-10">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Ambiente anterior"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all active:scale-90"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Próximo ambiente"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#3B2920] shadow-md transition-all hover:scale-105 active:scale-90"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Mosaico Inferior de 4 Thumbnails Clicáveis dos Ambientes */}
              <div className="grid grid-cols-4 gap-2 sm:gap-2.5">
                {ROOM_PHOTOS.map((room, idx) => {
                  const isActive = activePhotoIndex === idx;
                  return (
                    <button
                      key={room.id}
                      type="button"
                      onClick={() => setActivePhotoIndex(idx)}
                      className={`group relative h-16 sm:h-18 lg:h-20 w-full overflow-hidden rounded-xl border transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "border-[#B89264] ring-2 ring-[#B89264]/50 scale-[1.02] shadow-sm"
                          : "border-[#E8DFD3] opacity-75 hover:opacity-100 hover:border-[#D5C4B0]"
                      }`}
                    >
                      <img
                        src={room.img}
                        alt={room.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                      <div
                        className={`absolute inset-0 transition-colors ${
                          isActive ? "bg-black/10" : "bg-black/30 group-hover:bg-black/10"
                        }`}
                      />
                      <span className="absolute bottom-1 left-1.5 font-mono text-[9px] font-semibold text-white/90 bg-black/60 px-1.5 py-0.5 rounded">
                        0{idx + 1}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Barra Inferior com Indicadores e Link de Detalhes */}
              <div className="mt-1 flex items-center justify-between text-xs text-[#6B6156]">
                <div className="flex items-center gap-1.5">
                  {ROOM_PHOTOS.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActivePhotoIndex(i)}
                      aria-label={`Ver foto ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        activePhotoIndex === i
                          ? "w-6 bg-[#966D38]"
                          : "w-2 bg-[#DCD3C7] hover:bg-[#966D38]/60"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedPhoto(mainPhoto)}
                  className="inline-flex items-center gap-1 font-semibold text-[#3B2920] hover:text-[#8C6239] transition-colors cursor-pointer"
                >
                  <span>Explorar detalhes deste ambiente</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Lightbox Arquitetônico */}
      <Dialog open={!!selectedPhoto} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
        <DialogContent className="max-w-[92vw] sm:max-w-[720px] p-0 overflow-hidden rounded-[24px] border border-[#E8DFD3] bg-[#FAF7F2] shadow-2xl">
          {selectedPhoto && (
            <div>
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <img
                  src={selectedPhoto.img}
                  alt={selectedPhoto.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-lg bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white">
                    {selectedPhoto.number}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <DialogTitle className="font-serif text-2xl sm:text-3xl text-[#1E1B18] font-normal leading-snug">
                  {selectedPhoto.title}
                </DialogTitle>
                <DialogDescription className="mt-2 text-xs sm:text-sm text-[#5C554C] leading-relaxed">
                  {selectedPhoto.desc}
                </DialogDescription>

                <div className="mt-4 pt-3.5 border-t border-[#EAE2D7] flex flex-wrap gap-2">
                  {selectedPhoto.features.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#F2EDE5] px-3 py-1.5 text-xs font-medium text-[#483323]"
                    >
                      <Check className="h-3 w-3 text-[#966D38]" />
                      {f}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      const t = selectedPhoto.title;
                      setSelectedPhoto(null);
                      onOpenAppointment(`Visita ao ${t}`);
                    }}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#3B2920] hover:bg-[#281B14] px-6 py-3 text-xs sm:text-sm font-medium text-white shadow-2xs transition-all active:scale-95 cursor-pointer"
                  >
                    <span>Agendar visita presencial</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPhoto(null)}
                    className="rounded-xl border border-[#DCD3C7] bg-white px-5 py-3 text-xs sm:text-sm font-medium text-[#4A3D31] hover:bg-[#EFE8DE] transition-colors cursor-pointer"
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
