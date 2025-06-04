import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOGO_URL } from '../assets/logo';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Domov', href: '/' },
  { 
    label: 'Športový klub', 
    href: '/sportovy-klub',
    children: [
      { label: 'O nás', href: '/o-nas' },
      { label: 'Výsledky', href: '/vysledky' },
      { label: 'Galéria', href: '/galeria' },
    ]
  },
  {
    label: 'Team building',
    href: '/team-building',
    children: [
      { label: 'Paintball', href: '/paintball' },
      { label: 'Airsoft', href: '/airsoft' },
      { label: 'Gelly ball', href: '/gelly-ball' },
      { label: 'Rodinné oslavy', href: '/rodinne-oslavy' },
      { label: 'Detský tábor', href: '/detsky-tabor' },
    ]
  },
  { label: 'O nás', href: '/o-nas' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Sponzori', href: '/sponzori' },
  { label: 'Objednať teraz', href: '/objednat', highlight: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-devil-black shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="https://i.imgur.com/oorVWXh.png" alt="DEVILS Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <div className="flex items-center cursor-pointer">
                    <span className={`font-body font-medium text-${item.highlight ? 'devil-orange' : 'devil-light'} hover:text-devil-red transition-colors`}>
                      {item.label}
                    </span>
                    <ChevronDown size={16} className="ml-1" />
                  </div>
                ) : (
                  <Link 
                    to={item.href}
                    className={`
                      font-body font-medium 
                      ${item.highlight 
                        ? 'bg-devil-red hover:bg-devil-orange text-white px-4 py-2 rounded-md transition-colors' 
                        : 'text-devil-light hover:text-devil-red transition-colors'
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                )}

                {item.children && (
                  <div className="absolute left-0 mt-2 w-48 bg-devil-dark rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-devil-light hover:bg-devil-red hover:text-white transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-devil-light focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-devil-dark overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="w-full flex justify-between items-center py-2 text-devil-light hover:text-devil-red transition-colors"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                to={child.href}
                                className="block py-2 text-sm text-devil-light hover:text-devil-red transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block py-2 ${
                        item.highlight
                          ? 'text-devil-orange font-semibold'
                          : 'text-devil-light'
                      } hover:text-devil-red transition-colors`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;