'use client'

import Image from 'next/image'
import Link from 'next/link'

interface NewsItem {
  id: string;
  image: string;
  title: string;
  date: string;
  dateTime: Date;
  category: string;
  description?: string;
  slug: string;
  type?: 'news' | 'advertisement';
}

interface NewsMobileProps {
  articles?: NewsItem[];
  maxItems?: number;
}

// Mock data baseado nos componentes existentes
const postsFromAPI: NewsItem[] = [
  {
    id: '1',
    image: '/hero1.svg',
    title: 'Carlos Carvalhal: "O resultado ajusta-se ao que se passou"',
    date: '14 de Mar. 2025 | 11:20',
    dateTime: new Date('2025-03-14T11:20:00'),
    category: 'FUTEBOL',
    slug: 'carlos-carvalhal-resultado',
    type: 'news'
  },
  {
    id: '2',
    image: '/anim.natacao.svg',
    title: 'Destaques Modalidades | 15 e 16 de fevereiro',
    date: '14 de Mar. 2025 | 11:20',
    dateTime: new Date('2025-03-14T11:20:00'),
    category: 'BASQUETEBOL',
    slug: 'destaques-modalidades',
    type: 'news'
  },
  {
    id: '3',
    image: '/anim.natacao.svg',
    title: 'Ana Rodrigues em 43.º lugar no Mundial',
    date: '14 de Mar. 2025 | 11:20',
    dateTime: new Date('2025-03-14T11:20:00'),
    category: 'NATAÇÃO',
    slug: 'ana-rodrigues-mundial',
    type: 'news'
  },
  {
    id: '4',
    image: '/news-1.svg',
    title: 'Equipa Feminina de Atletismo Homenageada',
    date: '14 de Mar. 2025 | 11:20',
    dateTime: new Date('2025-03-14T11:20:00'),
    category: 'ATLETISMO',
    slug: 'atletismo-homenagem',
    type: 'news'
  },
  {
    id: '5',
    image: '/news-2.svg',
    title: 'Carlos Carvalhal: "O resultado ajusta-se ao que se passou"',
    date: '14 de Mar. 2025 | 11:20',
    dateTime: new Date('2025-03-14T11:20:00'),
    category: 'BILHAR',
    slug: 'bilhar-carvalhal',
    type: 'news'
  }
];

// Configuração do anúncio
const AD_CONFIG = {
  position: 5,
  image: '/moosh-ads.svg',
  link: '/moosh',
  alt: 'Powered by Moosh'
};

// Função que prepara os dados inserindo o anúncio
function prepareNewsWithAd(posts: NewsItem[], config = AD_CONFIG): NewsItem[] {
  const advertisementItem: NewsItem = {
    id: 'ad-' + Date.now(),
    image: config.image,
    title: 'POWERED BY MOOSH',
    date: '',
    dateTime: new Date(),
    category: '',
    slug: config.link,
    type: 'advertisement'
  };

  return [...posts, advertisementItem];
}

// Função para pegar a notícia mais recente de cada categoria
function getLatestByCategory(articles: NewsItem[], maxItems: number): NewsItem[] {
  const latestByCategory = new Map<string, NewsItem>();
  
  articles.forEach(article => {
    if (article.type === 'news') {
      const currentLatest = latestByCategory.get(article.category);
      if (!currentLatest || article.dateTime > currentLatest.dateTime) {
        latestByCategory.set(article.category, article);
      }
    }
  });

  return Array.from(latestByCategory.values())
    .sort((a, b) => b.dateTime.getTime() - a.dateTime.getTime())
    .slice(0, maxItems);
}

export default function NewsMobile({ 
  articles,
  maxItems = 5 
}: NewsMobileProps) {
  
  const allArticles = articles || postsFromAPI;
  const selectedArticles = getLatestByCategory(allArticles, maxItems);
  const newsData = prepareNewsWithAd(selectedArticles);

  return (
    <div className="max-w-md mx-auto px-4 my-[14px]">
      <div className="space-y-2">
        {newsData.map((item, index) => {
          // Encontrar quantos itens são notícias (não anúncios)
          const newsItems = newsData.filter(item => item.type === 'news');
          const newsItemIndex = newsData.filter((item, i) => i < index && item.type === 'news').length;
          const isFirstNews = newsItemIndex === 0;
          const isLastNews = newsItemIndex === newsItems.length - 1;
          const isLargeCard = isFirstNews || isLastNews;

          return item.type === 'advertisement' ? (
            // Card de anúncio
            <Link 
              key={item.id}
              href={item.slug}
              className="block hover:opacity-90 transition-opacity"
            >
              <div className="bg-[#C00D1E] text-white text-center p-8 flex flex-col items-center justify-center min-h-[120px]">
                <div className="text-2xl font-bold mb-2">POWERED BY</div>
                <div className="text-2xl font-bold">MOOSH</div>
                <div className="mt-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">🌐</span>
                </div>
                <div className="text-sm mt-2 opacity-90">moosh.pt</div>
              </div>
            </Link>
          ) : isLargeCard ? (
            // Card GRANDE (primeiro e último) - layout vertical
            <Link 
              key={item.id}
              href={`/noticia/${item.slug}`}
              className="block hover:opacity-80 transition-opacity"
            >
              <article className="bg-white overflow-hidden">
                {/* Container da Imagem */}
                <div className="w-full">
                  <div className="relative w-full h-[200px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                {/* Container do Texto */}
                <div className="w-full p-0">
                  {/* Categoria */}
                  <div 
                    className="text-[#C00D1E] text-xs font-bold mb-2"
                    style={{ 
                      fontSize: '11px',
                      fontWeight: '700'
                    }}
                  >
                    {item.category}
                  </div>
                  
                  {/* Título */}
                  <h3 
                    className="text-black font-bold mb-3 leading-tight"
                    style={{ 
                      fontSize: '18px',
                      fontWeight: '700',
                      lineHeight: '20px'
                    }}
                  >
                    {item.title}
                  </h3>
                  
                  {/* Data */}
                  <div 
                    className="text-gray-500"
                    style={{ 
                      fontSize: '11px',
                      fontWeight: '400',
                      lineHeight: '12px'
                    }}
                  >
                    {item.date}
                  </div>
                </div>
              </article>
            </Link>
          ) : (
            // Card PEQUENO (meio) - layout horizontal responsivo
            <Link 
              key={item.id}
              href={`/noticia/${item.slug}`}
              className="block hover:opacity-80 transition-opacity"
            >
              <article 
                className="flex items-center rounded my-[5px] min-h-[103px]" 
                style={{ backgroundColor: '#F2F2F2' }}
              >
                {/* Container do Texto - 50% da largura */}
                <div className="w-1/2 min-w-0 flex flex-col justify-between gap-2 px-2 pr-3">
                  {/* Categoria - no topo */}
                  <div 
                    className="text-[#C00D1E] font-bold truncate"
                    style={{ 
                      fontSize: '10px',
                      fontWeight: '700'
                    }}
                  >
                    {item.category}
                  </div>
                  
                  {/* Título - no meio com mais espaço */}
                  <h3 
                    className="text-black font-bold leading-tight flex-1"
                    style={{ 
                      fontSize: '14px',
                      fontWeight: '700',
                      lineHeight: '15px'
                    }}
                  >
                    {item.title}
                  </h3>
                  
                  {/* Data - no final */}
                  <div 
                    className="text-gray-500 truncate"
                    style={{ 
                      fontSize: '10px',
                      fontWeight: '400',
                      lineHeight: '11px'
                    }}
                  >
                    {item.date}
                  </div>
                </div>

                {/* Container da Imagem - 50% da largura */}
                <div className="w-1/2 flex-shrink-0 p-2 pl-0">
                  <div 
                    className="relative w-full aspect-[152/86] overflow-hidden bg-gray-200 rounded-[3px]"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-[3px]"
                    />
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
}