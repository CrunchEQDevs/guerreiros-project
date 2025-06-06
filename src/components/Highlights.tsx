import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface Article {
  id: string
  title: string
  category: string
  date: string
  description: string
  image: string
  slug: string
  featured?: boolean
}

export default function Highlights() {
  // Mock data - substitua pela sua API/CMS
  const articles: Article[] = [
    {
      id: '1',
      title: 'Carlos Carvalhal: "O resultado ajusta-se ao que se passou"',
      category: 'Futebol',
      date: '20 Jan 2025',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
      image: '/anim.futebol.svg',
      slug: 'carlos-carvalhal-resultado',
      featured: true
    },
    {
      id: '2',
      title: 'Destaques Modalidades | 15 e 16 de fevereiro',
      category: 'Basquetebol',
      date: '20 Jan 2025',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
      image: '/anim.natacao.svg',
      slug: 'destaques-modalidades-fev'
    },
    {
      id: '3',
      title: 'Ana Rodrigues em 43.º lugar no Mundial',
      category: 'Natação',
      date: '20 Jan 2025',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
      image: '/anim.natacao.svg',
      slug: 'ana-rodrigues-mundial'
    }
  ];

  const featuredArticle = articles.find(article => article.featured) || articles[0];
  const sideArticles = articles.filter(article => !article.featured || article.id !== featuredArticle.id);

  return (
    <div className="bg-black/95 text-white p-4 sm:p-8 my-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Layout Flexbox */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 lg:items-start">
          
          {/* Card Principal (Esquerda) */}
          <div className="flex-1 lg:flex-[1]">
            <div className="relative">
              {/* Imagem Principal */}
              <div className="relative w-full h-[200px] lg:h-[315px] overflow-hidden group">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-300"
                />
              </div>
              
              {/* Conteúdo abaixo da imagem */}
              <div className="mt-4">
                {/* Meta informações */}
                <div className="flex items-center text-white text-sm mb-2">
                  <div className='flex'>
                    <span>Futebol</span>
                    <span className="mx-2">•</span>
                    <span>SC Braga</span>
                  </div>
                  <span className="mx-2">•</span>
                  <span>{featuredArticle.date}</span>
                </div>
                
                {/* Título */}
                <h2 className="text-white text-xl lg:text-2xl w-full lg:w-3/4 font-bold mb-2 leading-tight">
                  {featuredArticle.title}
                </h2>
                
                {/* Descrição */}
                <p className="text-gray-400 text-sm mb-4">
                  {featuredArticle.description}
                </p>
                
                {/* Botão VER MAIS */}
                <Button className="bg-red-600 hover:bg-red-700 text-white px-4 py-0 text-sm font-medium mb-4 cursor-pointer">
                  <Link href={''}>
                        VER MAIS
                  </Link>
                </Button>
                
                {/* Tags */}
                <div className="flex gap-2 ">
                  <Badge variant="outline" className="rounded-sm border border-[#5A5A5A] bg-[#EEEEEE] text-xs cursor-pointer text-[#5A5A5A] px-2 py-1">
                    {featuredArticle.category}
                  </Badge>
                  <Badge variant="outline" className="text-gray-400 rounded-xs border-[#C00D1E] bg-[#F2F2F2] text-xs cursor-pointer">
                    SC Braga
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Cards Laterais (Direita) */}
          <div className="flex-1 lg:flex-[1] flex flex-col gap-4 lg:gap-8 lg:h-[515px]">
            
            {sideArticles.slice(0, 2).map((article) => (
              <div key={article.id} className="relative flex flex-col lg:flex-row gap-4 lg:h-1/2">
                {/* Imagem */}
                <div className="relative w-full h-[150px] lg:h-full overflow-hidden group">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-300"
                  />
                  
                </div>
                
                {/* Conteúdo abaixo da imagem */}
                <div className="mt-3">
                  {/* Meta informações */}
                  <div className="flex items-center text-white text-xs mb-2 ">
                    <span>SC Braga</span>
                    <span className="mx-2">•</span>
                    <span>{article.date}</span>
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-white text-sm font-bold mb-2 leading-tight w-full lg:w-3/4">
                    {article.title}
                  </h3>
                  
                  {/* Descrição */}
                  <p className="text-gray-400 text-xs mb-3">
                    {article.description}
                  </p>
                  
                  {/* Botão VER MAIS */}
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-4 py-0 text-xs font-medium mb-3 cursor-pointer">
                    <Link href={''}>
                        VER MAIS
                    </Link>
                  </Button>
                  
                  {/* Tag */}
                  <div>
                    <Badge variant="outline" className="text-gray-400 rounded-xs border-[#C00D1E] bg-[#F2F2F2] text-xs cursor-pointer">
                      {article.category}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
            
          </div>

        </div>
      </div>
    </div>
  );
}