import { useState, useRef, useCallback, useEffect } from "react";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  altBefore?: string;
  altAfter?: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
  sliderPos?: number;
  onSliderChange?: (pos: number) => void;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  altBefore = "Sorriso antes do tratamento",
  altAfter = "Resultado final do sorriso após o tratamento",
  beforeLabel = "Antes",
  afterLabel = "Depois",
  className = "",
  sliderPos: controlledPos,
  onSliderChange,
}: BeforeAfterSliderProps) {
  const [internalPos, setInternalPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const sliderPos = controlledPos !== undefined ? controlledPos : internalPos;

  // Atualiza a posição da divisória com base na coordenada horizontal X
  const updatePosition = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const clamped = Math.max(2, Math.min(98, (x / rect.width) * 100));
      if (onSliderChange) {
        onSliderChange(clamped);
      } else {
        setInternalPos(clamped);
      }
    },
    [onSliderChange],
  );

  // Inicia o arrasto EXCLUSIVAMENTE ao clicar e segurar (Pointer Down)
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Permite apenas o botão principal do mouse (botão esquerdo) ou toque
    if (e.pointerType === "mouse" && e.button !== 0) return;

    isDraggingRef.current = true;
    setIsDragging(true);

    // Captura o ponteiro no elemento para manter o rastreamento consistente
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Ignora fallback se não suportado
    }

    updatePosition(e.clientX);
  };

  // Movimenta a divisória APENAS se o arrasto estiver ativo (Pointer Move com flag true)
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    updatePosition(e.clientX);
  };

  // Finaliza o arrasto imediatamente ao soltar (Pointer Up)
  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      setIsDragging(false);
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // Ignora se já liberado
      }
    }
  };

  // Finaliza o arrasto se cancelado pelo sistema
  const handlePointerCancel = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  // Fallback de segurança global no window caso o clique seja liberado fora do elemento
  useEffect(() => {
    const handleGlobalPointerRelease = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        setIsDragging(false);
      }
    };

    window.addEventListener("pointerup", handleGlobalPointerRelease);
    window.addEventListener("pointercancel", handleGlobalPointerRelease);
    window.addEventListener("blur", handleGlobalPointerRelease);

    return () => {
      window.removeEventListener("pointerup", handleGlobalPointerRelease);
      window.removeEventListener("pointercancel", handleGlobalPointerRelease);
      window.removeEventListener("blur", handleGlobalPointerRelease);
    };
  }, []);

  // Suporte a teclado para acessibilidade (WCAG AA)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    let next = sliderPos;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      next = Math.max(0, sliderPos - 5);
      e.preventDefault();
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      next = Math.min(100, sliderPos + 5);
      e.preventDefault();
    } else if (e.key === "Home") {
      next = 0;
      e.preventDefault();
    } else if (e.key === "End") {
      next = 100;
      e.preventDefault();
    }
    if (next !== sliderPos) {
      if (onSliderChange) onSliderChange(next);
      else setInternalPos(next);
    }
  };

  return (
    <div
      ref={containerRef}
      role="slider"
      aria-label="Comparador interativo de antes e depois do tratamento"
      aria-valuenow={Math.round(sliderPos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      className={`group relative aspect-[16/10.5] sm:aspect-[16/10.2] w-full select-none overflow-hidden touch-none cursor-ew-resize bg-[#EBE3D7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6239] ${className}`}
      style={{ userSelect: "none", WebkitUserSelect: "none" }}
    >
      {/* Imagem de Fundo (Depois do Tratamento) */}
      <img
        src={afterImage}
        alt={altAfter}
        loading="eager"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover pointer-events-none select-none"
        style={{ objectPosition: "center 50%" }}
      />

      {/* Tag "Depois" no Canto Superior Direito */}
      <div className="absolute top-4 sm:top-5 right-4 sm:right-5 z-10 pointer-events-none select-none">
        <span className="rounded-full bg-[#EAE1D4]/90 backdrop-blur-md px-3.5 py-1 text-xs font-medium text-[#3D2C22] shadow-2xs border border-white/20 tracking-wide">
          {afterLabel}
        </span>
      </div>

      {/* Camada Sobreposta Recortada (Antes do Tratamento) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none select-none"
        style={{ width: `${sliderPos}%` }}
      >
        <div
          className="relative h-full"
          style={{
            width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%",
          }}
        >
          <img
            src={beforeImage}
            alt={altBefore}
            loading="eager"
            draggable={false}
            className="h-full w-full object-cover pointer-events-none select-none"
            style={{
              width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%",
              objectPosition: "center 50%",
            }}
          />
        </div>
      </div>

      {/* Tag "Antes" no Canto Superior Esquerdo */}
      <div className="absolute top-4 sm:top-5 left-4 sm:left-5 z-10 pointer-events-none select-none">
        <span className="rounded-full bg-[#EAE1D4]/90 backdrop-blur-md px-3.5 py-1 text-xs font-medium text-[#3D2C22] shadow-2xs border border-white/20 tracking-wide">
          {beforeLabel}
        </span>
      </div>

      {/* Linha Divisória e Alça Central Arrastável */}
      <div
        className="absolute top-0 bottom-0 z-20 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)] pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div
          className={`absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#3B2920] text-white shadow-lg border-2 border-white transition-transform duration-150 ${
            isDragging ? "scale-115 shadow-xl bg-[#281B14]" : "group-hover:scale-105"
          }`}
          style={{ cursor: "ew-resize" }}
        >
          <span className="text-[11px] font-bold tracking-tighter select-none font-mono">
            &lt;&nbsp;&gt;
          </span>
        </div>
      </div>

      {/* Instrução Inferior "Arraste para comparar" */}
      <div className="pointer-events-none absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 z-10 select-none">
        <div className="flex items-center gap-2 rounded-full bg-black/45 backdrop-blur-md px-4 py-1.5 text-xs text-white shadow-sm border border-white/10 tracking-wide">
          <MoveHorizontal className="h-3.5 w-3.5" />
          <span>Arraste para comparar</span>
        </div>
      </div>
    </div>
  );
}
