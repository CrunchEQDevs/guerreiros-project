import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface NewsItem {
  id: string;
  image: string;
  title: string;
  date: string;
  tags: string[];
  modalidade?: string;
  description?: string;
  // Adicionamos um campo para identificar o tipo de conteúdo
  type?: 'news' | 'advertisement';
}

// Simulando dados que viriam da API do WordPress
const postsFromAPI: NewsItem[] = [
  {
    id: '157', // IDs reais que viriam da API
    image: '/news-1.svg',
    title: 'Equipas Feminina de Atletismo Homenageada',
    date: '30 Jun 2019',
    tags: ['Atletismo', 'SC Braga'],
    modalidade: 'Atletismo',
    description: 'A equipa feminina de atletismo do SC Braga foi homenageada pelos excelentes resultados obtidos na temporada, destacando-se em várias competições nacionais e regionais.',
    type: 'news'
  },
  {
    id: '158',
    image: '/news-2.svg',
    title: 'Francisco Domingues em 2.º lugar no Predator Q School Challenge',
    date: '30 Jun 2019',
    tags: ['Bilhar', 'SC Braga'],
    modalidade: 'Bilhar',
    description: 'Francisco Domingues conquistou uma excelente segunda posição no prestigiado Predator Q School Challenge, demonstrando o alto nível técnico do atleta.',
    type: 'news'
  },
  {
    id: '159',
    image: '/news-3.svg',
    title: 'Guerreiros no International Grand Prix de K1 Super Fight',
    date: '20 Jun 2015',
    tags: ['Kickboxing', 'SC Braga'],
    modalidade: 'Kickboxing',
    description: 'Os atletas do SC Braga participaram no International Grand Prix de K1 Super Fight, representando o clube em competição internacional de alto nível.',
    type: 'news'
  },
  {
    id: '160',
    image: '/news-4.svg',
    title: 'Guerreiras de Voleibol triunfam em Matosinhos',
    date: '20 Jun 2015',
    tags: ['Voleibol', 'SC Braga'],
    modalidade: 'Voleibol',
    description: 'A equipa feminina de voleibol conquistou uma importante vitória em Matosinhos, continuando a excelente campanha na competição regional.',
    type: 'news'
  },
  {
    id: '161',
    image: '/news-5.svg',
    title: 'André Gomes na Seleção Sub-17 de Futsal',
    date: '20 Jun 2015',
    tags: ['Karaté', 'SC Braga'],
    modalidade: 'Futsal',
    description: 'André Gomes foi convocado para representar a seleção nacional de futsal sub-17, um reconhecimento do seu talento e dedicação ao desporto.',
    type: 'news'
  }
];

// Configuração do anúncio - fácil de modificar sem mexer no código principal
const AD_CONFIG = {
  position: 2, // Posição no array (0 = primeiro, 1 = segundo, 2 = terceiro, etc.)
  image: '/moosh-ads.svg',
  link: '/promocao',
  alt: 'Anúncio Promocional'
};

// Função que prepara os dados inserindo o anúncio na posição desejada
function prepareNewsWithAd(posts: NewsItem[], config = AD_CONFIG): NewsItem[] {
  // Cria o objeto do anúncio baseado na configuração
  const advertisementItem: NewsItem = {
    id: 'ad-' + Date.now(), // ID único baseado no timestamp
    image: config.image,
    title: '',
    date: '',
    tags: [],
    type: 'advertisement'
  };

  // Se não há posts suficientes para a posição desejada, adiciona no final
  if (posts.length <= config.position) {
    return [...posts, advertisementItem];
  }

  // Insere o anúncio na posição especificada
  return [
    ...posts.slice(0, config.position),  // Posts antes da posição do anúncio
    advertisementItem,                   // O anúncio
    ...posts.slice(config.position)      // Posts após a posição do anúncio
  ];
}

export default function News() {
  // Aqui você processaria os dados da API antes de renderizar
  // Em uma implementação real, isso viria de um useEffect ou getServerSideProps
  const newsData = prepareNewsWithAd(postsFromAPI); // Usa a configuração padrão

  return (
    <div className="relative">
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap gap-6">
          {newsData.map((item) => (
            // Agora verificamos pelo tipo em vez de ID específico
            item.type === 'advertisement' ? (
              // Container do anúncio - mantém as mesmas dimensões dos outros cards
              <article 
                key={item.id} 
                className="bg-white overflow-hidden flex-1 min-w-[300px] max-w-[400px] min-h-[500px] flex flex-col"
              >
                {/* Link simples envolvendo toda a imagem */}
                <Link 
                  href={AD_CONFIG.link} 
                  className="block hover:opacity-90 transition-opacity h-full"
                >
                  <Image
                    src={item.image}
                    alt={AD_CONFIG.alt}
                     width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </Link>
              </article>
            ) : (
              // Card de notícia normal
              <article 
                key={item.id} 
                className="bg-white overflow-hidden flex-1 min-w-[300px] max-w-[400px] min-h-[500px] flex flex-col"
              >
                {/* Image Container - Adicionado efeito hover com scale */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="py-4 flex-1 flex flex-col">
                  {/* Meta informações */}
                  <div className="flex items-center text-[#C00D1E] text-sm mb-2 font-semibold">
                    {item.modalidade && (
                      <>
                        <span>{item.modalidade}</span>
                        <span className="mx-2">•</span>
                      </>
                    )}
                    <span>SC Braga</span>
                    <span className="mx-2">•</span>
                    <span>{item.date}</span>
                  </div>
                  
                  {/* Título - altura fixa para 2 linhas */}
                  <h3 className="text-gray-900 text-sm w-3/4 font-bold leading-tight hover:text-red-600 cursor-pointer h-10 overflow-hidden line-clamp-2">
                    {item.title}
                  </h3>
                  
                  {/* Descrição - cresce para ocupar espaço disponível */}
                  {item.description && (
                    <p className="text-gray-700 text-sm mb-0 leading-relaxed flex-1">
                      {item.description}
                    </p>
                  )}
                  
                  {/* Container para botão e badges - sempre no final */}
                  <div className="mt-auto">
                    {/* Botão VER MAIS */}
                    <Button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-xs font-medium cursor-pointer mb-2">
                      <Link href={`/noticia/${item.id}`}>
                        VER MAIS
                      </Link>
                    </Button>
                    
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2">
                      {item.modalidade && (
                        <span className="rounded-sm border border-[#5A5A5A] bg-[#EEEEEE] text-xs cursor-pointer text-[#5A5A5A] px-2 py-1">
                          {item.modalidade}
                        </span>
                      )}
                      <span className="bg-[#FFF7F7] text-[#C00D1E] rounded-sm border border-[#C00D1E] px-2 py-1 text-xs font-medium cursor-pointer">
                        SC Braga
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            )
          ))}
        </div>
        
        {/* Advertisement Banner */}
        <div className="my-8 rounded-sm overflow-hidden">
          <Link href="/promocao" className="block hover:opacity-90 transition-opacity">
            <Image
              src="/freebet-ads.svg"
              alt="Logo Os Guerreiros"
              width={1200}
              height={300}
              className="w-full h-auto object-cover"
              priority
            />
          </Link>
        </div>
      </div>
    </div>
  );
}