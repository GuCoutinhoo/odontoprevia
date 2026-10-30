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
      className="relative min-h-[820px] xs:min-h-[850px] sm:min-h-[880px] lg:min-h-[88vh] lg:max-h-[920px] w-full flex items-end lg:items-center overflow-hidden bg-[#34231D] lg:bg-[#F5F0E8] pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-34 lg:pb-16"
      aria-label="Início - Lumière Odontologia de Alto Padrão"
    >
      {/* Imagem Cinematográfica em Tela Cheia com Dentista e Recepção Nítidas */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroImg}
          alt="Dra. da Lumière Odontologia em recepção de alto padrão"
          width={1920}
          height={1080}
          fetchPriority="high"
          draggable={false}
          className="h-[108%] lg:h-full w-full object-cover object-[72%_top] sm:object-[70%_14%] lg:object-[68%_center] -translate-y-6 lg:translate-y-0 filter contrast-[1.03] select-none"
        />

        {/* Gradiente Horizontal Rigorosamente Controlado para Desktop:
            - 0% a 34%: Sólido Warm Cream (#F5F0E8) para contraste suave e legibilidade perfeita na coluna esquerda.
            - 34% a 54%: Transição fluida e natural.
            - 54% a 100%: TOTALMENTE TRANSPARENTE garantindo nitidez e iluminação natural da dentista e do ambiente. */}
        <div
          className="absolute inset-0 pointer-events-none hidden lg:block"
          style={{
            background:
              "linear-gradient(90deg, #F5F0E8 0%, #F5F0E8 34%, rgba(245, 240, 232, 0.90) 44%, rgba(245, 240, 232, 0) 55%, transparent 100%)",
          }}
        />

        {/* Gradiente Cinematográfico Espresso para Mobile e Tablet:
            - Topo (0% a 32%): Aberto e naturalmente iluminado, mantendo o rosto e sorriso da doutora totalmente desobstruídos.
            - Meio à base (40% a 88%): Gradiente suave em Deep Espresso (#34231D) proporcionando contraste perfeito para os textos.
            - Base (88% a 100%): Deep Espresso sólido, conectando harmoniosamente à seção seguinte. */}
        <div
          className="absolute inset-0 pointer-events-none lg:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(245, 240, 232, 0.30) 0%, rgba(245, 240, 232, 0) 18%, rgba(52, 35, 29, 0) 30%, rgba(52, 35, 29, 0.45) 44%, rgba(52, 35, 29, 0.85) 60%, rgba(52, 35, 29, 0.98) 78%, #34231D 90%, #34231D 100%)",
          }}
        />

        {/* Conexão Suave na Base Mobile para o Início da Próxima Seção */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-[#FAF7F2] pointer-events-none lg:hidden" />
      </div>

      <div className="relative z-10 site-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">
          {/* ========================================================================= */}
          {/* VERSÃO MOBILE E TABLET (lg:hidden): Direção Cinematográfica Unificada      */}
          {/* Rosto da doutora proeminente acima, texto refinado sobreposto abaixo       */}
          {/* ========================================================================= */}
          <div
            className={`lg:hidden flex flex-col justify-end transition-all duration-700 ease-out pt-40 pb-7 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {/* Eyebrow Label com Traço Taupe Refinado diretamente sobre a foto */}
            <div className="flex items-center gap-1.5 xs:gap-2">
              <span className="h-px w-4 xs:w-6 bg-[#B99A80]" />
              <span className="text-[9.5px] xs:text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] xs:tracking-[0.24em] text-[#DDC8B2] uppercase whitespace-nowrap">
                Odontologia Boutique • São Paulo
              </span>
            </div>

            {/* Título Principal com Tipografia Editorial e Palavras Enfatizadas em Tom Champagne */}
            <h1 className="mt-2 xs:mt-2.5 font-serif text-[26px] xs:text-[31px] sm:text-[38px] leading-[1.12] font-normal tracking-tight text-[#F5F0E8] max-w-[560px]">
              A arte da odontologia que{" "}
              <span className="italic text-[#DDC8B2] block font-serif">
                transforma sua confiança.
              </span>
            </h1>

            {/* Descrição Compacta e Integrada ao Hero */}
            <p className="mt-2 xs:mt-2.5 text-[12.5px] xs:text-[13px] sm:text-[15px] text-[#E5DCD0] leading-[1.55] font-normal max-w-[500px]">
              Onde o rigor científico encontra a sensibilidade estética. Planejamento 100% digital
              em 3D, procedimentos sem dor e acolhimento singular para desenhar o seu sorriso ideal.
            </p>

            {/* Avaliação e Prova Social Google */}
            <div className="mt-2.5 xs:mt-3 flex items-center gap-1.5 xs:gap-2 text-[11px] xs:text-xs text-[#DDC8B2] flex-wrap">
              <div className="flex items-center gap-0.5 text-[#DDC8B2]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-[#F5F0E8]">4.9 no Google</span>
              <span className="text-[#B99A80]">•</span>
              <span className="text-[#DDC8B2]/90 font-normal">+1.200 sorrisos transformados</span>
            </div>

            {/* CTA Principal Amplo, Refinado e Elegante (Muted Champagne com Texto Deep Espresso) */}
            <div className="mt-3.5 xs:mt-4 flex flex-col gap-1.5 xs:gap-2 w-full max-w-[480px]">
              <button
                type="button"
                onClick={() => onOpenAppointment("Avaliação Inicial")}
                className="group w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-[#D5B89C] hover:bg-[#CBB093] text-[#34231D] px-6 xs:px-7 py-3 xs:py-3.5 text-[13.5px] xs:text-[14.5px] font-medium tracking-wide shadow-sm hover:shadow transition-all duration-300 active:scale-[0.98] cursor-pointer"
              >
                <span>Agendar minha avaliação</span>
                <ArrowUpRight className="h-4 w-4 text-[#34231D] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {/* Microcopy Sutil e Alinhado abaixo do Botão */}
              <div className="flex items-center justify-center gap-1.5 xs:gap-2 text-[10.5px] xs:text-[11px] text-[#DDC8B2]/80 font-normal tracking-wide pt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B99A80] shrink-0" />
                <span>Questionário rápido em 4 etapas • Concierge exclusivo</span>
              </div>
            </div>

            {/* Links Secundários Rápidos */}
            <div className="mt-2.5 xs:mt-3 flex items-center justify-center gap-3 xs:gap-4 text-[11.5px] xs:text-[12px] text-[#E5DCD0] flex-wrap">
              <a
                href="#tratamentos"
                className="group inline-flex items-center gap-1.5 hover:text-[#DDC8B2] transition-colors"
              >
                <span>Explorar especialidades</span>
                <ArrowRight className="h-3 w-3 text-[#B99A80] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <span className="text-[#8F7C6F] hidden xs:inline">•</span>
              <a
                href="#tecnologia"
                className="group inline-flex items-center gap-1.5 hover:text-[#DDC8B2] transition-colors"
              >
                <span>Conhecer o Scanner 3D</span>
                <ArrowRight className="h-3 w-3 text-[#B99A80] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* 3 Pilares Clínicos em 3 Colunas Compactas */}
            <div className="mt-4 pt-3.5 border-t border-[#B99A80]/25 grid grid-cols-3 gap-2 w-full max-w-[480px]">
              <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#DDC8B2]/15 text-[#DDC8B2]">
                  <ScanLine className="h-3.5 w-3.5" strokeWidth={1.8} />
                </div>
                <span className="mt-1 text-[11px] font-medium text-[#F5F0E8] truncate w-full">
                  Scanner 3D
                </span>
                <span className="text-[9.5px] text-[#DDC8B2]/80 truncate w-full">Sem moldes</span>
              </div>

              <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#DDC8B2]/15 text-[#DDC8B2]">
                  <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.8} />
                </div>
                <span className="mt-1 text-[11px] font-medium text-[#F5F0E8] truncate w-full">
                  Sem dor
                </span>
                <span className="text-[9.5px] text-[#DDC8B2]/80 truncate w-full">
                  Sedação suave
                </span>
              </div>

              <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#DDC8B2]/15 text-[#DDC8B2]">
                  <Clock className="h-3.5 w-3.5" strokeWidth={1.8} />
                </div>
                <span className="mt-1 text-[11px] font-medium text-[#F5F0E8] truncate w-full">
                  Pontualidade
                </span>
                <span className="text-[9.5px] text-[#DDC8B2]/80 truncate w-full">Zero espera</span>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* VERSÃO DESKTOP (hidden lg:flex): Layout Original Rigorosamente Preservado */}
          {/* ========================================================================= */}
          <div
            className={`hidden lg:flex lg:col-span-7 xl:col-span-6 flex-col justify-center transition-all duration-700 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {/* Eyebrow Desktop */}
            <div className="flex items-center gap-2">
              <span className="h-px w-7 bg-[#6D4D3C]" />
              <span className="text-[13px] font-semibold tracking-[0.22em] text-[#6D4D3C] uppercase">
                Odontologia Boutique • SP
              </span>
            </div>

            {/* Título Principal Desktop */}
            <h1 className="mt-4 font-serif text-4xl lg:text-[46px] xl:text-[52px] leading-[1.14] font-normal tracking-tight text-[#34231D] max-w-[620px]">
              A arte da odontologia que{" "}
              <span className="italic text-[#6D4D3C] inline font-serif">
                transforma sua confiança.
              </span>
            </h1>

            {/* Descrição Desktop */}
            <p className="mt-4 text-[16px] lg:text-[18px] text-[#554338] leading-[1.64] max-w-[560px] font-normal">
              Onde o rigor científico encontra a sensibilidade estética. Planejamento 100% digital
              em 3D, procedimentos sem dor e acolhimento singular para desenhar o seu sorriso ideal.
            </p>

            {/* Prova Social Desktop */}
            <div className="mt-5 items-center gap-3 text-sm sm:text-[15px] text-[#554338] flex">
              <div className="flex items-center gap-1 text-[#6D4D3C]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-[#34231D]">4.9 no Google</span>
              <span className="text-[#B99A80]">•</span>
              <span className="text-[#6D4D3C] font-normal">
                Mais de 1.200 sorrisos transformados
              </span>
            </div>

            {/* Bloco de Ações Desktop */}
            <div className="mt-6 flex flex-col gap-2.5 max-w-[580px]">
              <div className="flex items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => onOpenAppointment()}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#D5B89C] hover:bg-[#CBB093] px-6.5 py-3.5 text-[15px] font-medium tracking-wide text-[#34231D] shadow-sm hover:shadow transition-all duration-300 active:scale-[0.98] cursor-pointer whitespace-nowrap"
                >
                  <span>Agendar avaliação</span>
                  <ArrowUpRight className="h-4 w-4 text-[#34231D] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <div className="flex items-center gap-2 text-[13px] text-[#6D4D3C] font-medium tracking-wide px-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6D4D3C] shrink-0" />
                  <span>Questionário rápido • Concierge exclusivo</span>
                </div>
              </div>
            </div>

            {/* Links Rápidos Secundários Desktop */}
            <div className="mt-5.5 items-center gap-5 text-sm sm:text-[14.5px] text-[#554338] flex">
              <a
                href="#tratamentos"
                className="group inline-flex items-center gap-1.5 font-medium hover:text-[#6D4D3C] transition-colors underline-offset-4 hover:underline"
              >
                <span>Explorar especialidades</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#6D4D3C] transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <span className="text-[#B99A80]">•</span>

              <a
                href="#tecnologia"
                className="group inline-flex items-center gap-1.5 font-medium hover:text-[#6D4D3C] transition-colors underline-offset-4 hover:underline"
              >
                <span>Conhecer o Scanner 3D</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#6D4D3C] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* 3 Pilares Clínicos Desktop */}
            <div className="mt-7 pt-6 border-t border-[#DDC8B2]/70 grid grid-cols-3 gap-4 max-w-[580px]">
              <div className="flex flex-row items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FAF7F2] text-[#6D4D3C] border border-[#DDC8B2]/50">
                  <ScanLine className="h-4.5 w-4.5" strokeWidth={1.75} />
                </div>
                <div className="leading-tight min-w-0">
                  <span className="block text-[15px] font-semibold text-[#34231D] truncate">
                    Scanner 3D
                  </span>
                  <span className="text-[12.5px] text-[#6D4D3C] mt-0.5 block truncate">
                    Sem moldes
                  </span>
                </div>
              </div>

              <div className="flex flex-row items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FAF7F2] text-[#6D4D3C] border border-[#DDC8B2]/50">
                  <ShieldCheck className="h-4.5 w-4.5" strokeWidth={1.75} />
                </div>
                <div className="leading-tight min-w-0">
                  <span className="block text-[15px] font-semibold text-[#34231D] truncate">
                    Sem dor
                  </span>
                  <span className="text-[12.5px] text-[#6D4D3C] mt-0.5 block truncate">
                    Sedação suave
                  </span>
                </div>
              </div>

              <div className="flex flex-row items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FAF7F2] text-[#6D4D3C] border border-[#DDC8B2]/50">
                  <Clock className="h-4.5 w-4.5" strokeWidth={1.75} />
                </div>
                <div className="leading-tight min-w-0">
                  <span className="block text-[15px] font-semibold text-[#34231D] truncate">
                    Pontual
                  </span>
                  <span className="text-[12.5px] text-[#6D4D3C] mt-0.5 block truncate">
                    Zero espera
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Destaque Flutuante Desktop no Canto Inferior Direito: Exatamente Preservado com Nova Paleta */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 justify-end items-end self-end pb-2">
            <div className="rounded-2xl bg-white/95 backdrop-blur-md px-5 py-3.5 shadow-[0_8px_24px_rgba(52,35,29,0.08)] border border-[#DDC8B2]/80 max-w-[270px]">
              <div className="flex items-center gap-2 text-[#6D4D3C] text-xs font-semibold uppercase tracking-wider">
                <Calendar className="h-3.5 w-3.5" />
                <span>Atendimento Exclusivo</span>
              </div>
              <p className="mt-1 text-[13.5px] font-medium text-[#34231D] leading-snug">
                Horário privativo • Valet cortesia na recepção
              </p>
              <p className="mt-0.5 text-[11.5px] text-[#6D4D3C]">
                Privacidade e pontualidade absolutas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
