import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { LOGO_URL } from '../assets/logo';

const Footer = () => {
  return (
    <footer className="bg-devil-dark text-devil-light pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src="https://i.imgur.com/oorVWXh.png" alt="DEVILS Logo" className="h-16 w-auto" />
            </Link>
            <p className="text-sm">
              Profesionálny paintballový klub a organizátor tímových aktivít
            </p>
          </div>
          
          <div>
            <h3 className="font-display text-devil-red text-xl mb-4">Kontaktujte nás</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-devil-orange" />
                <a href="tel:+421905743454" className="hover:text-devil-orange transition-colors">
                  +421 905 743 454
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-devil-orange" />
                <a href="mailto:info@paintballdevils.sk" className="hover:text-devil-orange transition-colors">
                  info@paintballdevils.sk
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-devil-orange flex-shrink-0 mt-1" />
                <a 
                  href="https://maps.app.goo.gl/7EBunEh24s5SwUMU7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-devil-orange transition-colors"
                >
                  Kalinkovo Paintball Devils
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-devil-red text-xl mb-4">Odkazy</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/o-nas" className="hover:text-devil-orange transition-colors">
                  O nás
                </Link>
              </li>
              <li>
                <Link to="/vysledky" className="hover:text-devil-orange transition-colors">
                  Výsledky
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="hover:text-devil-orange transition-colors">
                  Galéria
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="hover:text-devil-orange transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-devil-red text-xl mb-4">Sledujte nás</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/196i3gJBWY/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-devil-dark flex items-center justify-center border border-devil-red hover:bg-devil-red transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.instagram.com/paintballkalinkovo?igsh=YnRhMXYyYTNqMjBo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-devil-dark flex items-center justify-center border border-devil-red hover:bg-devil-red transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
            <div className="mt-6">
              <Link to="/podmienky" className="text-sm hover:text-devil-orange transition-colors mr-4">
                Obchodné podmienky
              </Link>
              <Link to="/ochrana-osobnych-udajov" className="text-sm hover:text-devil-orange transition-colors">
                Ochrana osobných údajov
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} DEVILS. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;