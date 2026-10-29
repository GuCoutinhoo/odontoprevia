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
      className="relative py-16 sm:py-20 lg:py-24 bg-[#FAF8F5]"
      aria-label="Sobre a Lumière Odontologia"
    >
      <div className="mx-auto w-[min(calc(100%-48px),1440px)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Coluna Visual (Esquerda) com Composição de Duas Fotos Editoriais */}
          <div
            className={`lg:col-span-6 relative transition-all duration-700 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            {/* Foto Principal da Recepção */}
            <div className="relative overflow-hidden rounded-2xl border border-[#E8DFD3] bg-white shadow-[0_16px_40px_rgba(72,51,35,0.08)]">
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
            <div className="absolute -bottom-5 -right-3 sm:-bottom-8 sm:-right-5 w-[54%] sm:w-[50%] overflow-hidden rounded-2xl border-[5px] border-[#FAF8F5] bg-white shadow-[0_18px_36px_rgba(72,51,35,0.14)] transition-transform duration-500 hover:scale-103">
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
            <div className="absolute -top-4 -left-3 sm:-top-5 sm:-left-4 rounded-xl bg-white/95 backdrop-blur-md p-3 sm:p-3.5 shadow-[0_10px_28px_rgba(72,51,35,0.08)] border border-[#E8DFD3] flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#483323] text-[#ECC87E]">
                <Award className="h-4 w-4" />
              </div>
              <div className="leading-tight">
                <span className="block text-xs font-semibold text-[#1E1B18]">Padrão Ouro</span>
                <span className="text-[10px] text-[#7A7065]">Membros SBOE</span>
              </div>
            </div>
          </div>

          {/* Coluna de Conteúdo (Direita) */}
          <div
            className={`lg:col-span-6 flex flex-col justify-center transition-all duration-700 delay-150 ease-out pt-6 lg:pt-0 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span className="h-px w-5 bg-[#9E732B]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-[#966D38] uppercase">
                Quem Somos • Filosofia Lumière
              </span>
            </div>

            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[44px] leading-[1.12] font-normal tracking-tight text-[#1E1B18]">
              Muito mais que uma clínica odontológica.
            </h2>

            <p className="mt-3 text-sm sm:text-base text-[#5C554C] leading-relaxed max-w-[540px]">
              Um espaço onde ciência de precisão, tecnologia de ponta e acolhimento singular
              caminham juntos. Aqui, seu plano de tratamento é 100% individualizado, transparente e
              planejado para respeitar a biologia dos seus dentes.
            </p>

            {/* Citação Editorial em Destaque */}
            <div className="mt-5 border-l-2 border-[#C5A059] pl-4 italic text-sm text-[#483323] font-serif">
              “Não tratamos apenas dentes. Cuidamos de pessoas, devolvendo a liberdade e a alegria
              de sorrir com autenticidade.”
            </div>

            {/* 3 Diferenciais */}
            <div className="mt-6 space-y-3.5">
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F2EDE5] text-[#7A5328] mt-0.5 shadow-2xs">
                  <HeartHandshake className="h-4.5 w-4.5" strokeWidth={1.75} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#1E1B18]">
                    Escuta ativa e acolhimento sem pressa
                  </h4>
                  <p className="text-xs text-[#665D53] mt-0.5">
                    Entendemos seus desejos, receios e expectativas em uma consulta dedicada e
                    tranquila.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F2EDE5] text-[#7A5328] mt-0.5 shadow-2xs">
                  <ClipboardList className="h-4.5 w-4.5" strokeWidth={1.75} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#1E1B18]">
                    Planejamento digital com previsibilidade total
                  </h4>
                  <p className="text-xs text-[#665D53] mt-0.5">
                    Você visualiza e aprova a simulação digital do seu resultado em 3D antes de
                    iniciar qualquer procedimento.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F2EDE5] text-[#7A5328] mt-0.5 shadow-2xs">
                  <Sparkles className="h-4.5 w-4.5" strokeWidth={1.75} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#1E1B18]">
                    Ambiente privativo e biossegurança máxima
                  </h4>
                  <p className="text-xs text-[#665D53] mt-0.5">
                    Salas exclusivas com aromaterapia suave, isolamento acústico e esterilização
                    hospitalar.
                  </p>
                </div>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenAppointment("Conhecer a Lumière")}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#483323] hover:bg-[#342417] px-6 py-3.5 text-xs sm:text-sm font-medium text-white shadow-sm transition-all duration-300 hover:shadow-md active:scale-95 cursor-pointer"
              >
                <span>Conheça a Lumière pessoalmente</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#estrutura"
                className="group inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-medium text-[#483323] hover:text-[#7A5328] px-2 py-2.5 transition-colors cursor-pointer"
              >
                <span>Conhecer nossos ambientes</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
