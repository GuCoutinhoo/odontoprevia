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
        {/* =========================================================================
            LAYOUT MOBILE E TABLET (lg:hidden):
            Em vez de rolar uma longa lista de textos e fotos soltas,
            oferece um visualizador galeria compacto com seletor de miniaturas lado a lado.
           ========================================================================= */}
        <div className="lg:hidden">
          <div className="flex items-center gap-2">
            <span className="h-px w-5 bg-[#966D38]" />
            <span className="text-[11px] font-semibold tracking-[0.24em] text-[#966D38] uppercase">
              Arquitetura & Conforto
            </span>
          </div>

          <h2 className="mt-1.5 font-serif text-[26px] sm:text-3xl font-normal leading-tight text-[#1E1B18]">
            Um espaço feito para acolher.
          </h2>

          <p className="mt-1.5 text-xs sm:text-sm text-[#554D43] leading-relaxed">
            Ambientes privativos com aromaterapia suave, isolamento acústico e equipamentos 3D.
          </p>

          {/* Galeria Interativa Mobile */}
          <div className="mt-4 rounded-2xl border border-[#E8DFD3] bg-white p-3.5 shadow-sm">
            <div
              onClick={() => setSelectedPhoto(mainPhoto)}
              className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#EBE3D7] cursor-pointer"
            >
              <img
                src={mainPhoto.img}
                alt={mainPhoto.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute top-2.5 right-2.5 z-10">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md">
                  <Maximize2 className="h-3.5 w-3.5" />
                </span>
              </div>

              <div className="absolute bottom-2.5 left-3 right-16 text-white">
                <span className="text-[9.5px] font-semibold text-[#ECC87E] uppercase tracking-wider block">
                  {mainPhoto.number}
                </span>
                <span className="font-serif text-[15px] font-medium leading-snug line-clamp-1 block">
                  {mainPhoto.title}
                </span>
              </div>

              {/* Botões Prev/Next */}
              <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 z-10">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-1 rounded-full bg-white/20 text-white"
                  aria-label="Ambiente anterior"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-1 rounded-full bg-white/20 text-white"
                  aria-label="Próximo ambiente"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Seletor de Miniaturas Lado a Lado (4 Colunas) */}
            <div className="mt-2.5 grid grid-cols-4 gap-1.5">
              {ROOM_PHOTOS.map((r, i) => {
                const isActive = activePhotoIndex === i;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setActivePhotoIndex(i)}
                    className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                      isActive ? "border-[#8C6239] shadow-xs" : "border-transparent opacity-65"
                    }`}
                  >
                    <img src={r.img} alt={r.title} className="h-full w-full object-cover" />
                  </button>
                );
              })}
            </div>

            {/* Destaques do Ambiente Ativo */}
            <div className="mt-3 pt-2.5 border-t border-[#F0EAE0] flex flex-wrap gap-1.5">
              {mainPhoto.features.map((f) => (
                <span
                  key={f}
                  className="rounded-md bg-[#FAF5EF] px-2 py-1 text-[10.5px] font-medium text-[#483323] border border-[#EAE0D3]"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================================
            LAYOUT DESKTOP (hidden lg:grid):
            Exatamente preservado da versão restaurada
           ========================================================================= */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Coluna de Texto (Esquerda) */}
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

            {/* 3 Diferenciais */}
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

          {/* Coluna da Galeria (Direita) */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-150 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-3">
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

                <div className="absolute top-3.5 right-3.5 z-10">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/50 backdrop-blur-md text-white/90 hover:text-white transition-colors">
                    <Maximize2 className="h-3.5 w-3.5" />
                  </span>
                </div>

                <div className="absolute bottom-3.5 left-4 sm:bottom-4 sm:left-5 text-white/95 max-w-[80%]">
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-[#ECC87E] uppercase block">
                    {mainPhoto.number} • {mainPhoto.subtitle}
                  </span>
                  <span className="font-serif text-base sm:text-lg lg:text-xl font-normal text-white mt-0.5 block leading-snug">
                    {mainPhoto.title}
                  </span>
                </div>

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
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all active:scale-90"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Informações Complementares do Ambiente Ativo */}
              <div className="rounded-2xl border border-[#E8DFD3] bg-white p-4.5 sm:p-5 shadow-[0_4px_20px_rgba(72,51,35,0.03)]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F2ECE3] pb-3">
                  <div>
                    <h3 className="font-serif text-lg sm:text-[19px] font-normal text-[#1E1B18]">
                      {mainPhoto.title}
                    </h3>
                    <p className="text-xs text-[#6E6458] mt-0.5">{mainPhoto.subtitle}</p>
                  </div>

                  <span className="font-mono text-xs font-semibold tabular-nums text-[#8C6239] bg-[#FAF5EF] px-3 py-1 rounded-full border border-[#E8DFD3] self-start sm:self-auto">
                    {mainPhoto.number}
                  </span>
                </div>

                <p className="mt-3 text-xs sm:text-[13px] text-[#5C554C] leading-relaxed">
                  {mainPhoto.desc}
                </p>

                <div className="mt-3.5 pt-3 border-t border-[#F2ECE3] grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {mainPhoto.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-[#483A2E]">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#F6EFE6] text-[#8C6239]">
                        <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                      </span>
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4 Miniaturas Clicáveis */}
              <div className="grid grid-cols-4 gap-2 sm:gap-2.5">
                {ROOM_PHOTOS.map((photo, index) => {
                  const isActive = activePhotoIndex === index;
                  return (
                    <button
                      key={photo.id}
                      type="button"
                      onClick={() => setActivePhotoIndex(index)}
                      className={`group relative aspect-[16/10] overflow-hidden rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "border-[#8C6239] shadow-sm ring-2 ring-[#8C6239]/20"
                          : "border-[#E2D8CC] opacity-65 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={photo.img}
                        alt={photo.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors" />
                      <span className="absolute bottom-1 right-1 rounded-xs bg-black/60 px-1 text-[8px] font-mono font-medium text-white">
                        0{index + 1}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Foto em Alta Definição */}
      <Dialog open={!!selectedPhoto} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-[780px] p-0 overflow-hidden rounded-[24px] sm:rounded-[28px] border border-[#E8DFD3] bg-[#FAF8F5] shadow-2xl">
          {selectedPhoto && (
            <div>
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/90">
                <img
                  src={selectedPhoto.img}
                  alt={selectedPhoto.title}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="p-6 sm:p-7 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#966D38] uppercase tracking-widest">
                    {selectedPhoto.number}
                  </span>
                  <span className="text-xs text-[#7A7065]">{selectedPhoto.subtitle}</span>
                </div>

                <DialogTitle className="font-serif text-2xl font-normal text-[#1E1B18]">
                  {selectedPhoto.title}
                </DialogTitle>

                <DialogDescription className="text-xs sm:text-sm text-[#5C554C] leading-relaxed">
                  {selectedPhoto.desc}
                </DialogDescription>

                <div className="pt-2 flex flex-wrap gap-2">
                  {selectedPhoto.features.map((feat) => (
                    <span
                      key={feat}
                      className="rounded-lg bg-white border border-[#E2D8CC] px-3 py-1 text-xs text-[#483A2E] font-medium"
                    >
                      {feat}
                    </span>
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
