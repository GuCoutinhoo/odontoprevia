import { useState } from "react";
import { ArrowUpRight, MessageSquare, Plus, Minus, ShieldCheck, Clock, Car } from "lucide-react";
import { getWhatsAppUrl } from "@/config/clinic";

interface FaqSectionProps {
  isVisible?: boolean;
}

interface FaqItem {
  id: string;
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    id: "avaliacao",
    q: "Como funciona a primeira avaliação diagnóstica?",
    a: "Em uma consulta individual e detalhada, conversamos sobre seus objetivos e desejos estéticos. Realizamos o escaneamento intraoral 3D sem moldes desconfortáveis e documentação fotográfica. Na mesma sessão, você já visualiza a simulação tridimensional da sua arcada e recebe um plano de tratamento claro com etapas e investimentos.",
  },
  {
    id: "dor",
    q: "Os procedimentos causam dor ou desconforto?",
    a: "Não. Priorizamos o atendimento 100% humanizado e confortável. Utilizamos tecnologia de anestesia computadorizada sem picada convencional, protocolos prévios contra sensibilidade dental e, para pacientes que preferem relaxamento profundo, oferecemos sedação consciente supervisionada por médico anestesiologista.",
  },
  {
    id: "lentes",
    q: "Qual a durabilidade e resistência das lentes de porcelana?",
    a: "Trabalhamos exclusivamente com cerâmicas puras alemãs e suíças de padrão ouro internacional (E-Max e feldspáticas). Com a correta higienização e revisões semestrais, as lentes possuem durabilidade que frequentemente ultrapassa 15 a 20 anos, mantendo o brilho, a textura e sem escurecer ou manchar.",
  },
  {
    id: "alinhadores",
    q: "Qual a diferença entre alinhadores invisíveis e aparelhos tradicionais?",
    a: "Os alinhadores são placas transparentes removíveis, praticamente imperceptíveis no dia a dia. Você retira para se alimentar e higienizar os dentes com liberdade total. Além disso, as consultas são mais espaçadas e o tempo total de alinhamento é até 40% menor do que com braquetes metálicos convencionais.",
  },
  {
    id: "pagamento",
    q: "Quais são as condições de pagamento e facilidades?",
    a: "Oferecemos flexibilidade personalizada para o seu planejamento financeiro: parcelamento facilitado no cartão de crédito em até 12x ou 18x, condições especiais para pagamentos programados à vista e fornecemos toda a documentação comprobatória e relatórios clínicos necessários para reembolso junto ao seu convênio médico.",
  },
  {
    id: "estrutura",
    q: "A clínica possui estacionamento e fácil acesso?",
    a: "Sim. Estamos estrategicamente localizados em São Paulo com serviço cortesia de valet e manobrista na porta, segurança privativa e acessibilidade total para cadeirantes em todos os consultórios.",
  },
];

export function FaqSection({ isVisible = true }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>("avaliacao");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative py-12 sm:py-18 lg:py-22 bg-[#FAF7F2] transition-colors"
      aria-label="Perguntas Frequentes sobre Tratamentos Odontológicos"
    >
      <div className="site-container">
        {/* Cabeçalho da Seção */}
        <div
          className={`max-w-[760px] transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="h-px w-5 sm:w-6 bg-[#966D38]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#966D38] uppercase">
              Esclarecimentos Clínicos
            </span>
          </div>

          <h2 className="mt-2 font-serif text-[26px] xs:text-[30px] sm:text-4xl lg:text-[44px] leading-[1.14] font-normal tracking-tight text-[#221B16]">
            Dúvidas frequentes.
          </h2>

          <p className="mt-1.5 sm:mt-2.5 text-[13.5px] sm:text-base text-[#665D53] leading-relaxed max-w-[640px]">
            Respostas claras e transparentes para orientar você a dar o próximo passo rumo ao seu
            novo sorriso com total tranquilidade e segurança.
          </p>
        </div>

        {/* Grade: No mobile, perguntas aparecem primeiro com o concierge logo abaixo de forma compacta */}
        <div
          className={`mt-6 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-start transition-all duration-700 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {/* Coluna de Perguntas (Acordeão) */}
          <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col gap-2.5 sm:gap-3">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#B89264] bg-[#FAF5EF] shadow-sm ring-1 ring-[#B89264]/30"
                      : "border-[#EBE3D7] bg-white hover:border-[#D5C4B0] hover:bg-[#FAF7F2]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-3.5 sm:p-5 text-left cursor-pointer focus-visible:outline-none min-h-[48px]"
                  >
                    <span
                      className={`font-serif text-[15px] sm:text-[18px] leading-snug pr-3 transition-colors ${
                        isOpen ? "text-[#221B16] font-medium" : "text-[#2A231E]"
                      }`}
                    >
                      {faq.q}
                    </span>

                    <div
                      className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-[#3B2920] text-white rotate-180 shadow-2xs"
                          : "border border-[#DCD3C7] text-[#554A40] bg-white"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-3.5 w-3.5" />
                      ) : (
                        <Plus className="h-3.5 w-3.5" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-[14px] text-[#554D43] leading-relaxed border-t border-[#EFE8DE]">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Coluna Concierge: No mobile fica abaixo das perguntas de forma compacta e convidativa */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col gap-4">
            <div className="rounded-[20px] sm:rounded-[24px] border border-[#E8DFD3] bg-white p-4.5 sm:p-7 shadow-[0_4px_24px_rgba(72,51,35,0.04)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-[#F6EFE6] text-[#8C6239] shadow-2xs">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[9.5px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#966D38] block">
                    Canal Direto
                  </span>
                  <h3 className="font-serif text-base sm:text-xl font-normal text-[#221B16] leading-snug">
                    Prefere falar agora?
                  </h3>
                </div>
              </div>

              <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-[13.5px] text-[#5C5348] leading-relaxed">
                Nossa equipe concierge está à disposição no WhatsApp para esclarecer prazos, valores
                e agendamentos de forma rápida e confidencial.
              </p>

              <div className="mt-3.5 sm:mt-5 pt-3 sm:pt-4 border-t border-[#F0EAE0] space-y-2 text-xs text-[#554C42]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#8C6239] shrink-0" />
                  <span>Atendimento clínico individualizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-[#8C6239] shrink-0" />
                  <span>Respostas ágeis em horário comercial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="h-3.5 w-3.5 text-[#8C6239] shrink-0" />
                  <span>Estacionamento com valet cortesia</span>
                </div>
              </div>

              <div className="mt-4 sm:mt-6">
                <a
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de esclarecer algumas dúvidas com a equipe da Lumière Odontologia.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#3B2920] hover:bg-[#281B14] w-full py-3 sm:py-3.5 px-4 sm:px-5 text-xs sm:text-sm font-medium text-white shadow-sm transition-all duration-300 hover:shadow-md active:scale-95 cursor-pointer"
                >
                  <span>Conversar pelo WhatsApp</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
