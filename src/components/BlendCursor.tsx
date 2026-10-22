"use client";

import { useEffect, useRef } from "react";

type TrailPoint = { x: number; y: number; time: number };

export default function BlendCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!cursor || !canvas || !context) return;
    const media = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    let x = 0;
    let y = 0;
    let visible = false;
    let blue = false;
    let points: TrailPoint[] = [];
    const lifetime = 190;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * ratio);
      canvas.height = Math.round(window.innerHeight * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      points = [];
    };
    resize();

    const hide = () => {
      visible = false;
      points = [];
      cancelAnimationFrame(frame);
      frame = 0;
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      cursor.classList.remove("is-visible", "is-pressed");
      document.documentElement.classList.remove("blend-cursor-ready");
    };

    const updateTarget = () => {
      const target = document.elementFromPoint(x, y);
      blue = !!target?.closest("#posicionamento");
      cursor.classList.toggle("is-blue", blue);
      cursor.classList.toggle("is-interactive", !!target?.closest('a, button, summary, [role="button"]'));
      cursor.classList.toggle("is-text", !!target?.closest('input:not([type="submit"]), textarea, [contenteditable="true"]'));
    };

    const draw = (now: number) => {
      frame = 0;
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      points = points.filter((point) => now - point.time < lifetime);
      if (!visible) return;
      const rgb = blue ? "0,102,173" : "255,159,28";
      context.lineCap = "round";
      context.lineJoin = "round";
      context.shadowColor = `rgba(${rgb},0.65)`;
      context.shadowBlur = 9;
      for (let index = 1; index < points.length; index++) {
        const previous = points[index - 1];
        const point = points[index];
        const fade = Math.pow(1 - (now - point.time) / lifetime, 1.6);
        context.beginPath();
        context.moveTo(previous.x, previous.y);
        context.lineTo(point.x, point.y);
        context.lineWidth = 0.4 + fade * 1.5;
        context.strokeStyle = `rgba(${rgb},${fade * 0.65})`;
        context.stroke();
      }
      context.shadowBlur = 0;
      if (points.length > 0) frame = requestAnimationFrame(draw);
    };

    const move = (event: PointerEvent) => {
      if (!media.matches || event.pointerType !== "mouse") { hide(); return; }
      x = event.clientX;
      y = event.clientY;
      if (!visible) {
        visible = true;
        cursor.classList.add("is-visible");
        document.documentElement.classList.add("blend-cursor-ready");
      }
      cursor.style.setProperty("--cursor-x", `${x}px`);
      cursor.style.setProperty("--cursor-y", `${y}px`);
      updateTarget();
      points.push({ x, y, time: performance.now() });
      if (points.length > 48) points.shift();
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const scroll = () => { if (visible) updateTarget(); };
    const down = () => cursor.classList.add("is-pressed");
    const up = () => cursor.classList.remove("is-pressed");
    const keyboard = (event: KeyboardEvent) => { if (event.key === "Tab" || event.key === "Escape") hide(); };
    const visibility = () => { if (document.hidden) hide(); };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", resize);
    window.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointerup", up, { passive: true });
    window.addEventListener("blur", hide);
    window.addEventListener("keydown", keyboard);
    document.documentElement.addEventListener("pointerleave", hide);
    document.addEventListener("visibilitychange", visibility);
    media.addEventListener("change", hide);
    return () => {
      hide();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("blur", hide);
      window.removeEventListener("keydown", keyboard);
      document.documentElement.removeEventListener("pointerleave", hide);
      document.removeEventListener("visibilitychange", visibility);
      media.removeEventListener("change", hide);
    };
  }, []);

  return (
    <div ref={cursorRef} className="blend-cursor" aria-hidden="true">
      <canvas ref={canvasRef} className="blend-cursor__trail" />
      <div className="blend-cursor__halo" />
      <div className="blend-cursor__arrow">
        <svg viewBox="0 0 26 30" fill="none">
          <path d="M4 3 22 18 13 19 7 26 4 3Z" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
