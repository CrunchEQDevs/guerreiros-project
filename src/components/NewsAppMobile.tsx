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

// Categorias disponíveis
const AVAILABLE_CATEGORIES = [
  'Atletismo',
  'Basquetebol', 
  'Bilhar',
  'Boccia',
  'Futsal',
  'Kickboxing',
  'Natação',
  'Taekwondo',
  'Voleibol',
  'Karaté',
  'Badminton',
  'Esports'
];

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

// Configuração do anúncio - baseado no LastNews.tsx
const AD_CONFIG = {
  position: 5, // Posição no array (após as 5 notícias)
  image: '/moosh-ads.svg',
  link: '/moosh',
  alt: 'Powered by Moosh'
};

// Função que prepara os dados inserindo o anúncio - baseado no LastNews.tsx
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
            // Card de anúncio - baseado no LastNews.tsx
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
            // Card GRANDE (primeiro e último) - baseado na imagem
            <Link 
              key={item.id}
              href={`/noticia/${item.slug}`}
              className="block hover:opacity-80 transition-opacity"
            >
              <article className="bg-white overflow-hidden">
                {/* Imagem grande no topo */}
                <div className="relative w-full h-[200px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Conteúdo abaixo da imagem */}
                <div className="">
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
            // Card PEQUENO (meio) - layout horizontal
            <Link 
              key={item.id}
              href={`/noticia/${item.slug}`}
              className="block hover:opacity-80 transition-opacity"
            >
              <article 
                className="flex items-center rounded my-[5px]" 
                style={{ 
                  backgroundColor: '#F2F2F2',
                  height: '103px'
                }}
              >
                {/* Conteúdo da notícia - lado esquerdo */}
                <div 
                  className="flex-1 flex flex-col justify-center"
                  style={{ 
                    marginLeft: '10px',
                    marginRight: '14px'
                  }}
                >
                  {/* Categoria */}
                  <div 
                    className="text-[#C00D1E] text-xs font-bold mb-1"
                    style={{ 
                      fontSize: '11px',
                      fontWeight: '700'
                    }}
                  >
                    {item.category}
                  </div>
                  
                  {/* Título */}
                  <h3 
                    className="text-black font-bold mb-2 leading-tight"
                    style={{ 
                      fontSize: '16px',
                      fontWeight: '700',
                      lineHeight: '17px'
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

                {/* Imagem - lado direito */}
                <div 
                  className="relative overflow-hidden bg-gray-200 flex-shrink-0 rounded-[3px]"
                  style={{ 
                    width: '152px', 
                    height: '86px',
                    marginRight: '20px'
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-[3px]"
                  />
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
}