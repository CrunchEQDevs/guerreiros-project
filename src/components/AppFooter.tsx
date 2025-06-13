import Image from 'next/image';
import Link from "next/link";
import { Input } from './ui/input';
import { Button } from './ui/button';
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
        <div className="flex flex-col md:flex-row items-center justify-center mb-8 sm:mb-10 md:mb-12">
          <Image
            src="/footer-helmet.svg"
            alt="Logo Os Guerreiros"
            width={79}
            height={79}
            className="rounded-lg object-cover w-[79px] h-[79px] md:h-20 md:w-20 mb-2 md:mb-0 md:mr-3"
          />
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center md:text-left" style={{color: '#FFFFFF'}}>
            Os Gverreiros <span className="text-[#C00D1E] font-bold">• Blog</span>
          </h1>
        </div>

        {/* CONTEÚDO PRINCIPAL: Mobile primeiro, depois desktop */}
        <div className="space-y-8 md:space-y-0 md:flex md:flex-row md:justify-between md:gap-8 lg:gap-16 text-center md:text-left">
          
          {/* Coluna NEWSLETTER - Primeira no mobile, terceira no desktop */}
          <div className="text-white md:order-3 md:flex-1 md:max-w-sm">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="w-1 h-6 bg-[#C00D1E] rounded-full mr-3"></div>
              <h2 className="text-lg font-bold" style={{fontSize: '18px', fontWeight: '700', color: '#FFFFFF'}}>NEWSLETTER</h2>
            </div>
            <p className="mb-4" style={{fontSize: '14px', fontWeight: '600', color: '#FFFFFF'}}>
              Subscreva a nossa newsletter e receba em primeira mão as nossas notícias
            </p>
            
            <div className="flex gap-2 mb-3">
              <Input 
                placeholder="Escreva o seu e-mail aqui" 
                className="border border-[#C00D1E] bg-transparent placeholder:text-gray-400 placeholder:text-xs flex-1 px-3 py-2 h-10 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:border-[#C00D1E]"
                style={{color: '#FFFFFF'}}
              />
              <Button 
                className="bg-[#C00D1E] hover:bg-[#A00B18] transition-colors duration-200"
                style={{
                  width: '134px', 
                  height: '38px', 
                  fontSize: '16px', 
                  fontWeight: '700',
                  color: '#FFFFFF'
                }}
              >
                Subscrever
              </Button>
            </div>
            
            <p style={{fontSize: '10px', fontWeight: '300', color: '#FFFFFF'}}>
              Ao subscrever estará a concordar com os nossos{' '}
              <Link className="underline text-[#C00D1E] hover:text-white transition-colors duration-200" href="#">
                Termos e condições
              </Link>
            </p>
          </div>

          {/* Coluna CATEGORIAS - Segunda no mobile, segunda no desktop */}
          <div className="text-white md:order-2 md:flex-1">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="w-1 h-6 bg-[#C00D1E] rounded-full mr-3"></div>
              <h2 className="text-lg font-bold" style={{fontSize: '18px', fontWeight: '700', color: '#FFFFFF'}}>CATEGORIAS</h2>
            </div>
            <div className="space-y-2">
              <Link 
                href="#" 
                className="block hover:text-[#C00D1E] transition-colors duration-200"
                style={{fontSize: '16px', fontWeight: '600', color: '#FFFFFF'}}
              >
                Futebol
              </Link>
              <Link 
                href="#" 
                className="block hover:text-[#C00D1E] transition-colors duration-200"
                style={{fontSize: '16px', fontWeight: '600', color: '#FFFFFF'}}
              >
                SC Braga solidário
              </Link>
              <Link 
                href="#" 
                className="block hover:text-[#C00D1E] transition-colors duration-200"
                style={{fontSize: '16px', fontWeight: '600', color: '#FFFFFF'}}
              >
                Vídeos
              </Link>
              <Link 
                href="#" 
                className="block hover:text-[#C00D1E] transition-colors duration-200"
                style={{fontSize: '16px', fontWeight: '600', color: '#FFFFFF'}}
              >
                Clube
              </Link>
              <Link 
                href="#" 
                className="block hover:text-[#C00D1E] transition-colors duration-200"
                style={{fontSize: '16px', fontWeight: '600', color: '#FFFFFF'}}
              >
                Resultados
              </Link>
              
              {/* Modalidades Accordion */}
              <Accordion type="single" collapsible>
                <AccordionItem value="modalidades" className="border-none">
                  <AccordionTrigger 
                    className="hover:no-underline p-0 hover:text-[#C00D1E] transition-colors duration-200 text-center md:text-left justify-center md:justify-start [&>svg]:hidden"
                    style={{fontSize: '16px', fontWeight: '600', color: '#FFFFFF'}}
                  >
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <span>Modalidades</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className="transition-transform duration-200 data-[state=open]:rotate-180">
                        <path d="M7.5 10L12.5 15L17.5 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <div className="grid grid-cols-1 gap-1 md:ml-4">
                      <Link href="/atletismo" className="block hover:text-[#C00D1E] transition-colors duration-200 py-1" style={{fontSize: '14px', fontWeight: '600', color: '#FFFFFF'}}>
                        Atletismo
                      </Link>
                      <Link href="/basquetebol" className="block hover:text-[#C00D1E] transition-colors duration-200 py-1" style={{fontSize: '14px', fontWeight: '600', color: '#FFFFFF'}}>
                        Basquetebol
                      </Link>
                      <Link href="/bilhar" className="block hover:text-[#C00D1E] transition-colors duration-200 py-1" style={{fontSize: '14px', fontWeight: '600', color: '#FFFFFF'}}>
                        Bilhar
                      </Link>
                      <Link href="/boccia" className="block hover:text-[#C00D1E] transition-colors duration-200 py-1" style={{fontSize: '14px', fontWeight: '600', color: '#FFFFFF'}}>
                        Boccia
                      </Link>
                      <Link href="/futsal" className="block hover:text-[#C00D1E] transition-colors duration-200 py-1" style={{fontSize: '14px', fontWeight: '600', color: '#FFFFFF'}}>
                        Futsal
                      </Link>
                      <Link href="/kickboxing" className="block hover:text-[#C00D1E] transition-colors duration-200 py-1" style={{fontSize: '14px', fontWeight: '600', color: '#FFFFFF'}}>
                        Kickboxing | Boxe | Muay Thai
                      </Link>
                      <Link href="/natacao" className="block hover:text-[#C00D1E] transition-colors duration-200 py-1" style={{fontSize: '14px', fontWeight: '600', color: '#FFFFFF'}}>
                        Natação
                      </Link>
                      <Link href="/taekwondo" className="block hover:text-[#C00D1E] transition-colors duration-200 py-1" style={{fontSize: '14px', fontWeight: '600', color: '#FFFFFF'}}>
                        Taekwondo
                      </Link>
                      <Link href="/voleibol" className="block hover:text-[#C00D1E] transition-colors duration-200 py-1" style={{fontSize: '14px', fontWeight: '600', color: '#FFFFFF'}}>
                        Voleibol
                      </Link>
                      <Link href="/karate" className="block hover:text-[#C00D1E] transition-colors duration-200 py-1" style={{fontSize: '14px', fontWeight: '600', color: '#FFFFFF'}}>
                        Karaté
                      </Link>
                      <Link href="/badminton" className="block hover:text-[#C00D1E] transition-colors duration-200 py-1" style={{fontSize: '14px', fontWeight: '600', color: '#FFFFFF'}}>
                        Badminton
                      </Link>
                      <Link href="/esports" className="block hover:text-[#C00D1E] transition-colors duration-200 py-1" style={{fontSize: '14px', fontWeight: '600', color: '#FFFFFF'}}>
                        Esports
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Coluna SOBRE - Terceira no mobile, primeira no desktop */}
          <div className="text-white md:order-1 md:flex-1">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="w-1 h-6 bg-[#C00D1E] rounded-full mr-3"></div>
              <h2 className="text-lg font-bold" style={{fontSize: '18px', fontWeight: '700', color: '#FFFFFF'}}>SOBRE</h2>
            </div>
            <div className="space-y-2">
              <Link 
                href="#" 
                className="block hover:text-[#C00D1E] transition-colors duration-200"
                style={{fontSize: '14px', fontWeight: '600', color: '#FFFFFF'}}
              >
                Ficha Técnica
              </Link>
              <Link 
                href="#" 
                className="block hover:text-[#C00D1E] transition-colors duration-200"
                style={{fontSize: '14px', fontWeight: '600', color: '#FFFFFF'}}
              >
                Termos e Condições
              </Link>
              <Link 
                href="#" 
                className="block hover:text-[#C00D1E] transition-colors duration-200"
                style={{fontSize: '14px', fontWeight: '600', color: '#FFFFFF'}}
              >
                Política de privacidade e Cookies
              </Link>
            </div>
          </div>

          {/* Coluna REDES SOCIAIS - Quarta no mobile, quarta no desktop */}
          <div className="text-white md:order-4 md:flex-1">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="w-1 h-6 bg-[#C00D1E] rounded-full mr-3"></div>
              <h2 className="text-lg font-bold" style={{fontSize: '18px', fontWeight: '700', color: '#FFFFFF'}}>REDES SOCIAIS</h2>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <Link 
                href="#" 
                className="hover:opacity-80 transition-opacity duration-200"
                aria-label="Facebook"
              >
                <Image 
                  src="/facebook.svg" 
                  alt="Facebook" 
                  width={24} 
                  height={24} 
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </Link>

              <Link 
                href="#" 
                className="hover:opacity-80 transition-opacity duration-200"
                aria-label="X"
              >
                <Image 
                  src="/x.svg" 
                  alt="X" 
                  width={24} 
                  height={24} 
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </Link>

              <Link 
                href="#" 
                className="hover:opacity-80 transition-opacity duration-200"
                aria-label="Instagram"
              >
                <Image 
                  src="/instagram.svg" 
                  alt="Instagram" 
                  width={24} 
                  height={24} 
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </Link>

              <Link 
                href="#" 
                className="hover:opacity-80 transition-opacity duration-200"
                aria-label="LinkedIn"
              >
                <Image 
                  src="/linkedin.svg" 
                  alt="LinkedIn" 
                  width={24} 
                  height={24} 
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </Link>

              <Link 
                href="#" 
                className="hover:opacity-80 transition-opacity duration-200"
                aria-label="YouTube"
              >
                <Image 
                  src="/youtube.svg" 
                  alt="YouTube" 
                  width={24} 
                  height={24} 
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </Link>
            </div>
          </div>

        </div>

        {/* PUBLICIDADE - Apenas no mobile */}
        <div className="mt-12 mb-8 md:hidden">
          <div className="w-full overflow-hidden">
            <Image
              src="/freebet-ads.svg"
              alt="Publicidade FreeBet"
              width={800}
              height={100}
              className="w-full h-auto object-cover object-center"
            />
          </div>
        </div>
        
      </div>

      {/* LINHA VERMELHA: Fora do container para ocupar largura total */}
      <div className="bg-red-600 h-0.5 w-full"></div>

      {/* COPYRIGHT: Volta para dentro do container */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-4">
        <div className="text-center">
          <p style={{color: '#FFFFFF'}}>Gverreiros © 2025</p>
        </div>
      </div>

    </footer>
  );
}