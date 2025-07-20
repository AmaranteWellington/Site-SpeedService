import React from 'react';

const Contact = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Fale Conosco
      </h2>
      <form className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-8 space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Nome</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-blue-500"
            placeholder="Digite seu nome"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            {' '}
            E-mail
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite seu e-mail"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Assunto
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Assunto da mensagem"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Mensagem
          </label>
          <textarea
            className="w-full border border-gray-300 rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite sua mensagem..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Enviar Mensagem
        </button>
      </form>
    </section>
  );
};

export default Contact;
