import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">SpeedService</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-yellow-400 transition">
            Início
          </Link>
          <Link to="/servicos" className="hover:text-yellow-400 transition">
            Serviços
          </Link>
          <Link to="/contato" className="hover:text-yellow-400 transition">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
