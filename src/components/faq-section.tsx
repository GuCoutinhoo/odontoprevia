import { useState } from "react";
import { ArrowUpRight, ArrowRight, MessageSquare, Plus, Minus, HelpCircle } from "lucide-react";
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
    a: "Em uma consulta dedicada e sem pressa, conversamos sobre seus objetivos e desejos estéticos. Realizamos o escaneamento intraoral 3D de alta precisão (sem massas) e fotos profissionais. Na mesma sessão, você já visualiza a simulação tridimensional do seu caso e recebe um plano de tratamento claro e detalhado.",
  },
  {
    id: "dor",
    q: "Os procedimentos causam dor ou desconforto?",
    a: "Não. Na Lumière, priorizamos o atendimento 100% humanizado e sem dor. Utilizamos tecnologia de anestesia computadorizada sem agulhas convencionais, protocolos prévios contra sensibilidade dental e, para pacientes que preferem relaxamento profundo, oferecemos sedação consciente supervisionada por médico anestesiologista.",
  },
  {
    id: "lentes",
    q: "Qual a durabilidade e resistência das lentes de porcelana?",
    a: "Trabalhamos exclusivamente com cerâmicas suíças e alemãs de padrão ouro mundial (como E-Max e feldspáticas). Com a correta higienização e revisões preventivas semestrais, as lentes possuem durabilidade que frequentemente ultrapassa 15 a 20 anos, mantendo o brilho, a textura e sem escurecer ou manchar com café ou vinho.",
  },
  {
    id: "alinhadores",
    q: "Qual a diferença entre alinhadores invisíveis e aparelhos tradicionais?",
    a: "Os alinhadores são placas transparentes removíveis, praticamente imperceptíveis no dia a dia. Você retira para se alimentar e higienizar os dentes com liberdade total. Além disso, as consultas são mais espaçadas e o tempo total de alinhamento é até 40% menor do que com braquetes metálicos convencionais.",
  },
  {
    id: "pagamento",
    q: "Quais são as condições de pagamento e parcelamento?",
    a: "Oferecemos flexibilidade personalizada para o seu planejamento financeiro: parcelamento facilitado em até 12x ou 18x no cartão de crédito, condições especiais para pagamentos programados à vista e fornecemos toda a documentação comprobatória e relatórios clínicos necessários para reembolso junto ao seu convênio médico.",
  },
  {
    id: "estrutura",
    q: "A clínica possui estacionamento e fácil acesso?",
    a: "Sim. Estamos estrategicamente localizados na Vila Nova Conceição em São Paulo, com serviço cortesia de valet e manobrista na porta, segurança privativa e acessibilidade total para cadeirantes em todos os consultórios.",
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
      className="relative py-16 sm:py-20 lg:py-24 bg-[#FAF8F5]"
      aria-label="Perguntas Frequentes sobre Tratamentos Odontológicos"
    >
      <div className="mx-auto w-[min(calc(100%-48px),1440px)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Coluna da Esquerda (Apresentação & Card de Dúvidas) */}
          <div
            className={`lg:col-span-5 flex flex-col justify-between transition-all duration-700 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            <div>
              <div className="flex items-center gap-2.5">
                <span className="h-px w-5 bg-[#9E732B]" />
                <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-[#966D38] uppercase">
                  Esclarecimentos Clínicos
                </p>
              </div>

              <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] font-normal tracking-tight text-[#1E1B18]">
                Dúvidas frequentes.
              </h2>

              <p className="mt-3 text-sm sm:text-base text-[#5C554C] leading-relaxed max-w-[440px]">
                Respostas transparentes para ajudar você a dar o próximo passo rumo ao seu novo
                sorriso com total tranquilidade e segurança.
              </p>
            </div>

            {/* Card "Ainda tem dúvidas?" */}
            <div className="mt-8 rounded-2xl border border-[#E5DAD0] bg-[#F4EFE8] p-6 shadow-2xs">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-[#DDD3C5] text-[#483323] shadow-2xs">
                  <MessageSquare className="h-5 w-5" strokeWidth={1.75} />
                </div>

                <div>
                  <h4 className="font-serif text-base sm:text-lg font-normal text-[#1E1B18]">
                    Ainda tem alguma dúvida específica?
                  </h4>
                  <p className="mt-1 text-xs text-[#665D53] leading-relaxed">
                    Nossa equipe concierge está disponível em tempo real no WhatsApp para orientar
                    você.
                  </p>

                  <div className="mt-4">
                    <a
                      href={getWhatsAppUrl(
                        "Olá! Gostaria de esclarecer algumas dúvidas sobre os tratamentos da Lumière Odontologia.",
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-xl bg-[#483323] hover:bg-[#342417] px-5 py-2.5 text-xs font-medium text-white shadow-2xs transition-all active:scale-95 cursor-pointer"
                    >
                      <span>Conversar com a equipe</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna da Direita (Acordeão de Perguntas) */}
          <div
            className={`lg:col-span-7 flex flex-col justify-between transition-all duration-700 delay-150 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <div className="space-y-3" role="region" aria-label="Acordeão de Perguntas Frequentes">
              {FAQS.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-[#C5A059] bg-white shadow-[0_6px_20px_rgba(72,51,35,0.05)] ring-1 ring-[#C5A059]/40"
                        : "border-[#E8DFD3] bg-white/80 hover:bg-white hover:border-[#D1B58C]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer focus-visible:outline-none"
                    >
                      <span className="font-serif text-base sm:text-lg font-normal text-[#1E1B18] pr-4 leading-snug">
                        {faq.q}
                      </span>
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "border-[#483323] bg-[#483323] text-white"
                            : "border-[#DCD3C7] text-[#4A3D31] bg-[#FAF8F5]"
                        }`}
                      >
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5C554C] leading-relaxed border-t border-[#F2ECE3]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-5 flex justify-end">
              <a
                href={getWhatsAppUrl("Olá! Gostaria de tirar dúvidas com a equipe da Lumière.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#483323] hover:text-[#7A5328] transition-colors"
              >
                <span>Falar diretamente com um especialista</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
