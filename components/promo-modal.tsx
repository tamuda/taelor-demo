"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after 2 seconds
    const timer = setTimeout(() => {
      // Check if modal was already shown in this session
      const hasSeenModal = sessionStorage.getItem("promoModalSeen");
      if (!hasSeenModal) {
        setIsOpen(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("promoModalSeen", "true");
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl p-0 rounded-none border-0 overflow-hidden">
        <div className="relative w-full h-[500px] md:h-[600px]">
          {/* Background Image */}
          <img
            src="/modal-02.png"
            alt="Winter Promotion"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay gradient for CTA */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/40" />

          {/* CTA positioned in bottom half */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-16 md:pb-20">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 shadow-2xl px-12 py-6 text-lg font-medium"
              onClick={handleClose}
            >
              Claim Your Discount
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
