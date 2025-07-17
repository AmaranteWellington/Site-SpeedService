import React from 'react';

const App = () => {
  return (
    <div className="font-sans">
      {/*Cabeçalho*/}
      <header className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">SpeedService</h1>
          <nav className="space-x-4">
            <a href="#" className="hover:bg-yellow-300">
              Home
            </a>
            <a href="#" className="hover:bg-yellow-300">
              Produtos
            </a>
            <a href="#" className="hover:bg-yellow-300">
              Manutenção
            </a>
            <a href="#" className="hover:bg-yellow-300">
              Contato
            </a>
          </nav>
        </div>
      </header>
      {/*Banner */}
      <section className="bg-gray-100 text-center py-20 px4">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">
          Seu ar condicionado funcionando como novo
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Venda e manutenção com técnicos de confiança, agende sua visita agora
          mesmo!
        </p>
        <button className="bg-blue-600 text-white px6 py-3 rounded h-full hover:bg-blue-700 transit">
          {' '}
          Solicitar Técnico
        </button>
      </section>
    </div>
  );
};

export default App;
