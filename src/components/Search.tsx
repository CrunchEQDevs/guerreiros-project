// components/SearchOverlay.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchOverlay() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Fechar ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focar no input quando abrir
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  return (
    <>
      {/* Ícone de lupa */}
      <button onClick={() => setOpen(true)} className="text-white hover:text-gray-300">
        <Search className="w-5 h-5" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-white flex items-start justify-center pt-20 px-4 h-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-xl"
            onClick={(e) => e.stopPropagation()} // Impede fechar ao clicar no input
          >
            <Input
              ref={inputRef}
              type="text"
              placeholder="Pesquisar..."
              className="text-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}