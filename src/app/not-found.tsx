import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';

export default function NotFound() {
  return (
    <>
      <AppHeader />
      
      <main className="min-h-screen bg-gray-50 flex flex-col">
        {/* Hero Section com background similar ao site */}
        <div className="relative bg-gradient-to-b from-red-900 to-red-800 text-white">
          <div className="absolute inset-0 bg-black/50"></div>
          
          <div className="relative z-10 container mx-auto px-4 py-20 text-center">
            <h1 className="text-8xl md:text-9xl font-bold mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Página Não Encontrada
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Oops! Parece que esta página saiu do campo. 
              Não se preocupe, vamos levá-lo de volta ao jogo!
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex items-center justify-center py-16">
          <div className="container mx-auto px-4 text-center">
            {/* SC Braga Logo */}
            <div className="mb-12">
              <Image
                src="/logo-circle.svg"
                alt="SC Braga"
                width={150}
                height={150}
                className="mx-auto opacity-10"
              />
            </div>

            {/* Call to Action */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">
                O que deseja fazer?
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button
                  asChild
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  <Link href="/" className="flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    Ir para a Homepage
                  </Link>
                </Button>
                
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50"
                >
                  <Link href="/noticias" className="flex items-center gap-2">
                    <ArrowLeft className="w-5 h-5" />
                    Ver Últimas Notícias
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-gray-600 mb-4">Páginas populares:</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/futebol" className="text-red-600 hover:text-red-700 hover:underline">
                  Futebol
                </Link>
                <span className="text-gray-400">•</span>
                <Link href="/modalidades" className="text-red-600 hover:text-red-700 hover:underline">
                  Modalidades
                </Link>
                <span className="text-gray-400">•</span>
                <Link href="/clube" className="text-red-600 hover:text-red-700 hover:underline">
                  Clube
                </Link>
                <span className="text-gray-400">•</span>
                <Link href="/bilhetes" className="text-red-600 hover:text-red-700 hover:underline">
                  Bilhetes
                </Link>
                <span className="text-gray-400">•</span>
                <Link href="/loja" className="text-red-600 hover:text-red-700 hover:underline">
                  Loja Oficial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <AppFooter />
    </>
  );
}