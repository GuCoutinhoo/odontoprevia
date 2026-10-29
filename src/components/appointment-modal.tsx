import { useState, useEffect, useCallback } from "react";
import {
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  User,
  Phone,
  ShieldCheck,
  X,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Smile,
  Sun,
  Heart,
  Scan,
  MessageCircle,
} from "lucide-react";
import { CLINIC_CONFIG, getWhatsAppUrl } from "@/config/clinic";

interface AppointmentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialTreatment?: string;
  defaultTreatment?: string;
}

interface TreatmentOption {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof Sparkles;
}

interface SmileGoalOption {
  id: string;
  title: string;
  subtitle: string;
}

interface ShiftOption {
  id: string;
  title: string;
  time: string;
  badge: string;
}

const TREATMENTS_LIST: TreatmentOption[] = [
  {
    id: "lentes",
    title: "Lentes de Contato Dental & Facetas",
    subtitle: "Harmonia áurea, fechamento de diastemas e alinhamento",
    icon: Sparkles,
  },
  {
    id: "alinhadores",
    title: "Alinhadores Invisíveis",
    subtitle: "Ortodontia estética digital, sem fios ou bráquetes metálicos",
    icon: Smile,
  },
  {
    id: "implantes",
    title: "Implantes Dentários Guiados",
    subtitle: "Cirurgia milimétrica sem cortes amplos e carga imediata",
    icon: ShieldCheck,
  },
  {
    id: "clareamento",
    title: "Clareamento Biomimético",
    subtitle: "Brilho natural a laser, sem sensibilidade ou desgaste",
    icon: Sun,
  },
  {
    id: "harmonizacao",
    title: "Harmonização Orofacial",
    subtitle: "Equilíbrio facial sutil com preenchedores e toxina",
    icon: Heart,
  },
  {
    id: "avaliacao",
    title: "Avaliação Geral com Scanner 3D",
    subtitle: "Mapeamento digital da boca e diagnóstico completo",
    icon: Scan,
  },
];

const SMILE_GOALS: SmileGoalOption[] = [
  {
    id: "alinhamento",
    title: "Alinhamento e correção de dentes tortos",
    subtitle: "Corrigir dentes apinhados, girados ou mordida inadequada",
  },
  {
    id: "cor",
    title: "Cor mais clara e sorriso luminoso",
    subtitle: "Remover manchas, amarelamento e conquistar um tom radiante",
  },
  {
    id: "formato",
    title: "Formato, diastemas ou dentes desgastados",
    subtitle: "Ajustar dentes curtos, fraturados ou com espaçamento indesejado",
  },
  {
    id: "perda",
    title: "Substituição de dentes ausentes",
    subtitle: "Restaurar mastigação e confiança com dentes fixos definitivos",
  },
  {
    id: "harmonia",
    title: "Harmonia facial e rejuvenescimento",
    subtitle: "Equilíbrio sutil entre lábios, sorriso gengival e contornos",
  },
  {
    id: "saude",
    title: "Check-up completo e saúde bucal geral",
    subtitle: "Diagnóstico preventivo em 3D, limpeza profunda e profilaxia",
  },
];

const SHIFT_OPTIONS: ShiftOption[] = [
  {
    id: "manha",
    title: "Manhã",
    time: "08h00 às 12h00",
    badge: "Início do dia",
  },
  {
    id: "tarde",
    title: "Tarde",
    time: "13h00 às 18h00",
    badge: "Mais flexível",
  },
  {
    id: "noite",
    title: "Fim de tarde / Noite",
    time: "18h00 às 20h00",
    badge: "Pós-expediente",
  },
  {
    id: "sabado",
    title: "Sábado",
    time: "08h00 às 14h00",
    badge: "Fim de semana",
  },
];

export function AppointmentModal({
  open,
  onOpenChange,
  initialTreatment,
  defaultTreatment,
}: AppointmentModalProps) {
  const [step, setStep] = useState(1);
  const [selectedTreatment, setSelectedTreatment] = useState<string>("");
  const [selectedGoal, setSelectedGoal] = useState<string>("");
  const [selectedShift, setSelectedShift] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Inicializa o tratamento quando a prop for fornecida
  useEffect(() => {
    const candidate = defaultTreatment || initialTreatment;
    if (candidate) {
      const match = TREATMENTS_LIST.find(
        (t) =>
          t.title.toLowerCase().includes(candidate.toLowerCase()) ||
          candidate.toLowerCase().includes(t.title.toLowerCase()),
      );
      if (match) {
        setSelectedTreatment(match.title);
      } else {
        setSelectedTreatment(candidate);
      }
    }
  }, [initialTreatment, defaultTreatment, open]);

  // Bloqueia rolagem do body quando modal estiver aberto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClose = useCallback(() => {
    onOpenChange(false);
    setTimeout(() => {
      setStep(1);
      setIsSubmitted(false);
      setErrorMessage("");
    }, 350);
  }, [onOpenChange]);

  // Tecla Escape para fechar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, handleClose]);

  // Máscara brasileira de telefone (11) 98765-4321
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    setPhone(value);
  };

  const handleNext = () => {
    setErrorMessage("");
    if (step === 1) {
      if (!selectedTreatment) {
        setErrorMessage("Por favor, selecione um procedimento para continuar.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!selectedGoal) {
        setErrorMessage("Por favor, selecione o que deseja melhorar no seu sorriso.");
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!selectedShift) {
        setErrorMessage("Por favor, selecione um período de preferência.");
        return;
      }
      setStep(4);
    }
  };

  const handleBack = () => {
    setErrorMessage("");
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim() || name.trim().length < 3) {
      setErrorMessage("Por favor, informe seu nome completo.");
      return;
    }

    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length < 10) {
      setErrorMessage("Por favor, informe um WhatsApp ou telefone com DDD válido.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  if (!open) return null;

  const progressPercent = isSubmitted ? 100 : (step / 4) * 100;

  const prefilledWhatsAppMessage = `Olá! Meu nome é ${name}. Gostaria de agendar minha avaliação na Lumière Odontologia:
• Procedimento: ${selectedTreatment || "Avaliação Clínica"}
• Objetivo: ${selectedGoal || "Personalização estética"}
• Período preferido: ${selectedShift || "Flexível"}
${notes ? `• Observação: ${notes}` : ""}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="questionnaire-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Overlay Escuro Semi-transparente */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/65 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
      />

      {/* Container Centralizado do Modal com Design Premium */}
      <div className="relative z-10 w-full max-w-[620px] max-h-[92vh] flex flex-col rounded-[28px] sm:rounded-[32px] border border-[#E8DFD3] bg-[#FAF8F5] shadow-[0_25px_60px_-15px_rgba(40,27,20,0.35)] overflow-hidden transition-all duration-300 animate-in zoom-in-95 fade-in">
        {/* Barra de Progresso Fina e Animada no Topo */}
        <div className="w-full h-1.5 bg-[#EAE0D3]/80 relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#966D38] via-[#B89264] to-[#C5A059] transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Cabeçalho do Questionário */}
        <div className="p-5 sm:p-6 pb-3 sm:pb-4 border-b border-[#EFE8DE] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#EFE7DC] text-[#8C6239]">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <div className="leading-tight">
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#966D38] block">
                Lumière Odontologia
              </span>
              <span className="text-xs text-[#7A6E63] font-medium">Questionário Concierge</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {!isSubmitted && (
              <span className="rounded-full bg-[#EAE1D4] px-3 py-1 text-[11px] sm:text-xs font-semibold text-[#5A4638] tracking-wide">
                Etapa {step} de 4
              </span>
            )}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Fechar questionário"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DCD3C7] text-[#554D43] transition-colors hover:bg-[#EBE2D5] hover:text-[#1E1B18] cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Conteúdo Dinâmico por Etapa */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-7 py-5">
          {!isSubmitted ? (
            <div>
              {/* ETAPA 1 — Procedimento de Interesse */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="space-y-1">
                    <h3
                      id="questionnaire-title"
                      className="font-serif text-xl sm:text-2xl font-normal text-[#1E1B18] leading-tight"
                    >
                      Qual procedimento você tem interesse em realizar?
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#6B6156]">
                      Selecione a opção principal que você gostaria de avaliar com os nossos
                      especialistas.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {TREATMENTS_LIST.map((item) => {
                      const isSelected = selectedTreatment === item.title;
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => {
                            setSelectedTreatment(item.title);
                            setErrorMessage("");
                          }}
                          className={`group text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? "border-[#966D38] bg-[#F5ECE1] shadow-sm ring-1 ring-[#966D38]/30"
                              : "border-[#E8DFD3] bg-white hover:border-[#C8BAAA] hover:bg-[#FAF6F0]"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div
                              className={`flex h-8 w-8 items-center justify-center rounded-xl transition-colors ${
                                isSelected
                                  ? "bg-[#966D38] text-white"
                                  : "bg-[#F5EFE6] text-[#7A5328] group-hover:bg-[#EAE0D3]"
                              }`}
                            >
                              <Icon className="h-4 w-4" />
                            </div>

                            <div
                              className={`h-4.5 w-4.5 rounded-full border flex items-center justify-center transition-colors ${
                                isSelected
                                  ? "border-[#966D38] bg-[#966D38] text-white"
                                  : "border-[#D0C4B6] bg-white"
                              }`}
                            >
                              {isSelected && <span className="h-2 w-2 rounded-full bg-white" />}
                            </div>
                          </div>

                          <div className="mt-2.5">
                            <h4
                              className={`text-sm font-semibold leading-snug transition-colors ${
                                isSelected ? "text-[#221B16]" : "text-[#2A231E]"
                              }`}
                            >
                              {item.title}
                            </h4>
                            <p className="mt-0.5 text-[11.5px] text-[#665D53] leading-snug line-clamp-2">
                              {item.subtitle}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ETAPA 2 — Objetivo com o Sorriso */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="space-y-1">
                    <h3
                      id="questionnaire-title"
                      className="font-serif text-xl sm:text-2xl font-normal text-[#1E1B18] leading-tight"
                    >
                      O que você mais deseja melhorar no seu sorriso?
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#6B6156]">
                      Isso ajuda nossos dentistas a preparar um planejamento digital 100%
                      personalizado.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {SMILE_GOALS.map((item) => {
                      const isSelected = selectedGoal === item.title;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => {
                            setSelectedGoal(item.title);
                            setErrorMessage("");
                          }}
                          className={`group text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? "border-[#966D38] bg-[#F5ECE1] shadow-sm ring-1 ring-[#966D38]/30"
                              : "border-[#E8DFD3] bg-white hover:border-[#C8BAAA] hover:bg-[#FAF6F0]"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h4
                              className={`text-sm font-semibold leading-snug transition-colors ${
                                isSelected ? "text-[#221B16]" : "text-[#2A231E]"
                              }`}
                            >
                              {item.title}
                            </h4>

                            <div
                              className={`h-4.5 w-4.5 shrink-0 rounded-full border flex items-center justify-center transition-colors ${
                                isSelected
                                  ? "border-[#966D38] bg-[#966D38] text-white"
                                  : "border-[#D0C4B6] bg-white"
                              }`}
                            >
                              {isSelected && <span className="h-2 w-2 rounded-full bg-white" />}
                            </div>
                          </div>

                          <p className="mt-1.5 text-[11.5px] text-[#665D53] leading-snug">
                            {item.subtitle}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ETAPA 3 — Período de Atendimento */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="space-y-1">
                    <h3
                      id="questionnaire-title"
                      className="font-serif text-xl sm:text-2xl font-normal text-[#1E1B18] leading-tight"
                    >
                      Qual o seu período de preferência para o atendimento?
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#6B6156]">
                      Nossa recepção concierge reservará o melhor horário na agenda exclusiva da
                      clínica.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {SHIFT_OPTIONS.map((item) => {
                      const isSelected = selectedShift === `${item.title} (${item.time})`;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => {
                            setSelectedShift(`${item.title} (${item.time})`);
                            setErrorMessage("");
                          }}
                          className={`group text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? "border-[#966D38] bg-[#F5ECE1] shadow-sm ring-1 ring-[#966D38]/30"
                              : "border-[#E8DFD3] bg-white hover:border-[#C8BAAA] hover:bg-[#FAF6F0]"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span
                              className={`rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold tracking-wide ${
                                isSelected
                                  ? "bg-[#966D38] text-white"
                                  : "bg-[#F5EFE6] text-[#7A5328]"
                              }`}
                            >
                              {item.badge}
                            </span>

                            <div
                              className={`h-4.5 w-4.5 rounded-full border flex items-center justify-center transition-colors ${
                                isSelected
                                  ? "border-[#966D38] bg-[#966D38] text-white"
                                  : "border-[#D0C4B6] bg-white"
                              }`}
                            >
                              {isSelected && <span className="h-2 w-2 rounded-full bg-white" />}
                            </div>
                          </div>

                          <div className="mt-3">
                            <h4 className="text-base font-serif font-medium text-[#1E1B18]">
                              {item.title}
                            </h4>
                            <div className="mt-0.5 flex items-center gap-1.5 text-xs text-[#665D53]">
                              <Clock className="h-3 w-3 text-[#966D38]" />
                              <span>{item.time}</span>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ETAPA 4 — Dados de Contato e Conclusão */}
              {step === 4 && (
                <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in duration-300">
                  <div className="space-y-1">
                    <h3
                      id="questionnaire-title"
                      className="font-serif text-xl sm:text-2xl font-normal text-[#1E1B18] leading-tight"
                    >
                      Onde podemos enviar a confirmação da sua avaliação?
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#6B6156]">
                      Nossa equipe concierge entrará em contato para confirmar sua reserva com total
                      discrição.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#E8DFD3] bg-white p-4 sm:p-5 space-y-3.5 shadow-2xs">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#7A6450]">
                        Seu nome completo *
                      </label>
                      <div className="relative mt-1">
                        <User className="absolute left-3.5 top-3.5 h-4 w-4 text-[#966D38]" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            setErrorMessage("");
                          }}
                          placeholder="Ex: Carlos Eduardo de Oliveira"
                          className="w-full rounded-xl border border-[#DECFC0] bg-[#FAF8F5] pl-10 pr-3.5 py-2.5 text-sm font-medium text-[#1E1B18] placeholder:text-[#A89C8F] focus:border-[#966D38] focus:ring-1 focus:ring-[#966D38]/20 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#7A6450]">
                        WhatsApp ou celular com DDD *
                      </label>
                      <div className="relative mt-1">
                        <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-[#966D38]" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => {
                            handlePhoneChange(e);
                            setErrorMessage("");
                          }}
                          placeholder="(11) 98765-4321"
                          className="w-full rounded-xl border border-[#DECFC0] bg-[#FAF8F5] pl-10 pr-3.5 py-2.5 text-sm font-medium text-[#1E1B18] placeholder:text-[#A89C8F] focus:border-[#966D38] focus:ring-1 focus:ring-[#966D38]/20 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#7A6450]">
                        Observações ou preferências específicas (opcional)
                      </label>
                      <input
                        type="text"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Ex: Gostaria de conhecer o Scanner 3D no primeiro atendimento..."
                        className="mt-1 w-full rounded-xl border border-[#DECFC0] bg-[#FAF8F5] px-3.5 py-2.5 text-xs sm:text-sm font-medium text-[#1E1B18] placeholder:text-[#A89C8F] focus:border-[#966D38] focus:ring-1 focus:ring-[#966D38]/20 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Resumo do Pedido do Paciente */}
                  <div className="rounded-xl border border-[#EAE0D3] bg-[#F5EDE3] p-3 text-xs space-y-1 text-[#483B30]">
                    <div className="flex justify-between">
                      <span className="text-[#7A6E63]">Tratamento:</span>
                      <span className="font-semibold text-[#1E1B18]">{selectedTreatment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#7A6E63]">Período:</span>
                      <span className="font-semibold text-[#1E1B18]">{selectedShift}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-[#7A6E63] pt-0.5">
                    <ShieldCheck className="h-4 w-4 text-[#966D38] shrink-0" />
                    <span>
                      Seus dados são protegidos por sigilo médico e utilizados exclusivamente para o
                      seu agendamento.
                    </span>
                  </div>
                </form>
              )}

              {/* Mensagem de Erro de Validação */}
              {errorMessage && (
                <div className="mt-3 rounded-xl border border-[#E8B8B8] bg-[#FDF2F2] p-2.5 text-xs text-[#B83838] font-medium">
                  {errorMessage}
                </div>
              )}
            </div>
          ) : (
            /* TELA DE SUCESSO / CONFIRMAÇÃO */
            <div className="py-4 sm:py-6 text-center space-y-4 animate-in zoom-in-95 duration-400">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EFE7DC] text-[#966D38] shadow-inner">
                <CheckCircle2 className="h-10 w-10 text-[#966D38] animate-in zoom-in-75 duration-500" />
              </div>

              <div className="space-y-1.5 max-w-[420px] mx-auto">
                <h3 className="font-serif text-2xl font-normal text-[#1E1B18]">
                  Solicitação Recebida com Sucesso!
                </h3>
                <p className="text-xs sm:text-[13px] text-[#665D53] leading-relaxed">
                  Olá, <span className="font-semibold text-[#1E1B18]">{name}</span>! Nossa recepção
                  concierge já recebeu suas informações e entrará em contato via WhatsApp para
                  confirmar o seu horário exclusivo.
                </p>
              </div>

              {/* Resumo Consolidado do Agendamento */}
              <div className="rounded-2xl border border-[#E8DFD3] bg-white p-4 text-left text-xs space-y-2 max-w-[460px] mx-auto shadow-2xs">
                <div className="flex justify-between border-b border-[#F0EAE0] pb-1.5">
                  <span className="text-[#7A6E63]">Tratamento:</span>
                  <span className="font-semibold text-[#1E1B18]">{selectedTreatment}</span>
                </div>
                <div className="flex justify-between border-b border-[#F0EAE0] pb-1.5">
                  <span className="text-[#7A6E63]">Objetivo do sorriso:</span>
                  <span className="font-semibold text-[#1E1B18] text-right max-w-[240px] truncate">
                    {selectedGoal}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#F0EAE0] pb-1.5">
                  <span className="text-[#7A6E63]">Período de preferência:</span>
                  <span className="font-semibold text-[#1E1B18]">{selectedShift}</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="text-[#7A6E63]">Contato:</span>
                  <span className="font-semibold text-[#1E1B18]">{phone}</span>
                </div>
              </div>

              {/* Botão de Contato Imediato via WhatsApp Real */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppUrl(prefilledWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] px-5 py-3 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all duration-300 active:scale-95 cursor-pointer w-full sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Conversar agora no WhatsApp com a Concierge</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>

                <button
                  type="button"
                  onClick={handleClose}
                  className="rounded-xl border border-[#D5C7B7] bg-white hover:bg-[#F5EDE3] px-5 py-3 text-xs sm:text-sm font-medium text-[#483B30] transition-colors cursor-pointer w-full sm:w-auto"
                >
                  Concluir e fechar
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Rodapé com Navegação (Voltar / Avançar / Concluir) */}
        {!isSubmitted && (
          <div className="p-4 sm:p-5 border-t border-[#EFE8DE] bg-[#F7F2EB] flex items-center justify-between gap-3">
            <div>
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[#DCD3C7] bg-white hover:bg-[#EFE8DD] px-4 py-2.5 text-xs sm:text-sm font-medium text-[#483B30] transition-colors cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Voltar</span>
                </button>
              ) : (
                <div className="text-[11px] text-[#7A6E63] hidden sm:block">
                  Leva menos de 1 minuto
                </div>
              )}
            </div>

            <div>
              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#3B2920] hover:bg-[#251912] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md active:scale-95 cursor-pointer"
                >
                  <span>Continuar</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#966D38] hover:bg-[#7D5829] px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md active:scale-95 disabled:opacity-60 cursor-pointer"
                >
                  <Calendar className="h-4 w-4" />
                  <span>{isSubmitting ? "Processando..." : "Confirmar Solicitação"}</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
