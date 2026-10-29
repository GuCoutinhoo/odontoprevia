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
      // Ativa o estado sólido com rolagem entre 50-80px (60px)
      setScrolled(window.scrollY > 60);

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
      {/* Cabeçalho Fixo Global: Transparente no topo, sólido bege-quente ao rolar, SEM linha divisória */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-none transition-[background-color,box-shadow,backdrop-filter] duration-400 ease-in-out motion-reduce:transition-none ${
          scrolled || mobileMenuOpen
            ? "bg-[#F7F2EA]/95 py-3.5 sm:py-4 shadow-[0_4px_20px_rgba(72,51,35,0.05)] backdrop-blur-md"
            : "bg-gradient-to-b from-[#FAF7F2]/80 via-[#FAF7F2]/40 to-transparent py-3.5 sm:py-4 shadow-none backdrop-blur-none"
        }`}
      >
        <div className="site-container flex items-center justify-between">
          <Logo />

          {/* Navegação Desktop com Tipografia Aumentada (~16px), Maior Espaçamento e Excelente Legibilidade */}
          <nav className="hidden items-center gap-8 lg:flex xl:gap-10 text-[15px] xl:text-[16px] font-medium tracking-wide text-[#2E241B]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActiveSection(item.id)}
                  className={`relative py-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:transition-transform after:duration-300 ${
                    isActive
                      ? "text-[#1A1613] font-semibold after:scale-x-100 after:bg-[#966D38]"
                      : "text-[#3D3328] hover:text-[#1A1613] after:scale-x-0 after:bg-[#966D38] hover:after:scale-x-100"
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
              className="group hidden sm:inline-flex items-center gap-2 rounded-full bg-[#2C2018] hover:bg-[#1E1610] px-5 py-2.5 text-xs xl:text-sm font-medium text-white shadow-xs transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <span>Agendar avaliação</span>
              <ArrowUpRight className="h-4 w-4 text-[#D8C4B0] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Menu Mobile */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DCD3C7] bg-white/80 backdrop-blur-xs text-[#1E1B18] transition-colors lg:hidden hover:bg-[#F2EDE5]"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Gaveta de Navegação Mobile com Fundo Sólido e sem borda divisória */}
        <div
          className={`overflow-hidden border-none bg-[#FAF7F2] transition-all duration-300 lg:hidden ${
            mobileMenuOpen ? "max-h-96 opacity-100 py-4 shadow-md" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="site-container flex flex-col space-y-2 text-xs font-medium">
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
