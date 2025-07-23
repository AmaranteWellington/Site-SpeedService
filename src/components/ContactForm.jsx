import React from 'react';

const ContactForm = () => {
  return (
    <form className="max-w-xl mx-auto bg-white p6 rounded-lg shadow-md space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          {' '}
          Nome
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Digite seu nome"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Mensagem
        </label>
        <textarea
          id="message"
          rows="4"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Escreva a sua mensagem"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-700 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-800 transition"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
