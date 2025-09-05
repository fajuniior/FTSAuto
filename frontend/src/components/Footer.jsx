import { Link } from 'react-router-dom';
import { Car, Phone, Mail, MapPin, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                FTSAuto
              </span>
            </Link>
            <p className="text-gray-300 text-sm">
              Excelência em carros de luxo. Mais de uma década oferecendo os melhores veículos premium do mercado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/carros" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Nossos Carros
                </Link>
              </li>
              <li>
                <Link to="/lojas" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Nossas Lojas
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Serviços</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Test Drive Agendado</li>
              <li>Avaliação de Veículos</li>
              <li>Financiamento</li>
              <li>Seguro Automotivo</li>
              <li>Manutenção Especializada</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-300 text-sm">(11) 3000-1000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-300 text-sm">contato@ftsauto.com.br</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-yellow-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Av. Paulista, 1000<br />
                  Bela Vista, São Paulo - SP
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 FTSAuto. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-xs">
                Desenvolvido por: Fábio Pereira, Sebastian Iriarte, Matheus Tonsa, Kauã Veloso, Arthur Albertini
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

