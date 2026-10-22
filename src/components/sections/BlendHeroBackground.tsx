
"use client";

import "./BlendHeroBackground.css";

export default function BlendHeroBackground() {
  return (
    <div
      className="blend-hero-background"
      aria-hidden="true"
    >
      <div className="blend-hero-background__base" />

      <div className="blend-hero-background__mesh" />

      <div className="blend-hero-background__glow blend-hero-background__glow--red" />

      <div className="blend-hero-background__glow blend-hero-background__glow--orange" />

      <div className="blend-hero-background__orb blend-hero-background__orb--one" />

      <div className="blend-hero-background__orb blend-hero-background__orb--two" />

      <div className="blend-hero-background__beam" />

      <div className="blend-hero-background__grid" />

      <div className="blend-hero-background__vignette" />
    </div>
  );
}
