import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Todos os Serviços
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-1 gap-y-6 justify-items-center">
        <ServiceCard
          title="Instaçação"
          description="Instalação segura e certificada de ar-condicionado split e janela."
        />
        <ServiceCard
          title="Manutenção Preventiva"
          description="Evite problemas futuros com manutenção periódica e limpeza dos equipamentos."
        />
        <ServiceCard
          title="Manutenção Corretiva"
          description="Reparos técnicos em sistemas com falhas de funcionamento."
        />
        <ServiceCard
          title="Limpeza Técnica"
          description="Higienização profissional para garantir ar puro e eficiência energética."
        />
      </div>
    </section>
  );
};

export default Services;
