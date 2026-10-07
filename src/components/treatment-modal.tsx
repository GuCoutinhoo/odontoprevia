import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Check, Clock, Sparkles, Shield, ArrowRight } from "lucide-react";

export interface TreatmentInfo {
  img: string;
  t: string;
  d: string;
  longDesc: string;
  benefits: string[];
  duration: string;
  sessions: string;
}

interface TreatmentModalProps {
  treatment: TreatmentInfo | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSchedule: (treatmentTitle: string) => void;
}

export function TreatmentModal({ treatment, open, onOpenChange, onSchedule }: TreatmentModalProps) {
  if (!treatment) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden border-border bg-card shadow-2xl transition-all duration-300">
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={treatment.img}
            alt={treatment.t}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="eyebrow bg-background/80 px-2 py-0.5 rounded backdrop-blur-sm">
              Procedimento Especializado
            </span>
            <h2 className="font-serif text-2xl font-bold text-foreground mt-1">{treatment.t}</h2>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-xs leading-relaxed text-foreground/80">{treatment.longDesc}</p>

          <div className="grid grid-cols-2 gap-3 py-2 border-y border-border">
            <div className="flex items-center gap-2 text-xs">
              <Clock className="h-4 w-4 text-primary" />
              <div>
                <span className="text-[10px] text-muted-foreground block">Duração média</span>
                <span className="font-medium text-foreground">{treatment.duration}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Sparkles className="h-4 w-4 text-primary" />
              <div>
                <span className="text-[10px] text-muted-foreground block">Planejamento</span>
                <span className="font-medium text-foreground">{treatment.sessions}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Destaques do Procedimento
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {treatment.benefits.map((b) => (
                <div key={b} className="flex items-start gap-2 text-xs">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Check className="h-2.5 w-2.5" />
                  </div>
                  <span className="text-foreground/90">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={() => {
                onOpenChange(false);
                onSchedule(treatment.t);
              }}
              className="shimmer-button flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-primary py-2.5 text-xs font-medium text-primary-foreground shadow transition hover:opacity-90 active:scale-[0.98]"
            >
              Agendar Avaliação deste Tratamento
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => onOpenChange(false)}
              className="rounded-md border border-border px-4 py-2.5 text-xs font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
