"use client";

import { MessageCircleMore } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/1234567890?text=Hello! I'm interested in your architectural services.",
      "_blank"
    );
  };

  return (
    <Button
      onClick={openWhatsApp}
      className="fixed md:bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-green-500/20 via-green-600/20 to-green-700/20 border border-white/20 text-white shadow-2xl ring-1 ring-white/10 backdrop-blur-md transition-transform duration-300 hover:scale-110 hover:shadow-green-500/30 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <MessageCircleMore className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
      </div>
    </Button>
  );
}
