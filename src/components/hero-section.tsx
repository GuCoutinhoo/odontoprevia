import { ArrowUpRight, ArrowRight, ShieldCheck, Sparkles, Star, Clock } from "lucide-react";
import heroImg from "@/assets/hero.png";

interface HeroSectionProps {
  onOpenAppointment: (treatmentName?: string) => void;
  isVisible?: boolean;
}

export function HeroSection({ onOpenAppointment, isVisible = true }: HeroSectionProps) {
  return (
    <section
      id="início"
      className="relative min-h-[640px] sm:min-h-[700px] lg:min-h-[88vh] w-full flex items-center overflow-hidden bg-[#FAF8F5] pt-24 pb-14 sm:pt-28 sm:pb-16 lg:py-24"
      aria-label="Início - Lumière Odontologia de Alto Padrão"
    >
      {/* Imagem Cinematográfica em Tela Cheia - Doutora Clara, Nítida e em Destaque */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Dra. da Clínica Lumière Odontologia"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="h-full w-full object-cover object-[72%_center] sm:object-[78%_center] lg:object-[86%_center] scale-100 transition-transform duration-1000 ease-out"
        />

        {/* Gradiente Scrim que protege o texto à esquerda mantendo a imagem da doutora 100% nítida e aparente */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/92 via-35% md:via-42% to-transparent to-60%" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/50 to-transparent sm:hidden" />
      </div>

      <div className="relative z-10 mx-auto w-[min(calc(100%-48px),1440px)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Conteúdo Textual e Comercial (Esquerda) */}
          <div
            className={`lg:col-span-8 xl:col-span-7 flex flex-col justify-center transition-all duration-700 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {/* Eyebrow Editorial com Traço Dourado */}
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[#9E732B]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-[#966D38] uppercase">
                Odontologia Boutique • São Paulo
              </span>
              <span className="text-[11px] font-medium text-[#7D7368] hidden sm:inline">
                • Responsabilidade Técnica CRO-SP
              </span>
            </div>

            {/* Título Principal Editorial */}
            <h1 className="mt-4 font-serif text-3xl sm:text-5xl lg:text-[54px] xl:text-[58px] leading-[1.08] font-normal tracking-tight text-[#1E1B18]">
              A arte da odontologia que{" "}
              <span className="font-serif italic font-normal text-[#966D38]">
                transforma sua confiança.
              </span>
            </h1>

            {/* Descrição Exclusiva */}
            <p className="mt-4 text-sm sm:text-base lg:text-[17px] text-[#524B43] leading-relaxed max-w-[580px]">
              Onde o rigor científico encontra a sensibilidade estética. Planejamento 100% digital
              em 3D, procedimentos sem dor e acolhimento singular para desenhar o sorriso que
              combina perfeitamente com você.
            </p>

            {/* Prova Social Rápida com Google Reviews */}
            <div className="mt-4.5 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#483A2E]">
              <div className="flex items-center gap-1 text-[#C5A059]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-[#1E1B18]">4.9 no Google</span>
              <span className="text-[#968E82]">•</span>
              <span className="text-[#6B6359]">+1.200 sorrisos cuidados com excelência</span>
            </div>

            {/* Botões de Ação Principais Sofisticados */}
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => onOpenAppointment("Primeira Consulta de Avaliação")}
                className="group shimmer-button inline-flex items-center justify-center gap-2 rounded-xl bg-[#483323] hover:bg-[#342417] px-7 py-3.5 text-xs sm:text-sm font-medium text-white shadow-sm transition-all duration-300 hover:shadow-md active:scale-95 cursor-pointer"
              >
                <span>Agendar avaliação exclusiva</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#tratamentos"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#D5C7B7] bg-white/80 hover:bg-white px-5 py-3.5 text-xs sm:text-sm font-medium text-[#483323] transition-all cursor-pointer shadow-2xs"
              >
                <span>Conhecer tratamentos</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* 3 Pilares Clínicos de Excelência */}
            <div className="mt-8 pt-6 border-t border-[#EAE3D9]/90 grid grid-cols-3 gap-3 sm:gap-6 max-w-[620px]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-2xs border border-[#EAE3D9] text-[#7A5328]">
                  <Sparkles className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <div className="leading-tight">
                  <span className="block text-xs font-semibold text-[#1E1B18]">Scanner 3D</span>
                  <span className="text-[11px] text-[#7A7065] hidden sm:block">Sem moldagem</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-2xs border border-[#EAE3D9] text-[#7A5328]">
                  <ShieldCheck className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <div className="leading-tight">
                  <span className="block text-xs font-semibold text-[#1E1B18]">Sem dor</span>
                  <span className="text-[11px] text-[#7A7065] hidden sm:block">Sedação suave</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-2xs border border-[#EAE3D9] text-[#7A5328]">
                  <Clock className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <div className="leading-tight">
                  <span className="block text-xs font-semibold text-[#1E1B18]">Pontualidade</span>
                  <span className="text-[11px] text-[#7A7065] hidden sm:block">
                    Respeito ao tempo
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito Livre para Deixar a Imagem da Doutora Totalmente Visível e Nítida */}
          <div className="hidden lg:flex lg:col-span-4 xl:col-span-5 justify-end" />
        </div>
      </div>
    </section>
  );
}
