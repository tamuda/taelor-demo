"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const heroSlides = [
  {
    image: "/man.jpg",
    title: "Confidence",
    caption: "The feeling of being styled by Taelor.",
    cta: "Start Your Subscription",
  },
  {
    image: "/manb.jpg",
    title: "Ease",
    caption: "Premium menswear delivered to your door, monthly.",
    cta: "Start Your Subscription",
  },
  {
    image: "/man2.jpg",
    title: "Intent",
    caption: "AI-powered styling that adapts to you.",
    cta: "Start Your Subscription",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  useEffect(() => {
    if (isAutoPlaying) return;

    const resumeTimer = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 3000);

    return () => clearTimeout(resumeTimer);
  }, [isAutoPlaying, currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Hero Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="relative container mx-auto px-4 lg:px-8 h-full flex items-end pb-16 lg:pb-24">
            <div className="max-w-2xl text-white">
              <h1 className="font-serif text-6xl lg:text-8xl font-bold mb-4 leading-tight">
                {slide.title}
              </h1>
              <p className="text-base lg:text-lg mb-8 text-white/80">
                {slide.caption}
              </p>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90"
              >
                {slide.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
