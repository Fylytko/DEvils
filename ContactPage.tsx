import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 pb-16 bg-devil-black text-devil-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl text-devil-red mb-4">Kontaktujte nás</h1>
          <p className="text-devil-light max-w-2xl mx-auto">
            Máte otázky ohľadom našej ponuky alebo chcete rezerváciu? Neváhajte nás kontaktovať.
          </p>
          <div className="w-24 h-1 bg-devil-orange mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-devil-dark p-8 rounded-lg shadow-lg">
              <h2 className="font-display text-3xl text-devil-orange mb-6">Kontaktné informácie</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone size={24} className="text-devil-red mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Telefón</h3>
                    <a href="tel:+421905743454" className="text-devil-light hover:text-devil-orange transition-colors">
                      +421 905 743 454
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-devil-red mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Email</h3>
                    <a href="mailto:info@paintballdevils.sk" className="text-devil-light hover:text-devil-orange transition-colors">
                      info@paintballdevils.sk
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin size={24} className="text-devil-red mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Adresa</h3>
                    <a 
                      href="https://maps.app.goo.gl/7EBunEh24s5SwUMU7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-devil-light hover:text-devil-orange transition-colors"
                    >
                      Kalinkovo Paintball Devils
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-medium mb-4">Otváracie hodiny</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Pondelok - Piatok</span>
                    <span>9:00 - 20:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sobota - Nedeľa</span>
                    <span>9:00 - 20:00</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 rounded-lg overflow-hidden h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.830916104893!2d17.246699576593905!3d48.063631071236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDAzJzQ5LjEiTiAxN8KwMTQnNTYuMCJF!5e0!3m2!1ssk!2ssk!4v1627908812345!5m2!1ssk!2ssk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="DEVILS lokácia"
              ></iframe>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-devil-dark p-8 rounded-lg shadow-lg">
              <h2 className="font-display text-3xl text-devil-orange mb-6">Napíšte nám</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-devil-light mb-2">Meno a priezvisko</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-devil-black text-devil-light border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-devil-red"
                      placeholder="Vaše meno"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-devil-light mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-devil-black text-devil-light border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-devil-red"
                      placeholder="Váš email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-devil-light mb-2">Predmet</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full bg-devil-black text-devil-light border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-devil-red"
                    placeholder="Predmet správy"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-devil-light mb-2">Správa</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-devil-black text-devil-light border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-devil-red"
                    placeholder="Vaša správa"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 bg-devil-red hover:bg-devil-orange text-white font-medium rounded-md transition-colors duration-300 shadow-devil"
                >
                  <Send size={18} className="mr-2" />
                  Odoslať správu
                </button>

                {isSubmitted && (
                  <div className="mt-4 p-3 bg-green-600 text-white rounded-md text-center">
                    Správa bola úspešne odoslaná.
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;