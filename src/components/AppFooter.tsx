import Image from 'next/image';
import Link from "next/link";
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Facebook, X, Instagram, Linkedin, Youtube } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Footer() {
  return (
    <footer className="bg-black w-full">

      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* PRIMEIRA LINHA: Logo centralizado */}
        <div className="flex items-center justify-center mb-6">
          <Image
            src="/footer-helmet.svg"
            alt="Logo Os Guerreiros"
            width={80}
            height={80}
            className="rounded-lg object-cover h-20 w-20"
          />
          <h1 className="text-2xl font-bold text-white ml-3">
            Os Gverreiros <span className="text-[#C00D1E] font-bold">• Blog</span>
          </h1>
        </div>

        {/* SEGUNDA LINHA: Categorias, Sobre e Newsletter lado a lado */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-8">
          
          {/* Coluna SOBRE */}
          <div className="text-white flex-1">
            <div className="flex items-center mb-4">
              <div className="w-1 h-6 bg-[#C00D1E] rounded-full mr-3"></div>
              <h2 className="text-lg font-bold text-white">SOBRE</h2>
            </div>
            <div className="space-y-2">
              <Link 
                href="#" 
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Política de privacidade e Cookies
              </Link>
              <Link 
                href="#" 
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Termos e Condições
              </Link>
              <Link 
                href="#" 
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Ficha Técnica
              </Link>
            </div>
          </div>

          {/* Coluna CATEGORIAS */}
          <div className="text-white flex-1">
            <div className="flex items-center mb-4">
              <div className="w-1 h-6 bg-[#C00D1E] rounded-full mr-3"></div>
              <h2 className="text-lg font-bold text-white">CATEGORIAS</h2>
            </div>
            <div className="space-y-2">
              <Link 
                href="#" 
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                SC Braga solidário
              </Link>
              <Link 
                href="#" 
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Vídeos
              </Link>
              <Link 
                href="#" 
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Clube
              </Link>
              <Link 
                href="#" 
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Futebol
              </Link>
              <Link 
                href="#" 
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Resultados
              </Link>
              
              {/* Modalidades Accordion */}
              <Accordion type="single" collapsible>
                <AccordionItem value="modalidades" className="border-none">
                  <AccordionTrigger className="hover:no-underline p-0 text-gray-300 hover:text-white transition-colors duration-200 text-left justify-start">
                    Modalidades
                  </AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <div className="grid grid-cols-1 gap-1 ml-4">
                      <Link href="/atletismo" className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 py-1">
                        Atletismo
                      </Link>
                      <Link href="/basquetebol" className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 py-1">
                        Basquetebol
                      </Link>
                      <Link href="/bilhar" className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 py-1">
                        Bilhar
                      </Link>
                      <Link href="/boccia" className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 py-1">
                        Boccia
                      </Link>
                      <Link href="/futsal" className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 py-1">
                        Futsal
                      </Link>
                      <Link href="/kickboxing" className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 py-1">
                        Kickboxing | Boxe | Muay Thai
                      </Link>
                      <Link href="/natacao" className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 py-1">
                        Natação
                      </Link>
                      <Link href="/taekwondo" className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 py-1">
                        Taekwondo
                      </Link>
                      <Link href="/voleibol" className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 py-1">
                        Voleibol
                      </Link>
                      <Link href="/karate" className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 py-1">
                        Karaté
                      </Link>
                      <Link href="/badminton" className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 py-1">
                        Badminton
                      </Link>
                      <Link href="/esports" className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 py-1">
                        Esports
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Coluna NEWSLETTER */}
          <div className="text-white flex-1 max-w-sm">
            <div className="flex items-center mb-4">
              <div className="w-1 h-6 bg-[#C00D1E] rounded-full mr-3"></div>
              <h2 className="text-lg font-bold text-white">NEWSLETTER</h2>
            </div>
            <p className="mb-4 text-gray-300">
              Subscreva a nossa newsletter e receba em primeira mão as nossas notícias
            </p>
            
            <div className="flex gap-2 mb-3">
              <Input 
                placeholder="Escreva o seu e-mail aqui" 
                className="border border-[#C00D1E] bg-transparent text-white placeholder:text-gray-400 placeholder:text-xs flex-1 px-2 !focus:outline-none !focus:ring-0 !focus:ring-offset-0 !focus:shadow-none !focus:border-[#C00D1E]"
              />
              <Button className="bg-[#C00D1E] hover:bg-[#A00B18] text-white font-bold transition-colors duration-200">
                Subscrever
              </Button>
            </div>
            
            <p className="text-sm text-gray-400">
              Ao subscrever estará a concordar com os nossos{' '}
              <Link className="underline text-[#C00D1E] hover:text-white transition-colors duration-200" href="#">
                Termos e condições
              </Link>
            </p>
          </div>

          {/* Coluna REDES SOCIAIS */}
          <div className="text-white flex-1">
            <div className="flex items-center mb-4">
              <div className="w-1 h-6 bg-[#C00D1E] rounded-full mr-3"></div>
              <h2 className="text-lg font-bold text-white">REDES SOCIAIS</h2>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="#" 
                className="text-white hover:text-[#C00D1E] transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </Link>

              <Link 
                href="#" 
                className="text-white hover:text-[#C00D1E] transition-colors duration-200"
                aria-label="X"
              >
                <X className="w-6 h-6" />
              </Link>

              <Link 
                href="#" 
                className="text-white hover:text-[#C00D1E] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </Link>

              <Link 
                href="#" 
                className="text-white hover:text-[#C00D1E] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </Link>

              <Link 
                href="#" 
                className="text-white hover:text-[#C00D1E] transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </Link>
            </div>
          </div>

        </div>
        
      </div>

      {/* LINHA VERMELHA: Fora do container para ocupar largura total */}
      <div className="bg-red-600 h-0.5 w-full"></div>

      {/* COPYRIGHT: Volta para dentro do container */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-4">
        <div className="text-center text-white">
          <p>Gverreiros © 2025</p>
        </div>
      </div>

    </footer>
  );
}