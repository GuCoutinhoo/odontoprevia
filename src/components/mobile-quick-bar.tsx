import { Calendar, MessageCircle, ArrowUpRight } from "lucide-react";
import { getWhatsAppUrl } from "@/config/clinic";

interface MobileQuickBarProps {
  onOpenAppointment: (treatmentName?: string) => void;
  visible?: boolean;
}

export function MobileQuickBar({ onOpenAppointment, visible = true }: MobileQuickBarProps) {
  return (
    <aside
      aria-label="Ações rápidas de contato"
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E8DFC8] px-3.5 pt-2 pb-[calc(env(safe-area-inset-bottom,0px)+0.6rem)] shadow-[0_-6px_20px_rgba(45,36,31,0.08)] transition-all duration-300 ease-out ${
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* WhatsApp Direct Action */}
        <a
          href={getWhatsAppUrl(
            "Olá! Gostaria de conversar com a equipe da Lumière Odontologia e tirar algumas dúvidas.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] border border-[#25D366]/30 transition-all active:scale-95 cursor-pointer"
          aria-label="Falar com a clínica pelo WhatsApp"
        >
          <MessageCircle className="h-5 w-5 fill-current" />
        </a>

        {/* Primary Schedule Consultation Button */}
        <button
          type="button"
          onClick={() => onOpenAppointment("Agendamento Barra Fixa Mobile")}
          className="flex flex-1 h-11 items-center justify-center gap-2 rounded-xl bg-[#2C2018] active:bg-[#1A130E] text-white px-4 text-xs sm:text-[13px] font-medium tracking-wide shadow-sm transition-all active:scale-98 cursor-pointer"
        >
          <Calendar className="h-4 w-4 text-[#ECC87E]" />
          <span>Agendar avaliação</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-[#D8C4B0] ml-0.5" />
        </button>
      </div>
    </aside>
  );
}
