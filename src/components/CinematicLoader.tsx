"use client";

import { useEffect, useState } from "react";
import "./CinematicLoader.css";

type CinematicLoaderProps = {
  logoSrc?: string;
  brandName?: string;
  minDuration?: number;
};

export default function CinematicLoader({
  logoSrc = "/images/logo.png",
  brandName = "BLEND CREATIVE",
  minDuration = 2400,
}: CinematicLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    let exitTimeout: ReturnType<typeof setTimeout> | undefined;
    let removeTimeout: ReturnType<typeof setTimeout> | undefined;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percentage = Math.min((elapsed / minDuration) * 100, 100);

      setProgress(Math.round(percentage));

      if (elapsed >= minDuration) {
        clearInterval(interval);
        setProgress(100);

        exitTimeout = setTimeout(() => {
          setIsExiting(true);

         removeTimeout = setTimeout(() => {
          window.dispatchEvent(new Event("blend-loader-complete"));
          setIsVisible(false);
        }, 1000);
        }, 250);
      }
    }, 30);

    return () => {
      clearInterval(interval);

      if (exitTimeout) {
        clearTimeout(exitTimeout);
      }

      if (removeTimeout) {
        clearTimeout(removeTimeout);
      }
    };
  }, [minDuration]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`cinematic-loader${isExiting ? " is-exiting" : ""}`}
      role="status"
      aria-label={`Carregando ${brandName}`}
      aria-live="polite"
    >
      <div className="cinematic-loader__background" />

      <div className="cinematic-loader__light cinematic-loader__light--one" />
      <div className="cinematic-loader__light cinematic-loader__light--two" />
      <div className="cinematic-loader__light cinematic-loader__light--three" />

      <div className="cinematic-loader__grid" />
      <div className="cinematic-loader__vignette" />

      <div className="cinematic-loader__content">
        <div className="cinematic-loader__brand">
          {showLogo && (
            <img
              className="cinematic-loader__logo"
              src={logoSrc}
              alt={`Logo ${brandName}`}
              onError={() => setShowLogo(false)}
            />
          )}

          <span className="cinematic-loader__brand-name">
            {brandName}
          </span>
        </div>

        <div className="cinematic-loader__divider">
          <span />
        </div>

        <p className="cinematic-loader__message">
          EXPERIÊNCIA CRIATIVA EM PREPARAÇÃO
        </p>

        <div
          className="cinematic-loader__progress"
          role="progressbar"
          aria-label="Carregamento do site"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <div className="cinematic-loader__progress-track">
            <div
              className="cinematic-loader__progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="cinematic-loader__progress-info">
            <span>CARREGANDO EXPERIÊNCIA</span>
            <span className="cinematic-loader__percentage">
              {progress}%
            </span>
          </div>
        </div>
      </div>

      <div className="cinematic-loader__footer">
        <span>BLEND CREATIVE</span>
        <span>DESIGN · ESTRATÉGIA · EXPERIÊNCIA</span>
      </div>
    </div>
  );
}