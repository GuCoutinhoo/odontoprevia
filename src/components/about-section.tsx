import {
  ArrowUpRight,
  ArrowRight,
  HeartHandshake,
  ClipboardList,
  Sparkles,
  Award,
} from "lucide-react";
import aboutMain from "@/assets/about-main.jpg";
import consultImg from "@/assets/www.jpg";

interface AboutSectionProps {
  onOpenAppointment: (treatmentName?: string) => void;
  isVisible?: boolean;
}

export function AboutSection({ onOpenAppointment, isVisible = true }: AboutSectionProps) {
  return (
    <section
      id="sobre"
      className="relative py-12 sm:py-18 lg:py-24 bg-[#FAF8F5]"
      aria-label="Sobre a Lumière Odontologia"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Coluna Visual (Esquerda) com Composição de Duas Fotos Editoriais */}
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

            {/* Foto Secundária Sobreposta (Atendimento Humanizado) */}
            <div className="absolute -bottom-4 -right-2 sm:-bottom-8 sm:-right-5 w-[50%] sm:w-[50%] overflow-hidden rounded-xl sm:rounded-2xl border-[3px] sm:border-[5px] border-[#FAF8F5] bg-white shadow-[0_14px_30px_rgba(72,51,35,0.14)] transition-transform duration-500 hover:scale-103">
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
            <div className="absolute -top-3 -left-2 sm:-top-5 sm:-left-4 rounded-xl bg-white/95 backdrop-blur-md p-2.5 sm:p-3.5 shadow-[0_8px_24px_rgba(72,51,35,0.08)] border border-[#E8DFD3] flex items-center gap-2 sm:gap-2.5">
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#483323] text-[#ECC87E]">
                <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
              <div className="leading-tight">
                <span className="block text-[11px] sm:text-xs font-semibold text-[#1E1B18]">
                  Padrão Ouro
                </span>
                <span className="text-[9.5px] sm:text-[10px] text-[#7A7065]">Membros SBOE</span>
              </div>
            </div>
          </div>

          {/* Coluna de Conteúdo (Direita) */}
          <div
            className={`lg:col-span-6 flex flex-col justify-center transition-all duration-700 delay-150 ease-out pt-4 sm:pt-6 lg:pt-0 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span className="h-px w-5 bg-[#966D38]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-[#966D38] uppercase">
                Quem Somos • Filosofia Lumière
              </span>
            </div>

            <h2 className="mt-2 font-serif text-[26px] sm:text-4xl lg:text-[44px] leading-[1.12] font-normal tracking-tight text-[#1E1B18]">
              Muito mais que uma clínica odontológica.
            </h2>

            <p className="mt-2.5 sm:mt-3 text-[13px] sm:text-base text-[#5C554C] leading-relaxed max-w-[540px]">
              Um espaço onde ciência de precisão, tecnologia de ponta e acolhimento singular
              caminham juntos. Aqui, seu plano de tratamento é 100% individualizado, transparente e
              planejado para respeitar a biologia dos seus dentes.
            </p>

            {/* Citação Editorial em Destaque */}
            <div className="mt-4 sm:mt-5 rounded-xl bg-[#F4EFE6]/70 border-l-2 border-[#966D38] p-3 sm:p-3.5 italic text-xs sm:text-sm text-[#483323] font-serif leading-relaxed">
              “Não tratamos apenas dentes. Cuidamos de pessoas, devolvendo a liberdade e a alegria
              de sorrir com autenticidade.”
            </div>

            {/* 3 Diferenciais: Grade Compacta 2 Colunas no Mobile, 3 no Tablet e Desktop */}
            <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3.5">
              <div className="flex flex-col items-start gap-1.5 sm:gap-2 p-2.5 rounded-xl bg-white border border-[#EBE3D7] shadow-2xs">
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-[#F2EDE5] text-[#7A5328]">
                  <HeartHandshake className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-[13px] font-semibold text-[#1E1B18] leading-tight">
                    Escuta ativa
                  </h4>
                  <p className="text-[10.5px] sm:text-[11px] text-[#665D53] mt-0.5 leading-snug line-clamp-2">
                    Consulta dedicada sem pressa.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-1.5 sm:gap-2 p-2.5 rounded-xl bg-white border border-[#EBE3D7] shadow-2xs">
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-[#F2EDE5] text-[#7A5328]">
                  <ClipboardList className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-[13px] font-semibold text-[#1E1B18] leading-tight">
                    Planejamento 3D
                  </h4>
                  <p className="text-[10.5px] sm:text-[11px] text-[#665D53] mt-0.5 leading-snug line-clamp-2">
                    Previsibilidade antes de iniciar.
                  </p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex flex-row sm:flex-col items-center sm:items-start gap-2.5 sm:gap-2 p-2.5 rounded-xl bg-white border border-[#EBE3D7] shadow-2xs">
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-[#F2EDE5] text-[#7A5328]">
                  <Sparkles className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-[13px] font-semibold text-[#1E1B18] leading-tight">
                    Biossegurança
                  </h4>
                  <p className="text-[10.5px] sm:text-[11px] text-[#665D53] mt-0.5 leading-snug line-clamp-2">
                    Padrão hospitalar estrito.
                  </p>
                </div>
              </div>
            </div>

            {/* Botões de Ação: Lado a Lado no Mobile */}
            <div className="mt-6 sm:mt-7 flex items-center gap-2.5 sm:gap-4 flex-wrap">
              <button
                type="button"
                onClick={() => onOpenAppointment("Conhecer a Lumière")}
                className="group flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-[#483323] hover:bg-[#342417] px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-medium text-white shadow-sm transition-all duration-300 hover:shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span>Conhecer a clínica</span>
                <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#estrutura"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#D5C7B7] bg-white sm:bg-transparent px-4 py-3 sm:py-2.5 text-xs sm:text-sm font-medium text-[#483323] hover:text-[#7A5328] transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Ver ambientes</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
