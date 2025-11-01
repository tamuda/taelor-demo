"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tabs = [
  { id: "work", label: "Work" },
  { id: "date", label: "Date" },
];

const products = {
  work: [
    {
      id: 1,
      name: "Tailored Blazer",
      brand: "Theory",
      price: "Rental",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=750&fit=crop",
      badge: "AI Curated",
    },
    {
      id: 2,
      name: "Oxford Shirt",
      brand: "Proper Cloth",
      price: "Rental",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=750&fit=crop",
    },
    {
      id: 3,
      name: "Dress Trousers",
      brand: "Bonobos",
      price: "Rental",
      image:
        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=750&fit=crop",
    },
    {
      id: 4,
      name: "Leather Loafers",
      brand: "Allen Edmonds",
      price: "Rental",
      image:
        "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&h=750&fit=crop",
    },
  ],
  date: [
    {
      id: 5,
      name: "Casual Blazer",
      brand: "J.Crew",
      price: "Rental",
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=750&fit=crop",
    },
    {
      id: 6,
      name: "Henley Shirt",
      brand: "Everlane",
      price: "Rental",
      image:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=750&fit=crop",
      badge: "New Arrival",
    },
    {
      id: 7,
      name: "Dark Wash Denim",
      brand: "Naked & Famous",
      price: "Rental",
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=750&fit=crop",
    },
    {
      id: 8,
      name: "Chelsea Boots",
      brand: "Thursday Boot",
      price: "Rental",
      image:
        "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&h=750&fit=crop",
    },
  ],
};

export function LifestyleTabs() {
  const [activeTab, setActiveTab] = useState("work");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentProducts = products[activeTab as keyof typeof products];

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg md:text-lg leading-relaxed font-medium text-gray-900 mb-8">
            Confidence isn't loud. It's quiet precision. The kind that shows
            before you speak. Each Taelor box is styled for how you work,
            connect, and unwind. Effortless, human, and unmistakably you.
          </p>

          <div className="flex justify-center gap-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`pb-4 text-base md:text-lg font-medium transition-colors relative ${
                  activeTab === tab.id
                    ? "text-black"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black transition-all duration-300" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-2 mt-12 transition-all duration-500 ${
            isTransitioning
              ? "opacity-0 translate-y-4"
              : "opacity-100 translate-y-0"
          }`}
        >
          {currentProducts.map((product, index) => (
            <Card
              key={product.id}
              className="group cursor-pointer overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 p-0 rounded-none"
              style={{
                transitionDelay: isTransitioning ? "0ms" : `${index * 50}ms`,
              }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.badge && (
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {product.brand}
                </p>
                <h3 className="font-medium text-base mb-2">{product.name}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
