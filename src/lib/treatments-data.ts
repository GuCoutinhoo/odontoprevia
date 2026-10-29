export type TreatmentCategory = "Todos" | "Estética" | "Alinhamento" | "Reposição" | "Harmonização";

export type TreatmentImageKey =
  "lentes" | "clareamento" | "implante" | "ortodontia" | "harmonizacao" | "estetica";

export interface TreatmentData {
  id: string;
  imageKey: TreatmentImageKey;
  category: "Estética" | "Alinhamento" | "Reposição" | "Harmonização";
  t: string;
  d: string;
  longDesc: string;
  benefits: string[];
  duration: string;
  sessions: string;
}

export const TREATMENT_CATEGORIES: TreatmentCategory[] = [
  "Todos",
  "Estética",
  "Alinhamento",
  "Reposição",
  "Harmonização",
];

export const TREATMENTS: TreatmentData[] = [
  {
    id: "lentes-contato",
    imageKey: "lentes",
    category: "Estética",
    t: "Lentes de Contato Dental",
    d: "Harmonia e naturalidade para os dentes.",
    longDesc:
      "As lentes de contato de porcelana ultrafina corrigem formato, cor, tamanho e pequenos desvios dos dentes com desgaste dental mínimo ou nulo, proporcionando um sorriso harmônico, natural e de altíssima durabilidade.",
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
    id: "clareamento-dental",
    imageKey: "clareamento",
    category: "Estética",
    t: "Clareamento Dental",
    d: "Dentes mais claros com acompanhamento.",
    longDesc:
      "Protocolos combinados de clareamento a laser em consultório e moldeiras personalizadas para uso domiciliar supervisionado. Dentes visivelmente mais claros com tecnologia que preserva o esmalte e previne a sensibilidade excessiva.",
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
    id: "implantes-dentarios",
    imageKey: "implante",
    category: "Reposição",
    t: "Implantes Dentários",
    d: "Reponha dentes perdidos.",
    longDesc:
      "Reabilitação oral completa com implantes em titânio biocompatível e coroas em cerâmica pura ou zircônia. Procedimentos guiados por tomografia para máxima precisão, cicatrização acelerada e restauração total da função mastigatória.",
    benefits: [
      "Cirurgia guiada sem cortes invasivos",
      "Possibilidade de carga imediata",
      "Estabilidade e conforto mastigatório total",
      "Aparência idêntica aos dentes naturais",
    ],
    duration: "Procedimento em 1 dia",
    sessions: "Guia Tomográfico 3D",
  },
  {
    id: "ortodontia",
    imageKey: "ortodontia",
    category: "Alinhamento",
    t: "Ortodontia",
    d: "Mais alinhamento para o sorriso.",
    longDesc:
      "Tratamentos modernos com alinhadores transparentes invisíveis e aparelhos estéticos de safira. Alinhamento dentário previsível, discreto e sem o incômodo dos fios e braquetes metálicos tradicionais.",
    benefits: [
      "Alinhadores transparentes e removíveis",
      "Facilidade total na alimentação e escovação",
      "Simulação digital antes de iniciar o tratamento",
      "Consultas mais ágeis e confortáveis",
    ],
    duration: "6 a 14 meses em média",
    sessions: "Scanner Intraoral 3D",
  },
  {
    id: "harmonizacao-facial",
    imageKey: "harmonizacao",
    category: "Harmonização",
    t: "Harmonização Facial",
    d: "Valorize seus traços.",
    longDesc:
      "Técnicas avançadas de harmonização orofacial para valorizar seus traços com elegância e sofisticação: preenchimento labial sutil, bioestimuladores de colágeno e suavização de linhas de expressão para um visual rejuvenescido.",
    benefits: [
      "Resultados sutis, proporcionais e naturais",
      "Profissionais especialistas em anatomia facial",
      "Substâncias de padrão ouro mundial",
      "Retorno imediato às atividades habituais",
    ],
    duration: "45 a 60 minutos",
    sessions: "Avaliação Facial Integrada",
  },
  {
    id: "odontologia-estetica",
    imageKey: "estetica",
    category: "Estética",
    t: "Odontologia Estética",
    d: "Cuidados para a estética dental.",
    longDesc:
      "Reconstruções minuciosas com resinas compostas biomiméticas de nano-partículas, fechamento de diastemas e plástica gengival (gengivoplastia) para proporcionar proporções ideais e vitalidade renovada ao seu sorriso.",
    benefits: [
      "Biomimética dental de alta precisão",
      "Possibilidade de correção em sessão única",
      "Harmonia perfeita entre dentes e gengiva",
      "Polimento duradouro e brilho natural",
    ],
    duration: "1 a 2 consultas",
    sessions: "Enceramento Diagnóstico",
  },
];

/**
 * Filtra tratamentos com base na categoria selecionada.
 */
export function filterTreatments(
  items: TreatmentData[],
  selectedCategory: TreatmentCategory,
): TreatmentData[] {
  if (selectedCategory === "Todos") {
    return items;
  }
  return items.filter((item) => item.category === selectedCategory);
}

/**
 * Retorna o rótulo pluralizado de contagem de tratamentos.
 */
export function getTreatmentCountLabel(count: number): string {
  if (count === 1) {
    return "1 tratamento";
  }
  return `${count} tratamentos`;
}
