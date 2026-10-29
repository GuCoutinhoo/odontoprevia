import { useState } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight, Star, Quote, CheckCircle2 } from "lucide-react";
import tClar from "@/assets/t-clareamento.jpg";
import tEst from "@/assets/t-estetica.jpg";
import tHarm from "@/assets/t-harmonizacao.jpg";
import tOrto from "@/assets/t-orto.jpg";

interface TestimonialsSectionProps {
  onOpenAppointment: (treatmentName?: string) => void;
  isVisible?: boolean;
}

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  fullReview: string;
  photo: string;
  treatment: string;
  timeAgo: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "mariana",
    name: "Mariana S. Albuquerque",
    role: "Advogada • São Paulo",
    quote: "Me senti verdadeiramente acolhida desde a primeira consulta.",
    fullReview:
      "Atendimento impecável, desde a recepção pontual até o pós-tratamento. A simulação 3D me deu total segurança antes de fazer as lentes. O resultado ficou tão natural que ninguém diz que são facetas.",
    photo: tClar,
    treatment: "Lentes de Contato Dental",
    timeAgo: "há 2 semanas",
  },
  {
    id: "rodrigo",
    name: "Rodrigo Almeida Filho",
    role: "Empresário",
    quote: "Precisão cirúrgica sem dor e com tecnologia de ponta.",
    fullReview:
      "Tinha receio de fazer implante pela dor, mas a cirurgia guiada por computador foi surpreendentemente tranquila. No dia seguinte já estava trabalhando sem nenhum inchaço.",
    photo: tEst,
    treatment: "Implante Guiado 3D",
    timeAgo: "há 1 mês",
  },
  {
    id: "camila",
    name: "Camila N. Pereira",
    role: "Arquiteta de Interiores",
    quote: "O ambiente transmite uma paz indescritível.",
    fullReview:
      "A clínica parece um refúgio de tranquilidade. Terminei meu tratamento com alinhadores invisíveis em menos de 8 meses. A equipe é de um carinho e competência ímpares.",
    photo: tHarm,
    treatment: "Alinhadores Invisíveis",
    timeAgo: "há 3 semanas",
  },
  {
    id: "lucas",
    name: "Lucas Brandão Mendes",
    role: "Médico Cardiologista",
    quote: "Cuidado e rigor científico em cada detalhe clínico.",
    fullReview:
      "Como médico, reparo muito na biossegurança e esterilização. A Lumière opera em padrão hospitalar estrito. Fiz clareamento supervisionado e o acompanhamento foi exemplar.",
    photo: tOrto,
    treatment: "Clareamento Supervisionado",
    timeAgo: "há 1 mês",
  },
];

export function TestimonialsSection({
  onOpenAppointment,
  isVisible = true,
}: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxDesktopIndex = Math.max(0, TESTIMONIALS.length - 3);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxDesktopIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxDesktopIndex ? prev + 1 : 0));
  };

  const visibleTestimonials = TESTIMONIALS.slice(currentIndex, currentIndex + 3);

  return (
    <section
      id="depoimentos"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#FAF8F5]"
      aria-label="Avaliações e Depoimentos de Pacientes"
    >
      <div className="mx-auto w-[min(calc(100%-48px),1440px)]">
        {/* Cabeçalho com Destaque Google Reviews */}
        <div
          className={`flex flex-col gap-4 md:flex-row md:items-end md:justify-between transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="max-w-[760px]">
            <div className="flex items-center gap-2.5">
              <span className="h-px w-5 bg-[#9E732B]" />
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-[#966D38] uppercase">
                Vozes da Confiança
              </p>
            </div>

            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[44px] leading-[1.12] font-normal tracking-tight text-[#1E1B18]">
              Depoimentos que inspiram confiança.
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-[#5C554C] leading-relaxed">
              Mais de 180 avaliações 5 estrelas no Google de pacientes que confiaram o cuidado e a
              estética do seu sorriso à Lumière.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 rounded-xl border border-[#E0D5C7] bg-white px-3.5 py-2 text-xs font-medium text-[#483323] shadow-2xs">
              <Star className="h-3.5 w-3.5 fill-current text-[#C5A059]" />
              <span className="font-semibold">4.9 / 5.0</span>
              <span className="text-[#8C8377]">• Google Reviews</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Depoimento anterior"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DCD3C7] bg-white text-[#4A3D31] hover:bg-[#483323] hover:border-[#483323] hover:text-white transition-all cursor-pointer shadow-2xs"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Próximo depoimento"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DCD3C7] bg-white text-[#4A3D31] hover:bg-[#483323] hover:border-[#483323] hover:text-white transition-all cursor-pointer shadow-2xs"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Grade de Cards de Avaliação */}
        <div
          className={`mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 transition-all duration-700 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {visibleTestimonials.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between rounded-2xl border border-[#E8DFD3] bg-white p-6 sm:p-7 shadow-[0_6px_24px_rgba(72,51,35,0.04)] transition-all duration-400 hover:-translate-y-1.5 hover:border-[#C5A059] hover:shadow-[0_20px_44px_rgba(72,51,35,0.09)]"
            >
              <div>
                {/* 5 Estrelas e Badge de Tratamento */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#C5A059]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold text-[#8C6A3C] uppercase tracking-wider bg-[#F4EFE8] px-2.5 py-1 rounded-lg">
                    {item.treatment}
                  </span>
                </div>

                {/* Citação Direta */}
                <h3 className="mt-4 font-serif text-lg sm:text-xl font-normal leading-snug text-[#1E1B18] group-hover:text-[#483323] transition-colors">
                  “{item.quote}”
                </h3>

                <p className="mt-3 text-xs sm:text-[13px] text-[#5C554C] leading-relaxed">
                  {item.fullReview}
                </p>
              </div>

              {/* Informações do Paciente */}
              <div className="mt-6 pt-4 border-t border-[#F2ECE3] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-[#E0D5C7]"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-[#1E1B18] leading-tight">
                      {item.name}
                    </h4>
                    <span className="text-[10px] text-[#227A38] font-medium flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="h-3 w-3" /> Paciente Verificado
                    </span>
                  </div>
                </div>

                <span className="text-[11px] text-[#8C8377]">{item.timeAgo}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Faixa Inferior de Conversão */}
        <div
          className={`mt-8 sm:mt-10 rounded-2xl border border-[#E5DAD0] bg-[#F4EFE8] px-6 py-4.5 sm:px-7 sm:py-5 transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h4 className="font-serif text-base sm:text-lg font-normal text-[#1E1B18] leading-snug">
                Pronto para viver essa transformação no seu sorriso?
              </h4>
              <p className="text-xs text-[#665D53] mt-0.5">
                Atendimento pontual, sem dor e com equipe altamente especializada.
              </p>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={() => onOpenAppointment("Agendamento pós-Avaliações")}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#483323] hover:bg-[#342417] px-6 py-3 text-xs sm:text-sm font-medium text-white shadow-2xs transition-all active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span>Agendar avaliação agora</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
