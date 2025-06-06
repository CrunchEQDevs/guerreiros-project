'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function HeroCarousel() {
  const images = [
    "/hero1.svg",
    "/hero2.jpg", 
    "/hero3.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0)

  // Autoplay - muda a cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative h-64 sm:h-80 md:h-96 lg:h-120 xl:h-140 2xl:h-180 w-screen bg-red-600 my-2">
      
      {/* Camada 2: Carousel - Com padding apenas vertical */}
      <div className="absolute inset-0 pt-4 pb-2">
        <div className="relative w-full h-full overflow-hidden">
          
          {/* Container das imagens */}
          <div 
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full h-full relative">
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Camada 2.5: SVG Blur Overlay - Alturas aumentadas */}
          <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden h-20 sm:h-28 md:h-36 lg:h-48 xl:h-64 2xl:h-80">
            <div className="relative w-full h-full">
              <Image
                src="/blur-hero.svg"
                alt="Blur overlay"
                fill
                className="object-cover object-top"
                style={{ 
                  width: '100%',
                  transform: 'scale(1.1)',
                  transformOrigin: 'top center'
                }}
              />
            </div>
          </div>

          {/* Dots/Bolinhas - Responsivos */}
          <div className="absolute bottom-1 sm:bottom-2 md:bottom-3 lg:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-40">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Camada 3: Conteúdo sobreposto - Responsivo melhorado */}
      <div className="absolute inset-0 flex items-end justify-start pb-2 pl-2 sm:pb-4 sm:pl-4 md:pb-6 md:pl-8 lg:pb-8 lg:pl-12 xl:pl-16 2xl:pl-24 z-30">
        <div className="max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg text-white">
          
          {/* Título pequeno */}
          <p className="text-xs sm:text-sm mb-1 sm:mb-2 text-red-200">O nosso blog</p>
          
          {/* Título principal responsivo */}
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2 md:mb-3 lg:mb-4 leading-tight">
            Notícias e Entrevistas
          </h1>
          
          {/* Descrição responsiva */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-gray-200 leading-relaxed">
            Subscreva para receber as últimas novidades sobre o Sporting Clube de Braga, entrevistas exclusivas, análises de jogos e muito mais.
          </p>
          
          {/* Newsletter - Layout responsivo */}
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 mb-1 sm:mb-2 md:mb-3">
            <Input 
              placeholder="Escreva o seu e-mail aqui" 
              className="bg-white/90 text-black placeholder:text-gray-600 border-none flex-1 text-xs sm:text-sm md:text-base h-8 sm:h-9 md:h-10"
            />
            <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-3 sm:px-4 md:px-6 h-8 sm:h-9 md:h-10 text-xs sm:text-sm md:text-base whitespace-nowrap">
              Subscrever
            </Button>
          </div>
          
          {/* Texto legal responsivo */}
          <p className="text-xs text-gray-300 leading-relaxed">
            Cuidamos dos teus dados conforme a nossa política de privacidade.
          </p>
        </div>
      </div>
      
    </div>
  );
}