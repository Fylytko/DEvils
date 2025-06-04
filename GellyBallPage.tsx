import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import PriceCard from '../components/PriceCard';

const GellyBallPage = () => {
  const priceItemFeatures = [
    'Gel Blaster',
    'Ochranné okuliare',
    'Neobmedzené množstvo munície',
    'Rôzne herné scenáre',
  ];

  return (
    <div className="pt-24 pb-16 bg-devil-black text-devil-light">
      <div className="relative overflow-hidden">
        <div className="bg-cover bg-center h-96 relative" style={{ backgroundImage: "url('https://images.pexels.com/photos/163452/war-desert-guns-gunshow-163452.jpeg')" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-devil-black/70 via-devil-black/70 to-devil-black"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display text-5xl md:text-6xl text-devil-red mb-4">Gelly Ball</h1>
              <p className="text-xl text-devil-light max-w-xl mx-auto">
                Zábavná a bezbolestná alternatíva k paintballu vhodná aj pre deti
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <h2 className="font-display text-3xl text-devil-red mb-6">Cenník</h2>
            <PriceCard 
              price="15€/osoba" 
              title="Základný balík" 
              features={priceItemFeatures} 
            />
            
            <div className="mt-8 bg-devil-dark p-6 rounded-lg">
              <div className="flex items-start">
                <Info size={24} className="text-devil-orange mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl text-devil-light mb-2">Dôležité informácie</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Hracia doba: max. 2 hodiny</li>
                    <li>Minimálny počet: 6 hráčov</li>
                    <li>Vek: od 8 rokov (deti do 12 rokov pod dohľadom dospelej osoby)</li>
                    <li>Bez obmedzenia munície - strelivo je zahrnuté v cene</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="font-display text-3xl text-devil-red mb-6">Čo je Gelly Ball?</h2>
            <div className="bg-devil-dark p-6 rounded-lg">
              <p className="text-devil-light mb-4">
                Gelly Ball je nová, bezpečná alternatíva k paintballu a airsoftu. Namiesto farbiacich guličiek alebo plastových BB sa používajú mäkké vodné gélové guličky, ktoré pri zásahu nebolestia a neznečisťujú oblečenie.
              </p>
              <p className="text-devil-light mb-4">
                Gélové guličky sú vyrobené z biologicky rozložiteľného materiálu, ktorý je šetrný k životnému prostrediu. Po zásahu sa rýchlo vyparia a nezanechávajú žiadne stopy.
              </p>
              <p className="text-devil-light">
                Táto aktivita je ideálna pre deti, rodiny, alebo ľudí, ktorí chcú zažiť zábavu podobnú paintballu, ale bez bolesti a špinavého oblečenia.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="font-display text-2xl text-devil-red mb-4">Galéria</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://i0.wp.com/gellyball.com/wp-content/uploads/2022/05/G2-Announcement-min-min.png?w=500&ssl=1"
                    alt="Gelly Ball 1" 
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/730899/pexels-photo-730899.jpeg" 
                    alt="Gelly Ball 2" 
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="font-display text-3xl text-devil-red mb-6 text-center">Pre koho je Gelly Ball vhodný?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-devil-dark p-6 rounded-lg text-center">
              <h3 className="font-display text-xl text-devil-orange mb-3">Deti a mládež</h3>
              <p className="text-devil-light">
                Bezpečná aktivita, ktorá deťom poskytne zábavu a adrenalín bez rizika zranenia.
              </p>
            </div>
            <div className="bg-devil-dark p-6 rounded-lg text-center">
              <h3 className="font-display text-xl text-devil-orange mb-3">Rodiny</h3>
              <p className="text-devil-light">
                Ideálna aktivita, ktorú si môžu užiť rodičia spolu s deťmi.
              </p>
            </div>
            <div className="bg-devil-dark p-6 rounded-lg text-center">
              <h3 className="font-display text-xl text-devil-orange mb-3">Firmy</h3>
              <p className="text-devil-light">
                Perfektná teambuilding aktivita bez rizika zranenia alebo zašpinenia oblečenia.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="font-display text-3xl text-devil-red mb-6 text-center">Rezervujte si termín</h2>
          <div className="max-w-xl mx-auto bg-devil-dark p-8 rounded-lg shadow-lg">
            <p className="text-center mb-6">
              Vyplňte jednoduchý formulár a náš tím vás bude kontaktovať ohľadom dostupných termínov.
            </p>
            <a href="/objednat" className="block w-full py-3 bg-devil-red hover:bg-devil-orange text-white font-medium rounded-md transition-colors duration-300 text-center">
              Objednať teraz
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GellyBallPage;