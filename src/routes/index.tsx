import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Calendar,
  MessageCircle,
  Smile,
  Gem,
  Users,
  Star,
  Heart,
  ShieldCheck,
  Wind,
  Lock,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Plus,
  Minus,
  Menu,
  X,
  Sparkles,
  Check,
} from "lucide-react";
import hero from "@/assets/hero.png";
import aboutMain from "@/assets/about-main.jpg";
import room from "@/assets/room.jpg";
import tLentes from "@/assets/t-lentes.jpg";
import tClar from "@/assets/t-clareamento.jpg";
import tImpl from "@/assets/t-implante.jpg";
import tOrto from "@/assets/t-orto.jpg";
import tHarm from "@/assets/t-harmonizacao.jpg";
import tEst from "@/assets/t-estetica.jpg";
import scanner from "@/assets/tech-scanner.jpg";
import ba from "@/assets/before-after.jpg";
import cta from "@/assets/cta.jpg";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { AnimatedCounter } from "@/components/animated-counter";
import { AppointmentModal } from "@/components/appointment-modal";
import { TreatmentModal, type TreatmentInfo } from "@/components/treatment-modal";
import { CLINIC_CONFIG, getWhatsAppUrl } from "@/config/clinic";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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

const container = "mx-auto w-full max-w-[1480px] px-6 sm:px-8 lg:px-12 xl:px-16";

function Logo({
  small = false,
  isTransparent = false,
}: {
  small?: boolean;
  isTransparent?: boolean;
}) {
  return (
    <a
      href="#início"
      className="group flex items-center gap-2 text-primary transition-transform duration-300 hover:scale-105"
    >
      <svg
        viewBox="0 0 40 28"
        className={`${small ? "h-6 w-8" : "h-7 w-10 xl:h-8 xl:w-11"} transition-transform duration-500 group-hover:rotate-6 ${
          isTransparent ? "drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" : ""
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      >
        <path d="M20 26C20 18 20 10 20 2C24 8 24 18 20 26ZM20 26C16 18 16 8 20 2" />
        <path d="M20 26C15 22 10 16 9 8C15 11 19 18 20 26ZM20 26C25 22 30 16 31 8C25 11 21 18 20 26" />
        <path d="M20 26C13 25 6 21 2 15C9 15 16 20 20 26ZM20 26C27 25 34 21 38 15C31 15 24 20 20 26" />
      </svg>
      <div className="leading-none">
        <div
          className={`font-serif text-xl xl:text-2xl tracking-[0.18em] transition-colors group-hover:text-primary ${
            isTransparent ? "text-white [text-shadow:_0_1px_3px_rgba(0,0,0,0.6)]" : "text-black"
          }`}
        >
          LUMIÈRE
        </div>
        <div
          className={`mt-0.5 text-[7px] xl:text-[8px] tracking-[0.4em] text-primary ${
            isTransparent ? "[text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]" : ""
          }`}
        >
          ODONTOLOGIA
        </div>
      </div>
    </a>
  );
}

function ToothIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 3C4.5 3 3 5.5 3 8.5C3 12 4.5 14 5.5 16.5C6.5 19 7.2 21 8.8 21C10.2 21 10.8 17.8 12 17.8C13.2 17.8 13.8 21 15.2 21C16.8 21 17.5 19 18.5 16.5C19.5 14 21 12 21 8.5C21 5.5 19.5 3 17 3C14.5 3 13.5 4.8 12 4.8C10.5 4.8 9.5 3 7 3Z" />
    </svg>
  );
}

const treatmentData: TreatmentInfo[] = [
  {
    img: tLentes,
    t: "Lentes de Contato Dental",
    d: "Sorriso harmônico e natural.",
    longDesc:
      "As lentes de contato de porcelana ultrafina corrigem formato, cor, tamanho e pequenos desvios dos dentes com desgaste dental mínimo ou nulo, proporcionando um sorriso deslumbrante e de altíssima durabilidade.",
    benefits: [
      "Mínimo desgaste do esmalte natural",
      "Resistente a manchas de café e vinho",
      "Design personalizado com escaneamento 3D",
      "Resultado em apenas 2 a 3 sessões",
    ],
    duration: "2 a 3 sessões",
    sessions: "Planejamento Digital 3D",
  },
  {
    img: tClar,
    t: "Clareamento Dental",
    d: "Dentes mais brancos com segurança.",
    longDesc:
      "Protocolos combinados de clareamento a laser em consultório e moldeiras personalizadas para uso domiciliar supervisionado. Garantia de dentes até 8 tons mais claros sem agredir a gengiva nem gerar sensibilidade excessiva.",
    benefits: [
      "Tecnologia de fotobiomodulação",
      "Tratamento prévio contra sensibilidade",
      "Acompanhamento fotográfico digital",
      "Efeito prolongado e radiante",
    ],
    duration: "1 a 2 sessões clínicas",
    sessions: "Personalizado",
  },
  {
    img: tImpl,
    t: "Implantes Dentários",
    d: "Recupere seu sorriso e sua qualidade de vida.",
    longDesc:
      "Reabilitação oral completa com implantes em titânio de grau cirúrgico e próteses em cerâmica de zircônia. Procedimentos guiados por tomografia computadorizada para máxima precisão, cicatrização acelerada e conforto total.",
    benefits: [
      "Cirurgia guiada sem cortes invasivos",
      "Carga imediata conforme avaliação",
      "Estabilidade mastigatória total",
      "Aparência idêntica aos dentes naturais",
    ],
    duration: "Procedimento em 1 dia",
    sessions: "Guia Tomográfico 3D",
  },
  {
    img: tOrto,
    t: "Ortodontia",
    d: "Sorrisos alinhados com mais conforto e estética.",
    longDesc:
      "Tratamentos modernos com alinhadores transparentes invisíveis e aparelhos estéticos de safira. Alinhamento dentário rápido, previsível e sem o incômodo dos aparelhos metálicos convencionais.",
    benefits: [
      "Alinhadores praticamente invisíveis",
      "Removíveis para alimentação e higienização",
      "Simulação digital antes de iniciar",
      "Consultas rápidas e confortáveis",
    ],
    duration: "6 a 14 meses em média",
    sessions: "Scanner Itero 3D",
  },
  {
    img: tHarm,
    t: "Harmonização Facial",
    d: "Equilíbrio e beleza em todo o seu rosto.",
    longDesc:
      "Técnicas avançadas de harmonização orofacial para valorizar seus traços naturais com elegância e sofisticação: preenchimento labial sutil, rinomodelação, bioestimuladores de colágeno e suavização de linhas de expressão.",
    benefits: [
      "Resultados sutis e naturais",
      "Médicos e dentistas especialistas",
      "Produtos de primeira linha mundiais",
      "Retorno imediato às atividades",
    ],
    duration: "45 a 60 minutos",
    sessions: "Avaliação Facial Integrada",
  },
  {
    img: tEst,
    t: "Odontologia Estética",
    d: "Resultados que elevam a sua autoestima.",
    longDesc:
      "Reconstruções minuciosas com resinas compostas biomiméticas de nano-partículas, fechamento de diastemas e plástica gengival (gengivoplastia) para proporcionar proporções douradas ao seu sorriso.",
    benefits: [
      "Biomimética dental de alta precisão",
      "Correção no mesmo dia",
      "Harmonia entre dentes e gengiva",
      "Acabamento de alto brilho e polimento",
    ],
    duration: "1 a 2 consultas",
    sessions: "Enceramento Diagnóstico",
  },
];

const faqs = [
  {
    q: "A primeira avaliação é realmente necessária?",
    a: "Sim. A avaliação é fundamental para entender suas necessidades, realizar um diagnóstico completo e indicar o melhor tratamento para o seu caso.",
  },
  {
    q: "Os tratamentos são dolorosos?",
    a: "Utilizamos técnicas modernas e anestesia adequada para garantir o máximo de conforto em cada etapa.",
  },
  {
    q: "Quanto tempo dura o tratamento?",
    a: "O tempo varia conforme cada caso. Na avaliação apresentamos um planejamento completo com prazos.",
  },
  {
    q: "Vocês oferecem formas de pagamento?",
    a: "Sim, oferecemos diversas formas de pagamento e condições facilitadas.",
  },
  {
    q: "A clínica atende convênios?",
    a: "Consulte nossa equipe para verificar os convênios atendidos.",
  },
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("início");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState("Avaliação Completa");
  const [treatmentModalOpen, setTreatmentModalOpen] = useState(false);
  const [activeTreatment, setActiveTreatment] = useState<TreatmentInfo | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Scroll detection for sticky header animation and active section scrollspy
  useEffect(() => {
    const sectionIds = [
      "início",
      "tratamentos",
      "sobre",
      "tecnologia",
      "resultados",
      "depoimentos",
      "contato",
    ];

    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      // If near bottom of the page, activate the last section ('contato')
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection("contato");
        return;
      }

      const scrollPosition = window.scrollY + 160;
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

  // Section reveal hooks
  const heroReveal = useScrollReveal({ threshold: 0.05 });
  const featuresReveal = useScrollReveal();
  const treatmentsReveal = useScrollReveal();
  const aboutReveal = useScrollReveal();
  const techReveal = useScrollReveal();
  const resultsReveal = useScrollReveal();
  const testimonialsReveal = useScrollReveal();
  const environmentReveal = useScrollReveal();
  const faqReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();

  const handleOpenAppointment = (treatmentName?: string) => {
    if (treatmentName) setSelectedTreatment(treatmentName);
    setAppointmentModalOpen(true);
  };

  const handleOpenTreatmentDetails = (item: TreatmentInfo) => {
    setActiveTreatment(item);
    setTreatmentModalOpen(true);
  };

  return (
    <div className="bg-background text-foreground antialiased selection:bg-primary/20 selection:text-foreground">
      {/* Sticky Animated Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "border-b border-border/80 bg-background/95 py-3 shadow-sm backdrop-blur-md"
            : "border-b border-transparent bg-transparent py-4"
        }`}
      >
        <div className="mx-auto w-[min(calc(100%-48px),1480px)] flex items-center justify-between">
          <Logo isTransparent={!scrolled && !mobileMenuOpen} />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex xl:gap-8 2xl:gap-10 text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] font-semibold tracking-wide">
            {[
              "Início",
              "Sobre",
              "Tratamentos",
              "Tecnologia",
              "Resultados",
              "Depoimentos",
              "Contato",
            ].map((n) => {
              const sectionId = n.toLowerCase();
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={n}
                  href={`#${sectionId}`}
                  onClick={() => setActiveSection(sectionId)}
                  className={`relative py-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:transition-transform after:duration-300 ${
                    isActive
                      ? "after:scale-x-100 font-bold"
                      : "after:scale-x-0 after:origin-bottom-right hover:after:origin-bottom-left hover:after:scale-x-100"
                  } ${
                    scrolled || mobileMenuOpen
                      ? isActive
                        ? "text-primary after:bg-primary"
                        : "text-black hover:text-primary after:bg-primary"
                      : isActive
                        ? "text-white [text-shadow:_0_1px_3px_rgba(0,0,0,0.85)] drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] after:bg-white after:shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
                        : "text-white [text-shadow:_0_1px_3px_rgba(0,0,0,0.7)] drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)] hover:text-white/85 after:bg-white"
                  }`}
                >
                  {n}
                </a>
              );
            })}
          </nav>

          {/* Action button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleOpenAppointment("Avaliação Completa")}
              className="shimmer-button hidden sm:inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 xl:px-5 xl:py-2.5 text-xs xl:text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95 active:scale-95 cursor-pointer"
            >
              <Calendar className="h-4 w-4 xl:h-4.5 xl:w-4.5" />
              Agendar avaliação
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`flex h-9 w-9 items-center justify-center rounded-md border transition-colors lg:hidden ${
                scrolled || mobileMenuOpen
                  ? "border-border text-black hover:bg-secondary"
                  : "border-white/40 bg-transparent text-white hover:bg-white/15"
              }`}
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`overflow-hidden border-b border-border bg-background transition-all duration-300 lg:hidden ${
            mobileMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="mx-auto w-[min(calc(100%-48px),1480px)] flex flex-col space-y-3 text-xs font-medium">
            {[
              "Início",
              "Sobre",
              "Tratamentos",
              "Tecnologia",
              "Resultados",
              "Depoimentos",
              "Contato",
            ].map((n) => {
              const sectionId = n.toLowerCase();
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={n}
                  href={`#${sectionId}`}
                  onClick={() => {
                    setActiveSection(sectionId);
                    setMobileMenuOpen(false);
                  }}
                  className={`rounded-md px-3 py-2 transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary font-semibold border-l-2 border-primary pl-2.5"
                      : "text-foreground/80 hover:bg-secondary hover:text-primary"
                  }`}
                >
                  {n}
                </a>
              );
            })}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenAppointment("Avaliação Completa");
                }}
                className="shimmer-button flex w-full items-center justify-center gap-2 rounded-md bg-primary py-2.5 text-xs font-semibold text-primary-foreground shadow transition hover:opacity-90 active:scale-95"
              >
                Agendar avaliação <Calendar className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="início"
        ref={heroReveal.ref}
        className="relative overflow-hidden pt-[72px] min-h-[740px] lg:min-h-[760px] lg:h-[min(900px,100svh)] flex items-center"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={hero}
            alt="Dentista da Lumière Odontologia"
            width={1672}
            height={941}
            className="h-full w-full object-cover object-[72%_center] 2xl:object-[70%_25%] transition-transform duration-700 pointer-events-none select-none"
          />
          {/* Soft white gradient shadow from left across text area matching client preview */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-full sm:w-[65%] md:w-[58%] lg:w-[52%] 2xl:w-[48%] bg-gradient-to-r from-white/90 via-white/50 to-transparent" />
          {/* Subtle dark gradient overlay only at the top of the hero behind the header */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/35 via-black/10 to-transparent" />
        </div>

        <div className="relative mx-auto w-[min(calc(100%-48px),1480px)] py-14 sm:py-16 md:py-20 lg:py-0 grid items-center md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          <div
            className={`w-full max-w-[580px] xl:max-w-[650px] 2xl:max-w-[700px] z-10 transition-all duration-700 ease-out ${
              heroReveal.isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-white/70 px-3.5 py-1 backdrop-blur-xs">
              <Sparkles className="h-3 w-3 xl:h-3.5 xl:w-3.5 text-primary animate-pulse" />
              <span className="eyebrow tracking-[0.25em]">Excelência em odontologia</span>
            </div>

            <h1 className="hero-title mt-4 text-foreground">
              Sorrisos que
              <br />
              transformam
              <br />
              <span className="hero-title-highlight">histórias</span>
            </h1>

            <p className="mt-5 text-[13px] sm:text-[14px] xl:text-[15px] 2xl:text-[16px] leading-relaxed text-foreground/80 max-w-[500px] xl:max-w-[580px]">
              Odontologia de alto padrão, com tecnologia avançada, atendimento personalizado e
              resultados que vão além da estética. Porque um sorriso saudável muda tudo.
            </p>

            <div className="mt-7 xl:mt-8 flex flex-wrap gap-3 xl:gap-4">
              <button
                onClick={() => handleOpenAppointment("Avaliação Completa")}
                className="shimmer-button inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 xl:px-6 xl:py-3.5 text-xs xl:text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90 active:scale-95 cursor-pointer"
              >
                <Calendar className="h-4 w-4 xl:h-4.5 xl:w-4.5" />
                Agendar avaliação
              </button>

              <a
                href="#contato"
                className="group inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-white/95 px-5 py-3 xl:px-6 xl:py-3.5 text-xs xl:text-sm font-semibold text-foreground shadow-xs backdrop-blur-sm transition-all hover:border-primary hover:text-primary active:scale-95"
              >
                <MessageCircle className="h-4 w-4 xl:h-4.5 xl:w-4.5 text-primary transition-transform duration-300 group-hover:scale-110" />
                Falar no WhatsApp
              </a>
            </div>

            {/* Animated Numbers Grid com ícones correspondentes à imagem */}
            <div className="mt-8 sm:mt-10 xl:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 xl:gap-6 border-t border-border/60 pt-6 xl:pt-8">
              <div className="flex items-center gap-2.5 xl:gap-3">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 xl:h-7 xl:w-7 text-primary stroke-[1.4] shrink-0" />
                <div>
                  <div className="text-sm xl:text-base font-semibold text-foreground leading-tight">
                    <AnimatedCounter end={5000} prefix="+ " />
                  </div>
                  <div className="text-[10px] xl:text-[11px] text-muted-foreground leading-tight">
                    sorrisos transformados
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 xl:gap-3">
                <Gem className="h-5 w-5 sm:h-6 sm:w-6 xl:h-7 xl:w-7 text-primary stroke-[1.4] shrink-0" />
                <div>
                  <div className="text-sm xl:text-base font-semibold text-foreground leading-tight">
                    <AnimatedCounter end={15} suffix=" anos" />
                  </div>
                  <div className="text-[10px] xl:text-[11px] text-muted-foreground leading-tight">
                    de excelência
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 xl:gap-3">
                <ToothIcon className="h-5 w-5 sm:h-6 sm:w-6 xl:h-7 xl:w-7 text-primary stroke-[1.4] shrink-0" />
                <div>
                  <div className="text-sm xl:text-base font-semibold text-foreground leading-tight">
                    Equipe
                  </div>
                  <div className="text-[10px] xl:text-[11px] text-muted-foreground leading-tight">
                    especializada
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 xl:gap-3">
                <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 xl:h-7 xl:w-7 text-primary stroke-[1.4] shrink-0" />
                <div>
                  <div className="text-sm xl:text-base font-semibold text-foreground leading-tight">
                    100%
                  </div>
                  <div className="text-[10px] xl:text-[11px] text-muted-foreground leading-tight">
                    digital & seguro
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Quote Card */}
          <div className="hidden justify-end md:flex pr-2 lg:pr-8 xl:pr-12 z-10">
            <div
              className={`animate-float rounded-2xl border border-primary/20 bg-white/95 p-6 xl:p-8 shadow-xl backdrop-blur-md max-w-[260px] xl:max-w-[310px] transition-all duration-1000 ${
                heroReveal.isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <div className="flex items-center gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 xl:h-4 xl:w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 font-serif text-lg xl:text-xl italic leading-snug text-foreground/85">
                “Mais que estética, saúde e autoestima para uma vida melhor.”
              </p>
              <span className="mt-4 block h-0.5 w-10 xl:w-12 bg-primary/80" />
              <p className="mt-2 text-[10px] xl:text-xs font-medium text-muted-foreground">
                Corpo Clínico Lumière
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section ref={featuresReveal.ref} className="border-y border-border bg-card/90">
        <div
          className={`${container} grid grid-cols-2 gap-y-6 py-8 xl:py-10 2xl:py-12 lg:grid-cols-4`}
        >
          {[
            [Smile, "Atendimento personalizado", "Você em primeiro lugar, sempre."],
            [Gem, "Tecnologia de ponta", "Equipamentos modernos para os melhores resultados."],
            [
              Users,
              "Equipe especializada",
              "Profissionais experientes e em constante atualização.",
            ],
            [Star, "Ambiente premium", "Conforto, elegância e segurança em cada detalhe."],
          ].map(([Icon, t, d], i) => {
            const I = Icon as typeof Smile;
            return (
              <div
                key={t as string}
                style={{ transitionDelay: `${i * 120}ms` }}
                className={`group flex items-start gap-3.5 xl:gap-4 px-4 sm:px-6 transition-all duration-500 hover:-translate-y-1 ${
                  featuresReveal.isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                } ${i > 0 ? "lg:border-l lg:border-border" : ""}`}
              >
                <div className="flex h-10 w-10 xl:h-12 xl:w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <I className="h-5 w-5 xl:h-6 xl:w-6" strokeWidth={1.4} />
                </div>
                <div>
                  <div className="max-w-[150px] xl:max-w-[180px] text-[12px] xl:text-[14px] 2xl:text-[15px] font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
                    {t as string}
                  </div>
                  <div className="mt-1.5 max-w-[180px] xl:max-w-[210px] text-[10px] xl:text-[12px] leading-snug text-muted-foreground">
                    {d as string}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tratamentos Section */}
      <section id="tratamentos" ref={treatmentsReveal.ref} className="py-20 xl:py-28">
        <div className={container}>
          <div
            className={`text-center transition-all duration-700 ${
              treatmentsReveal.isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <p className="eyebrow">Nossos tratamentos</p>
            <h2 className="mt-2 text-3xl sm:text-4xl xl:text-5xl">
              Soluções completas para o seu sorriso
            </h2>
            <p className="mx-auto mt-3 max-w-[540px] text-[11px] sm:text-xs xl:text-sm text-muted-foreground leading-relaxed">
              Do cuidado preventivo à estética avançada, oferecemos odontologia moderna e
              personalizada para todas as fases da sua vida.
            </p>
          </div>

          <div className="mt-12 xl:mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 xl:gap-5">
            {treatmentData.map((t, idx) => (
              <article
                key={t.t}
                style={{ transitionDelay: `${idx * 80}ms` }}
                className={`group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:shadow-xl ${
                  treatmentsReveal.isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div className="relative aspect-[6/5] w-full overflow-hidden bg-muted">
                  <img
                    src={t.img}
                    alt={t.t}
                    loading="lazy"
                    width={896}
                    height={752}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="flex flex-1 flex-col p-4 xl:p-5">
                  <h3 className="font-serif text-[17px] xl:text-[19px] font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
                    {t.t}
                  </h3>
                  <p className="mt-2.5 text-[10px] sm:text-[11px] xl:text-xs leading-snug text-muted-foreground">
                    {t.d}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleOpenTreatmentDetails(t)}
                    className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[10px] sm:text-[11px] xl:text-xs font-medium text-primary transition-all group-hover:gap-2.5 cursor-pointer"
                  >
                    Saiba mais{" "}
                    <ArrowRight className="h-3 w-3 xl:h-3.5 xl:w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section
        id="sobre"
        ref={aboutReveal.ref}
        className="bg-secondary/70 py-20 xl:py-28 2xl:py-32 overflow-hidden"
      >
        <div className={`${container} grid items-center gap-12 xl:gap-16 lg:grid-cols-2`}>
          <div
            className={`relative pb-20 xl:pb-24 transition-all duration-700 ${
              aboutReveal.isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="overflow-hidden rounded-lg border border-border shadow-md">
              <img
                src={aboutMain}
                alt="Recepção Lumière"
                loading="lazy"
                width={1024}
                height={768}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[52%] overflow-hidden rounded-lg border-4 border-background shadow-2xl transition-transform duration-500 hover:scale-105">
              <img
                src={room}
                alt="Consultório"
                loading="lazy"
                width={1024}
                height={768}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-0 rounded-lg border border-border/80 bg-background/95 p-4 xl:p-6 font-serif text-xl xl:text-2xl leading-snug text-foreground/80 shadow-lg backdrop-blur-sm">
              Um espaço
              <br />
              pensado para
              <br />o seu bem-estar.
            </div>
          </div>

          <div
            className={`transition-all duration-700 ${
              aboutReveal.isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <p className="eyebrow">Sobre a Lumière</p>
            <h2 className="mt-2 text-3xl sm:text-4xl xl:text-5xl leading-tight">
              Muito mais que uma clínica odontológica
            </h2>
            <p className="mt-5 text-[12px] sm:text-[13px] xl:text-[15px] 2xl:text-base leading-relaxed text-foreground/80">
              A Lumière Odontologia nasceu com o propósito de oferecer uma experiência única, unindo
              ciência, tecnologia e um atendimento verdadeiramente humano.
            </p>
            <p className="mt-3 text-[12px] sm:text-[13px] xl:text-[15px] 2xl:text-base leading-relaxed text-foreground/80">
              Aqui, cada detalhe é pensado para que você se sinta acolhido, seguro e confiante, em
              um ambiente sofisticado e confortável.
            </p>

            <ul className="mt-6 space-y-3.5 xl:space-y-4 text-[11px] sm:text-xs xl:text-sm">
              {[
                [Gem, "Excelência em cada atendimento"],
                [Heart, "Cuidado humanizado e individualizado"],
                [ShieldCheck, "Ambiente seguro e moderno"],
                [Users, "Resultados que transformam vidas"],
              ].map(([I, t], i) => {
                const Ic = I as typeof Gem;
                return (
                  <li
                    key={t as string}
                    style={{ transitionDelay: `${i * 100}ms` }}
                    className="flex items-center gap-3 text-foreground/90 transition-transform hover:translate-x-1"
                  >
                    <div className="flex h-5 w-5 xl:h-6 xl:w-6 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Ic className="h-3 w-3 xl:h-3.5 xl:w-3.5" strokeWidth={1.5} />
                    </div>
                    {t as string}
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 xl:mt-10">
              <button
                onClick={() => handleOpenAppointment("Avaliação Completa")}
                className="shimmer-button inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 xl:px-6 xl:py-3 text-[11px] sm:text-xs xl:text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90 active:scale-95 cursor-pointer"
              >
                Conheça nossa história
                <ArrowRight className="h-3.5 w-3.5 xl:h-4 xl:w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologia Section */}
      <section id="tecnologia" ref={techReveal.ref} className="py-20 xl:py-28 2xl:py-32">
        <div className={`${container} grid items-center gap-10 xl:gap-14 lg:grid-cols-[1fr_2fr]`}>
          <div
            className={`transition-all duration-700 ${
              techReveal.isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <p className="eyebrow">Inovação e Precisão</p>
            <h2 className="mt-2 font-serif text-3xl xl:text-4xl 2xl:text-5xl uppercase leading-tight tracking-wide">
              Tecnologia a favor
              <br />
              do seu sorriso
            </h2>
            <p className="mt-4 max-w-[340px] xl:max-w-[420px] text-[11px] sm:text-xs xl:text-sm leading-relaxed text-foreground/80">
              Contamos com equipamentos de última geração para diagnósticos mais precisos,
              tratamentos mais rápidos e resultados ainda mais previsíveis.
            </p>
            <div className="mt-6 xl:mt-8">
              <button
                onClick={() => handleOpenAppointment("Checkup Digital")}
                className="shimmer-button inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 xl:px-6 xl:py-3 text-[11px] sm:text-xs xl:text-sm font-semibold text-primary-foreground shadow transition hover:opacity-90 active:scale-95 cursor-pointer"
              >
                Conheça nossa tecnologia <ArrowRight className="h-3.5 w-3.5 xl:h-4 xl:w-4" />
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 xl:gap-6">
            {[
              [
                scanner,
                "Scanner Intraoral 3D",
                "Mais precisão e conforto no seu diagnóstico sem moldes desconfortáveis.",
              ],
              [
                ba,
                "Planejamento Digital",
                "Visualize o resultado final do seu novo sorriso antes mesmo de começar.",
              ],
              [
                room,
                "Conforto e Biossegurança",
                "Ambiente cirúrgico climatizado preparado para uma experiência relaxante.",
              ],
            ].map(([img, t, d], i) => (
              <div
                key={t}
                style={{ transitionDelay: `${i * 120}ms` }}
                className={`group rounded-lg border border-border bg-card p-2.5 xl:p-3 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-md ${
                  techReveal.isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <div className="overflow-hidden rounded">
                  <img
                    src={img}
                    alt={t}
                    loading="lazy"
                    width={944}
                    height={704}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-2 xl:p-2.5">
                  <h3 className="mt-2 font-sans text-[12px] sm:text-[13px] xl:text-[15px] font-semibold text-foreground transition-colors group-hover:text-primary">
                    {t}
                  </h3>
                  <p className="mt-1 text-[10px] sm:text-[11px] xl:text-xs leading-snug text-muted-foreground">
                    {d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section
        id="resultados"
        ref={resultsReveal.ref}
        className="bg-secondary py-16 xl:py-24 2xl:py-28"
      >
        <div className={container}>
          <div
            className={`text-center transition-all duration-700 ${
              resultsReveal.isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <p className="eyebrow">Resultados reais</p>
            <h2 className="mt-2 text-3xl sm:text-4xl xl:text-5xl">
              Sorrisos que transformam vidas
            </h2>
            <p className="mt-2 text-[11px] sm:text-xs xl:text-sm text-muted-foreground">
              Cada sorriso conta uma história. Veja alguns dos nossos resultados e descubra o poder
              da odontologia estética.
            </p>
          </div>
          <div
            className={`mt-10 xl:mt-14 grid grid-cols-2 gap-4 lg:grid-cols-[1fr_1fr_1fr_1fr_0.75fr] xl:gap-5 transition-all duration-700 ${
              resultsReveal.isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                style={{ transitionDelay: `${i * 100}ms` }}
                className="group relative overflow-hidden rounded-md transition-all duration-500 hover:-translate-y-1 hover:shadow-md"
              >
                <img
                  src={ba}
                  alt="Antes e depois"
                  loading="lazy"
                  width={944}
                  height={704}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: `${30 + i * 12}% 50%` }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-foreground/50 py-1.5 text-center text-[9px] xl:text-[10px] text-primary-foreground backdrop-blur-xs font-medium">
                  Antes | Depois
                </div>
              </div>
            ))}
            <div className="col-span-2 flex flex-col items-center justify-center border border-border bg-card p-4 xl:p-6 text-center font-serif text-primary lg:col-span-1 rounded-md shadow-xs transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
              <span className="text-sm xl:text-base">Mais de</span>
              <span className="text-4xl xl:text-5xl font-semibold">5.000</span>
              <span className="text-sm xl:text-base leading-snug">
                sorrisos
                <br />
                transformados
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" ref={testimonialsReveal.ref} className="py-20 xl:py-28 2xl:py-32">
        <div className={container}>
          <div
            className={`text-center transition-all duration-700 ${
              testimonialsReveal.isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <p className="eyebrow">Depoimentos</p>
            <h2 className="mt-2 text-3xl sm:text-4xl xl:text-5xl">
              A confiança de quem já viveu essa experiência
            </h2>
            <p className="mt-2 text-[11px] sm:text-xs xl:text-sm text-muted-foreground">
              Nossos pacientes são a prova do nosso compromisso com a excelência.
            </p>
          </div>

          <div className="mt-12 xl:mt-16 grid gap-6 md:grid-cols-3 xl:gap-8">
            {[
              [
                tClar,
                "Mariana Silva",
                "“Atendimento impecável, desde a recepção até o pós-tratamento. Me senti segura e o resultado superou todas as minhas expectativas! Meu sorriso nunca esteve tão bonito.”",
                "Tratamento: Lentes de Contato",
              ],
              [
                tEst,
                "Rodrigo Almeida",
                "“Profissionais altamente capacitados e um ambiente incrível. Fiz meu implante e todo o processo foi muito mais tranquilo do que eu imaginava. Recomendo de olhos fechados!”",
                "Tratamento: Implantes Guiados",
              ],
              [
                tOrto,
                "Camila Pereira",
                "“Além da competência, o cuidado e a atenção da equipe fazem toda a diferença. A Lumière realmente entrega uma experiência única, do início ao fim.”",
                "Tratamento: Ortodontia Invisível",
              ],
            ].map(([img, n, q, tag], i) => (
              <div
                key={n}
                style={{ transitionDelay: `${i * 120}ms` }}
                className={`group flex flex-col justify-between rounded-xl border border-border bg-card p-6 xl:p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl ${
                  testimonialsReveal.isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div>
                  <div className="flex items-center gap-4">
                    <img
                      src={img}
                      alt={n}
                      loading="lazy"
                      width={64}
                      height={64}
                      className="h-14 w-14 xl:h-16 xl:w-16 rounded-full object-cover ring-2 ring-primary/20 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div>
                      <div className="text-[12px] sm:text-[13px] xl:text-[15px] font-semibold text-foreground">
                        {n}
                      </div>
                      <div className="mt-1 flex gap-0.5 text-primary">
                        {[...Array(5)].map((_, idx) => (
                          <Star
                            key={idx}
                            className="h-3 w-3 xl:h-3.5 xl:w-3.5 fill-current transition-transform duration-300 hover:scale-125"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-[11px] sm:text-xs xl:text-sm leading-relaxed text-foreground/80 italic">
                    {q}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/60 text-[10px] sm:text-[11px] xl:text-xs text-muted-foreground font-medium">
                  {tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiente Section with Lightbox */}
      <section ref={environmentReveal.ref} className="bg-secondary/70 py-20 xl:py-28 2xl:py-32">
        <div className={`${container} grid gap-10 xl:gap-14 lg:grid-cols-[1fr_2.2fr]`}>
          <div
            className={`transition-all duration-700 ${
              environmentReveal.isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <p className="eyebrow">Nosso ambiente</p>
            <h2 className="mt-2 text-3xl sm:text-4xl xl:text-5xl leading-tight">
              Um espaço feito para você se sentir bem
            </h2>
            <p className="mt-4 text-[11px] sm:text-xs xl:text-sm leading-relaxed text-foreground/80">
              Cada detalhe da nossa clínica foi cuidadosamente planejado para proporcionar uma
              experiência acolhedora, confortável e sofisticada.
            </p>
            <ul className="mt-6 space-y-3.5 xl:space-y-4 text-[11px] sm:text-xs xl:text-sm">
              {[
                [Wind, "Ambiente 100% climatizado com aromaterapia"],
                [Lock, "Salas privativas com isolamento acústico"],
                [Heart, "Conforto e massagem nas cadeiras clínicas"],
                [MapPin, "Localização privilegiada na Av. Paulista com valet"],
              ].map(([I, t], idx) => {
                const Ic = I as typeof Wind;
                return (
                  <li
                    key={t as string}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                    className="flex items-center gap-3 text-foreground/90 transition-transform hover:translate-x-1"
                  >
                    <div className="flex h-5 w-5 xl:h-6 xl:w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Ic className="h-3 w-3 xl:h-3.5 xl:w-3.5" strokeWidth={1.5} />
                    </div>
                    {t as string}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Interactive photo grid with hover zoom and click-to-preview */}
          <div className="grid grid-cols-3 gap-2.5 xl:gap-3.5">
            {[
              [aboutMain, "Recepção Elegante"],
              [room, "Consultório Master"],
              [hero, "Sala de Espera VIP"],
              [room, "Ambiente Clínico"],
              [aboutMain, "Atendimento Exclusivo"],
            ].map(([img, label], i) => (
              <div
                key={i}
                onClick={() => setLightboxImage(img)}
                style={{ transitionDelay: `${i * 80}ms` }}
                className={`group relative cursor-pointer overflow-hidden rounded-md border border-border shadow-sm transition-all duration-500 hover:scale-[1.03] hover:shadow-lg ${
                  environmentReveal.isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                <img
                  src={img}
                  alt={label}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <span className="rounded bg-background/90 px-2.5 py-1 text-[9px] xl:text-[10px] font-medium text-foreground backdrop-blur-sm">
                    Ampliar foto
                  </span>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-center rounded-md border border-border bg-card p-5 xl:p-6 text-center font-serif text-lg xl:text-xl leading-snug text-foreground/80 shadow-sm">
              Elegância, conforto e segurança em um só lugar.
            </div>
          </div>
        </div>
      </section>

      {/* Dúvidas Frequentes (FAQ) Section */}
      <section ref={faqReveal.ref} className="py-20 xl:py-28 2xl:py-32">
        <div className={`${container} grid gap-10 xl:gap-14 lg:grid-cols-2`}>
          <div
            className={`transition-all duration-700 ${
              faqReveal.isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <p className="eyebrow">Dúvidas frequentes</p>
            <h2 className="mt-2 text-3xl sm:text-4xl xl:text-5xl">Tudo o que você precisa saber</h2>
            <p className="mt-3 text-[11px] sm:text-xs xl:text-sm text-muted-foreground leading-relaxed">
              Separamos as principais dúvidas dos nossos pacientes para esclarecer cada detalhe
              antes da sua consulta.
            </p>
            <div className="mt-8 rounded-xl border border-border bg-secondary/40 p-4 xl:p-6">
              <h4 className="text-xs sm:text-[13px] xl:text-sm font-semibold">
                Ficou com alguma dúvida específica?
              </h4>
              <p className="mt-1 text-[11px] sm:text-xs xl:text-[13px] text-muted-foreground">
                Nossa equipe de concierge odontológico está à disposição no WhatsApp.
              </p>
              <button
                onClick={() => handleOpenAppointment("Dúvidas Gerais")}
                className="mt-3 text-[11px] sm:text-xs xl:text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                Falar com consultor <ArrowRight className="h-3 w-3 xl:h-3.5 xl:w-3.5" />
              </button>
            </div>
          </div>

          <div className="space-y-3 xl:space-y-3.5">
            {faqs.map((f, i) => (
              <div
                key={f.q}
                style={{ transitionDelay: `${i * 60}ms` }}
                className={`overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 ${
                  faqReveal.isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                } ${openFaq === i ? "border-primary/50 shadow-sm" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-3.5 xl:px-6 xl:py-4 text-left text-[12px] sm:text-[13px] xl:text-sm font-medium transition-colors hover:text-primary cursor-pointer"
                >
                  <span>{f.q}</span>
                  <div
                    className={`flex h-5 w-5 xl:h-6 xl:w-6 shrink-0 items-center justify-center rounded-full bg-secondary transition-transform duration-300 ${
                      openFaq === i ? "rotate-180 bg-primary/10 text-primary" : ""
                    }`}
                  >
                    {openFaq === i ? (
                      <Minus className="h-3 w-3 xl:h-3.5 xl:w-3.5" />
                    ) : (
                      <Plus className="h-3 w-3 xl:h-3.5 xl:w-3.5" />
                    )}
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openFaq === i
                      ? "max-h-40 opacity-100 px-5 pb-4 pt-1 xl:px-6 xl:pb-5"
                      : "max-h-0 opacity-0 px-5 pb-0 pt-0 xl:px-6"
                  }`}
                >
                  <p className="text-[11px] sm:text-xs xl:text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contato"
        ref={ctaReveal.ref}
        className="relative overflow-hidden bg-navy text-navy-foreground py-16 xl:py-24 2xl:py-28"
      >
        <img
          src={cta}
          alt=""
          loading="lazy"
          width={1024}
          height={640}
          className="absolute right-0 top-0 h-full w-1/2 object-cover object-right opacity-90 md:w-[45%] transition-transform duration-1000 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-transparent" />

        <div
          className={`${container} relative grid items-center gap-8 md:grid-cols-3 xl:gap-12 transition-all duration-700 ${
            ctaReveal.isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div>
            <span className="text-[10px] xl:text-[11px] uppercase tracking-[0.25em] text-primary font-semibold">
              Inicie sua jornada
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl xl:text-5xl leading-tight">
              O seu novo sorriso começa aqui
            </h2>
            <p className="mt-3 text-[11px] sm:text-xs xl:text-sm leading-relaxed opacity-85">
              Agende agora mesmo a sua avaliação e dê o primeiro passo para transformar o seu
              sorriso com a excelência da Lumière.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3.5">
            <button
              onClick={() => handleOpenAppointment("Avaliação Completa")}
              className="shimmer-button inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 xl:px-7 xl:py-3.5 text-xs xl:text-sm font-semibold text-primary-foreground shadow-lg transition hover:opacity-90 active:scale-95 cursor-pointer"
            >
              <Calendar className="h-4 w-4 xl:h-4.5 xl:w-4.5" />
              Agendar avaliação agora
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-navy-foreground/50 px-5 py-2.5 xl:px-6 xl:py-3 text-[11px] sm:text-xs xl:text-sm font-medium transition hover:border-primary hover:text-primary active:scale-95"
            >
              <MessageCircle className="h-3.5 w-3.5 xl:h-4 xl:w-4 transition-transform duration-300 group-hover:scale-110" />
              Falar no WhatsApp
            </a>
          </div>

          <div className="hidden md:block">
            <p className="font-serif text-3xl xl:text-4xl 2xl:text-5xl italic leading-tight text-primary">
              Sorrisos
              <br />
              que inspiram
              <br />
              confiança.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border">
        <div className={`${container} grid items-center gap-8 py-12 xl:py-16 md:grid-cols-5`}>
          <Logo small />
          <div className="space-y-2 text-[11px] sm:text-xs xl:text-[13px]">
            <a
              href={`tel:${CLINIC_CONFIG.whatsappNumber.slice(2)}`}
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
            >
              <Phone className="h-3.5 w-3.5 xl:h-4 xl:w-4 text-primary shrink-0" />
              {CLINIC_CONFIG.phone}
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5 xl:h-4 xl:w-4 text-primary shrink-0" />
              {CLINIC_CONFIG.whatsappFormatted}
            </a>
            <a
              href="mailto:contato@lumiereodontologia.com.br"
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
            >
              <Mail className="h-3.5 w-3.5 xl:h-4 xl:w-4 text-primary shrink-0" />
              contato@lumiereodontologia.com.br
            </a>
          </div>

          <div className="flex gap-2 text-[11px] sm:text-xs xl:text-[13px] text-foreground/80">
            <MapPin className="h-3.5 w-3.5 xl:h-4 xl:w-4 shrink-0 text-primary mt-0.5" />
            <span>
              Av. Paulista, 1000 - Bela Vista
              <br />
              São Paulo - SP, 01310-100
            </span>
          </div>

          <div className="flex gap-2 text-[11px] sm:text-xs xl:text-[13px] text-foreground/80">
            <Clock className="h-3.5 w-3.5 xl:h-4 xl:w-4 shrink-0 text-primary mt-0.5" />
            <span>
              Seg a Sex: 8h às 20h
              <br />
              Sábado: 8h às 14h
            </span>
          </div>

          <div className="flex gap-4 md:justify-end">
            {[Instagram, Facebook, Youtube, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-8 w-8 xl:h-9 xl:w-9 items-center justify-center rounded-full border border-border text-foreground/75 transition-all duration-300 hover:scale-110 hover:border-primary hover:text-primary hover:bg-primary/10"
                aria-label="Rede Social"
              >
                <Icon className="h-4 w-4 xl:h-4.5 xl:w-4.5" />
              </a>
            ))}
          </div>
        </div>

        <div
          className={`${container} flex flex-wrap justify-between gap-2 border-t border-border/80 py-5 text-[10px] xl:text-[11px] text-muted-foreground`}
        >
          <span>© 2026 Lumière Odontologia. Todos os direitos reservados.</span>
          <span>Política de Privacidade &nbsp;|&nbsp; Termos de Uso</span>
          <span>Desenvolvido com excelência para sorrisos extraordinários.</span>
        </div>
      </footer>

      {/* Floating Scroll to Top button */}
      <ScrollToTop />

      {/* Appointment Modal */}
      <AppointmentModal
        open={appointmentModalOpen}
        onOpenChange={setAppointmentModalOpen}
        initialTreatment={selectedTreatment}
      />

      {/* Treatment Details Modal */}
      <TreatmentModal
        treatment={activeTreatment}
        open={treatmentModalOpen}
        onOpenChange={setTreatmentModalOpen}
        onSchedule={(t) => handleOpenAppointment(t)}
      />

      {/* Lightbox Modal */}
      {lightboxImage && (
        <Dialog open={!!lightboxImage} onOpenChange={() => setLightboxImage(null)}>
          <DialogContent className="max-w-3xl p-2 border-none bg-black/90 backdrop-blur-md">
            <img
              src={lightboxImage}
              alt="Ambiente ampliado"
              className="h-auto w-full rounded object-contain max-h-[80vh]"
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
