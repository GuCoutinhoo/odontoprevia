import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MobileQuickBar } from "@/components/mobile-quick-bar";
import { TreatmentsSection } from "@/components/treatments-section";
import { CLINIC_CONFIG } from "@/config/clinic";

describe("Mobile Experience & Interactions", () => {
  it("renders MobileQuickBar with WhatsApp and appointment button", () => {
    const handleOpenAppointment = vi.fn();
    render(<MobileQuickBar onOpenAppointment={handleOpenAppointment} />);

    const apptButton = screen.getByRole("button", { name: /agendar avaliação/i });
    expect(apptButton).toBeInTheDocument();

    fireEvent.click(apptButton);
    expect(handleOpenAppointment).toHaveBeenCalledWith("Agendamento Barra Fixa Mobile");

    const whatsappLink = screen.getByLabelText(/falar com a clínica pelo whatsapp/i);
    expect(whatsappLink).toBeInTheDocument();
    expect(whatsappLink.getAttribute("href")).toContain(CLINIC_CONFIG.whatsappNumber);
  });

  it("allows switching between carousel and compact grid view mode on mobile in treatments", () => {
    const onOpenAppointment = vi.fn();
    const onOpenDetails = vi.fn();

    render(
      <TreatmentsSection
        onOpenAppointment={onOpenAppointment}
        onOpenDetails={onOpenDetails}
        isVisible={true}
      />,
    );

    const gridModeBtn = screen.getByLabelText(/visualização em grade compacta/i);
    expect(gridModeBtn).toBeInTheDocument();

    fireEvent.click(gridModeBtn);
    // Grade mode should now be active
    const carouselModeBtn = screen.getByLabelText(/visualização em carrossel deslizável/i);
    expect(carouselModeBtn).toBeInTheDocument();
    fireEvent.click(carouselModeBtn);
  });
});
