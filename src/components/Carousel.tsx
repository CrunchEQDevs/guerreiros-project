'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface SlideData {
  id: number;
  image: string;
  alt?: string;
  title?: string;
  description?: string;
  link: string;
}

interface NewsItem {
  id: number;
  image: string;
  alt?: string;
  title: string;
  description: string;
  link: string;
}

interface HeroCarouselProps {
  slides?: SlideData[];
  news?: NewsItem[];
  autoplayDelay?: number;
}

export default function HeroCarousel({ 
  slides,
  news,
  autoplayDelay = 4000
}: HeroCarouselProps) {
  // Fallback para imagens padrão do carrossel principal
  const defaultSlides: SlideData[] = [
    { 
      id: 1, 
      image: "/hero1.svg", 
      alt: "Slide 1",
      title: "Carlos Carvalhal: \"O resultado ajusta-se ao que se passou\"",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "/destaque/1"
    },
    { 
      id: 2, 
      image: "/hero2.jpg", 
      alt: "Slide 2",
      title: "Análise do último jogo",
      description: "Principais momentos e estatísticas da partida.",
      link: "/destaque/2"
    }, 
    { 
      id: 3, 
      image: "/hero3.jpg", 
      alt: "Slide 3",
      title: "Preparação para o próximo confronto",
      description: "Como a equipa se prepara para o desafio seguinte.",
      link: "/destaque/3"
    }
  ];

  // Fallback para notícias laterais
  const defaultNews: NewsItem[] = [
    {
      id: 1,
      image: "/hero1.svg",
      alt: "Notícia 1",
      title: "Missão cumprida frente ao Nacional",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "/noticia/1"
    },
    {
      id: 2,
      image: "/hero2.jpg",
      alt: "Notícia 2", 
      title: "Missão cumprida frente ao Nacional",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "/noticia/2"
    },
    {
      id: 3,
      image: "/hero3.jpg",
      alt: "Notícia 3",
      title: "Missão cumprida frente ao Nacional", 
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "/noticia/3"
    },
    {
      id: 4,
      image: "/hero1.svg",
      alt: "Notícia 4",
      title: "Missão cumprida frente ao Nacional",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "/noticia/4"
    }
  ];

  const images = slides && slides.length > 0 ? slides : defaultSlides;
  const newsItems = news && news.length > 0 ? news : defaultNews;

  const [currentIndex, setCurrentIndex] = useState(0)

  // Autoplay para o carrossel principal
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

  return (
    <div className="w-full">
      {/* Faixa vermelha superior */}
      <div className="w-full bg-[#C00D1E] relative">
        {/* Mobile: Header simples */}
        <div className="md:hidden px-4 py-6">
          <h1 className="text-white font-extrabold text-2xl sm:text-3xl">
            DESTAQUES
          </h1>
        </div>

        {/* Desktop: Layout original responsivo */}
        <div className="hidden md:flex items-end relative h-32 lg:h-40 pb-3 lg:pb-4">
          {/* DESTAQUES - lado esquerdo */}
          <div className="ml-4 lg:ml-12 xl:ml-24">
            <h1 className="text-white font-extrabold text-4xl lg:text-5xl xl:text-7xl leading-none">
              DESTAQUES
            </h1>
          </div>

          {/* ÚLTIMAS NOTÍCIAS - alinhado com início das notícias */}
          <div className="absolute bottom-3 lg:bottom-4 left-0 right-0">
            <div className="flex gap-4 lg:gap-6 mx-4 lg:mx-12 xl:mx-24">
              <div className="flex-1 max-w-4xl"></div>
              <div className="w-80 lg:w-96 xl:w-[470px]">
                <div className="bg-black flex items-center h-8 lg:h-11 px-3 lg:px-4 w-64 lg:w-80 xl:w-[470px]">
                  <h2 className="text-white font-extrabold text-sm lg:text-lg xl:text-2xl">
                    ÚLTIMAS NOTÍCIAS
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Container principal com conteúdo */}
      <div className="w-full">
        {/* Layout Mobile (≤768px) */}
        <div className="md:hidden">
          {/* Carrossel principal - Mobile */}
          <div className="mx-4 mt-4">
            <div className="relative overflow-hidden bg-gray-200 h-48 sm:h-64">
              {/* Container das imagens do carrossel */}
              <div 
                className="flex h-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((slide, index) => (
                  <Link 
                    key={slide.id || index} 
                    href={slide.link}
                    className="min-w-full h-full relative block hover:opacity-95 transition-opacity"
                  >
                    <Image
                      src={slide.image}
                      alt={slide.alt || `Slide ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </Link>
                ))}
              </div>

              {/* Overlay inferior - Mobile (bottom 0) */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-3">
                <div className="text-white font-bold text-sm sm:text-base leading-tight mb-1">
                  {images[currentIndex].title}
                </div>
                <div className="text-white text-xs opacity-90">
                  {images[currentIndex].description}
                </div>
              </div>
            </div>

            {/* Dots de navegação - Mobile (fora da imagem) */}
            <div className="flex justify-center space-x-1 mt-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-[#C00D1E]' : 'bg-gray-400'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Header "ÚLTIMAS NOTÍCIAS" - Mobile (largura total) */}
          <div className="bg-black w-full mt-5 mb-0 h-10 flex items-center px-4">
            <h2 
              className="text-[#C00D1E] font-extrabold"
              style={{ 
                fontSize: '16px',
                fontWeight: '800'
              }}
            >
              ÚLTIMAS NOTÍCIAS
            </h2>
          </div>

          {/* Lista de notícias - Mobile */}
          <div className="mx-4 mt-5 pb-8 space-y-2">
            {newsItems.slice(0, 4).map((newsItem, index) => (
              <Link 
                key={newsItem.id}
                href={newsItem.link}
                className={`flex hover:opacity-80 transition-opacity w-full relative ${
                  index === 0 ? 'bg-black' : 'bg-[#F2F2F2]'
                }`}
                style={{ height: '103px' }}
              >
                {/* Imagem da notícia */}
                <div 
                  className="relative overflow-hidden bg-gray-200 flex-shrink-0"
                  style={{ 
                    width: '152px', 
                    height: '86px',
                    marginTop: '8.5px',
                    marginLeft: '10px'
                  }}
                >
                  <Image
                    src={newsItem.image}
                    alt={newsItem.alt || `Notícia ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Conteúdo da notícia */}
                <div className="flex-1 relative px-3 py-2">
                  {/* Título */}
                  <h4 
                    className={`font-bold absolute top-2 left-3 right-3 ${
                      index === 0 ? 'text-white' : 'text-[#C00D1E]'
                    }`}
                    style={{ 
                      fontSize: '16px',
                      fontWeight: '700',
                      lineHeight: '17px'
                    }}
                  >
                    {newsItem.title}
                  </h4>
                  
                  {/* Subtítulo */}
                  <p 
                    className={`absolute left-3 right-3 ${
                      index === 0 ? 'text-gray-300' : 'text-gray-600'
                    }`}
                    style={{ 
                      fontSize: '11px',
                      fontWeight: '400',
                      lineHeight: '12px',
                      top: '42px'
                    }}
                  >
                    {newsItem.description}
                  </p>
                  
                  {/* Data e hora */}
                  <div 
                    className={`absolute bottom-2 left-3 ${
                      index === 0 ? 'text-gray-300' : 'text-gray-500'
                    }`}
                    style={{ 
                      fontSize: '11px',
                      fontWeight: '400',
                      lineHeight: '12px'
                    }}
                  >
                    14 de Mar. 2025 | 11:20
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Layout Desktop (≥769px) */}
        <div className="hidden md:flex gap-4 lg:gap-6 mx-4 lg:mx-12 xl:mx-24 mt-4 lg:mt-6">
          {/* Destaque principal - Carrossel Desktop */}
          <div className="relative overflow-hidden bg-gray-200 flex-1 max-w-4xl h-80 lg:h-96 xl:h-[475px]">
            {/* Container das imagens do carrossel */}
            <div 
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((slide, index) => (
                <Link 
                  key={slide.id || index} 
                  href={slide.link}
                  className="min-w-full h-full relative block hover:opacity-95 transition-opacity"
                >
                  <Image
                    src={slide.image}
                    alt={slide.alt || `Slide ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </Link>
              ))}
            </div>

            {/* Overlay inferior esquerdo - Desktop */}
            <div className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8 bg-black/80 p-4 lg:p-6 max-w-lg lg:max-w-xl">
              <div className="text-white font-bold text-lg lg:text-2xl xl:text-3xl leading-tight mb-2 lg:mb-3">
                {images[currentIndex].title}
              </div>
              <div className="text-white text-xs lg:text-sm opacity-90">
                {images[currentIndex].description}
              </div>
            </div>

            {/* Dots de navegação - Desktop */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-[#C00D1E]' : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Notícias laterais - Desktop */}
          <div className="flex flex-col w-80 lg:w-96 xl:w-[470px] gap-4 lg:gap-6">
            {newsItems.slice(0, 4).map((newsItem, index) => (
              <Link 
                key={newsItem.id}
                href={newsItem.link}
                className="flex gap-3 lg:gap-4 hover:opacity-80 transition-opacity h-20 lg:h-24 xl:h-[102px]"
              >
                {/* Imagem da notícia */}
                <div className="relative overflow-hidden bg-gray-200 flex-shrink-0 w-32 lg:w-40 xl:w-[179px] h-full">
                  <Image
                    src={newsItem.image}
                    alt={newsItem.alt || `Notícia ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Conteúdo da notícia */}
                <div className="flex flex-col justify-center flex-1 min-w-0 gap-1 lg:gap-2">
                  <h4 className="font-bold text-black text-sm lg:text-lg xl:text-xl leading-tight line-clamp-2">
                    {newsItem.title}
                  </h4>
                  <p className="text-xs lg:text-sm text-gray-600 line-clamp-2">
                    {newsItem.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}