import { describe, expect, it } from "vitest";
import {
  TREATMENTS,
  TREATMENT_CATEGORIES,
  filterTreatments,
  getTreatmentCountLabel,
} from "@/lib/treatments-data";

describe("Treatments logic", () => {
  it("TREATMENT_CATEGORIES contains all required categories", () => {
    expect(TREATMENT_CATEGORIES).toEqual([
      "Todos",
      "Estética",
      "Alinhamento",
      "Reposição",
      "Harmonização",
    ]);
  });

  it("TREATMENTS contains exactly 6 procedure items with valid required fields", () => {
    expect(TREATMENTS).toHaveLength(6);
    for (const item of TREATMENTS) {
      expect(item.id).toBeTruthy();
      expect(item.t).toBeTruthy();
      expect(item.d).toBeTruthy();
      expect(item.category).toBeTruthy();
      expect(item.longDesc).toBeTruthy();
      expect(item.benefits.length).toBeGreaterThan(0);
    }
  });

  it("filterTreatments with 'Todos' returns all 6 items", () => {
    const result = filterTreatments(TREATMENTS, "Todos");
    expect(result).toHaveLength(6);
  });

  it("filterTreatments filters correctly for each category", () => {
    const estetica = filterTreatments(TREATMENTS, "Estética");
    expect(estetica).toHaveLength(3);
    expect(estetica.every((i) => i.category === "Estética")).toBe(true);

    const alinhamento = filterTreatments(TREATMENTS, "Alinhamento");
    expect(alinhamento).toHaveLength(1);
    expect(alinhamento[0]?.t).toBe("Ortodontia");

    const reposicao = filterTreatments(TREATMENTS, "Reposição");
    expect(reposicao).toHaveLength(1);
    expect(reposicao[0]?.t).toBe("Implantes Dentários");

    const harmonizacao = filterTreatments(TREATMENTS, "Harmonização");
    expect(harmonizacao).toHaveLength(1);
    expect(harmonizacao[0]?.t).toBe("Harmonização Facial");
  });

  it("getTreatmentCountLabel handles singular and plural counts", () => {
    expect(getTreatmentCountLabel(1)).toBe("1 tratamento");
    expect(getTreatmentCountLabel(0)).toBe("0 tratamentos");
    expect(getTreatmentCountLabel(3)).toBe("3 tratamentos");
    expect(getTreatmentCountLabel(6)).toBe("6 tratamentos");
  });
});
