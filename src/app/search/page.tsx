'use client'

import { useSearchParams } from 'next/navigation';
import NavBar from '@/components/AppHeader';
import { Suspense } from 'react';

function SearchContent() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('q');
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <NavBar />
      
      {/* Conteúdo da busca */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Título da busca */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Resultados da busca
          </h1>
          {searchTerm && (
            <p className="text-lg text-gray-600">
              Você pesquisou por: <span className="font-semibold text-[#C00D1E]">&quot;{searchTerm}&quot;</span>
            </p>
          )}
        </div>

        {/* Área de resultados */}
        <div className="space-y-6">
          
          {/* Mensagem temporária */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">🚧</div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                  Funcionalidade em desenvolvimento
                </h3>
                <p className="text-yellow-700">
                  A busca está sendo implementada! Em breve você poderá pesquisar por:
                </p>
                <ul className="mt-3 text-yellow-700 space-y-1">
                  <li className="flex items-center space-x-2">
                    <span className="text-[#C00D1E]">•</span>
                    <span>Notícias e artigos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#C00D1E]">•</span>
                    <span>Resultados de jogos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#C00D1E]">•</span>
                    <span>Informações sobre modalidades</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#C00D1E]">•</span>
                    <span>Conteúdo sobre o clube</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Preview de como vai ficar */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Preview: Como vai ficar quando estiver pronto
            </h3>
            
            {/* Exemplo de resultado de busca */}
            <div className="space-y-4">
              <div className="border-l-4 border-[#C00D1E] pl-4 py-2">
                <h4 className="font-semibold text-gray-900 hover:text-[#C00D1E] cursor-pointer">
                  Carlos Carvalhal: &quot;O resultado ajusta-se ao que se passou&quot;
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Declarações do treinador após a partida...
                </p>
                <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                  <span>FUTEBOL</span>
                  <span>•</span>
                  <span>Há 2 horas</span>
                </div>
              </div>
              
              <div className="border-l-4 border-[#C00D1E] pl-4 py-2">
                <h4 className="font-semibold text-gray-900 hover:text-[#C00D1E] cursor-pointer">
                  Missão cumprida frente ao Nacional
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  SC Braga vence por 2-0 e segue em frente na competição...
                </p>
                <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                  <span>FUTEBOL</span>
                  <span>•</span>
                  <span>Ontem</span>
                </div>
              </div>
              
              <div className="border-l-4 border-[#C00D1E] pl-4 py-2">
                <h4 className="font-semibold text-gray-900 hover:text-[#C00D1E] cursor-pointer">
                  Guerreiros da natação no pódio em Braga
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Excelentes resultados na competição regional...
                </p>
                <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                  <span>NATAÇÃO</span>
                  <span>•</span>
                  <span>3 dias atrás</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sugestões de navegação */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Enquanto isso, explore:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="/futebol" className="block p-4 border border-gray-200 rounded-lg hover:border-[#C00D1E] hover:bg-red-50 transition-colors">
                <h4 className="font-semibold text-gray-900">Futebol</h4>
                <p className="text-sm text-gray-600 mt-1">Últimas notícias e resultados</p>
              </a>
              
              <a href="/resultados" className="block p-4 border border-gray-200 rounded-lg hover:border-[#C00D1E] hover:bg-red-50 transition-colors">
                <h4 className="font-semibold text-gray-900">Resultados</h4>
                <p className="text-sm text-gray-600 mt-1">Todos os jogos e classificações</p>
              </a>
              
              <a href="/modalidades" className="block p-4 border border-gray-200 rounded-lg hover:border-[#C00D1E] hover:bg-red-50 transition-colors">
                <h4 className="font-semibold text-gray-900">Modalidades</h4>
                <p className="text-sm text-gray-600 mt-1">Explore todas as modalidades</p>
              </a>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-gray-600">Carregando...</div>
    </div>}>
      <SearchContent />
    </Suspense>
  );
}