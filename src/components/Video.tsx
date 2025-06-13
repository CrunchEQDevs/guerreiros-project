'use client'

import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { Play, ChevronRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion';

interface VideoData {
  id: number;
  title: string;
  category: string;
  date: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}

const videosData: VideoData[] = [
  {
    id: 1,
    title: "Carlos Carvalhal: \"O resultado ajusta-se ao que se passou\"",
    category: "Futebol",
    date: "14 de Mar. 2025 | 11:20",
    thumbnail: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&h=600&fit=crop",
    videoUrl: "https://youtube.com/watch?v=example1",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: 2,
    title: "Vitória importante na Liga Europa",
    category: "Futebol", 
    date: "13 de Mar. 2025 | 18:30",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    videoUrl: "https://youtube.com/watch?v=example2",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: 3,
    title: "Preparação para o clássico do fim de semana",
    category: "Futebol",
    date: "12 de Mar. 2025 | 16:45", 
    thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop",
    videoUrl: "https://youtube.com/watch?v=example3",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: 4,
    title: "Atletas brilham em competição nacional",
    category: "Atletismo",
    date: "11 de Mar. 2025 | 14:20",
    thumbnail: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop",
    videoUrl: "https://youtube.com/watch?v=example4",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: 5,
    title: "Vitória crucial no campeonato de basquetebol",
    category: "Basquetebol",
    date: "10 de Mar. 2025 | 20:15",
    thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop",
    videoUrl: "https://youtube.com/watch?v=example5",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: 6,
    title: "Nadadores quebram recordes regionais",
    category: "Natação",
    date: "09 de Mar. 2025 | 09:30",
    thumbnail: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop",
    videoUrl: "https://youtube.com/watch?v=example6",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  }
];

// Card para Desktop
const DesktopVideoCard = ({ video, onVideoClick }: { video: VideoData; onVideoClick: (video: VideoData) => void }) => {
  return (
    <Card className="overflow-hidden bg-transparent border-0 shadow-none">
      <div className="relative cursor-pointer" onClick={() => onVideoClick(video)}>
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <Button 
            size="lg" 
            className="rounded-full bg-white/95 hover:bg-white hover:scale-105 text-black p-6 w-24 h-24 transition-all duration-300 shadow-lg"
          >
            <Play style={{ width: '40px', height: '40px' }} className="fill-current ml-1" />
          </Button>
        </div>
      </div>

      <CardContent className="bg-transparent space-y-2 px-0">
        <div className="flex items-center gap-2">
          <span className="text-black font-bold text-xl">
            {video.category}
          </span>
        </div>

        <div className="flex items-center gap-3 font-semibold text-sm">
          <span className="text-white">SC Braga</span>
          <span className="text-black">•</span>
          <span className="text-white">{video.date}</span>
        </div>

        <div className="relative">
          <h3 className="text-xl font-bold text-white leading-tight">
            {video.title}
          </h3>
        </div>

        <div className="relative">
          <p className="text-white text-sm leading-relaxed">
            {video.description}
          </p>
        </div>
      </CardContent>
    </Card>
  )
};

// Carrossel Mobile
const MobileVideoCarousel = ({ videos, onVideoClick }: { videos: VideoData[]; onVideoClick: (video: VideoData) => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  if (videos.length === 0) {
    return (
      <div className="bg-[#BC0E1E] text-white text-center py-16">
        <p>Nenhum vídeo encontrado</p>
      </div>
    );
  }

  const currentVideo = videos[currentIndex];

  return (
    <>
      {/* Header Mobile */}
      <div className="mx-[35px] pt-6">
        <h1 className="text-lg font-bold uppercase text-black">VÍDEOS</h1>
      </div>

      {/* Container do vídeo com setas inline */}
      <div className="flex items-center">
        {/* Container Seta Esquerda */}
        <div className="min-w-[35px] flex items-center justify-center">
          {videos.length > 1 ? (
            <button
              onClick={prevSlide}
              className="text-white z-20 flex items-center justify-center"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none"
                className="rotate-180"
              >
                <g clipPath="url(#clip0_440_17663)">
                  <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M12.2932 17.707C12.1057 17.5194 12.0004 17.2651 12.0004 17C12.0004 16.7348 12.1057 16.4805 12.2932 16.293L16.5862 12L12.2932 7.70697C12.1111 7.51837 12.0103 7.26577 12.0125 7.00357C12.0148 6.74137 12.12 6.49056 12.3054 6.30515C12.4908 6.11974 12.7416 6.01457 13.0038 6.01229C13.266 6.01002 13.5186 6.11081 13.7072 6.29297L18.7072 11.293C18.8947 11.4805 19 11.7348 19 12C19 12.2651 18.8947 12.5194 18.7072 12.707L13.7072 17.707C13.5197 17.8944 13.2654 17.9998 13.0002 17.9998C12.735 17.9998 12.4807 17.8944 12.2932 17.707ZM6.29321 17.707C6.10574 17.5194 6.00043 17.2651 6.00043 17C6.00043 16.7348 6.10574 16.4805 6.29321 16.293L10.5862 12L6.29321 7.70697C6.11105 7.51837 6.01026 7.26577 6.01254 7.00357C6.01482 6.74137 6.11999 6.49056 6.3054 6.30515C6.4908 6.11974 6.74162 6.01457 7.00381 6.01229C7.26601 6.01002 7.51861 6.11081 7.70721 6.29297L12.7072 11.293C12.8947 11.4805 13 11.7348 13 12C13 12.2651 12.8947 12.5194 12.7072 12.707L7.70721 17.707C7.51969 17.8944 7.26538 17.9998 7.00021 17.9998C6.73505 17.9998 6.48074 17.8944 6.29321 17.707Z" 
                    fill="#F2F2F2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_440_17663">
                    <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 -1 24 24)"/>
                  </clipPath>
                </defs>
              </svg>
            </button>
          ) : null}
        </div>

        {/* Container do Vídeo */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-none">
            <motion.div
              className="cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                const threshold = 50;
                if (info.offset.x > threshold) {
                  prevSlide();
                } else if (info.offset.x < -threshold) {
                  nextSlide();
                }
              }}
            >
              <Card className="overflow-hidden bg-transparent border-0 shadow-none">
                <div className="relative cursor-pointer" onClick={() => onVideoClick(currentVideo)}>
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={currentVideo.thumbnail}
                      alt={currentVideo.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                    />
                    
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <Button 
                        size="lg" 
                        className="rounded-full bg-white/95 hover:bg-white hover:scale-105 text-black p-6 w-24 h-24 transition-all duration-300 shadow-lg"
                      >
                        <Play style={{ width: '40px', height: '40px' }} className="fill-current ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Container Seta Direita */}
        <div className="min-w-[35px] flex items-center justify-center">
          {videos.length > 1 ? (
            <button
              onClick={nextSlide}
              className="text-white z-20 flex items-center justify-center"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none"
              >
                <g clipPath="url(#clip0_440_17664)">
                  <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M12.2932 17.707C12.1057 17.5194 12.0004 17.2651 12.0004 17C12.0004 16.7348 12.1057 16.4805 12.2932 16.293L16.5862 12L12.2932 7.70697C12.1111 7.51837 12.0103 7.26577 12.0125 7.00357C12.0148 6.74137 12.12 6.49056 12.3054 6.30515C12.4908 6.11974 12.7416 6.01457 13.0038 6.01229C13.266 6.01002 13.5186 6.11081 13.7072 6.29297L18.7072 11.293C18.8947 11.4805 19 11.7348 19 12C19 12.2651 18.8947 12.5194 18.7072 12.707L13.7072 17.707C13.5197 17.8944 13.2654 17.9998 13.0002 17.9998C12.735 17.9998 12.4807 17.8944 12.2932 17.707ZM6.29321 17.707C6.10574 17.5194 6.00043 17.2651 6.00043 17C6.00043 16.7348 6.10574 16.4805 6.29321 16.293L10.5862 12L6.29321 7.70697C6.11105 7.51837 6.01026 7.26577 6.01254 7.00357C6.01482 6.74137 6.11999 6.49056 6.3054 6.30515C6.4908 6.11974 6.74162 6.01457 7.00381 6.01229C7.26601 6.01002 7.51861 6.11081 7.70721 6.29297L12.7072 11.293C18.8947 11.4805 13 11.7348 13 12C13 12.2651 12.8947 12.5194 12.7072 12.707L7.70721 17.707C7.51969 17.8944 7.26538 17.9998 7.00021 17.9998C6.73505 17.9998 6.48074 17.8944 6.29321 17.707Z" 
                    fill="#F2F2F2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_440_17664">
                    <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 -1 24 24)"/>
                  </clipPath>
                </defs>
              </svg>
            </button>
          ) : null}
        </div>
      </div>

      {/* Containers dos textos com largura fixa */}
      <div className="mx-[35px]">
        {/* Container Categoria */}
        <div className="w-full mb-2">
          <span className="text-black font-bold text-xl">
            {currentVideo.category}
          </span>
        </div>

        {/* Container Título */}
        <div className="w-full mb-3 h-12">
          <h3 className="text-white font-bold text-xl leading-tight">
            {currentVideo.title}
          </h3>
        </div>

        {/* Container Data */}
        <div className="w-full">
          <span className="text-white text-sm font-semibold">
            {currentVideo.date}
          </span>
        </div>
      </div>

      {/* Botão Ver Todos - Mobile */}
      <div className="pt-2 pb-2">
        <div className="flex justify-center">
          <Link 
            href="/videos" 
            className="inline-flex items-center gap-2 bg-transparent text-black transition-all duration-300 font-medium px-8 py-3 rounded-lg hover:text-white"
          >
            Ver todos
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default function VideoSection() {
  const handleVideoClick = (video: VideoData) => {
    console.log('Vídeo clicado:', video);
  };

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="max-w-7xl pt-8 mx-[16px]">
          <h1 className="pb-4 mt-12 text-2xl font-bold uppercase tracking-wider">VÍDEOS</h1>
        </div>
        
        <section className="bg-[#BC0E1E] py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videosData.slice(0, 3).map((video) => (
                <DesktopVideoCard 
                  key={video.id} 
                  video={video} 
                  onVideoClick={handleVideoClick}
                />
              ))}
            </div>

            <div className="flex justify-center mb-8">
              <Link 
                href="/videos" 
                className="inline-flex items-center gap-2 bg-transparent text-black transition-all duration-300 font-medium px-8 py-3 rounded-lg"
              >
                Ver todos
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden bg-[#BC0E1E]">
        <MobileVideoCarousel 
          videos={videosData}
          onVideoClick={handleVideoClick}
        />
      </div>
    </>
  );
}