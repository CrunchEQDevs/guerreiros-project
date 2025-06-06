export default function Results() {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Título da seção */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Vive a emoção do SC Braga em primeira mão!
          </h2>
          <p className="text-gray-600">
            Acompanhe todos os resultados e próximos jogos do SC Braga
          </p>
        </div>

        {/* Container dos resultados - Em desenvolvimento */}
        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6">
          <div className="text-center">
            <div className="mb-2">
              <svg className="mx-auto h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h3 className="text-base font-semibold text-gray-900 mb-1">
              Resultados em Desenvolvimento
            </h3>
            
            <p className="text-sm text-gray-600 mb-3 max-w-md mx-auto">
              Esta funcionalidade será implementada em breve! Aqui você poderá acompanhar todos os resultados dos jogos do SC Braga em tempo real.
            </p>
            
            {/* Preview do que vai ter */}
            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 max-w-2xl mx-auto">
              <p className="text-xs text-gray-500 mb-2">Preview do que está por vir:</p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-red-600 rounded"></div>
                  <span className="font-medium">SC Braga</span>
                </div>
                <div className="text-gray-400">vs</div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Adversário</span>
                  <div className="w-6 h-6 bg-gray-300 rounded"></div>
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Data • Hora • Competição
              </div>
            </div>
            
            <div className="mt-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                🚧 Em breve
              </span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}