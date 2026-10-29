import { useState } from "react";
import { ArrowUpRight, ArrowRight, Armchair, Sparkles, Flower2, Coffee, Check } from "lucide-react";
import aboutMain from "@/assets/about-main.jpg";
import roomImg from "@/assets/room.jpg";
import techScanner from "@/assets/tech-scanner.jpg";
import consultImg from "@/assets/www.jpg";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface StructureSectionProps {
  onOpenAppointment: (treatmentName?: string) => void;
  isVisible?: boolean;
}

interface RoomPhoto {
  id: string;
  number: string;
  title: string;
  desc: string;
  img: string;
  features: string[];
}

const ROOM_PHOTOS: RoomPhoto[] = [
  {
    id: "recepcao",
    number: "01 / 04",
    title: "Recepção & Lounge de Boas-Vindas",
    desc: "Bancada em mármore italiano com retroiluminação suave, painéis em madeira nobre e poltronas aconchegantes para receber você sem esperas.",
    img: aboutMain,
    features: ["Cafeteria com grãos especiais", "Wi-Fi de alta velocidade", "Atendimento pontual"],
  },
  {
    id: "consultorio",
    number: "02 / 04",
    title: "Suíte Master Clínica & Jardim Privativo",
    desc: "Cadeira odontológica ergonômica com sistema anti-pressão, iluminação indireta calmante e ampla vista para o jardim de inverno privativo.",
    img: roomImg,
    features: ["Fones com cancelamento de ruído", "Aromaterapia suave", "Privacidade total"],
  },
  {
    id: "sala-avaliacao",
    number: "03 / 04",
    title: "Ateliê de Planejamento Digital 3D",
    desc: "Estúdio equipado com monitores de alta precisão cromática onde paciente e especialista desenham juntos cada linha do novo sorriso.",
    img: consultImg,
    features: ["Visualização em tempo real", "Softwares DSD originais", "Transparência total"],
  },
  {
    id: "sala-scanner",
    number: "04 / 04",
    title: "Central de Imagem Digital & Biossegurança",
    desc: "Ambiente médico de tecnologia diagnóstica com esterilização de grau hospitalar rastreada e scanner intraoral 3D.",
    img: techScanner,
    features: ["Sem massas desconfortáveis", "Esterilização classe B", "Filtros HEPA médicos"],
  },
];

export function StructureSection({ onOpenAppointment, isVisible = true }: StructureSectionProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<RoomPhoto | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const mainPhoto = ROOM_PHOTOS[activePhotoIndex] ?? ROOM_PHOTOS[0]!;

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev + 1) % ROOM_PHOTOS.length);
  };

  return (
    <section
      id="estrutura"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#FAF8F5]"
      aria-label="Nossa Estrutura e Ambientes Acolhedores"
    >
      <div className="mx-auto w-[min(calc(100%-48px),1440px)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Coluna de Texto (Esquerda) */}
          <div
            className={`lg:col-span-5 flex flex-col justify-center transition-all duration-700 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span className="h-px w-5 bg-[#9E732B]" />
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-[#966D38] uppercase">
                Arquitetura & Conforto
              </p>
            </div>

            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] font-normal tracking-tight text-[#1E1B18]">
              Um espaço feito para você se sentir bem.
            </h2>

            <p className="mt-3 text-sm sm:text-base text-[#5C554C] leading-relaxed max-w-[480px]">
              Cada ambiente foi projetado para afastar a sensação fria de consultório e acolher você
              com tranquilidade, conforto sensorial e biossegurança médica absoluta.
            </p>

            {/* 3 Diferenciais */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F2EDE5] text-[#7A5328] shadow-2xs">
                  <Armchair className="h-4.5 w-4.5" strokeWidth={1.75} />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#2E241B]">
                  Ambientes privativos, silenciosos e acolhedores
                </span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F2EDE5] text-[#7A5328] shadow-2xs">
                  <Sparkles className="h-4.5 w-4.5" strokeWidth={1.75} />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#2E241B]">
                  Salas com tecnologia digital de precisão 3D
                </span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F2EDE5] text-[#7A5328] shadow-2xs">
                  <Flower2 className="h-4.5 w-4.5" strokeWidth={1.75} />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#2E241B]">
                  Conforto acústico, iluminação calma e aromaterapia
                </span>
              </div>
            </div>

            {/* Botão de Ação */}
            <div className="mt-8">
              <button
                type="button"
                onClick={() => onOpenAppointment("Visita à Estrutura")}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#483323] hover:bg-[#342417] px-6 py-3.5 text-xs sm:text-sm font-medium text-white shadow-sm transition-all duration-300 hover:shadow-md active:scale-95 cursor-pointer"
              >
                <span>Conheça nossa estrutura</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Mosaico de Fotografias Arquitetônicas (Direita) */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-150 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-4.5">
              {/* Foto Principal Superior com Indicador de Slide */}
              <div
                onClick={() => setSelectedPhoto(mainPhoto)}
                className="col-span-2 group relative aspect-[16/9.5] overflow-hidden rounded-2xl border border-[#E8DFD3] bg-[#EFE9DF] shadow-[0_6px_24px_rgba(72,51,35,0.06)] cursor-pointer"
              >
                <img
                  src={mainPhoto.img}
                  alt={mainPhoto.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Número do Slide e Título */}
                <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 text-white/95">
                  <span className="text-[11px] font-semibold tracking-widest text-[#ECC87E] uppercase block">
                    {mainPhoto.number}
                  </span>
                  <span className="font-serif text-lg sm:text-xl font-normal text-white mt-0.5 block">
                    {mainPhoto.title}
                  </span>
                </div>

                {/* Botão Circular com Seta para Avançar */}
                <button
                  type="button"
                  onClick={handleNextPhoto}
                  aria-label="Avançar para o próximo ambiente"
                  className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white text-[#483323] shadow-md transition-all duration-300 hover:scale-108 hover:bg-[#FAF8F5]"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* 2 Fotos Secundárias Inferiores */}
              {ROOM_PHOTOS.slice(1, 3).map((room, idx) => (
                <div
                  key={room.id}
                  onClick={() => {
                    setActivePhotoIndex(idx + 1);
                    setSelectedPhoto(room);
                  }}
                  className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-[#E8DFD3] bg-[#EFE9DF] shadow-[0_4px_16px_rgba(72,51,35,0.04)] cursor-pointer"
                >
                  <img
                    src={room.img}
                    alt={room.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[10px] font-medium tracking-wider bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-md">
                      {room.number}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Barra Inferior com Indicadores e Link Interativo */}
            <div className="mt-4 sm:mt-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {ROOM_PHOTOS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActivePhotoIndex(i)}
                    aria-label={`Ver foto ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
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
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#483323] hover:text-[#7A5328] transition-colors cursor-pointer"
              >
                <span>Explorar detalhes dos ambientes</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Lightbox Arquitetônico */}
      <Dialog open={!!selectedPhoto} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
        <DialogContent className="max-w-[92vw] sm:max-w-[760px] p-0 overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#E8DFD3] bg-[#FAF8F5] shadow-2xl">
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
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1E1B18] font-normal leading-snug">
                  {selectedPhoto.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#5C554C] leading-relaxed">
                  {selectedPhoto.desc}
                </p>

                <div className="mt-4 pt-3.5 border-t border-[#EAE2D7] flex flex-wrap gap-2">
                  {selectedPhoto.features.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#F2EDE5] px-3 py-1 text-xs font-medium text-[#483323]"
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
                    className="inline-flex items-center gap-2 rounded-xl bg-[#483323] hover:bg-[#342417] px-6 py-3 text-xs sm:text-sm font-medium text-white shadow-2xs transition-all active:scale-95 cursor-pointer"
                  >
                    <span>Agendar visita presencial</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPhoto(null)}
                    className="rounded-xl border border-[#DCD3C7] px-5 py-3 text-xs sm:text-sm font-medium text-[#4A3D31] hover:bg-[#EFE8DE] transition-colors cursor-pointer"
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
