import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">SpeedService</h1>
        <nav className="space-x-4">
          <Link to="/" className="houver:underline">
            Início
          </Link>
          <Link to="/servicos" className="houver:underline">
            Serviços
          </Link>
          <Link to="/contato" className="houver:underline">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
