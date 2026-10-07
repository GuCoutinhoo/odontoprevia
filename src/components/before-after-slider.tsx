import { useState, useRef, useCallback, useEffect } from "react";
import { Sparkles } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  altBefore?: string;
  altAfter?: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  altBefore = "Antes do tratamento",
  altAfter = "Depois do tratamento",
  beforeLabel = "Antes",
  afterLabel = "Depois",
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedPos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(clampedPos);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging || !e.touches[0]) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove],
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove],
  );

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleEnd]);

  return (
    <div
      ref={containerRef}
      className={`group relative select-none overflow-hidden rounded-md border border-border shadow-md transition-shadow hover:shadow-xl ${className}`}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* Background (After image) */}
      <img
        src={afterImage}
        alt={altAfter}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute right-4 bottom-4 rounded bg-background/85 px-2.5 py-1 text-[10px] font-medium tracking-wider text-foreground backdrop-blur-sm transition-opacity">
        {afterLabel}
      </div>

      {/* Foreground clipped (Before image) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
        <div
          className="relative h-full"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%" }}
        >
          <img
            src={beforeImage}
            alt={altBefore}
            loading="lazy"
            className="h-full w-full object-cover grayscale-[30%] filter transition-transform duration-700 group-hover:scale-105"
            style={{
              width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%",
            }}
          />
          <div className="absolute left-4 bottom-4 rounded bg-foreground/80 px-2.5 py-1 text-[10px] font-medium tracking-wider text-primary-foreground backdrop-blur-sm">
            {beforeLabel}
          </div>
        </div>
      </div>

      {/* Divider line & handle */}
      <div
        className="absolute top-0 bottom-0 z-20 w-0.5 bg-primary/80 shadow-[0_0_10px_rgba(200,160,90,0.8)]"
        style={{ left: `${sliderPos}%` }}
      >
        <div
          className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-background shadow-lg transition-transform duration-150 active:scale-110"
          style={{ cursor: "ew-resize" }}
        >
          <Sparkles className="h-4 w-4 text-primary animate-pulse" />
        </div>
      </div>

      {/* Interactive indicator hint */}
      <div className="pointer-events-none absolute top-3 left-1/2 -translate-x-1/2 rounded-full bg-foreground/60 px-3 py-1 text-[9px] font-medium text-primary-foreground opacity-75 backdrop-blur-sm transition-opacity group-hover:opacity-100">
        Arraste para comparar
      </div>
    </div>
  );
}
