import ServiceCard from '../components/ServiceCard';

const Home = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Nossos Serviços
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        <ServiceCard
          title="Instalação"
          description="Serviço de instalação de ar-condicionado com técnicos certificados."
        />
        <ServiceCard
          title="Manutenção"
          description="Reparo e manutenção corretiva em diversos modelos de ar."
        />
      </div>
    </section>
  );
};

export default Home;
