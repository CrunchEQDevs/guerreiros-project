'use client'

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { Search, X } from 'lucide-react';
import { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Input } from "./ui/input";

// Ícone hamburguer customizado - SVG fornecido pelo usuário
const HamburgerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M22.8 6H1.2C0.48 6 0 5.52 0 4.8C0 4.08 0.48 3.6 1.2 3.6H22.8C23.52 3.6 24 4.08 24 4.8C24 5.52 23.52 6 22.8 6Z" fill="black"/>
    <path d="M12 13.2H1.2C0.48 13.2 0 12.72 0 12C0 11.28 0.48 10.8 1.2 10.8H12C12.72 10.8 13.2 11.28 13.2 12C13.2 12.72 12.72 13.2 12 13.2Z" fill="black"/>
    <path d="M22.8 20.4H1.2C0.48 20.4 0 19.92 0 19.2C0 18.48 0.48 18 1.2 18H22.8C23.52 18 24 18.48 24 19.2C24 19.92 23.52 20.4 22.8 20.4Z" fill="black"/>
  </svg>
);

export default function NavBar() {
  // Estados para controlar as telas do mobile
  const [currentScreen, setCurrentScreen] = useState<'closed' | 'menu' | 'login' | 'register' | 'modalidades'>('closed');
  
  // Estados para controlar a funcionalidade de busca
  const [searchTerm, setSearchTerm] = useState('');

  // Estados para o formulário de login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Estados para o formulário de registro
  const [registerFirstName, setRegisterFirstName] = useState('');
  const [registerLastName, setRegisterLastName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');

  // Função que processa o envio da pesquisa
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
      setCurrentScreen('closed');
    }
  };

  // Função que processa o envio do login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password });
    setCurrentScreen('closed');
    // Aqui você implementaria a lógica de autenticação
  };

  // Função que processa o envio do registro
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação simples de confirmação de senha
    if (registerPassword !== registerConfirmPassword) {
      alert('As palavras-passe não coincidem!');
      return;
    }

    console.log('Registro:', { 
      firstName: registerFirstName,
      lastName: registerLastName,
      email: registerEmail,
      password: registerPassword 
    });
    setCurrentScreen('closed');
    // Aqui você implementaria a lógica de criação de conta
  };

  // Função para navegar entre telas
  const navigateToScreen = (screen: 'menu' | 'login' | 'register' | 'modalidades') => {
    setCurrentScreen(screen);
  };

  // Função para voltar ou fechar (smart navigation)
  const handleBackOrClose = () => {
    if (currentScreen === 'menu') {
      setCurrentScreen('closed');
    } else {
      setCurrentScreen('menu');
    }
  };

  return (
    <div className="w-full bg-[#FFFFFF99]">
      
      {/* MOBILE LAYOUT (0-768px) */}
      <div className="md:hidden">
        {/* Header Mobile: Altura fixa 95px, compacto */}
        <div className="flex items-center justify-between px-4 h-[95px]">
          <button
            onClick={() => setCurrentScreen('menu')}
            className="p-0"
            aria-label="Abrir menu"
          >
            <HamburgerIcon />
          </button>

          
          
          {/* Logo + texto em altura fixa compacta */}
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/logo-circle.svg"
              alt="Logo Os Guerreiros"
              width={45}
              height={50}
              className="rounded-lg object-cover"
            />
            <h1 className="text-[20px] font-bold text-center leading-none mt-1">
              Os Gverreiros <span className="text-[#C00D1E] font-bold">• Blog</span>
            </h1>
          </div>
          
          <div className="w-6"></div> {/* Spacer mínimo para centrar */}
        </div>

        {/* Sistema de Telas Mobile */}
        {currentScreen !== 'closed' && (
          <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
            
            {/* Linha vermelha decorativa no topo */}
            <div className="w-full h-[10px] bg-[#C00D1E]"></div>

            {/* TELA PRINCIPAL DO MENU */}
            {currentScreen === 'menu' && (
              <div className="p-4">
                {/* Header com botões e fechar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-2">
                    <Button 
                      onClick={() => navigateToScreen('login')}
                      className="w-[74px] wh-[35px] text-[20px] bg-transparent text-black border border-[#C00D1E] hover:bg-[#C00D1E] hover:text-white px-3 py-1"
                    >
                      Entrar
                    </Button>
                    <Button 
                      onClick={() => navigateToScreen('register')}
                      className="w-[94px] h-[35px] text-[20px] font-normal bg-[#C00D1E] text-white hover:bg-[#A00B18] px-3 py-"
                    >
                      Registar
                    </Button>
                  </div>
                  <button
                    onClick={handleBackOrClose}
                    className="text-gray-600 p-1"
                    aria-label="Fechar menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Campo de Busca */}
                <div className="mb-6">
                  <form onSubmit={handleSearch} className="relative">
                    <div className="relative border border-[#C00D1E] rounded-[3px]">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#C00D1E] w-[24px] h-[24px]" />
                      <Input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Pesquisar"
                        className="placeholder:text-[#C00D1E] pl-10 pr-4 py-3 border-0 focus:ring-0 focus-visible:ring-0"
                        autoComplete="off"
                      />
                    </div>
                  </form>
                </div>

                {/* Navegação */}
                <nav className="space-y-4">
                  <Link 
                    href="/futebol" 
                    className="block text-[20px] font-[700] text-black py-3 border-b border-gray-100"
                    onClick={() => setCurrentScreen('closed')}
                  >
                    FUTEBOL
                  </Link>
                  
                  <Link 
                    href="/sc-braga-solidario" 
                    className="block text-[20px] font-[700] text-black py-3 border-b border-gray-100"
                    onClick={() => setCurrentScreen('closed')}
                  >
                    SC BRAGA SOLIDÁRIO
                  </Link>
                  
                  <Link 
                    href="/videos" 
                    className="block text-[20px] font-[700] text-black py-3 border-b border-gray-100"
                    onClick={() => setCurrentScreen('closed')}
                  >
                    VÍDEOS
                  </Link>
                  
                  <Link 
                    href="/clube" 
                    className="block text-[20px] font-[700] text-black py-3 border-b border-gray-100"
                    onClick={() => setCurrentScreen('closed')}
                  >
                    CLUBE
                  </Link>
                  
                  <Link 
                    href="/resultados" 
                    className="block text-[20px] font-[700] text-black py-3 border-b border-gray-100"
                    onClick={() => setCurrentScreen('closed')}
                  >
                    RESULTADO
                  </Link>

                  <button 
                    onClick={() => navigateToScreen('modalidades')}
                    className="flex items-center w-full text-[20px] font-[700] text-black py-3 border-b border-gray-100"
                  >
                    <span className="flex items-center">
                      MODALIDADES
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" className="ml-2">
                        <path d="M10 17.5L15 12.5L10 7.5" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                </nav>
              </div>
            )}

            {/* TELA DE LOGIN */}
            {currentScreen === 'login' && (
              <div className="p-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <div className="w-1.5 h-8 bg-[#C00D1E] rounded-full mr-1"></div>
                    <h2 className="text-[24px] font-[800] text-black">INICIE SESSÃO</h2>
                  </div>
                  <button
                    onClick={handleBackOrClose}
                    className="text-gray-600 p-1"
                    aria-label="Voltar"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Formulário */}
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-1">
                    <label htmlFor="email-mobile" className="text-[20px] font-[600] text-black">
                      E-mail
                    </label>
                    <Input
                      id="email-mobile"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 focus:border-[#C00D1E] focus:outline-none focus:ring-0 focus-visible:ring-0 bg-transparent"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="password-mobile" className="text-[20px] font-[600] text-black">
                      Palavra-passe
                    </label>
                    <Input
                      id="password-mobile"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 focus:border-[#C00D1E] focus:outline-none focus:ring-0 focus-visible:ring-0 bg-transparent"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-[169px] h-[40px] bg-[#C00D1E] hover:bg-[#A00B18] text-white py-3 text-[16px] font-[700] "
                  >
                    INICIAR SESSÃO
                  </Button>
                </form>

                <div className="mt-6 space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="text-black before:content-['•'] before:mr-2 before:text-[#C00D1E] text-[16px] font-[600]">Não tem conta? </span>
                    <button 
                      onClick={() => navigateToScreen('register')}
                      className="text-[#C00D1E] hover:text-[#A00B18] ml-1 text-[16px] font-[700]"
                    >
                      Registe-se aqui!
                    </button>
                  </div>
                  
                  <div>
                    <Link 
                      href="/forgot-password" 
                      className="text-[#C00D1E] hover:text-[#A00B18] before:content-['•'] before:mr-2 before:text-[#C00D1E] text-[16px] font-[700]"
                      onClick={() => setCurrentScreen('closed')}
                    >
                      Esqueceu-se da palavra-passe?
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* TELA DE REGISTRO */}
            {currentScreen === 'register' && (
              <div className="p-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-8 bg-[#C00D1E] rounded-full mr-1"></div>
                    <h2 className="text-[24px] font-bold text-black">CRIAR CONTA</h2>
                  </div>
                  <button
                    onClick={handleBackOrClose}
                    className="text-gray-600 p-1"
                    aria-label="Voltar"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Formulário */}
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-1">
                    <label htmlFor="firstName-mobile" className="text-[20px] font-medium text-gray-700">
                      Primeiro nome
                    </label>
                    <Input
                      id="firstName-mobile"
                      type="text"
                      value={registerFirstName}
                      onChange={(e) => setRegisterFirstName(e.target.value)}
                      className="border-0 border-b-2 border-gray-200 rounded-none px-0 py-2 focus:border-[#C00D1E] focus:outline-none focus:ring-0 focus-visible:ring-0 bg-transparent"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="lastName-mobile" className="text-[20px] font-medium text-gray-700">
                      Último nome
                    </label>
                    <Input
                      id="lastName-mobile"
                      type="text"
                      value={registerLastName}
                      onChange={(e) => setRegisterLastName(e.target.value)}
                      className="border-0 border-b-2 border-gray-200 rounded-none px-0 py-2 focus:border-[#C00D1E] focus:outline-none focus:ring-0 focus-visible:ring-0 bg-transparent"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="registerEmail-mobile" className="text-[20px] font-medium text-gray-700">
                      E-mail
                    </label>
                    <Input
                      id="registerEmail-mobile"
                      type="email"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      className="border-0 border-b-2 border-gray-200 rounded-none px-0 py-2 focus:border-[#C00D1E] focus:outline-none focus:ring-0 focus-visible:ring-0 bg-transparent"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="registerPassword-mobile" className="text-[20px] font-medium text-gray-700">
                      Palavra-passe
                    </label>
                    <Input
                      id="registerPassword-mobile"
                      type="password"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      className="border-0 border-b-2 border-gray-200 rounded-none px-0 py-2 focus:border-[#C00D1E] focus:outline-none focus:ring-0 focus-visible:ring-0 bg-transparent"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="confirmPassword-mobile" className="text-[20px] font-medium text-gray-700">
                      Confirmar palavra-passe
                    </label>
                    <Input
                      id="confirmPassword-mobile"
                      type="password"
                      value={registerConfirmPassword}
                      onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                      className="border-0 border-b-2 border-gray-200 rounded-none px-0 py-2 focus:border-[#C00D1E] focus:outline-none focus:ring-0 focus-visible:ring-0 bg-transparent"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-[215px] h-[41px] bg-[#C00D1E] hover:bg-[#A00B18] text-[16px] text-white py-3 mt-6 font-medium"
                  >
                    CRIAR CONTA
                  </Button>
                </form>
              </div>
            )}

            {/* TELA DE MODALIDADES */}
            {currentScreen === 'modalidades' && (
              <div className="p-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-[24px] font-[700] text-black">MODALIDADES</h2>
                  <button
                    onClick={handleBackOrClose}
                    className="text-gray-600 p-1"
                    aria-label="Voltar"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Lista de Modalidades */}
                <div className="space-y-4">
                  <Link href="/atletismo" className="flex items-center text-black text-[16px] font-[600] py-3 before:content-['•'] before:mr-3 before:text-[#C00D1E]" onClick={() => setCurrentScreen('closed')}>
                    Atletismo
                  </Link>
                  <Link href="/basquetebol" className="flex items-center text-black text-[16px] font-[600] py-3 before:content-['•'] before:mr-3 before:text-[#C00D1E]" onClick={() => setCurrentScreen('closed')}>
                    Basquetebol
                  </Link>
                  <Link href="/bilhar" className="flex items-center text-black text-[16px] font-[600] py-3 before:content-['•'] before:mr-3 before:text-[#C00D1E]" onClick={() => setCurrentScreen('closed')}>
                    Bilhar
                  </Link>
                  <Link href="/boccia" className="flex items-center text-black text-[16px] font-[600] py-3 before:content-['•'] before:mr-3 before:text-[#C00D1E]" onClick={() => setCurrentScreen('closed')}>
                    Boccia
                  </Link>
                  <Link href="/futsal" className="flex items-center text-black text-[16px] font-[600] py-3 before:content-['•'] before:mr-3 before:text-[#C00D1E]" onClick={() => setCurrentScreen('closed')}>
                    Futsal
                  </Link>
                  <Link href="/kickboxing" className="flex items-center text-black text-[16px] font-[600] py-3 before:content-['•'] before:mr-3 before:text-[#C00D1E]" onClick={() => setCurrentScreen('closed')}>
                    Kickboxing | Boxe | Muat thai
                  </Link>
                  <Link href="/natacao" className="flex items-center text-black text-[16px] font-[600] py-3 before:content-['•'] before:mr-3 before:text-[#C00D1E]" onClick={() => setCurrentScreen('closed')}>
                    Natação
                  </Link>
                  <Link href="/taekwondo" className="flex items-center text-black text-[16px] font-[600] py-3 before:content-['•'] before:mr-3 before:text-[#C00D1E]" onClick={() => setCurrentScreen('closed')}>
                    Taekwondo
                  </Link>
                  <Link href="/voleibol" className="flex items-center text-black text-[16px] font-[600] py-3 before:content-['•'] before:mr-3 before:text-[#C00D1E]" onClick={() => setCurrentScreen('closed')}>
                    Voleibol
                  </Link>
                  <Link href="/karate" className="flex items-center text-black text-[16px] font-[600] py-3 before:content-['•'] before:mr-3 before:text-[#C00D1E]" onClick={() => setCurrentScreen('closed')}>
                    Karaté
                  </Link>
                  <Link href="/badminton" className="flex items-center text-black text-[16px] font-[600] py-3 before:content-['•'] before:mr-3 before:text-[#C00D1E]" onClick={() => setCurrentScreen('closed')}>
                    Badminton
                  </Link>
                  <Link href="/esports" className="flex items-center text-black text-[16px] font-[600] py-3 before:content-['•'] before:mr-3 before:text-[#C00D1E]" onClick={() => setCurrentScreen('closed')}>
                    Esports
                  </Link>
                </div>
              </div>
            )}

          </div>
        )}
      </div>

      {/* DESKTOP LAYOUT (769px+) - Mantém o original */}
      <div className="hidden md:block">
        {/* SEÇÃO 1: Logo centralizado */}
        <div className="flex items-center justify-center py-4">
          <Image
            src="/logo-circle.svg"
            alt="Logo Os Guerreiros"
            width={500}
            height={300}
            className="rounded-lg object-cover h-20 w-20"
          />
          <h1 className="text-2xl font-bold ml-3">
            Os Gverreiros <span className="text-[#C00D1E] font-bold">• Blog</span>
          </h1>
        </div>
        
        {/* Linha divisória */}
        <div className="w-full h-px bg-[#9C9C9CDB] mb-2 mt-0"></div>
        
        {/* SEÇÃO 2: Navegação */}
        <div className="flex items-center justify-center font-semibold pb-4 gap-4 lg:gap-6 text-sm lg:text-base">
          
          <Link href="/futebol" className="hover:text-[#C00D1E] transition-colors duration-200 whitespace-nowrap">
            FUTEBOL
          </Link>
          
          <Link href="/sc-braga-solidario" className="hover:text-[#C00D1E] transition-colors duration-200 whitespace-nowrap">
            SC BRAGA SOLIDÁRIO
          </Link>
          
          <Link href="/videos" className="hover:text-[#C00D1E] transition-colors duration-200 whitespace-nowrap">
            VÍDEOS
          </Link>
          
          <Link href="/clube" className="hover:text-[#C00D1E] transition-colors duration-200 whitespace-nowrap">
            CLUBE
          </Link>
          
          <Link href="/resultados" className="hover:text-[#C00D1E] transition-colors duration-200 whitespace-nowrap">
            RESULTADOS
          </Link>
          
          {/* Dropdown de Modalidades */}
          <div className="relative">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="hover:no-underline p-0 hover:text-[#C00D1E] transition-colors duration-200 whitespace-nowrap">
                  MODALIDADES
                </AccordionTrigger>
                <AccordionContent className="p-0">
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-white bg-black p-4 z-50 rounded-md shadow-lg border border-gray-700 min-w-[500px]">
                    <div className="flex gap-8">
                      <div className="flex-1 space-y-2">
                        <Link href="/atletismo" className="block cursor-pointer hover:text-[#C00D1E] transition-colors before:content-['•'] before:mr-2 before:text-[#C00D1E]">
                          Atletismo
                        </Link>
                        <Link href="/basquetebol" className="block cursor-pointer hover:text-[#C00D1E] transition-colors before:content-['•'] before:mr-2 before:text-[#C00D1E]">
                          Basquetebol
                        </Link>
                        <Link href="/bilhar" className="block cursor-pointer hover:text-[#C00D1E] transition-colors before:content-['•'] before:mr-2 before:text-[#C00D1E]">
                          Bilhar
                        </Link>
                        <Link href="/boccia" className="block cursor-pointer hover:text-[#C00D1E] transition-colors before:content-['•'] before:mr-2 before:text-[#C00D1E]">
                          Boccia
                        </Link>
                        <Link href="/futsal" className="block cursor-pointer hover:text-[#C00D1E] transition-colors before:content-['•'] before:mr-2 before:text-[#C00D1E]">
                          Futsal
                        </Link>
                        <Link href="/kickboxing" className="block cursor-pointer hover:text-[#C00D1E] transition-colors before:content-['•'] before:mr-2 before:text-[#C00D1E] whitespace-nowrap">
                          Kickboxing | Boxe | Muay Thai
                        </Link>
                      </div>
                      <div className="flex-1 space-y-2">
                        <Link href="/natacao" className="block cursor-pointer hover:text-[#C00D1E] transition-colors before:content-['•'] before:mr-2 before:text-[#C00D1E]">
                          Natação
                        </Link>
                        <Link href="/taekwondo" className="block cursor-pointer hover:text-[#C00D1E] transition-colors before:content-['•'] before:mr-2 before:text-[#C00D1E]">
                          Taekwondo
                        </Link>
                        <Link href="/voleibol" className="block cursor-pointer hover:text-[#C00D1E] transition-colors before:content-['•'] before:mr-2 before:text-[#C00D1E]">
                          Voleibol
                        </Link>
                        <Link href="/karate" className="block cursor-pointer hover:text-[#C00D1E] transition-colors before:content-['•'] before:mr-2 before:text-[#C00D1E]">
                          Karaté
                        </Link>
                        <Link href="/badminton" className="block cursor-pointer hover:text-[#C00D1E] transition-colors before:content-['•'] before:mr-2 before:text-[#C00D1E]">
                          Badminton
                        </Link>
                        <Link href="/esports" className="block cursor-pointer hover:text-[#C00D1E] transition-colors before:content-['•'] before:mr-2 before:text-[#C00D1E]">
                          Esports
                        </Link>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Sistema de Busca com Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <button
                className="p-2 text-gray-600 hover:text-[#C00D1E] hover:bg-gray-100 rounded-md transition-colors duration-200"
                aria-label="Abrir busca"
              >
                <Search className="w-5 h-5" />
              </button>
            </DialogTrigger>
            
            <DialogContent className="!max-w-none !w-[calc(100vw-8px)] !top-1 !left-1 !transform-none !translate-x-0 !translate-y-0 h-auto p-8 bg-white border-0 [&>button]:hidden">
              <div className="relative w-full h-full px-24 py-8 min-h-[400px]">
                <DialogClose asChild>
                  <button className="absolute top-8 right-24 text-gray-400 hover:text-gray-600 transition-colors z-10">
                    <X className="w-5 h-5" />
                  </button>
                </DialogClose>

                <div className="w-full">
                  <div className="mb-8 relative">
                    <form onSubmit={handleSearch} className="space-y-6">
                      <div className="space-y-1 relative">
                        <Input
                          type="text"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          placeholder="Pesquisar"
                          className="border-0 rounded-none px-0 py-3 focus:outline-none focus:ring-0 focus-visible:ring-0 bg-transparent text-lg w-full max-w-md"
                          autoFocus
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200 transform translate-x-0" 
                             style={{ width: 'calc(100vw - 16.5rem)' }}>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="space-y-3 max-w-md">
                    <button 
                      onClick={() => setSearchTerm('Futebol')}
                      className="block w-full text-left text-gray-700 hover:text-[#C00D1E] transition-colors duration-200 py-2"
                    >
                      Futebol
                    </button>
                    <button 
                      onClick={() => setSearchTerm('Basquetebol')}
                      className="block w-full text-left text-gray-700 hover:text-[#C00D1E] transition-colors duration-200 py-2"
                    >
                      Basquetebol
                    </button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Botão Entrar */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-xs lg:text-sm bg-transparent text-black border border-[#C00D1E] hover:bg-[#C00D1E] hover:text-white px-2 lg:px-4 whitespace-nowrap">
                Entrar
              </Button>
            </DialogTrigger>
            
            <DialogContent className="!max-w-none !w-[calc(100vw-8px)] !top-1 !left-1 !transform-none !translate-x-0 !translate-y-0 h-auto p-8 bg-white border-0 [&>button]:hidden">
              <div className="relative w-full h-full px-24 py-8 min-h-[400px]">
                <DialogClose asChild>
                  <button className="absolute top-8 right-24 text-gray-400 hover:text-gray-600 transition-colors z-10">
                    <X className="w-5 h-5" />
                  </button>
                </DialogClose>

                <div className="w-full max-w-md">
                  <DialogHeader className="mb-8">
                    <DialogTitle className="flex items-center text-lg font-bold text-black">
                      <div className="w-1 h-6 bg-[#C00D1E] rounded-full mr-3"></div>
                      INICIE SESSÃO
                    </DialogTitle>
                  </DialogHeader>

                  <div className="space-y-6">
                    <form onSubmit={handleLogin} className="space-y-6">
                      <div className="space-y-1">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          E-mail
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 focus:border-[#C00D1E] focus:outline-none focus:ring-0 focus-visible:ring-0 bg-transparent"
                          required
                        />
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">
                          Palavra-passe
                        </label>
                        <Input
                          id="password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 focus:border-[#C00D1E] focus:outline-none focus:ring-0 focus-visible:ring-0 bg-transparent"
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-[#C00D1E] hover:bg-[#A00B18] text-white py-3 mt-8 font-medium"
                      >
                        INICIAR SESSÃO
                      </Button>
                    </form>

                    <div className="mt-6 space-y-2 text-sm">
                      <div className="flex items-center">
                        <span className="text-gray-600 before:content-['•'] before:mr-2 before:text-[#C00D1E]">Não tem conta? </span>
                        <Link 
                          href="/register" 
                          className="text-[#C00D1E] hover:text-[#A00B18] ml-1 font-medium"
                        >
                          Registe-se aqui!
                        </Link>
                      </div>
                      
                      <div>
                        <Link 
                          href="/forgot-password" 
                          className="text-[#C00D1E] hover:text-[#A00B18] font-medium before:content-['•'] before:mr-2 before:text-[#C00D1E]"
                        >
                          Esqueceu-se da palavra-passe?
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          {/* Botão Registar */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-[#C00D1E] hover:bg-[#A00B18] text-white transition-colors duration-200 text-xs lg:text-sm px-2 lg:px-4 whitespace-nowrap">
                Registar
              </Button>
            </DialogTrigger>
            
            <DialogContent className="!max-w-none !w-[calc(100vw-8px)] !top-1 !left-1 !transform-none !translate-x-0 !translate-y-0 h-auto p-8 bg-white border-0 [&>button]:hidden">
              <div className="relative w-full h-full px-24 py-8 min-h-[400px]">
                <DialogClose asChild>
                  <button className="absolute top-8 right-24 text-gray-400 hover:text-gray-600 transition-colors z-10">
                    <X className="w-5 h-5" />
                  </button>
                </DialogClose>

                <div className="w-full max-w-md">
                  <DialogHeader className="mb-8">
                    <DialogTitle className="flex items-center text-lg font-bold text-black">
                      <div className="w-1 h-6 bg-[#C00D1E] rounded-full mr-3"></div>
                      CRIAR CONTA
                    </DialogTitle>
                  </DialogHeader>

                  <div className="space-y-6">
                    <form onSubmit={handleRegister} className="space-y-6">
                      <div className="space-y-1">
                        <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                          Primeiro nome
                        </label>
                        <Input
                          id="firstName"
                          type="text"
                          value={registerFirstName}
                          onChange={(e) => setRegisterFirstName(e.target.value)}
                          className="border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 focus:border-[#C00D1E] focus:outline-none focus:ring-0 focus-visible:ring-0 bg-transparent"
                          required
                        />
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                          Último nome
                        </label>
                        <Input
                          id="lastName"
                          type="text"
                          value={registerLastName}
                          onChange={(e) => setRegisterLastName(e.target.value)}
                          className="border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 focus:border-[#C00D1E] focus:outline-none focus:ring-0 focus-visible:ring-0 bg-transparent"
                          required
                        />
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="registerEmail" className="text-sm font-medium text-gray-700">
                          E-mail
                        </label>
                        <Input
                          id="registerEmail"
                          type="email"
                          value={registerEmail}
                          onChange={(e) => setRegisterEmail(e.target.value)}
                          className="border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 focus:border-[#C00D1E] focus:outline-none focus:ring-0 focus-visible:ring-0 bg-transparent"
                          required
                        />
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="registerPassword" className="text-sm font-medium text-gray-700">
                          Palavra-passe
                        </label>
                        <Input
                          id="registerPassword"
                          type="password"
                          value={registerPassword}
                          onChange={(e) => setRegisterPassword(e.target.value)}
                          className="border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 focus:border-[#C00D1E] focus:outline-none focus:ring-0 focus-visible:ring-0 bg-transparent"
                          required
                        />
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                          Confirmar palavra-passe
                        </label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          value={registerConfirmPassword}
                          onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                          className="border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 focus:border-[#C00D1E] focus:outline-none focus:ring-0 focus-visible:ring-0 bg-transparent"
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-[#C00D1E] hover:bg-[#A00B18] text-white py-3 mt-8 font-medium"
                      >
                        CRIAR CONTA
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

        </div>
      </div>
    </div>
  );
}