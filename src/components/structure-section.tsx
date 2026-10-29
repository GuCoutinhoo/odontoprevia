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

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActivePhotoIndex((prev) => (prev === 0 ? ROOM_PHOTOS.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActivePhotoIndex((prev) => (prev + 1) % ROOM_PHOTOS.length);
  };

  return (
    <section
      id="estrutura"
      className="relative py-12 sm:py-18 lg:py-22 bg-[#FAF7F2] transition-colors"
      aria-label="Nossa Estrutura e Ambientes Acolhedores"
    >
      <div className="site-container">
        {/* Grade Rebalanceada: Proporções entre Texto e Galeria */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Coluna de Texto (Esquerda) */}
          <div
            className={`lg:col-span-5 flex flex-col justify-center transition-all duration-700 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="h-px w-5 sm:w-6 bg-[#966D38]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#966D38] uppercase">
                Arquitetura & Conforto
              </span>
            </div>

            <h2 className="mt-2 font-serif text-[26px] xs:text-[30px] sm:text-4xl lg:text-[42px] leading-[1.14] font-normal tracking-tight text-[#1E1B18]">
              Um espaço feito para você se sentir bem.
            </h2>

            <p className="mt-2 text-[13.5px] sm:text-base text-[#554D43] leading-relaxed max-w-[480px]">
              Cada ambiente foi planejado para afastar a sensação impessoal de consultório e acolher
              você com tranquilidade, conforto sensorial e biossegurança médica absoluta.
            </p>

            {/* -------------------- DIFERENCIAIS MOBILE: STRIP COMPACTO 3 ITENS (sm:hidden) -------------------- */}
            <div className="sm:hidden mt-3.5 grid grid-cols-3 gap-2 p-2.5 rounded-2xl bg-white border border-[#E8DFD3] shadow-2xs">
              <div className="flex flex-col items-center text-center p-1">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#F2EDE5] text-[#7A5328] mb-1">
                  <Armchair className="h-3.5 w-3.5" />
                </div>
                <span className="text-[11px] font-semibold text-[#1E1B18] leading-tight">
                  Privativo
                </span>
                <span className="text-[9px] text-[#7A6E63] mt-0.5">Sem esperas</span>
              </div>
              <div className="flex flex-col items-center text-center p-1 border-x border-[#EAE2D5]">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#F2EDE5] text-[#7A5328] mb-1">
                  <Sparkles className="h-3.5 w-3.5" />
                </div>
                <span className="text-[11px] font-semibold text-[#1E1B18] leading-tight">
                  Estúdio 3D
                </span>
                <span className="text-[9px] text-[#7A6E63] mt-0.5">Previsibilidade</span>
              </div>
              <div className="flex flex-col items-center text-center p-1">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#F2EDE5] text-[#7A5328] mb-1">
                  <Flower2 className="h-3.5 w-3.5" />
                </div>
                <span className="text-[11px] font-semibold text-[#1E1B18] leading-tight">
                  Sensorial
                </span>
                <span className="text-[9px] text-[#7A6E63] mt-0.5">Aromaterapia</span>
              </div>
            </div>

            {/* -------------------- DIFERENCIAIS DESKTOP / TABLET (hidden sm:block) -------------------- */}
            <div className="hidden sm:block mt-6 space-y-3.5">
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
            <div className="mt-4 sm:mt-7">
              <button
                type="button"
                onClick={() => onOpenAppointment("Visita à Estrutura")}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#3B2920] hover:bg-[#281B14] active:scale-95 px-5 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-sm font-medium text-white shadow-sm transition cursor-pointer"
              >
                <span>Conheça nossa estrutura</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Coluna da Galeria (Direita) */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-150 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-2.5 sm:gap-3">
              {/* Imagem Principal da Galeria */}
              <div
                onClick={() => setSelectedPhoto(mainPhoto)}
                className="group relative h-[230px] xs:h-[260px] sm:h-[310px] lg:h-[330px] w-full overflow-hidden rounded-2xl sm:rounded-[22px] border border-[#E8DFD3] bg-[#EFE9DF] shadow-[0_4px_24px_rgba(72,51,35,0.06)] cursor-pointer"
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
                <div className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 z-10">
                  <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-black/50 backdrop-blur-md text-white/90 hover:text-white transition-colors">
                    <Maximize2 className="h-3.5 w-3.5" />
                  </span>
                </div>

                {/* Identificação Inferior do Ambiente Ativo */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-5 text-white/95 max-w-[78%]">
                  <span className="text-[9.5px] sm:text-[11px] font-semibold tracking-widest text-[#ECC87E] uppercase block">
                    {mainPhoto.number} • {mainPhoto.subtitle}
                  </span>
                  <span className="font-serif text-sm sm:text-lg lg:text-xl font-normal text-white mt-0.5 block leading-snug">
                    {mainPhoto.title}
                  </span>
                </div>

                {/* Botões de Navegação Flutuantes Anterior / Próximo */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center gap-1.5 z-10">
                  <button
                    type="button"
                    onClick={(e) => handlePrev(e)}
                    aria-label="Ambiente anterior"
                    className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all active:scale-90"
                  >
                    <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleNext(e)}
                    aria-label="Próximo ambiente"
                    className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white text-[#3B2920] shadow-md transition-all hover:scale-105 active:scale-90"
                  >
                    <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </button>
                </div>
              </div>

              {/* Mosaico de 4 Thumbnails Clicáveis dos Ambientes */}
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2.5">
                {ROOM_PHOTOS.map((room, idx) => {
                  const isActive = activePhotoIndex === idx;
                  return (
                    <button
                      key={room.id}
                      type="button"
                      onClick={() => setActivePhotoIndex(idx)}
                      className={`group relative h-14 xs:h-16 sm:h-18 lg:h-20 w-full overflow-hidden rounded-xl border transition-all duration-300 cursor-pointer ${
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
                      <span className="absolute bottom-1 left-1 font-mono text-[8px] sm:text-[9px] font-semibold text-white/90 bg-black/60 px-1 py-0.2 rounded">
                        0{idx + 1}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Barra Inferior com Indicadores e Link de Detalhes */}
              <div className="mt-0.5 flex items-center justify-between text-xs text-[#6B6156]">
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
                  className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-medium text-[#8C6239] hover:text-[#5E3F1F] transition-colors"
                >
                  <span>Ver em alta resolução</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Dialog de Visualização em Alta Resolução */}
      <Dialog open={!!selectedPhoto} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
        <DialogContent className="max-w-3xl overflow-hidden rounded-3xl bg-[#FAF8F5] p-0 border border-[#E8DFD3]">
          {selectedPhoto && (
            <div>
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <img
                  src={selectedPhoto.img}
                  alt={selectedPhoto.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-5 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold text-[#8C6239] uppercase tracking-wider">
                      {selectedPhoto.number} • {selectedPhoto.subtitle}
                    </span>
                    <DialogTitle className="font-serif text-xl sm:text-2xl font-normal text-[#1E1B18] mt-0.5">
                      {selectedPhoto.title}
                    </DialogTitle>
                  </div>
                </div>

                <DialogDescription className="mt-2 text-xs sm:text-sm text-[#5C554C] leading-relaxed">
                  {selectedPhoto.desc}
                </DialogDescription>

                <div className="mt-4 pt-4 border-t border-[#E8DFD3] grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-[#3D3328]">
                  {selectedPhoto.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#F6EFE6] text-[#8C6239]">
                        <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
