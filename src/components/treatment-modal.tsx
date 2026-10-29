import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Check, Clock, Sparkles, ArrowUpRight, X } from "lucide-react";

export interface TreatmentInfo {
  img: string;
  category?: string;
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
      <DialogContent
        className="max-w-[92vw] sm:max-w-[560px] p-0 overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#E8DFD3] bg-[#FAF8F5] shadow-2xl transition-all duration-300"
        aria-describedby="treatment-modal-desc"
      >
        {/* Imagem de Topo com Efeito Suave */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F0EAE1]">
          <img
            src={treatment.img}
            alt={treatment.t}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Badges e Título na Imagem */}
          <div className="absolute bottom-4 left-5 right-5 sm:bottom-5 sm:left-6 sm:right-6">
            {treatment.category && (
              <span className="inline-block rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-[#483A2E] shadow-sm mb-1.5">
                {treatment.category}
              </span>
            )}
            <DialogTitle className="font-serif text-2xl sm:text-3xl font-normal text-white [text-shadow:_0_1px_4px_rgba(0,0,0,0.6)]">
              {treatment.t}
            </DialogTitle>
          </div>
        </div>

        {/* Conteúdo Detalhado */}
        <div className="p-5 sm:p-6 space-y-4 max-h-[60vh] overflow-y-auto">
          <DialogDescription
            id="treatment-modal-desc"
            className="text-xs sm:text-sm leading-relaxed text-[#5F574E]"
          >
            {treatment.longDesc}
          </DialogDescription>

          {/* Duração & Planejamento */}
          <div className="grid grid-cols-2 gap-3 py-3 border-y border-[#EAE2D7]">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EFE7DC] text-[#7A5328]">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8A7F73] block">
                  Duração média
                </span>
                <span className="font-medium text-[#2E241B]">{treatment.duration}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EFE7DC] text-[#7A5328]">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8A7F73] block">
                  Planejamento
                </span>
                <span className="font-medium text-[#2E241B]">{treatment.sessions}</span>
              </div>
            </div>
          </div>

          {/* Destaques e Benefícios */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#8C6A3C]">
              Principais Benefícios
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {treatment.benefits.map((b) => (
                <div key={b} className="flex items-start gap-2 text-xs sm:text-sm text-[#483E34]">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#483323] text-white">
                    <Check className="h-2.5 w-2.5" />
                  </div>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="pt-3 flex flex-col sm:flex-row gap-2.5">
            <button
              type="button"
              onClick={() => {
                onOpenChange(false);
                onSchedule(treatment.t);
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#483323] hover:bg-[#342417] py-3 px-5 text-xs sm:text-sm font-medium text-white shadow-sm transition-all duration-300 hover:shadow active:scale-95 cursor-pointer"
            >
              <span>Agendar avaliação deste procedimento</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="rounded-full border border-[#DCD3C7] px-5 py-3 text-xs sm:text-sm font-medium text-[#4A3D31] hover:bg-[#EFE8DE] transition-colors cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
