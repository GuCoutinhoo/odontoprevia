import { ArrowUpRight, ShieldCheck, Star, Clock, Calendar, ScanLine } from "lucide-react";
import heroImg from "@/assets/hero.png";

interface HeroSectionProps {
  onOpenAppointment: (treatmentName?: string) => void;
  isVisible?: boolean;
}

export function HeroSection({ onOpenAppointment, isVisible = true }: HeroSectionProps) {
  return (
    <section
      id="início"
      className="relative w-full overflow-hidden"
      aria-label="Início - Lumière Odontologia de Alto Padrão"
    >
      {/* =========================================================================
          HERO MOBILE (lg:hidden) — REDESENHADO DO ZERO:
          - Composição cinematográfica full-bleed com fotografia da paciente/doutora
            em evidência máxima no terço superior (sem texto cobrindo o rosto).
          - Gradiente dark-brown (#1E1610) refinado na porção inferior garantindo
            contraste editorial impecável para a tipografia em marfim e champanhe.
          - Declutter total: removidas tiras de 3 colunas, badges de nota e links
            duplicados de dentro do hero móvel.
          - 1 Label de prestígio, 1 Título em Serif expressivo, 1 Frase concisa,
            e 1 CTA primário dominante.
          ========================================================================= */}
      <div className="relative min-h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-[#1E1610] lg:hidden">
        {/* Fotografia Cinematográfica Full-Bleed */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={heroImg}
            alt="Dra. da Lumière Odontologia em recepção de alto padrão"
            width={1080}
            height={1350}
            fetchPriority="high"
            draggable={false}
            className="h-full w-full object-cover object-[78%_16%] filter contrast-[1.04] brightness-[0.98] select-none"
          />

          {/* Gradiente Dark-Brown Refinado:
              - Topo sutil para legibilidade do menu (0% a 20%)
              - Meio limpo para o sorriso e rosto brilharem (20% a 45%)
              - Transição aveludada em marrom escuro (#1E1610) que acolhe o texto e o CTA com contraste perfeito */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(30, 22, 16, 0.42) 0%, rgba(30, 22, 16, 0.08) 22%, rgba(30, 22, 16, 0.35) 45%, rgba(30, 22, 16, 0.88) 66%, #1E1610 86%, #1E1610 100%)",
            }}
          />

          {/* Micro vinheta lateral sutil para foco visual */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 120% 70% at 50% 20%, transparent 40%, rgba(30, 22, 16, 0.35) 100%)",
            }}
          />
        </div>

        {/* Zona Superior: Espaço para a fotografia e o sorriso da paciente respirarem livremente */}
        <div className="relative z-10 flex-1 min-h-[220px] xs:min-h-[260px] sm:min-h-[300px] pointer-events-none" />

        {/* Zona Inferior: Tipografia Luxuosa e CTA Dominante */}
        <div
          className={`relative z-10 px-5 xs:px-6 sm:px-8 pb-9 sm:pb-12 pt-4 flex flex-col items-start max-w-[480px] transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          {/* 1. Label Pequeno de Prestígio */}
          <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
            <span className="h-px w-5 sm:w-6 bg-[#ECC87E]/80" />
            <span className="text-[10px] xs:text-[11px] font-semibold tracking-[0.24em] text-[#ECC87E] uppercase">
              Odontologia Boutique • São Paulo
            </span>
          </div>

          {/* 2. Headline Expressivo em Serif */}
          <h1 className="font-serif text-[30px] xs:text-[34px] sm:text-[40px] leading-[1.12] font-normal tracking-tight text-[#FAF7F2]">
            A arte da odontologia que{" "}
            <span className="italic text-[#ECC87E] block xs:inline">transforma sua confiança.</span>
          </h1>

          {/* 3. Frase Curta e Refinada */}
          <p className="mt-2.5 sm:mt-3 text-[13px] xs:text-[14px] sm:text-[15px] text-[#D8CEBF] leading-[1.52] max-w-[360px] font-normal">
            Planejamento digital 3D, precisão biomimética e acolhimento singular para desenhar o seu
            sorriso ideal
          </p>

          {/* 4. CTA Primário Único e Dominante */}
          <div className="mt-4 sm:mt-5 w-full xs:w-auto">
            <button
              type="button"
              onClick={() => onOpenAppointment("Hero Mobile Principal")}
              className="group w-full xs:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#ECC87E] via-[#E2BC6A] to-[#D5AA54] hover:brightness-105 active:scale-[0.98] px-6 xs:px-7 py-3.5 text-[14px] xs:text-[15px] font-semibold text-[#1E1610] shadow-[0_8px_24px_rgba(0,0,0,0.38)] transition-all duration-300 cursor-pointer min-h-[48px]"
            >
              <span>Agendar minha avaliação</span>
              <ArrowUpRight className="h-4 w-4 text-[#1E1610] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Micro Reafirmação de Acolhimento */}
            <div className="mt-2.5 flex items-center gap-2 text-[11px] text-[#A89D8F]/95">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ECC87E]/80 shrink-0" />
              <span>Atendimento com horário privativo • Valet cortesia</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          HERO DESKTOP (hidden lg:flex) — PRESERVADO COM RIQUEZA EDITORIAL
          ========================================================================= */}
      <div className="hidden lg:flex min-h-[88vh] max-h-[920px] w-full items-center bg-[#FAF7F2] pt-32 pb-16">
        {/* Fotografia de Fundo Desktop */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={heroImg}
            alt="Dra. da Lumière Odontologia em recepção de alto padrão"
            width={1920}
            height={1080}
            fetchPriority="high"
            draggable={false}
            className="h-full w-full object-cover object-[68%_center] filter contrast-[1.04] saturate-[1.04] select-none"
          />

          {/* Gradiente Horizontal Desktop */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, #FAF7F2 0%, #FAF7F2 36%, rgba(250, 247, 242, 0.88) 46%, rgba(250, 247, 242, 0) 56%, transparent 100%)",
            }}
          />

          <div
            className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(250, 247, 242, 0.65) 0%, rgba(250, 247, 242, 0.2) 60%, transparent 100%)",
            }}
          />
        </div>

        <div className="relative z-10 site-container w-full">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Conteúdo Textual Desktop */}
            <div
              className={`col-span-7 xl:col-span-6 flex flex-col justify-center transition-all duration-700 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="h-px w-7 bg-[#966D38]" />
                <span className="text-[13px] font-semibold tracking-[0.2em] text-[#966D38] uppercase">
                  Odontologia Boutique • São Paulo
                </span>
              </div>

              <h1 className="mt-4 font-serif text-[46px] xl:text-[52px] leading-[1.14] font-normal tracking-tight text-[#1A1613] max-w-[620px]">
                A arte da odontologia que{" "}
                <span className="italic text-[#8C6239] block sm:inline">
                  transforma sua confiança.
                </span>
              </h1>

              <p className="mt-4 text-[17px] xl:text-[18px] text-[#42392F] leading-[1.64] max-w-[560px] font-normal">
                Onde o rigor científico encontra a sensibilidade estética. Planejamento 100% digital
                em 3D, procedimentos sem dor e acolhimento singular para desenhar o seu sorriso
                ideal.
              </p>

              {/* Prova Social Google Desktop */}
              <div className="mt-5 flex items-center gap-3 text-[15px] text-[#332A20]">
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

              {/* CTA Principal Desktop */}
              <div className="mt-6 flex items-center gap-3.5 max-w-[580px]">
                <button
                  type="button"
                  onClick={() => onOpenAppointment("Hero Principal")}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#2C2018] hover:bg-[#1A130E] active:scale-[0.98] px-6 py-3.5 text-[15px] font-medium tracking-wide text-white shadow-[0_4px_16px_rgba(44,32,24,0.14)] hover:shadow-[0_6px_22px_rgba(44,32,24,0.22)] transition-all duration-300 cursor-pointer whitespace-nowrap min-h-[46px]"
                >
                  <span>Agendar minha avaliação</span>
                  <ArrowUpRight className="h-4 w-4 text-[#D8C4B0] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <div className="flex items-center gap-1.5 text-[13px] text-[#5C5044] font-medium tracking-wide px-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#966D38]/80 shrink-0" />
                  <span>Questionário rápido • Concierge exclusivo</span>
                </div>
              </div>

              {/* 3 Pilares Clínicos Desktop */}
              <div className="mt-7 pt-6 border-t border-[#E8DEC2]/80">
                <div className="grid grid-cols-3 gap-4 max-w-[580px]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F5EFE6] text-[#7A5328]">
                      <ScanLine className="h-4.5 w-4.5" strokeWidth={1.75} />
                    </div>
                    <div className="leading-tight">
                      <span className="block text-[15px] font-semibold text-[#1A1613]">
                        Scanner 3D
                      </span>
                      <span className="text-[12.5px] text-[#635A50] mt-0.5 block">
                        Sem moldagem desconfortável
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F5EFE6] text-[#7A5328]">
                      <ShieldCheck className="h-4.5 w-4.5" strokeWidth={1.75} />
                    </div>
                    <div className="leading-tight">
                      <span className="block text-[15px] font-semibold text-[#1A1613]">
                        Sem dor
                      </span>
                      <span className="text-[12.5px] text-[#635A50] mt-0.5 block">
                        Sedação suave e acolhedora
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F5EFE6] text-[#7A5328]">
                      <Clock className="h-4.5 w-4.5" strokeWidth={1.75} />
                    </div>
                    <div className="leading-tight">
                      <span className="block text-[15px] font-semibold text-[#1A1613]">
                        Pontualidade
                      </span>
                      <span className="text-[12.5px] text-[#635A50] mt-0.5 block">
                        Respeito rigoroso ao tempo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Destaque Flutuante no Canto Inferior Direito Desktop */}
            <div className="col-span-5 xl:col-span-6 flex justify-end items-end self-end pb-2">
              <div className="rounded-2xl bg-white/94 backdrop-blur-md px-5 py-3.5 shadow-[0_8px_24px_rgba(40,27,20,0.06)] border border-[#E2D6C6] max-w-[270px]">
                <div className="flex items-center gap-2 text-[#8C6239] text-xs font-semibold uppercase tracking-wider">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Atendimento Exclusivo</span>
                </div>
                <p className="mt-1 text-[13.5px] font-medium text-[#261E17] leading-snug">
                  Horário privativo • Valet cortesia na recepção
                </p>
                <p className="mt-0.5 text-[11.5px] text-[#6E6458]">
                  Privacidade e pontualidade absolutas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
