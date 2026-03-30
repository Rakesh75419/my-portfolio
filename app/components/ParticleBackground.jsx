"use client";

import { useState, useEffect } from "react";
import Particles from "react-tsparticles";

export default function ParticleBackground() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;

    setDarkMode(html.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setDarkMode(html.classList.contains("dark"));
    });
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const particleColor = darkMode ? "#ffffff" : "#374151";
  const linkColor = darkMode ? "#ffffff" : "#9ca3af";

  // using default engine; loadFull not required for basic configuration
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: false, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 180, links: { opacity: 0.6 } },
            push: { quantity: 4 },
          },
        },
        particles: {
          number: { value: 120, density: { enable: true, area: 1200 } },
          color: { value: particleColor },
          shape: { type: "circle" },
          opacity: { value: 0.6 },
          size: { value: { min: 1, max: 3 } },
          links: {
            enable: true,
            distance: 160,
            color: linkColor,
            opacity: 0.18,
            width: 1,
            triangles: { enable: true, frequency: 0.1, color: linkColor, opacity: 0.03 },
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0"
      style={{ pointerEvents: "none", zIndex: 1 }}
    />
  );
}