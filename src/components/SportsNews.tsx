'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

// 🏗️ TIPOS PARA ESTRUTURA ROBUSTA (preparado para API)
interface NewsArticle {
  id: number;
  category: string;
  team: string;
  date: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  slug?: string;
  author?: string;
  excerpt?: string;
  publishedAt?: string;
}

// 📊 DADOS MOCKADOS - Estrutura preparada para API
const mockNews: NewsArticle[] = [
  // Futebol
  {
    id: 1,
    category: "Futebol",
    team: "SC Braga",
    date: "14 de Mar. 2025 | 11:20",
    title: "Carlos Carvalhal: \"O resultado ajusta-se ao que se passou\"",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center",
    tags: ["Futebol", "SC Braga"]
  },
  {
    id: 2,
    category: "Futebol",
    team: "SC Braga",
    date: "14 de Mar. 2025 | 10:15",
    title: "Vitória importante na Liga Europa",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop&crop=center",
    tags: ["Futebol"]
  },
  {
    id: 3,
    category: "Futebol",
    team: "SC Braga",
    date: "13 de Mar. 2025 | 16:30",
    title: "Preparação para o clássico do fim de semana",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=800&h=600&fit=crop&crop=center",
    tags: ["Futebol"]
  },
  // Atletismo
  {
    id: 4,
    category: "Atletismo",
    team: "SC Braga",
    date: "14 de Mar. 2025 | 09:45",
    title: "Atletas brilham em competição nacional",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
    tags: ["Atletismo"]
  },
  {
    id: 5,
    category: "Atletismo",
    team: "SC Braga",
    date: "13 de Mar. 2025 | 15:20",
    title: "Novo recorde nos 100 metros rasos",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop&crop=center",
    tags: ["Atletismo", "SC Braga"]
  },
  {
    id: 6,
    category: "Atletismo",
    team: "SC Braga",
    date: "12 de Mar. 2025 | 18:00",
    title: "Maratona de Braga com participação recorde",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1594736797933-d0ccba2b7acc?w=800&h=600&fit=crop&crop=center",
    tags: ["Atletismo"]
  },
  // Basquetebol
  {
    id: 7,
    category: "Basquetebol",
    team: "SC Braga",
    date: "14 de Mar. 2025 | 12:30",
    title: "Vitória importante na Liga Portuguesa",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop&crop=center",
    tags: ["Basquetebol"]
  },
  {
    id: 8,
    category: "Basquetebol",
    team: "SC Braga",
    date: "13 de Mar. 2025 | 20:15",
    title: "Equipa feminina conquista o título",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=800&h=600&fit=crop&crop=center",
    tags: ["Basquetebol", "SC Braga"]
  },
  {
    id: 9,
    category: "Basquetebol",
    team: "SC Braga",
    date: "12 de Mar. 2025 | 17:45",
    title: "Juvenis classificam-se para a final",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&h=600&fit=crop&crop=center",
    tags: ["Basquetebol"]
  },
  // Bilhar
  {
    id: 10,
    category: "Bilhar",
    team: "SC Braga",
    date: "14 de Mar. 2025 | 11:00",
    title: "Campeonato nacional de bilhar arranca",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
    tags: ["Bilhar"]
  },
  {
    id: 11,
    category: "Bilhar",
    team: "SC Braga",
    date: "13 de Mar. 2025 | 16:30",
    title: "João Silva vence torneio regional",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop&crop=center",
    tags: ["Bilhar", "SC Braga"]
  },
  {
    id: 12,
    category: "Bilhar",
    team: "SC Braga",
    date: "12 de Mar. 2025 | 14:20",
    title: "Novos talentos revelam-se no clube",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
    tags: ["Bilhar"]
  },
  // Boccia
  {
    id: 13,
    category: "Boccia",
    team: "SC Braga",
    date: "14 de Mar. 2025 | 10:45",
    title: "Atletas paralímpicos em destaque",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1578446115142-a999f4fc9e61?w=800&h=600&fit=crop&crop=center",
    tags: ["Boccia"]
  },
  {
    id: 14,
    category: "Boccia",
    team: "SC Braga",
    date: "13 de Mar. 2025 | 18:00",
    title: "Torneio internacional em Braga",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=800&h=600&fit=crop&crop=center",
    tags: ["Boccia", "SC Braga"]
  },
  {
    id: 15,
    category: "Boccia",
    team: "SC Braga",
    date: "12 de Mar. 2025 | 15:30",
    title: "Formação de novos atletas inicia",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1529156069728-b4dbe9f00db0?w=800&h=600&fit=crop&crop=center",
    tags: ["Boccia"]
  },
  // Futsal
  {
    id: 16,
    category: "Futsal",
    team: "SC Braga",
    date: "14 de Mar. 2025 | 14:30",
    title: "Equipa de futsal conquista título regional",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1518604666860-f20c3d421e0c?w=800&h=600&fit=crop&crop=center",
    tags: ["Futsal"]
  },
  {
    id: 17,
    category: "Futsal", 
    team: "SC Braga",
    date: "13 de Mar. 2025 | 19:45",
    title: "Goleada na Liga Placard",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
    tags: ["Futsal", "SC Braga"]
  },
  {
    id: 18,
    category: "Futsal",
    team: "SC Braga",
    date: "12 de Mar. 2025 | 16:15",
    title: "Juvenis vencem torneio de inverno",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop&crop=center",
    tags: ["Futsal"]
  },
  // Kickboxing | Boxe | Muay Thai
  {
    id: 19,
    category: "Kickboxing | Boxe | Muay Thai",
    team: "SC Braga",
    date: "14 de Mar. 2025 | 19:30",
    title: "Atleta conquista cinturão nacional",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1544736150-b47bc512b645?w=800&h=600&fit=crop&crop=center",
    tags: ["Kickboxing"]
  },
  {
    id: 20,
    category: "Kickboxing | Boxe | Muay Thai",
    team: "SC Braga",
    date: "13 de Mar. 2025 | 21:00",
    title: "Gala de boxe atrai multidões",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop&crop=center",
    tags: ["Boxe", "SC Braga"]
  },
  {
    id: 21,
    category: "Kickboxing | Boxe | Muay Thai",
    team: "SC Braga",
    date: "12 de Mar. 2025 | 18:45",
    title: "Seminário de Muay Thai com mestre tailandês",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&h=600&fit=crop&crop=center",
    tags: ["Muay Thai"]
  },
  // Natação
  {
    id: 22,
    category: "Natação",
    team: "SC Braga",
    date: "14 de Mar. 2025 | 08:30",
    title: "Nadadores quebram recordes regionais",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop&crop=center",
    tags: ["Natação"]
  },
  {
    id: 23,
    category: "Natação",
    team: "SC Braga",
    date: "13 de Mar. 2025 | 07:15",
    title: "Piscinas municipais recebem competição",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&h=600&fit=crop&crop=center",
    tags: ["Natação", "SC Braga"]
  },
  {
    id: 24,
    category: "Natação",
    team: "SC Braga",
    date: "12 de Mar. 2025 | 09:00",
    title: "Escola de natação abre inscrições",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
    tags: ["Natação"]
  },
  // Taekwondo
  {
    id: 25,
    category: "Taekwondo",
    team: "SC Braga",
    date: "14 de Mar. 2025 | 17:15",
    title: "Medalhas no campeonato nacional",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&h=600&fit=crop&crop=center",
    tags: ["Taekwondo"]
  },
  {
    id: 26,
    category: "Taekwondo",
    team: "SC Braga",
    date: "13 de Mar. 2025 | 14:45",
    title: "Faixas negras em exame de graduação",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1544736150-b47bc512b645?w=800&h=600&fit=crop&crop=center",
    tags: ["Taekwondo", "SC Braga"]
  },
  {
    id: 27,
    category: "Taekwondo",
    team: "SC Braga",
    date: "12 de Mar. 2025 | 19:30",
    title: "Workshop com campeão olímpico",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop&crop=center",
    tags: ["Taekwondo"]
  },
  // Voleibol
  {
    id: 28,
    category: "Voleibol",
    team: "SC Braga",
    date: "14 de Mar. 2025 | 20:00",
    title: "Vitória crucial no campeonato",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&h=600&fit=crop&crop=center",
    tags: ["Voleibol"]
  },
  {
    id: 29,
    category: "Voleibol",
    team: "SC Braga",
    date: "13 de Mar. 2025 | 18:30",
    title: "Equipa feminina lidera tabela",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop&crop=center",
    tags: ["Voleibol", "SC Braga"]
  },
  {
    id: 30,
    category: "Voleibol",
    team: "SC Braga",
    date: "12 de Mar. 2025 | 16:45",
    title: "Torneio de praia no verão",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=800&h=600&fit=crop&crop=center",
    tags: ["Voleibol"]
  },
  // Karaté
  {
    id: 31,
    category: "Karaté",
    team: "SC Braga",
    date: "14 de Mar. 2025 | 15:20",
    title: "Karatekas dominam competição",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&h=600&fit=crop&crop=center",
    tags: ["Karaté"]
  },
  {
    id: 32,
    category: "Karaté",
    team: "SC Braga",
    date: "13 de Mar. 2025 | 16:00",
    title: "Seminário técnico com sensei japonês",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1544736150-b47bc512b645?w=800&h=600&fit=crop&crop=center",
    tags: ["Karaté", "SC Braga"]
  },
  {
    id: 33,
    category: "Karaté",
    team: "SC Braga",
    date: "12 de Mar. 2025 | 13:15",
    title: "Novos graduados recebem faixas",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop&crop=center",
    tags: ["Karaté"]
  },
  // Badminton
  {
    id: 34,
    category: "Badminton",
    team: "SC Braga",
    date: "14 de Mar. 2025 | 13:45",
    title: "Torneio internacional em Braga",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
    tags: ["Badminton"]
  },
  {
    id: 35,
    category: "Badminton",
    team: "SC Braga",
    date: "13 de Mar. 2025 | 11:30",
    title: "Duplas vencem campeonato regional",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop&crop=center",
    tags: ["Badminton", "SC Braga"]
  },
  {
    id: 36,
    category: "Badminton",
    team: "SC Braga",
    date: "12 de Mar. 2025 | 10:15",
    title: "Clube inaugura novos campos",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1594736797933-d0ccba2b7acc?w=800&h=600&fit=crop&crop=center",
    tags: ["Badminton"]
  },
  // Esports
  {
    id: 37,
    category: "Esports",
    team: "SC Braga",
    date: "14 de Mar. 2025 | 22:00",
    title: "Equipa de FIFA vence torneio nacional",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1518604666860-f20c3d421e0c?w=800&h=600&fit=crop&crop=center",
    tags: ["Esports"]
  },
  {
    id: 38,
    category: "Esports",
    team: "SC Braga",
    date: "13 de Mar. 2025 | 21:30",
    title: "League of Legends: vitória na liga",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop&crop=center",
    tags: ["Esports", "SC Braga"]
  },
  {
    id: 39,
    category: "Esports",
    team: "SC Braga",
    date: "12 de Mar. 2025 | 20:45",
    title: "Gaming center abre portas",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=800&h=600&fit=crop&crop=center",
    tags: ["Esports"]
  }
];

// 🏆 LISTA DE CATEGORIAS (seguindo a ordem da imagem)
const categoriesList: string[] = [
  'Futebol',
  'Futsal', 
  'Atletismo',
  'Basquetebol',
  'Bilhar',
  'Boccia',
  'Kickboxing | Boxe | Muay Thai',
  'Natação',
  'Taekwondo',
  'Voleibol',
  'Karaté',
  'Badminton',
  'Esports'
];

// 🎯 COMPONENTE: Filtro Mobile
const MobileCategoriesFilter = ({ categories, activeFilter, handleFilterChange }: {
  categories: string[];
  activeFilter: string;
  handleFilterChange: (category: string) => void;
}) => {
  return (
    <div className="bg-[#1A1A1A] py-2">
      <div 
        className="overflow-x-auto px-6" 
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <div className="flex min-w-max gap-0">
          {categories.map((category, index) => (
            <React.Fragment key={category}>
              <button
                className={`
                  px-4 py-2 text-xs font-bold uppercase whitespace-nowrap transition-all
                  ${activeFilter === category 
                    ? 'bg-[#C00D1E] text-white' 
                    : 'bg-transparent text-white hover:bg-[#C00D1E]/20'
                  }
                `}
                onClick={() => handleFilterChange(category)}
              >
                {category}
              </button>
              {index < categories.length - 1 && (
                <div className="w-0.5 bg-white self-stretch" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <style>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

// 🎯 COMPONENTE: Carrossel Mobile de Notícias
const MobileNewsCarousel = ({ articles, activeFilter }: {
  articles: NewsArticle[];
  activeFilter: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const nextSlide = () => {
    if (isTransitioning || isDragging) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % articles.length);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const prevSlide = () => {
    if (isTransitioning || isDragging) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  // Função para swipe com preview
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(0);
    setDragOffset(0);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);
    
    if (touchStart && isDragging) {
      const diff = touchStart - currentTouch;
      const maxDrag = 150; // Limite do arrasto
      const clampedDiff = Math.max(-maxDrag, Math.min(maxDrag, diff));
      setDragOffset(clampedDiff);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    
    if (!touchStart || !touchEnd) {
      setTimeout(() => setDragOffset(0), 50);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 80;
    const isRightSwipe = distance < -80;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    // Reset sempre com um pequeno delay para permitir transição suave
    setTimeout(() => setDragOffset(0), 50);
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Reset do índice quando muda a categoria
  React.useEffect(() => {
    setCurrentIndex(0);
    setDragOffset(0);
    setIsDragging(false);
  }, [activeFilter]);

  if (articles.length === 0) {
    return (
      <div className="bg-[#1A1A1A] text-white text-center py-16">
        <p>Nenhuma notícia encontrada para esta modalidade</p>
      </div>
    );
  }

  const currentArticle = articles[currentIndex];
  const nextArticle = articles[(currentIndex + 1) % articles.length];
  const prevArticle = articles[(currentIndex - 1 + articles.length) % articles.length];

  const ArrowIcon = ({ direction }: { direction: 'left' | 'right' }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none"
      className={direction === 'left' ? 'rotate-180' : ''}
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
  );

  return (
    <div className="bg-[#1A1A1A] relative">
      {/* Container da imagem com setas nas laterais - ALINHADO PERFEITAMENTE */}
      <div className="relative mt-4">
        {/* Seta esquerda - 100% FORA da imagem */}
        {articles.length > 1 && (
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-1 top-1/2 transform -translate-y-1/2 text-white disabled:opacity-50 z-10 flex items-center justify-center"
          >
            <ArrowIcon direction="left" />
          </button>
        )}

        {/* Container da imagem - EXATAMENTE alinhado com os outros elementos */}
        <div className="px-6">
          <div className="relative overflow-hidden">
            <div 
              className={`flex ${isDragging ? 'transition-none' : 'transition-transform duration-400 ease-out'}`}
              style={{
                transform: `translateX(${-100 + (dragOffset * 0.8)}%)`,
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Imagem anterior */}
              <div className="w-full flex-shrink-0 relative h-[280px]">
                <Image
                  src={prevArticle.image}
                  alt={prevArticle.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Imagem atual */}
              <div className="w-full flex-shrink-0 relative h-[280px]">
                <Image
                  src={currentArticle.image}
                  alt={currentArticle.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Imagem próxima */}
              <div className="w-full flex-shrink-0 relative h-[280px]">
                <Image
                  src={nextArticle.image}
                  alt={nextArticle.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Seta direita - 100% FORA da imagem */}
        {articles.length > 1 && (
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 text-white disabled:opacity-50 z-10 flex items-center justify-center"
          >
            <ArrowIcon direction="right" />
          </button>
        )}
      </div>

      {/* Conteúdo abaixo da imagem - alinhado */}
      <div className="px-6 py-4 text-white bg-[#1A1A1A]">
        {/* Título */}
        <h3 className="text-white font-bold text-base leading-tight mb-2">
          {currentArticle.title}
        </h3>
        
        {/* Data */}
        <div className="text-gray-300 text-sm">
          {currentArticle.date}
        </div>
      </div>
    </div>
  );
};

// 🎯 COMPONENTE: Filtro Desktop (original)
const CategoriesFilter = ({ categories, activeFilter, handleFilterChange }: {
  categories: string[];
  activeFilter: string;
  handleFilterChange: (category: string) => void;
}) => {
  const [currentOffset, setCurrentOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasNavigated, setHasNavigated] = useState(false);
  const categoriesToShow = 6;

  const getWrappedIndex = (index: number) => {
    return ((index % categories.length) + categories.length) % categories.length;
  };

  const getVisibleCategories = () => {
    const visibleCats = [];
    for (let i = 0; i < categoriesToShow; i++) {
      const wrappedIndex = getWrappedIndex(currentOffset + i);
      visibleCats.push(categories[wrappedIndex]);
    }
    return visibleCats;
  };

  const visibleCategories = getVisibleCategories();

  const moveNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setHasNavigated(true);
    setCurrentOffset(prev => prev + 1);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const movePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentOffset(prev => prev - 1);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <motion.div 
      className="w-full bg-red-600 relative h-[65px]" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
    >
      <div className="h-full flex items-center relative">
        
        <div className="flex-1 flex items-center justify-center overflow-hidden h-full">
          <motion.div 
            className="flex gap-10 h-full"
            key={currentOffset}
            initial={{ x: 15, opacity: 0.8 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 0.25, 
              ease: [0.25, 0.1, 0.25, 1],
              type: "tween"
            }}
          >
            {visibleCategories.map((category, index) => (
              <React.Fragment key={`${category}-${currentOffset}-${index}`}>
                <motion.button
                  className={`
                    min-w-[120px] max-w-[160px] px-4 py-3 
                    whitespace-nowrap font-bold uppercase text-sm 
                    transition-all h-full flex items-center justify-center
                    ${activeFilter === category ? 'text-white' : 'text-black hover:text-white hover:bg-red-700 rounded-md'}
                  `}
                  onClick={() => handleFilterChange(category)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-center leading-tight">
                    {category.length > 12 ? (
                      category.split(' ').length > 1 ? (
                        <>
                          {category.split(' ')[0]}<br/>
                          {category.split(' ').slice(1).join(' ')}
                        </>
                      ) : category
                    ) : category}
                  </span>
                </motion.button>
                {index < visibleCategories.length - 1 && (
                  <div className="w-1 bg-black opacity-70 self-stretch mx-3" />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {hasNavigated && (
          <motion.button 
            onClick={movePrev}
            disabled={isAnimating}
            className={`absolute left-6 top-1/2 transform -translate-y-1/2 p-2 transition-all ${
              isAnimating 
                ? 'cursor-not-allowed opacity-50' 
                : 'hover:opacity-80'
            }`}
            whileTap={!isAnimating ? { scale: 0.95 } : {}}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/arrow.png"
              alt="Anterior"
              width={35}
              height={35}
              className="rotate-180"
            />
          </motion.button>
        )}

        <motion.button 
          onClick={moveNext}
          disabled={isAnimating}
          className={`absolute right-6 top-1/2 transform -translate-y-1/2 p-2 transition-all ${
            isAnimating 
              ? 'cursor-not-allowed opacity-50' 
              : 'hover:opacity-80'
          }`}
          whileTap={!isAnimating ? { scale: 0.95 } : {}}
        >
          <Image
            src="/arrow.png"
            alt="Próximo"
            width={35}
            height={35}
          />
        </motion.button>
      </div>
    </motion.div>
  );
};

// 🎯 HOOK CUSTOMIZADO: Gerenciamento de notícias
const useNewsData = (category: string) => {
  const filteredNews = mockNews.filter(news => news.category === category);
  
  return {
    featuredArticle: filteredNews[0] || null,
    sideArticles: filteredNews.slice(1, 3),
    allArticles: filteredNews,
    loading: false,
    error: null
  };
};

// 🏆 COMPONENTE PRINCIPAL
const SportsNews = () => {
  const [activeFilter, setActiveFilter] = useState('Futebol');
  
  const { featuredArticle, sideArticles, allArticles, loading, error } = useNewsData(activeFilter);

  const handleFilterChange = (categorySelected: string) => {
    setActiveFilter(categorySelected);
  };

  if (loading) {
    return (
      <div className="bg-black/95 text-white p-4 sm:p-8 my-4 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-400">Carregando notícias...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black/95 text-white p-4 sm:p-8 my-4 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-6xl mb-4">⚠️</div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Erro ao carregar notícias
          </h3>
          <p className="text-gray-400">
            Tente novamente mais tarde
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-full my-4">
      {/* Header da seção - Desktop */}
      <div className="hidden md:block max-w-7xl mx-auto pt-8">
        <h1 className="pb-4 mt-12 text-2xl font-bold uppercase tracking-wider">MODALIDADES</h1>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden">
        {/* Container com fundo #1A1A1A */}
        <div className="bg-[#1A1A1A]">
          {/* Header Mobile - alinhado com linha amarela */}
          <div className="px-6 py-3">
            <h1 className="text-lg font-bold uppercase text-white">MODALIDADES</h1>
          </div>

          {/* Filtro Mobile */}
          <MobileCategoriesFilter 
            categories={categoriesList}
            activeFilter={activeFilter}
            handleFilterChange={handleFilterChange}
          />

          {/* Carrossel de Notícias Mobile */}
          <MobileNewsCarousel 
            articles={allArticles}
            activeFilter={activeFilter}
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        {/* Barra de navegação de categorias - Desktop */}
        <CategoriesFilter 
          categories={categoriesList}
          activeFilter={activeFilter}
          handleFilterChange={handleFilterChange}
        />

        {/* Container Principal Desktop */}
        <div className="bg-white text-white pt-4 pb-0 sm:p-8 mt-4 mb-0 px-4">
          <div className="max-w-7xl mx-auto">
            {allArticles.length > 0 ? (
              <>
                <motion.div 
                  className="flex flex-col lg:flex-row gap-4 lg:gap-8 lg:items-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Card Principal Desktop */}
                  {featuredArticle && (
                    <motion.div 
                      className="flex-1 lg:flex-[1]"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="relative">
                        <div className="relative w-full h-[200px] lg:h-[315px] overflow-hidden group">
                          <Image
                            src={featuredArticle.image}
                            alt={featuredArticle.title}
                            fill
                            className="object-cover scale-105 group-hover:scale-100 transition-transform duration-300"
                          />
                        </div>
                        
                        <div className="mt-4">
                          <div className="flex items-center text-[#C00D1E] text-sm font-semibold mb-2">
                            <span>{featuredArticle.category}</span>
                            <span className="mx-2">•</span>
                            <span>{featuredArticle.team}</span>
                            <span className="mx-2">•</span>
                            <span>{featuredArticle.date}</span>
                          </div>
                          
                          <h2 className="text-black text-xl lg:text-2xl w-full lg:w-3/4 font-bold mb-2 leading-tight">
                            {featuredArticle.title}
                          </h2>
                          
                          <p className="text-black text-sm mb-4">
                            {featuredArticle.description}
                          </p>
                          
                          <Button className="bg-red-600 hover:bg-red-700 text-white px-4 py-0 text-sm font-medium mb-4 cursor-pointer">
                            <Link href={`/modalidades/${activeFilter.toLowerCase().replace(/\s+/g, '-').replace(/\|/g, '')}`}>
                              VER MAIS
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Cards Laterais Desktop */}
                  {sideArticles.length > 0 && (
                    <motion.div 
                      className="flex-1 lg:flex-[1] flex flex-col gap-4 lg:gap-8 lg:h-[515px]"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {sideArticles.slice(0, 2).map((article, index) => (
                        <motion.div 
                          key={article.id} 
                          className="relative flex flex-col lg:flex-row gap-4 lg:h-1/2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        >
                          <div className="relative w-full h-[150px] lg:h-full overflow-hidden group">
                            <Image
                              src={article.image}
                              alt={article.title}
                              fill
                              className="object-cover scale-105 group-hover:scale-100 transition-transform duration-300"
                            />
                          </div>
                          
                          <div className="mt-3">
                            <div className="text-[#C00D1E] text-xs font-semibold mb-2">
                              <div className="mb-1">{article.category}</div>
                              <div className="flex items-center">
                                <span>{article.team}</span>
                                <span className="mx-2">•</span>
                                <span>{article.date}</span>
                              </div>
                            </div>
                            
                            <h3 className="text-black text-xl font-bold mb-2 leading-tight w-full lg:w-3/4">
                              {article.title}
                            </h3>
                            
                            <p className="text-black text-xs mb-3">
                              {article.description}
                            </p>
                            
                            <Button className="bg-red-600 hover:bg-red-700 text-white px-4 py-0 text-xs font-medium mb-3 cursor-pointer">
                              <Link href={`/modalidades/${activeFilter.toLowerCase().replace(/\s+/g, '-').replace(/\|/g, '')}`}>
                                VER MAIS
                              </Link>
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </motion.div>

                {/* Botão Ver Tudo - Desktop */}
                <motion.div 
                  className="flex justify-center mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Link 
                    href={`/modalidades/${activeFilter.toLowerCase().replace(/\s+/g, '-').replace(/\|/g, '')}`}
                    className="inline-flex items-center gap-2 text-black text-sm font-bold transition-all duration-300"
                  >
                    Ver tudo
                    <ChevronRight size={16} />
                  </Link>
                </motion.div>
              </>
            ) : (
              /* Estado vazio */
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-gray-400 text-6xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Nenhuma notícia encontrada
                </h3>
                <p className="text-gray-400">
                  Ainda não temos notícias para esta modalidade
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsNews;