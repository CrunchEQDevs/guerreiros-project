'use client'

import React from 'react';
import { Card } from "@/components/ui/card";

interface AdBannerProps {
  className?: string;
}

export default function AdBanner({ className = "" }: AdBannerProps) {
  return (
    <Card className={`w-[calc(100%-70px)] h-[200px] bg-[#DC2626] border-0 shadow-lg rounded-[2px] flex items-center justify-between px-8 my-8 mx-[35px] relative overflow-hidden ${className}`}>
      {/* Logo circular à esquerda */}
      <div className="flex items-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
          {/* Logo Moosh */}
          <div className="relative">
            <div className="w-10 h-10 border-4 border-[#DC2626] rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-[#DC2626] rounded-full"></div>
            </div>
          </div>
        </div>
        <span className="text-white text-lg font-bold ml-3 tracking-wide">moosh</span>
      </div>

      {/* Texto à direita */}
      <div className="text-right">
        <h2 className="text-white text-2xl font-bold tracking-wider leading-tight">
          POWERED BY<br />
          MOOSH
        </h2>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full"></div>
      <div className="absolute bottom-6 left-1/3 w-1 h-1 bg-white/15 rounded-full"></div>
      <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white/10 rounded-full"></div>
    </Card>
  );
}