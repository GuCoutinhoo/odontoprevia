import { useState } from "react";
import {
  ArrowUpRight,
  HeartHandshake,
  ClipboardList,
  Sparkles,
  Award,
  CheckCircle2,
} from "lucide-react";
import aboutMain from "@/assets/about-main.jpg";
import consultImg from "@/assets/www.jpg";

interface AboutSectionProps {
  onOpenAppointment: (treatmentName?: string) => void;
  isVisible?: boolean;
}

const ABOUT_DIFFERENTIALS = [
  {
    id: "escuta",
    icon: HeartHandshake,
    title: "Escuta ativa e acolhimento",
    desc: "Entendemos seus desejos, receios e expectativas em uma consulta dedicada e sem pressa.",
    tag: "Atendimento Humanizado",
  },
  {
    id: "planejamento",
    icon: ClipboardList,
    title: "Planejamento digital 3D",
    desc: "Você visualiza e aprova a simulação digital do seu resultado antes de iniciar o procedimento.",
    tag: "Previsibilidade Total",
  },
  {
    id: "biosseguranca",
    icon: Sparkles,
    title: "Ambiente privativo e seguro",
    desc: "Biossegurança de nível hospitalar com filtragem contínua do ar e consultórios individuais.",
    tag: "Padrão Hospitalar",
  },
];

export function AboutSection({ onOpenAppointment, isVisible = true }: AboutSectionProps) {
  const [activeMobileDiff, setActiveMobileDiff] = useState(0);

  return (
    <section
      id="sobre"
      className="relative py-12 sm:py-20 lg:py-24 bg-[#FAF8F5]"
      aria-label="Sobre a Lumière Odontologia"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Coluna Visual (Esquerda): Composição Responsiva Segura Sem Overflow */}
          <div
            className={`lg:col-span-6 relative transition-all duration-700 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            {/* Foto Principal da Recepção */}
            <div className="relative overflow-hidden rounded-2xl border border-[#E8DFD3] bg-white shadow-[0_12px_32px_rgba(72,51,35,0.08)]">
              <div className="aspect-[16/11] sm:aspect-[4/3] w-full overflow-hidden bg-[#EFE9DF]">
                <img
                  src={aboutMain}
                  alt="Recepção acolhedora e sofisticada da Lumière Odontologia"
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-104"
                />
              </div>
            </div>

            {/* Foto Secundária Sobreposta com Posicionamento Seguro no Mobile */}
            <div className="absolute -bottom-3 right-2 sm:-bottom-7 sm:-right-4 w-[50%] sm:w-[48%] overflow-hidden rounded-xl sm:rounded-2xl border-4 sm:border-[5px] border-[#FAF8F5] bg-white shadow-[0_12px_28px_rgba(72,51,35,0.14)]">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#EFE9DF]">
                <img
                  src={consultImg}
                  alt="Doutora prestando atendimento e ouvindo a paciente com atenção"
                  width={600}
                  height={450}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Selo Flutuante de Excelência Clínica */}
            <div className="absolute -top-3 left-2 sm:-top-5 sm:-left-4 rounded-xl bg-white/95 backdrop-blur-md p-2.5 sm:p-3.5 shadow-[0_8px_24px_rgba(72,51,35,0.08)] border border-[#E8DFD3] flex items-center gap-2">
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#483323] text-[#ECC87E]">
                <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
              <div className="leading-tight">
                <span className="block text-[11px] sm:text-xs font-semibold text-[#1E1B18]">
                  Padrão Ouro
                </span>
                <span className="text-[9px] sm:text-[10px] text-[#7A7065]">Membros SBOE</span>
              </div>
            </div>
          </div>

          {/* Coluna de Conteúdo (Direita) */}
          <div
            className={`lg:col-span-6 flex flex-col justify-center transition-all duration-700 delay-150 ease-out pt-6 sm:pt-8 lg:pt-0 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="h-px w-5 bg-[#9E732B]" />
              <span className="text-[10.5px] sm:text-xs font-semibold tracking-[0.22em] text-[#966D38] uppercase">
                Quem Somos • Filosofia Lumière
              </span>
            </div>

            <h2 className="mt-2 font-serif text-[26px] xs:text-[30px] sm:text-4xl lg:text-[44px] leading-[1.12] font-normal tracking-tight text-[#1E1B18]">
              Muito mais que uma clínica odontológica.
            </h2>

            <p className="mt-2.5 text-[13.5px] sm:text-base text-[#5C554C] leading-relaxed max-w-[540px]">
              Um espaço onde ciência de precisão, tecnologia de ponta e acolhimento singular
              caminham juntos. Aqui, seu plano de tratamento é 100% individualizado, transparente e
              planejado para respeitar a biologia dos seus dentes.
            </p>

            {/* Citação Editorial em Destaque */}
            <div className="mt-4 sm:mt-5 p-3.5 rounded-xl bg-[#F6EFE6]/80 border-l-2 border-[#C5A059] italic text-xs sm:text-sm text-[#483323] font-serif leading-relaxed">
              “Não tratamos apenas dentes. Cuidamos de pessoas, devolvendo a liberdade e a alegria
              de sorrir com autenticidade.”
            </div>

            {/* -------------------- DIFERENCIAIS MOBILE: INTERATIVOS EM ABAS / CARDS -------------------- */}
            <div className="sm:hidden mt-5">
              {/* Abas horizontais no Mobile */}
              <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-[#E8DFD3] shadow-2xs">
                {ABOUT_DIFFERENTIALS.map((diff, idx) => {
                  const isActive = activeMobileDiff === idx;
                  const Icon = diff.icon;
                  return (
                    <button
                      key={diff.id}
                      type="button"
                      onClick={() => setActiveMobileDiff(idx)}
                      className={`flex-1 flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg text-[11px] font-medium transition-all ${
                        isActive
                          ? "bg-[#3B2920] text-white shadow-xs"
                          : "text-[#635A50] hover:text-[#1E1B18]"
                      }`}
                    >
                      <Icon className="h-3 w-3" />
                      <span className="truncate">{diff.title.split(" ")[0]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Card Ativo com Toque Suave */}
              {(() => {
                const active = ABOUT_DIFFERENTIALS[activeMobileDiff] ?? ABOUT_DIFFERENTIALS[0]!;
                const Icon = active.icon;
                return (
                  <div className="mt-2.5 p-3.5 rounded-xl bg-white border border-[#E8DFD3] shadow-2xs animate-in fade-in duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#F2EDE5] text-[#7A5328]">
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <h4 className="text-xs font-semibold text-[#1E1B18]">{active.title}</h4>
                      </div>
                      <span className="text-[9.5px] font-semibold uppercase tracking-wider text-[#966D38] bg-[#FAF7F2] px-2 py-0.5 rounded-md">
                        {active.tag}
                      </span>
                    </div>
                    <p className="text-xs text-[#665D53] mt-2 leading-relaxed">{active.desc}</p>
                  </div>
                );
              })()}
            </div>

            {/* -------------------- DIFERENCIAIS DESKTOP / TABLET (hidden sm:block) -------------------- */}
            <div className="hidden sm:block mt-6 space-y-3.5">
              {ABOUT_DIFFERENTIALS.map((diff) => {
                const Icon = diff.icon;
                return (
                  <div key={diff.id} className="flex items-start gap-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F2EDE5] text-[#7A5328] mt-0.5 shadow-2xs">
                      <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-[#1E1B18]">
                        {diff.title}
                      </h4>
                      <p className="text-xs text-[#665D53] mt-0.5">{diff.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA da Seção Sobre */}
            <div className="mt-5 sm:mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenAppointment("Sobre a Clínica")}
                className="inline-flex items-center gap-2 rounded-xl bg-[#3B2920] hover:bg-[#281B14] active:scale-95 px-5 py-3 text-xs sm:text-sm font-medium text-white shadow-sm transition cursor-pointer"
              >
                <span>Conhecer a clínica pessoalmente</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
