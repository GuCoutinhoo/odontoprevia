import {} from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Star,
  Clock,
  Calendar,
  ScanLine,
} from "lucide-react";
import heroImg from "@/assets/hero.png";

interface HeroSectionProps {
  onOpenAppointment: (treatmentName?: string) => void;
  isVisible?: boolean;
}

export function HeroSection({ onOpenAppointment, isVisible = true }: HeroSectionProps) {
  return (
    <section
      id="início"
      className="relative min-h-[640px] sm:min-h-[700px] lg:min-h-[88vh] lg:max-h-[920px] w-full flex items-center overflow-hidden bg-[#FAF7F2] pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-34 lg:pb-16"
      aria-label="Início - Lumière Odontologia de Alto Padrão"
    >
      {/* Imagem Cinematográfica em Tela Cheia com Dentista 100% Nítida que se estende até o topo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroImg}
          alt="Dra. da Lumière Odontologia em recepção de alto padrão"
          width={1920}
          height={1080}
          fetchPriority="high"
          draggable={false}
          className="h-full w-full object-cover object-[70%_25%] sm:object-[70%_20%] lg:object-[68%_center] filter contrast-[1.04] saturate-[1.04] select-none"
        />

        {/* Gradiente Horizontal Rigorosamente Controlado:
            - 0% a 35%: Sólido suave para contraste absoluto dos textos na coluna esquerda.
            - 35% a 54%: Transição rápida e suave.
            - 54% a 100%: TOTALMENTE TRANSPARENTE (0% overlay) garantindo que a dentista e a clínica fiquem nítidas, vibrantes e com tons naturais. */}
        <div
          className="absolute inset-0 pointer-events-none hidden lg:block"
          style={{
            background:
              "linear-gradient(90deg, #FAF7F2 0%, #FAF7F2 35%, rgba(250, 247, 242, 0.88) 44%, rgba(250, 247, 242, 0) 54%, transparent 100%)",
          }}
        />

        {/* Gradiente Suave para Telas Menores (Tablet e Mobile) */}
        <div
          className="absolute inset-0 pointer-events-none lg:hidden"
          style={{
            background:
              "linear-gradient(180deg, #FAF7F2 0%, rgba(250, 247, 242, 0.94) 40%, rgba(250, 247, 242, 0.6) 70%, rgba(250, 247, 242, 0.15) 100%)",
          }}
        />

        {/* Micro-velo no topo para legibilidade perfeita dos links de navegação com header transparente */}
        <div
          className="absolute top-0 left-0 right-0 h-28 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(250, 247, 242, 0.5) 0%, rgba(250, 247, 242, 0.18) 50%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Conteúdo Textual e Comercial (Esquerda) com Tipografia Ampliada e Respiração Visual */}
          <div
            className={`lg:col-span-7 xl:col-span-6 flex flex-col justify-center transition-all duration-700 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {/* Eyebrow Editorial com Traço Dourado */}
            <div className="flex items-center gap-2.5">
              <span className="h-px w-7 bg-[#966D38]" />
              <span className="text-xs sm:text-[13px] font-semibold tracking-[0.24em] text-[#966D38] uppercase">
                Odontologia Boutique • São Paulo
              </span>
            </div>

            {/* Título Principal em Serif Expressivo com Quebra Harmônica */}
            <h1 className="mt-3.5 sm:mt-4 font-serif text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] leading-[1.14] font-normal tracking-tight text-[#1A1613] max-w-[620px]">
              A arte da odontologia que{" "}
              <span className="italic text-[#8C6239] block sm:inline">
                transforma sua confiança.
              </span>
            </h1>

            {/* Descrição Refinada com Fonte Legível e Confortável (16-18px) */}
            <p className="mt-3.5 sm:mt-4.5 text-base sm:text-[17px] lg:text-[18px] text-[#42392F] leading-[1.64] max-w-[560px] font-normal">
              Onde o rigor científico encontra a sensibilidade estética. Planejamento 100% digital
              em 3D, procedimentos sem dor e acolhimento singular para desenhar o seu sorriso ideal.
            </p>

            {/* Prova Social com Avaliações Google Mais Visíveis e Espaçadas */}
            <div className="mt-4.5 sm:mt-5 flex flex-wrap items-center gap-3 text-sm sm:text-[15px] text-[#332A20]">
              <div className="flex items-center gap-1 text-[#C5A059]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4.5 w-4.5 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-[#1A1613]">4.9 no Google</span>
              <span className="text-[#B8AEA2]">•</span>
              <span className="text-[#554C42] font-normal">
                Mais de 1.200 sorrisos transformados
              </span>
            </div>

            {/* CTA Principal de Agendamento Mais Minimalista, Elegante e Slim */}
            <div className="mt-5.5 sm:mt-6.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 max-w-[580px]">
              <button
                type="button"
                onClick={() => onOpenAppointment()}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#2C2018] hover:bg-[#1A130E] px-6.5 py-3.5 text-sm sm:text-[15px] font-medium tracking-wide text-white shadow-[0_4px_16px_rgba(44,32,24,0.14)] hover:shadow-[0_6px_22px_rgba(44,32,24,0.22)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <span>Agendar minha avaliação</span>
                <ArrowUpRight className="h-4 w-4 text-[#D8C4B0] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {/* Informação Concierge Sem Ícones Artificiais/AI */}
              <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#5C5044] font-medium tracking-wide px-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#966D38]/80 shrink-0" />
                <span>Questionário rápido em 4 etapas • Concierge exclusivo</span>
              </div>
            </div>

            {/* Links Rápidos Secundários Mais Polidos e Espaçados */}
            <div className="mt-5 sm:mt-5.5 flex flex-wrap items-center gap-5 text-sm sm:text-[14.5px] text-[#3D3328]">
              <a
                href="#tratamentos"
                className="group inline-flex items-center gap-1.5 font-medium hover:text-[#966D38] transition-colors underline-offset-4 hover:underline"
              >
                <span>Explorar especialidades</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#966D38] transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <span className="text-[#C8BCAC]">•</span>

              <a
                href="#tecnologia"
                className="group inline-flex items-center gap-1.5 font-medium hover:text-[#966D38] transition-colors underline-offset-4 hover:underline"
              >
                <span>Conhecer o Scanner 3D</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#966D38] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* 3 Pilares Clínicos Compactos, Leves e Altamente Legíveis */}
            <div className="mt-7 pt-6 border-t border-[#E8DEC2]/80 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4 max-w-[580px]">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F5EFE6] text-[#7A5328]">
                  <ScanLine className="h-4.5 w-4.5" strokeWidth={1.75} />
                </div>
                <div className="leading-tight">
                  <span className="block text-[14.5px] sm:text-[15px] font-semibold text-[#1A1613]">
                    Scanner 3D
                  </span>
                  <span className="text-xs sm:text-[12.5px] text-[#635A50] mt-0.5 block">
                    Sem moldagem desconfortável
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F5EFE6] text-[#7A5328]">
                  <ShieldCheck className="h-4.5 w-4.5" strokeWidth={1.75} />
                </div>
                <div className="leading-tight">
                  <span className="block text-[14.5px] sm:text-[15px] font-semibold text-[#1A1613]">
                    Sem dor
                  </span>
                  <span className="text-xs sm:text-[12.5px] text-[#635A50] mt-0.5 block">
                    Sedação suave e acolhedora
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F5EFE6] text-[#7A5328]">
                  <Clock className="h-4.5 w-4.5" strokeWidth={1.75} />
                </div>
                <div className="leading-tight">
                  <span className="block text-[14.5px] sm:text-[15px] font-semibold text-[#1A1613]">
                    Pontualidade
                  </span>
                  <span className="text-xs sm:text-[12.5px] text-[#635A50] mt-0.5 block">
                    Respeito rigoroso ao tempo
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Destaque Flutuante no Canto Inferior Direito: Sofisticado, Legível e Discreto */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 justify-end items-end self-end pb-2">
            <div className="rounded-2xl bg-white/94 backdrop-blur-md px-5 py-3.5 shadow-[0_8px_24px_rgba(40,27,20,0.06)] border border-[#E2D6C6] max-w-[270px]">
              <div className="flex items-center gap-2 text-[#8C6239] text-xs font-semibold uppercase tracking-wider">
                <Calendar className="h-3.5 w-3.5" />
                <span>Atendimento Exclusivo</span>
              </div>
              <p className="mt-1 text-[13px] sm:text-[13.5px] font-medium text-[#261E17] leading-snug">
                Horário privativo • Valet cortesia na recepção
              </p>
              <p className="mt-0.5 text-[11.5px] text-[#6E6458]">
                Privacidade e pontualidade absolutas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
