import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';

const OrderPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    participants: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
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
          <h1 className="font-display text-4xl md:text-5xl text-devil-red mb-4">Objednávka</h1>
          <p className="text-devil-light max-w-2xl mx-auto">
            Vyplňte formulár nižšie pre rezerváciu vami vybranej aktivity. Budeme vás kontaktovať ohľadom potvrdenia termínu a ďalších detailov.
          </p>
          <div className="w-24 h-1 bg-devil-orange mx-auto mt-4"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-devil-dark p-8 rounded-lg shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-devil-red rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={32} className="text-white" />
              </div>
              <h2 className="font-display text-3xl text-devil-red mb-4">Ďakujeme za vašu objednávku!</h2>
              <p className="text-devil-light mb-6">
                Vaša žiadosť bola úspešne odoslaná. Náš tím vás bude kontaktovať v najbližšom možnom čase ohľadom potvrdenia rezervácie a ďalších detailov.
              </p>
              <a 
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-devil-red hover:bg-devil-orange text-white font-medium rounded-md transition-colors duration-300 shadow-devil"
              >
                Späť na domovskú stránku
              </a>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-devil-dark p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-devil-light mb-2">Meno a priezvisko *</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-devil-black text-devil-light border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-devil-red"
                        placeholder="Vaše meno"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-devil-light mb-2">Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-devil-black text-devil-light border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-devil-red"
                        placeholder="Váš email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-devil-light mb-2">Telefónne číslo *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-devil-black text-devil-light border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-devil-red"
                        placeholder="Váš telefón"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-devil-light mb-2">Vyberte službu *</label>
                      <select 
                        id="service" 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full bg-devil-black text-devil-light border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-devil-red"
                      >
                        <option value="">-- Vyberte --</option>
                        <option value="paintball">Paintball</option>
                        <option value="airsoft">Airsoft</option>
                        <option value="gellyball">Gelly Ball</option>
                        <option value="family">Rodinná oslava</option>
                        <option value="camp">Detský tábor</option>
                        <option value="other">Iné</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-devil-light mb-2">Preferovaný dátum *</label>
                      <input 
                        type="date" 
                        id="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full bg-devil-black text-devil-light border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-devil-red"
                      />
                    </div>
                    <div>
                      <label htmlFor="participants" className="block text-devil-light mb-2">Počet účastníkov *</label>
                      <input 
                        type="number" 
                        id="participants" 
                        name="participants"
                        value={formData.participants}
                        onChange={handleChange}
                        required
                        min="1"
                        className="w-full bg-devil-black text-devil-light border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-devil-red"
                        placeholder="Počet osôb"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-devil-light mb-2">Ďalšie informácie</label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-devil-black text-devil-light border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-devil-red"
                      placeholder="Napíšte nám vaše špeciálne požiadavky alebo otázky"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="terms" 
                      required
                      className="mt-1 mr-3"
                    />
                    <label htmlFor="terms" className="text-gray-300 text-sm">
                      Súhlasím so{" "}
                      <a href="/podmienky" className="text-devil-orange hover:underline">
                        spracovaním osobných údajov
                      </a>{" "}
                      a{" "}
                      <a href="/ochrana-osobnych-udajov" className="text-devil-orange hover:underline">
                        obchodnými podmienkami
                      </a>. *
                    </label>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-3 bg-devil-red hover:bg-devil-orange text-white font-medium rounded-md transition-colors duration-300 shadow-devil"
                  >
                    Odoslať objednávku
                  </button>
                </form>
              </div>
              
              <div className="mt-12">
                <h2 className="font-display text-3xl text-devil-red mb-6 text-center">Kontaktné informácie</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="bg-devil-dark p-6 rounded-lg">
                    <h3 className="font-display text-xl text-devil-orange mb-3">Telefón</h3>
                    <a href="tel:+421905743454" className="text-devil-light hover:text-devil-orange transition-colors">
                      +421 905 743 454
                    </a>
                  </div>
                  <div className="bg-devil-dark p-6 rounded-lg">
                    <h3 className="font-display text-xl text-devil-orange mb-3">Email</h3>
                    <a href="mailto:info@paintballdevils.sk" className="text-devil-light hover:text-devil-orange transition-colors">
                      info@paintballdevils.sk
                    </a>
                  </div>
                  <div className="bg-devil-dark p-6 rounded-lg">
                    <h3 className="font-display text-xl text-devil-orange mb-3">Adresa</h3>
                    <a 
                      href="https://maps.google.com/?q=48.063634857980865,17.24888823193024" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-devil-light hover:text-devil-orange transition-colors"
                    >
                      Zobraziť na mape
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderPage;