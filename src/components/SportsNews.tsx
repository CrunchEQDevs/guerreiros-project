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
    date: "20 Jan 2025",
    title: "Carlos Carvalhal: \"O resultado ajusta-se ao que se passou\"",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center",
    tags: ["Futebol", "SC Braga"]
  },
  {
    id: 2,
    category: "Futebol",
    team: "SC Braga",
    date: "19 Jan 2025",
    title: "Vitória importante na Liga Europa",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop&crop=center",
    tags: ["Futebol"]
  },
  {
    id: 3,
    category: "Futebol",
    team: "SC Braga",
    date: "18 Jan 2025",
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
    date: "20 Jan 2025",
    title: "Atletas brilham em competição nacional",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
    tags: ["Atletismo"]
  },
  {
    id: 5,
    category: "Atletismo",
    team: "SC Braga",
    date: "19 Jan 2025",
    title: "Novo recorde nos 100 metros rasos",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop&crop=center",
    tags: ["Atletismo", "SC Braga"]
  },
  {
    id: 6,
    category: "Atletismo",
    team: "SC Braga",
    date: "17 Jan 2025",
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
    date: "20 Jan 2025",
    title: "Vitória importante na Liga Portuguesa",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop&crop=center",
    tags: ["Basquetebol"]
  },
  {
    id: 8,
    category: "Basquetebol",
    team: "SC Braga",
    date: "18 Jan 2025",
    title: "Equipa feminina conquista o título",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=800&h=600&fit=crop&crop=center",
    tags: ["Basquetebol", "SC Braga"]
  },
  {
    id: 9,
    category: "Basquetebol",
    team: "SC Braga",
    date: "16 Jan 2025",
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
    date: "19 Jan 2025",
    title: "Campeonato nacional de bilhar arranca",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
    tags: ["Bilhar"]
  },
  {
    id: 11,
    category: "Bilhar",
    team: "SC Braga",
    date: "17 Jan 2025",
    title: "João Silva vence torneio regional",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop&crop=center",
    tags: ["Bilhar", "SC Braga"]
  },
  {
    id: 12,
    category: "Bilhar",
    team: "SC Braga",
    date: "15 Jan 2025",
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
    date: "20 Jan 2025",
    title: "Atletas paralímpicos em destaque",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1578446115142-a999f4fc9e61?w=800&h=600&fit=crop&crop=center",
    tags: ["Boccia"]
  },
  {
    id: 14,
    category: "Boccia",
    team: "SC Braga",
    date: "18 Jan 2025",
    title: "Torneio internacional em Braga",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=800&h=600&fit=crop&crop=center",
    tags: ["Boccia", "SC Braga"]
  },
  {
    id: 15,
    category: "Boccia",
    team: "SC Braga",
    date: "16 Jan 2025",
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
    date: "20 Jan 2025",
    title: "Equipa de futsal conquista título regional",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1518604666860-f20c3d421e0c?w=800&h=600&fit=crop&crop=center",
    tags: ["Futsal"]
  },
  {
    id: 17,
    category: "Futsal", 
    team: "SC Braga",
    date: "19 Jan 2025",
    title: "Goleada na Liga Placard",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
    tags: ["Futsal", "SC Braga"]
  },
  {
    id: 18,
    category: "Futsal",
    team: "SC Braga",
    date: "17 Jan 2025",
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
    date: "20 Jan 2025",
    title: "Atleta conquista cinturão nacional",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1544736150-b47bc512b645?w=800&h=600&fit=crop&crop=center",
    tags: ["Kickboxing"]
  },
  {
    id: 20,
    category: "Kickboxing | Boxe | Muay Thai",
    team: "SC Braga",
    date: "18 Jan 2025",
    title: "Gala de boxe atrai multidões",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop&crop=center",
    tags: ["Boxe", "SC Braga"]
  },
  {
    id: 21,
    category: "Kickboxing | Boxe | Muay Thai",
    team: "SC Braga",
    date: "16 Jan 2025",
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
    date: "20 Jan 2025",
    title: "Nadadores quebram recordes regionais",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop&crop=center",
    tags: ["Natação"]
  },
  {
    id: 23,
    category: "Natação",
    team: "SC Braga",
    date: "19 Jan 2025",
    title: "Piscinas municipais recebem competição",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&h=600&fit=crop&crop=center",
    tags: ["Natação", "SC Braga"]
  },
  {
    id: 24,
    category: "Natação",
    team: "SC Braga",
    date: "17 Jan 2025",
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
    date: "19 Jan 2025",
    title: "Medalhas no campeonato nacional",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&h=600&fit=crop&crop=center",
    tags: ["Taekwondo"]
  },
  {
    id: 26,
    category: "Taekwondo",
    team: "SC Braga",
    date: "17 Jan 2025",
    title: "Faixas negras em exame de graduação",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1544736150-b47bc512b645?w=800&h=600&fit=crop&crop=center",
    tags: ["Taekwondo", "SC Braga"]
  },
  {
    id: 27,
    category: "Taekwondo",
    team: "SC Braga",
    date: "15 Jan 2025",
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
    date: "20 Jan 2025",
    title: "Vitória crucial no campeonato",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&h=600&fit=crop&crop=center",
    tags: ["Voleibol"]
  },
  {
    id: 29,
    category: "Voleibol",
    team: "SC Braga",
    date: "18 Jan 2025",
    title: "Equipa feminina lidera tabela",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop&crop=center",
    tags: ["Voleibol", "SC Braga"]
  },
  {
    id: 30,
    category: "Voleibol",
    team: "SC Braga",
    date: "16 Jan 2025",
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
    date: "19 Jan 2025",
    title: "Karatekas dominam competição",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&h=600&fit=crop&crop=center",
    tags: ["Karaté"]
  },
  {
    id: 32,
    category: "Karaté",
    team: "SC Braga",
    date: "17 Jan 2025",
    title: "Seminário técnico com sensei japonês",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1544736150-b47bc512b645?w=800&h=600&fit=crop&crop=center",
    tags: ["Karaté", "SC Braga"]
  },
  {
    id: 33,
    category: "Karaté",
    team: "SC Braga",
    date: "15 Jan 2025",
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
    date: "20 Jan 2025",
    title: "Torneio internacional em Braga",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
    tags: ["Badminton"]
  },
  {
    id: 35,
    category: "Badminton",
    team: "SC Braga",
    date: "18 Jan 2025",
    title: "Duplas vencem campeonato regional",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop&crop=center",
    tags: ["Badminton", "SC Braga"]
  },
  {
    id: 36,
    category: "Badminton",
    team: "SC Braga",
    date: "16 Jan 2025",
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
    date: "20 Jan 2025",
    title: "Equipa de FIFA vence torneio nacional",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1518604666860-f20c3d421e0c?w=800&h=600&fit=crop&crop=center",
    tags: ["Esports"]
  },
  {
    id: 38,
    category: "Esports",
    team: "SC Braga",
    date: "19 Jan 2025",
    title: "League of Legends: vitória na liga",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop&crop=center",
    tags: ["Esports", "SC Braga"]
  },
  {
    id: 39,
    category: "Esports",
    team: "SC Braga",
    date: "17 Jan 2025",
    title: "Gaming center abre portas",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=800&h=600&fit=crop&crop=center",
    tags: ["Esports"]
  }
];

// 🏆 LISTA DE CATEGORIAS (todas as 12 do componente original)
const categoriesList: string[] = [
  'Futebol',
  'Atletismo',
  'Basquetebol',
  'Bilhar',
  'Boccia',
  'Futsal',
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
    <div className="bg-black py-3">
      <div className="overflow-x-auto">
        <div className="flex px-4 min-w-max">
          {categories.map((category, index) => (
            <React.Fragment key={category}>
              <button
                className={`
                  px-3 py-2 text-xs font-bold uppercase whitespace-nowrap transition-all
                  ${activeFilter === category 
                    ? 'bg-[#C00D1E] text-white' 
                    : 'bg-transparent text-white'
                  }
                `}
                onClick={() => handleFilterChange(category)}
              >
                {category}
              </button>
              {index < categories.length - 1 && (
                <div className="w-px bg-white mx-2 self-stretch opacity-50" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
  };

  // Função para swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  // Reset do índice quando muda a categoria
  React.useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  if (articles.length === 0) {
    return (
      <div className="bg-black text-white text-center py-16">
        <p>Nenhuma notícia encontrada para esta modalidade</p>
      </div>
    );
  }

  const currentArticle = articles[currentIndex];

  return (
    <div className="bg-black relative">
      {/* Container do carrossel */}
      <div 
        className="relative w-full h-[400px] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Imagem de fundo */}
        <Image
          src={currentArticle.image}
          alt={currentArticle.title}
          fill
          className="object-cover"
        />
        
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Conteúdo sobreposto */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          {/* Categoria */}
          <div className="bg-[#C00D1E] text-white text-xs font-bold px-2 py-1 mb-3 inline-block uppercase">
            {currentArticle.category}
          </div>
          
          {/* Título */}
          <h3 className="text-white font-bold text-lg leading-tight mb-2">
            {currentArticle.title}
          </h3>
          
          {/* Data */}
          <div className="text-gray-300 text-sm">
            {currentArticle.date}
          </div>
        </div>
      </div>

      {/* Setas de navegação */}
      {articles.length > 1 && (
        <>
          {/* Seta esquerda */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all z-10"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Seta direita */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all z-10"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Indicadores de página */}
      {articles.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
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
      <div className="block md:hidden my-[14px]">
        {/* Header Mobile */}
        <div className="bg-black px-4 py-4">
          <h1 className="text-xl font-bold uppercase text-white">MODALIDADES</h1>
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