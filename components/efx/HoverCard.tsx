"use client";

import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";

interface HoverCardProps {
  icon: React.ElementType;
  title: string;
  content: React.ReactNode;
}

export default function HoverCard({ icon: Icon, title, content }: HoverCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: -9999, y: -9999 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setCoords({ x: -9999, y: -9999 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group rounded-2xl overflow-hidden"
    >
      {/* Border highlight layer */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(200px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.1), transparent 60%)`,
        }}
      />

      {/* Actual card */}
      <Card className="relative z-10 flex hover:bg-white/10 transition-all duration-200 items-start space-x-4 bg-white/5 hover:border-white/20 border border-white/10 backdrop-blur-md p-6 rounded-2xl">
        <div>
          <h3 className="font-semibold text-white mb-1">{title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{content}</p>
        </div>
      </Card>
    </div>
  );
}
