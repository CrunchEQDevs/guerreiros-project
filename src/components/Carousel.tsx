'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface SlideData {
  id: number;
  image: string;
  alt?: string;
  title?: string;
  description?: string;
}

interface HeroContent {
  subtitle?: string;
  title: string;
  description: string;
  newsletter?: {
    placeholder?: string;
    buttonText?: string;
    privacyText?: string;
  };
}

interface HeroCarouselProps {
  slides?: SlideData[];
  content?: HeroContent;
  autoplayDelay?: number;
  onNewsletterSubmit?: (email: string) => void;
  mobileTitle?: string;
}

export default function HeroCarousel({ 
  slides,
  content,
  autoplayDelay = 4000,
  onNewsletterSubmit,
  mobileTitle = "DESTAQUES"
}: HeroCarouselProps) {
  // Fallback para imagens padrão
  const defaultSlides: SlideData[] = [
    { 
      id: 1, 
      image: "/hero1.svg", 
      alt: "Slide 1",
      title: "Carlos Carvalhal: \"O resultado ajusta-se ao que se passou\"",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    { 
      id: 2, 
      image: "/hero2.jpg", 
      alt: "Slide 2",
      title: "Análise do último jogo",
      description: "Principais momentos e estatísticas da partida."
    }, 
    { 
      id: 3, 
      image: "/hero3.jpg", 
      alt: "Slide 3",
      title: "Preparação para o próximo confronto",
      description: "Como a equipa se prepara para o desafio seguinte."
    }
  ];

  // Conteúdo padrão
  const defaultContent: HeroContent = {
    subtitle: "O nosso blog",
    title: "Notícias e Entrevistas",
    description: "Subscreva para receber as últimas novidades sobre o Sporting Clube de Braga, entrevistas exclusivas, análises de jogos e muito mais.",
    newsletter: {
      placeholder: "Escreva o seu e-mail aqui",
      buttonText: "Subscrever",
      privacyText: "Cuidamos dos teus dados conforme a nossa política de privacidade."
    }
  };

  const images = slides && slides.length > 0 ? slides : defaultSlides;
  const heroContent = content || defaultContent;

  const [currentIndex, setCurrentIndex] = useState(0)
  const [email, setEmail] = useState('')

  // Autoplay - muda conforme o delay configurado
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, autoplayDelay)

    return () => clearInterval(interval)
  }, [images.length, autoplayDelay])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim() && onNewsletterSubmit) {
      onNewsletterSubmit(email.trim())
      setEmail('') // Limpar campo após envio
    }
  }

  return (
    <>
      {/* Layout Mobile (até 768px) */}
      <div className="w-screen md:hidden">
        {/* Faixa vermelha com título */}
        <div 
          className="w-screen flex items-center" 
          style={{ 
            height: '56px', 
            paddingTop: '11px', 
            paddingBottom: '11px',
            backgroundColor: '#C00D1E',
            boxShadow: '0px -2px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 2px 4px 0px rgba(0, 0, 0, 0.25) inset'
          }}
        >
          <div className="px-6">
            <h2 className="text-white font-extrabold" style={{ fontSize: '25px', fontWeight: '800' }}>
              {mobileTitle}
            </h2>
          </div>
        </div>

        {/* Container do carrossel */}
        <div className="w-screen px-5 bg-white" style={{ marginTop: '8px', marginBottom: '4px' }}>
          <div className="relative overflow-hidden" style={{ height: '200px' }}>
            
            {/* Container das imagens */}
            <div 
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((slide, index) => (
                <div key={slide.id || index} className="min-w-full h-full relative">
                  <Image
                    src={slide.image}
                    alt={slide.alt || `Slide ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            {/* Overlay com conteúdo */}
            <div className="absolute bottom-0 left-0 right-0" style={{ marginLeft: '15px', marginRight: '15px' }}>
              <div 
                className="bg-black/70 text-white px-3 py-2 flex flex-col"
                style={{ height: '83px' }}
              >
                <h3 
                  className="font-bold text-white line-clamp-2"
                  style={{ 
                    fontSize: '14px', 
                    fontWeight: '700',
                    lineHeight: '11.765px',
                    marginTop: '8px',
                    marginBottom: '14px'
                  }}
                >
                  {images[currentIndex].title}
                </h3>
                <p 
                  className="text-gray-200 line-clamp-2"
                  style={{ 
                    fontSize: '10px', 
                    fontWeight: '400',
                    lineHeight: '11.765px'
                  }}
                >
                  {images[currentIndex].description}
                </p>
              </div>
            </div>

          </div>

          {/* Dots/Bolinhas */}
          <div className="flex justify-center space-x-2 py-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-red-600' 
                    : 'bg-black hover:bg-gray-800'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Layout Desktop (768px+) */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-120 xl:h-140 2xl:h-180 w-screen bg-red-600 my-2 hidden md:block">
        
        {/* Camada 2: Carousel - Com padding apenas vertical */}
        <div className="absolute inset-0 pt-4 pb-2">
          <div className="relative w-full h-full overflow-hidden">
            
            {/* Container das imagens */}
            <div 
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((slide, index) => (
                <div key={slide.id || index} className="min-w-full h-full relative">
                  <Image
                    src={slide.image}
                    alt={slide.alt || `Slide ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
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
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

        {/* Camada 3: Conteúdo sobreposto - Responsivo melhorado */}
        <div className="absolute inset-0 flex items-end justify-start pb-2 pl-2 sm:pb-4 sm:pl-4 md:pb-6 md:pl-8 lg:pb-8 lg:pl-12 xl:pl-16 2xl:pl-24 z-30">
          <div className="max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg text-white">
            
            {/* Título pequeno */}
            {heroContent.subtitle && (
              <p className="text-xs sm:text-sm mb-1 sm:mb-2 text-red-200">
                {heroContent.subtitle}
              </p>
            )}
            
            {/* Título principal responsivo */}
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2 md:mb-3 lg:mb-4 leading-tight">
              {heroContent.title}
            </h1>
            
            {/* Descrição responsiva */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-gray-200 leading-relaxed">
              {heroContent.description}
            </p>
            
            {/* Newsletter - Layout responsivo */}
            {heroContent.newsletter && (
              <>
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-1 sm:gap-2 mb-1 sm:mb-2 md:mb-3">
                  <Input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={heroContent.newsletter.placeholder}
                    className="bg-white/90 text-black placeholder:text-gray-600 border-none flex-1 text-xs sm:text-sm md:text-base h-8 sm:h-9 md:h-10"
                    required
                  />
                  <Button 
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-3 sm:px-4 md:px-6 h-8 sm:h-9 md:h-10 text-xs sm:text-sm md:text-base whitespace-nowrap"
                  >
                    {heroContent.newsletter.buttonText}
                  </Button>
                </form>
                
                {/* Texto legal responsivo */}
                {heroContent.newsletter.privacyText && (
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {heroContent.newsletter.privacyText}
                  </p>
                )}
              </>
            )}
          </div>
        </div>
        
      </div>
    </>
  );
}