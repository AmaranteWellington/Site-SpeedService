import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Fale Conosco
      </h2>
      <ContactForm />
    </section>
  );
};

export default Contact;
