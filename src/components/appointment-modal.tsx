import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Calendar as CalendarIcon,
  CheckCircle2,
  Clock,
  Sparkles,
  User,
  Phone,
  Mail,
  ShieldCheck,
} from "lucide-react";

interface AppointmentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialTreatment?: string;
}

export function AppointmentModal({
  open,
  onOpenChange,
  initialTreatment = "Avaliação Completa",
}: AppointmentModalProps) {
  const [treatment, setTreatment] = useState(initialTreatment);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredShift, setPreferredShift] = useState("Manhã (08h - 12h)");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setPhone("");
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[480px] p-6 border-border bg-card shadow-2xl transition-all duration-300">
        {!submitted ? (
          <>
            <DialogHeader className="space-y-1.5 text-left">
              <div className="flex items-center gap-2 text-primary">
                <Sparkles className="h-4 w-4 animate-spin-slow" />
                <span className="text-[10px] tracking-[0.25em] uppercase font-medium">
                  Lumière Odontologia
                </span>
              </div>
              <DialogTitle className="font-serif text-2xl tracking-normal">
                Agende sua avaliação
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground">
                Dê o primeiro passo para o seu novo sorriso. Nossa equipe entrará em contato em
                minutos para confirmar o melhor horário.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div className="space-y-1">
                <label className="text-[11px] font-medium text-foreground/90">
                  Tratamento de interesse
                </label>
                <select
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-xs transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="Avaliação Completa">
                    Avaliação Clínica Geral & Checkup Digital
                  </option>
                  <option value="Lentes de Contato Dental">Lentes de Contato Dental</option>
                  <option value="Clareamento Dental">Clareamento Dental a Laser</option>
                  <option value="Implantes Dentários">Implantes Dentários & Próteses</option>
                  <option value="Ortodontia">Ortodontia / Alinhadores Invisíveis</option>
                  <option value="Harmonização Facial">Harmonização Orofacial</option>
                  <option value="Odontologia Estética">Odontologia Estética Restauradora</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-medium text-foreground/90">
                  Seu nome completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Carlos Eduardo de Oliveira"
                    className="w-full rounded-md border border-border bg-background pl-9 pr-3 py-2 text-xs transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-medium text-foreground/90">
                  WhatsApp / Telefone
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full rounded-md border border-border bg-background pl-9 pr-3 py-2 text-xs transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-medium text-foreground/90">
                  Melhor período para atendimento
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    "Manhã (08h - 12h)",
                    "Tarde (13h - 18h)",
                    "Noite (18h - 20h)",
                    "Sábado (08h - 14h)",
                  ].map((shift) => (
                    <button
                      type="button"
                      key={shift}
                      onClick={() => setPreferredShift(shift)}
                      className={`rounded border px-2.5 py-1.5 text-left text-[11px] transition-all ${
                        preferredShift === shift
                          ? "border-primary bg-primary/10 text-primary font-medium"
                          : "border-border text-foreground/70 hover:border-foreground/40"
                      }`}
                    >
                      {shift}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3 text-primary" /> Seus dados estão seguros
                </span>
                <span>Atendimento sigiloso</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="shimmer-button w-full rounded-md bg-primary py-2.5 text-xs font-semibold text-primary-foreground shadow transition hover:opacity-90 active:scale-[0.98] disabled:opacity-60"
              >
                {loading ? "Processando solicitação..." : "Confirmar Solicitação de Avaliação"}
              </button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary animate-pulse-glow">
              <CheckCircle2 className="h-10 w-10 text-primary transition-transform duration-500 scale-110" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-semibold">Solicitação Recebida!</h3>
              <p className="text-xs text-muted-foreground max-w-[320px] mx-auto">
                Olá, <span className="font-semibold text-foreground">{name}</span>! Nossa recepção
                entrará em contato via WhatsApp no número informado para finalizar seu horário em{" "}
                <span className="text-primary font-medium">{preferredShift}</span>.
              </p>
            </div>
            <div className="rounded-md border border-border bg-secondary/50 p-3 text-left text-[11px] space-y-1">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tratamento:</span>
                <span className="font-medium">{treatment}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Endereço:</span>
                <span className="font-medium">Av. Paulista, 1000 - Bela Vista, SP</span>
              </div>
            </div>
            <button
              type="button"
              onClick={handleClose}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-xs font-medium text-primary-foreground transition hover:opacity-90"
            >
              Concluir
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
