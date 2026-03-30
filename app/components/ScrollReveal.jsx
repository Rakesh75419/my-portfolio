"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // Create intersection observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {

            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.05, 
        rootMargin: "0px 0px -50px 0px", 
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
      section.classList.add("fade-in-on-scroll");
      // Add staggered delay for each section
      section.style.transitionDelay = `${index * 0.15}s`;
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return null;
}