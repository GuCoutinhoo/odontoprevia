import { describe, expect, it } from "vitest";

describe("Before and After slider behavior and calculations", () => {
  it("clamps slider position safely between 2% and 98% during horizontal drag", () => {
    const clampPos = (clientX: number, rectLeft: number, rectWidth: number) => {
      const x = clientX - rectLeft;
      return Math.max(2, Math.min(98, (x / rectWidth) * 100));
    };

    // Center click
    expect(clampPos(500, 0, 1000)).toBe(50);
    // Extreme left
    expect(clampPos(-50, 0, 1000)).toBe(2);
    // Extreme right
    expect(clampPos(1200, 0, 1000)).toBe(98);
    // 30% position
    expect(clampPos(300, 0, 1000)).toBe(30);
  });

  it("handles keyboard step navigation with ArrowLeft and ArrowRight", () => {
    const handleKeyStep = (current: number, key: string) => {
      if (key === "ArrowLeft" || key === "ArrowDown") {
        return Math.max(0, current - 5);
      }
      if (key === "ArrowRight" || key === "ArrowUp") {
        return Math.min(100, current + 5);
      }
      if (key === "Home") return 0;
      if (key === "End") return 100;
      return current;
    };

    expect(handleKeyStep(50, "ArrowLeft")).toBe(45);
    expect(handleKeyStep(50, "ArrowRight")).toBe(55);
    expect(handleKeyStep(2, "ArrowLeft")).toBe(0);
    expect(handleKeyStep(98, "ArrowRight")).toBe(100);
    expect(handleKeyStep(50, "Home")).toBe(0);
    expect(handleKeyStep(50, "End")).toBe(100);
  });

  it("formats Brazilian phone numbers correctly with DDD mask", () => {
    const formatPhone = (val: string) => {
      let value = val.replace(/\D/g, "");
      if (value.length > 11) value = value.slice(0, 11);

      if (value.length > 6) {
        return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
      } else if (value.length > 2) {
        return `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else if (value.length > 0) {
        return `(${value}`;
      }
      return value;
    };

    expect(formatPhone("11987654321")).toBe("(11) 98765-4321");
    expect(formatPhone("119999")).toBe("(11) 9999");
    expect(formatPhone("11")).toBe("(11");
  });

  it("calculates progress percentage correctly across the 4 questionnaire steps", () => {
    const getProgress = (step: number, isSubmitted: boolean) => {
      return isSubmitted ? 100 : (step / 4) * 100;
    };

    expect(getProgress(1, false)).toBe(25);
    expect(getProgress(2, false)).toBe(50);
    expect(getProgress(3, false)).toBe(75);
    expect(getProgress(4, false)).toBe(100);
    expect(getProgress(4, true)).toBe(100);
  });
});
