import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

import { HeroSection } from "@/components/hero-section";
import { TreatmentsSection } from "@/components/treatments-section";
import { AboutSection } from "@/components/about-section";
import { TechSection } from "@/components/tech-section";
import { ResultsSection } from "@/components/results-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { StructureSection } from "@/components/structure-section";
import { FaqSection } from "@/components/faq-section";
import { CtaFooterSection } from "@/components/cta-footer-section";

import { AppointmentModal } from "@/components/appointment-modal";
import { TreatmentModal, type TreatmentInfo } from "@/components/treatment-modal";
import { ScrollToTop } from "@/components/scroll-to-top";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumière Odontologia — Sorrisos que transformam histórias" },
      {
        name: "description",
        content:
          "Odontologia de alto padrão com tecnologia avançada, atendimento personalizado e resultados que vão além da estética.",
      },
      { property: "og:title", content: "Lumière Odontologia" },
      {
        property: "og:description",
        content: "Odontologia de alto padrão, tecnologia avançada e atendimento personalizado.",
      },
    ],
  }),
  component: Index,
});

function Logo({ small = false }: { small?: boolean }) {
  return (
    <a
      href="#início"
      className="group flex items-center gap-2.5 text-[#966D38] transition-transform duration-300 hover:scale-103"
    >
      <svg
        viewBox="0 0 40 28"
        className={`${small ? "h-6 w-8" : "h-7 w-10"} transition-transform duration-500 group-hover:rotate-6`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <path d="M20 26C20 18 20 10 20 2C24 8 24 18 20 26ZM20 26C16 18 16 8 20 2" />
        <path d="M20 26C15 22 10 16 9 8C15 11 19 18 20 26ZM20 26C25 22 30 16 31 8C25 11 21 18 20 26" />
        <path d="M20 26C13 25 6 21 2 15C9 15 16 20 20 26ZM20 26C27 25 34 21 38 15C31 15 24 20 20 26" />
      </svg>
      <div className="leading-none">
        <span className="font-serif text-xl sm:text-2xl tracking-[0.16em] text-[#1E1B18] transition-colors group-hover:text-[#483323] block">
          LUMIÈRE
        </span>
        <span className="mt-0.5 text-[8px] tracking-[0.38em] text-[#966D38] block">
          ODONTOLOGIA
        </span>
      </div>
    </a>
  );
}

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("início");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState("Avaliação Completa");
  const [treatmentModalOpen, setTreatmentModalOpen] = useState(false);
  const [activeTreatment, setActiveTreatment] = useState<TreatmentInfo | null>(null);

  // Monitora a rolagem para estilizar o cabeçalho fixo e rastrear a seção ativa
  useEffect(() => {
    const sectionIds = [
      "início",
      "sobre",
      "tratamentos",
      "tecnologia",
      "resultados",
      "depoimentos",
      "estrutura",
      "faq",
      "contato",
    ];

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection("contato");
        return;
      }

      const scrollPosition = window.scrollY + 140;
      let current = "início";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll reveal hooks para entrada suave de cada seção
  const heroReveal = useScrollReveal({ threshold: 0.05 });
  const aboutReveal = useScrollReveal({ threshold: 0.1 });
  const treatmentsReveal = useScrollReveal({ threshold: 0.1 });
  const techReveal = useScrollReveal({ threshold: 0.1 });
  const resultsReveal = useScrollReveal({ threshold: 0.1 });
  const testimonialsReveal = useScrollReveal({ threshold: 0.1 });
  const structureReveal = useScrollReveal({ threshold: 0.1 });
  const faqReveal = useScrollReveal({ threshold: 0.1 });
  const ctaReveal = useScrollReveal({ threshold: 0.1 });

  const handleOpenAppointment = (treatmentName?: string) => {
    if (treatmentName) setSelectedTreatment(treatmentName);
    setAppointmentModalOpen(true);
  };

  const handleOpenTreatmentDetails = (item: TreatmentInfo) => {
    setActiveTreatment(item);
    setTreatmentModalOpen(true);
  };

  const navItems = [
    { label: "Início", id: "início" },
    { label: "Tratamentos", id: "tratamentos" },
    { label: "Sobre", id: "sobre" },
    { label: "Tecnologia", id: "tecnologia" },
    { label: "Resultados", id: "resultados" },
    { label: "Estrutura", id: "estrutura" },
    { label: "Depoimentos", id: "depoimentos" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#1E1B18] antialiased selection:bg-[#EBDDC8] selection:text-[#2E241B]">
      {/* Cabeçalho Fixo Global */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "border-b border-[#EAE3D9] bg-[#FAF8F5]/95 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.03)] backdrop-blur-md"
            : "border-b border-transparent bg-[#FAF8F5]/80 py-4.5 backdrop-blur-xs"
        }`}
      >
        <div className="mx-auto w-[min(calc(100%-48px),1480px)] flex items-center justify-between">
          <Logo />

          {/* Navegação Desktop */}
          <nav className="hidden items-center gap-7 lg:flex xl:gap-9 text-xs xl:text-[13px] font-medium tracking-wide text-[#5A5248]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActiveSection(item.id)}
                  className={`relative py-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:transition-transform after:duration-300 ${
                    isActive
                      ? "text-[#1E1B18] font-semibold after:scale-x-100 after:bg-[#966D38]"
                      : "hover:text-[#1E1B18] after:scale-x-0 after:bg-[#966D38] hover:after:scale-x-100"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Botão de Agendamento Superior & Menu Mobile */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleOpenAppointment("Agendamento pelo Topo")}
              className="group hidden sm:inline-flex items-center gap-2 rounded-xl bg-[#966D38] hover:bg-[#7D5829] px-4.5 py-2 text-xs xl:text-sm font-medium text-white shadow-2xs transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <span>Agendar avaliação</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Menu Mobile */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DCD3C7] text-[#1E1B18] transition-colors lg:hidden hover:bg-[#F2EDE5]"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Gaveta de Navegação Mobile */}
        <div
          className={`overflow-hidden border-b border-[#EAE3D9] bg-[#FAF8F5] transition-all duration-300 lg:hidden ${
            mobileMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="mx-auto w-[min(calc(100%-48px),1480px)] flex flex-col space-y-2 text-xs font-medium">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`rounded-xl px-4 py-2.5 transition-colors ${
                    isActive
                      ? "bg-[#F2EDE5] text-[#966D38] font-semibold"
                      : "text-[#5A5248] hover:bg-[#F2EDE5] hover:text-[#1E1B18]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenAppointment("Agendamento pelo Topo Mobile");
                }}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#483323] py-3 text-xs font-medium text-white shadow-sm transition active:scale-95"
              >
                <span>Agendar avaliação</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* SEÇÃO 1 — HERO / INÍCIO */}
      <div ref={heroReveal.ref}>
        <HeroSection isVisible={heroReveal.isVisible} onOpenAppointment={handleOpenAppointment} />
      </div>

      {/* SEÇÃO 2 — TRATAMENTOS */}
      <div ref={treatmentsReveal.ref}>
        <TreatmentsSection
          isVisible={treatmentsReveal.isVisible}
          onOpenAppointment={handleOpenAppointment}
          onOpenDetails={handleOpenTreatmentDetails}
        />
      </div>

      {/* SEÇÃO 3 — SOBRE A CLÍNICA */}
      <div ref={aboutReveal.ref}>
        <AboutSection isVisible={aboutReveal.isVisible} onOpenAppointment={handleOpenAppointment} />
      </div>

      {/* SEÇÃO 4 — TECNOLOGIA */}
      <div ref={techReveal.ref}>
        <TechSection isVisible={techReveal.isVisible} onOpenAppointment={handleOpenAppointment} />
      </div>

      {/* SEÇÃO 5 — RESULTADOS */}
      <div ref={resultsReveal.ref}>
        <ResultsSection
          isVisible={resultsReveal.isVisible}
          onOpenAppointment={handleOpenAppointment}
        />
      </div>

      {/* SEÇÃO 6 — DEPOIMENTOS */}
      <div ref={testimonialsReveal.ref}>
        <TestimonialsSection
          isVisible={testimonialsReveal.isVisible}
          onOpenAppointment={handleOpenAppointment}
        />
      </div>

      {/* SEÇÃO 7 — ESTRUTURA / NOSSO ESPAÇO */}
      <div ref={structureReveal.ref}>
        <StructureSection
          isVisible={structureReveal.isVisible}
          onOpenAppointment={handleOpenAppointment}
        />
      </div>

      {/* SEÇÃO 8 — PERGUNTAS FREQUENTES */}
      <div ref={faqReveal.ref}>
        <FaqSection isVisible={faqReveal.isVisible} />
      </div>

      {/* SEÇÃO 9 — CTA FINAL E RODAPÉ */}
      <div ref={ctaReveal.ref}>
        <CtaFooterSection
          isVisible={ctaReveal.isVisible}
          onOpenAppointment={handleOpenAppointment}
        />
      </div>

      {/* Modais Globais e Botão Voltar ao Topo */}
      <AppointmentModal
        open={appointmentModalOpen}
        onOpenChange={setAppointmentModalOpen}
        defaultTreatment={selectedTreatment}
      />

      <TreatmentModal
        treatment={activeTreatment}
        open={treatmentModalOpen}
        onOpenChange={setTreatmentModalOpen}
        onSchedule={(t) => handleOpenAppointment(t)}
      />

      <ScrollToTop />
    </div>
  );
}
