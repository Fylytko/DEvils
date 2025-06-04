import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import PriceCard from '../components/PriceCard';

const AirsoftPage = () => {
  const priceItemFeatures = [
    'AEG Replika zbrane',
    'Ochranná maska',
    'Taktická vesta',
    '200 ks BB guličiek',
  ];

  return (
    <div className="pt-24 pb-16 bg-devil-black text-devil-light">
      <div className="relative overflow-hidden">
        <div className="bg-cover bg-center h-96 relative" style={{ backgroundImage: "url('https://scontent.fbts7-1.fna.fbcdn.net/v/t39.30808-6/466610418_28298293119757854_4807473034435106567_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=6Y4K-dAG50wQ7kNvwGaRCFm&_nc_oc=AdmZKYpNQq96IDqGNitizke8MbctH-qkw5t2C4IfySaxiAsi7nKKRNa5bBjZEoVdmBw&_nc_zt=23&_nc_ht=scontent.fbts7-1.fna&_nc_gid=X18boZc8-bZfA_Epy2Cjgw&oh=00_AfJDQi93A-Jkkff7reT1QqPQSfvrom8w4wUNiDUZx5K4NQ&oe=683F1B99')" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-devil-black/70 via-devil-black/70 to-devil-black"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display text-5xl md:text-6xl text-devil-red mb-4">Airsoft</h1>
              <p className="text-xl text-devil-light max-w-xl mx-auto">
                Realistická taktická hra pre milovníkov vojenskej stratégie
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
              price="25€/osoba" 
              title="Základný balík" 
              features={priceItemFeatures} 
            />
            
            <div className="mt-8 bg-devil-dark p-6 rounded-lg">
              <div className="flex items-start">
                <Info size={24} className="text-devil-orange mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl text-devil-light mb-2">Dôležité informácie</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Strelivo: 500 ks = 5 €</li>
                    <li>Hracia doba: max. 3 hodiny</li>
                    <li>Minimálny počet: 8 hráčov</li>
                    <li>Vek: od 16 rokov, mladší len so súhlasom rodičov</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="font-display text-3xl text-devil-red mb-6">Galéria</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://scontent.fbts7-1.fna.fbcdn.net/v/t39.30808-6/466347325_28281948034725696_5143666016043346092_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=CygLm1ShyzgQ7kNvwEfQXiA&_nc_oc=AdmN8dPIdRj9qPIFp6XQbY5E-or0tSiT7DvTeExn7qk2yFU4wNrR9jDUHq1mPP7HA5c&_nc_zt=23&_nc_ht=scontent.fbts7-1.fna&_nc_gid=1NJyPBK0agWUkz2h7RTvMg&oh=00_AfL9AhKPe1iU6mOJXtCHzD0J1mIU2rLSnu8iyhcbYFYl_g&oe=683F28EE" 
                  alt="Airsoft 1" 
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://scontent.fbts7-1.fna.fbcdn.net/v/t1.6435-9/59799450_3120181564662357_908425019493711872_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=liUSF-waHP8Q7kNvwHIAWNt&_nc_oc=AdnPDTycD1IvoR6UZXOw7qPuX8md7YC-U0YmIqlRbIHdY-D-bvidhKrX_cJEjGvbJio&_nc_zt=23&_nc_ht=scontent.fbts7-1.fna&_nc_gid=OYeHDHFgkof939gW92tJ5w&oh=00_AfLTSaRV-5IhR41f55bcfE5BH_yAEGPGkK4mo8fb-cc8Lw&oe=6860B98E" 
                  alt="Airsoft 2" 
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://scontent.fbts7-1.fna.fbcdn.net/v/t1.6435-9/35974488_2422763524404168_5018937218320826368_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=3QdMoxLLMK0Q7kNvwF9kvUn&_nc_oc=AdkjOWTuhAdtT3MztpIsbyJPoSN18FTnzXvgupAEXiTEg80AqHAXXoHR66W1ZSfRs1w&_nc_zt=23&_nc_ht=scontent.fbts7-1.fna&_nc_gid=QGIIaI57V-wnw5BTjijwHQ&oh=00_AfJjO9b22yCKGs_fR37j4UjEUTL6DABo5o2vNh_5pjtXyw&oe=6860E4C3" 
                  alt="Airsoft 3" 
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://scontent.fbts7-1.fna.fbcdn.net/v/t39.30808-6/464578055_28113485474905287_3277560544651608379_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=IW4atMLmsNgQ7kNvwExGimE&_nc_oc=AdlCAcWJoHFTJVmw_oKVtmMA7xVkwptKT9O83sljQR2qI8Q05VVyME9rYdpedCmUJv8&_nc_zt=23&_nc_ht=scontent.fbts7-1.fna&_nc_gid=hXweVsa8N2zJ_7B6LtbjiA&oh=00_AfJwwZcL6zTGmy0BLL4G-Qil00gfgoI9P7XcBTB4fnG8iQ&oe=683F19F5" 
                  alt="Airsoft 4" 
                  className="w-full h-40 object-cover"
                />
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
          <h2 className="font-display text-3xl text-devil-red mb-6 text-center">O airsoftovej hre</h2>
          <div className="bg-devil-dark p-8 rounded-lg shadow-lg">
            <p className="text-devil-light mb-4">
              Airsoft je taktická hra, ktorá simuluje vojenské operácie pomocou replík zbraní strieľajúcich plastové guličky. Na rozdiel od paintballu sú airsoftové guličky menšie a nezanechávajú farebné stopy.
            </p>
            <p className="text-devil-light mb-4">
              Naše airsoftové hry sú vhodné pre firmy, skupiny priateľov alebo jednotlivcov, ktorí sa chcú zapojiť do organizovaných hier. Ponúkame rôzne herné scenáre vrátane:
            </p>
            <ul className="list-disc pl-6 mb-4 text-devil-light">
              <li>Team Deathmatch</li>
              <li>Capture the Flag</li>
              <li>VIP ochrana</li>
              <li>Objektová obrana</li>
            </ul>
            <p className="text-devil-light">
              Všetky hry prebiehajú pod dohľadom skúseného inštruktora, ktorý zabezpečí bezpečnosť a plynulý priebeh hry.
            </p>
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

export default AirsoftPage;