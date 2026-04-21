"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 240;

export default function CanvasSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Track the scroll progress of the entire page
  const { scrollYProgress } = useScroll();

  // Map scroll progress (0 to 1) to (0 to TOTAL_FRAMES - 1)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    // Preload all 240 frames
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNumber = String(i).padStart(3, "0");
      img.src = `/sequence/ezgif-frame-${frameNumber}.jpg`;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) setLoaded(true);
      };

      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  // Update canvas when frameIndex changes during scroll
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!loaded) return;
    drawFrame(Math.round(latest));
  });

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img) return;

    // Use contain logic to prevent cropping the product and blend naturally into the #050505 void
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.height;
      drawWidth = img.width * (canvas.height / img.height);
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    } else {
      drawWidth = canvas.width;
      drawHeight = img.height * (canvas.width / img.width);
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    }

    // Background clearing perfectly matches the edge of the images
    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Anti-aliasing hints
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Adjust for pixel ratio to keep images crisp on retina displays
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      // Scale context to ensure correct drawing coordinates
      // Wait, if we scale the context, our drawFrame logic (which uses canvas.width directly) would misbehave.
      // So we leave it unscaled, but since we draw to the raw width/height it stays sharp!

      if (loaded) {
        drawFrame(Math.round(frameIndex.get()));
      }
    };

    window.addEventListener("resize", handleResize);
    // Call once initially to set the canvas boundaries
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [loaded, frameIndex]);

  return (
    <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#050505] -z-10">
      {/* Loading Fallback */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#050505] text-white/50 text-xs tracking-widest uppercase z-10">
          <div className="flex flex-col items-center gap-4">
            <div className="h-4 w-4 rounded-full border-2 border-white/20 border-t-white/80 animate-spin" />
            <span>Loading Cinematic Sequence...</span>
          </div>
        </div>
      )}
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block" 
      />
      
      {/* Optional Gradient overlays to further smooth edges if needed */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,#050505_100%)] opacity-30 mix-blend-multiply" />
    </div>
  );
}
