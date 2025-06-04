import { motion } from 'framer-motion';
import { Info, Calendar, Users, Clock, Cake } from 'lucide-react';

const FamilyCelebrationsPage = () => {
  return (
    <div className="pt-24 pb-16 bg-devil-black text-devil-light">
      <div className="relative overflow-hidden">
        <div className="bg-cover bg-center h-96 relative" style={{ backgroundImage: "url('https://scontent.fbts7-1.fna.fbcdn.net/v/t39.30808-6/464902713_28112275245026310_2000249211545448471_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=Hso3HTKI8J4Q7kNvwG5ldn_&_nc_oc=AdkD5VQLif9SO2hE33aTwIOnSTZLqz39Ro40sVMtleX5NcjHh4whNc-TEzkLy58Sq_Y&_nc_zt=23&_nc_ht=scontent.fbts7-1.fna&_nc_gid=J6HfTudZe-clXfGHFX_xLA&oh=00_AfJiJT2ONrl7HajUa8vVUwzOSi0tXcUg8hNheD-UJb8YJw&oe=683F5400')" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-devil-black/70 via-devil-black/70 to-devil-black"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display text-5xl md:text-6xl text-devil-red mb-4">Rodinné oslavy</h1>
              <p className="text-xl text-devil-light max-w-xl mx-auto">
                Originálna oslava narodenín alebo inej príležitosti, ktorá zabaví celú rodinu
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="font-display text-3xl text-devil-red mb-8 text-center">Nezabudnuteľná oslava v štýle DEVILS</h2>
          
          <div className="bg-devil-dark p-8 rounded-lg shadow-lg mb-12">
            <p className="text-devil-light mb-6">
              Hľadáte netradičný spôsob, ako osláviť narodeniny, výročie alebo inú významnú udalosť? DEVILS vám ponúka unikátny zážitok v podobe akčnej oslavy s paintballom, airsoftom alebo gelly ballom. 
            </p>
            <p className="text-devil-light">
              Naše priestory sú prispôsobené na usporiadanie kompletnej oslavy vrátane občerstvenia, torty a aktivít pre deti aj dospelých. Ponúkame komplexné služby na kľúč - vy si len užijete zábavu a o všetko ostatné sa postaráme my.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-2xl text-devil-orange mb-6">Čo ponúkame</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Calendar size={24} className="text-devil-red mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Kompletná organizácia</h4>
                    <p className="text-gray-300">Od rezervácie termínu až po upratanie po oslave - vy sa staráte len o zábavu.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users size={24} className="text-devil-red mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Aktivity pre všetkých</h4>
                    <p className="text-gray-300">Paintball, airsoft alebo gelly ball pre deti aj dospelých, prispôsobené veku účastníkov.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Cake size={24} className="text-devil-red mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Catering</h4>
                    <p className="text-gray-300">Možnosť občerstvenie, nápoje, torta - všetko podľa vašich požiadaviek.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock size={24} className="text-devil-red mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Flexibilný časový harmonogram</h4>
                    <p className="text-gray-300">Oslava sa prispôsobí vašim potrebám, typicky trvá 3-5 hodín.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-display text-2xl text-devil-orange mb-6">Cenník</h3>
              <div className="bg-devil-dark p-6 rounded-lg border border-devil-red">
                <h4 className="text-xl font-display text-center text-devil-light mb-4">Základný balík: od 200€</h4>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Rezervácia priestorov na 3 hodiny</li>
                  <li>Akčná aktivita podľa výberu (paintball/airsoft/gelly ball)</li>
                  <li>Možné občerstvenie a nápoje</li>
                  <li>Personál a inštruktori</li>
                  <li>Od 10 osôb</li>
                </ul>
                <p className="text-sm text-gray-400">
                  *Cena sa môže líšiť v závislosti od počtu osôb, dĺžky oslavy a ďalších požiadaviek. Presná cenová ponuka bude vypracovaná na základe vašich individuálnych požiadaviek.
                </p>
              </div>
              
              <div className="mt-8">
                <div className="flex items-start">
                  <Info size={24} className="text-devil-orange mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl text-devil-light mb-2">Rezervácia</h4>
                    <p className="text-gray-300 mb-2">
                      Pre rezerváciu termínu odporúčame kontaktovať nás aspoň 2 týždne vopred.
                    </p>
                    <p className="text-gray-300">
                      Záloha vo výške 50% z celkovej ceny je potrebná na potvrdenie rezervácie.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img 
              src="https://scontent.fbts7-1.fna.fbcdn.net/v/t39.30808-6/466379139_28269445965975903_7228943647726195246_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=dEOhcfApnboQ7kNvwHxHVVl&_nc_oc=AdkdrV15elqFkfRGX0oX2hzA7CMQkPxuOczz2kZUjTD_okTTICLe6nrkG3RD_kpMt1A&_nc_zt=23&_nc_ht=scontent.fbts7-1.fna&_nc_gid=tNaMbdy8XwanUu4YV9TIrA&oh=00_AfJwDkiHQxGb1Fw6nzqnjxG3n8gwsebC7W92yWGCD9xyLQ&oe=683F5926" 
              alt="Rodinná oslava 1" 
              className="w-full h-48 object-cover rounded-lg"
            />
            <img 
              src="https://scontent.fbts7-1.fna.fbcdn.net/v/t39.30808-6/465869294_28269445979309235_5126847791232265094_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=PHTXF_M_dHMQ7kNvwGHnVYM&_nc_oc=AdmW5otDSKU9sAIQ_hMDjKfKRfCcbcK2Z4umdKhwX7V67u9Fr8PSG8oFg1Oy9gPan3E&_nc_zt=23&_nc_ht=scontent.fbts7-1.fna&_nc_gid=p9Ut9zv3B7V2VvPtkdLEGA&oh=00_AfL7ybgNIkVBpvnz1XdyqsQkaSsVrW9ebm2Tj1QMaQ3YTg&oe=683F5CB3" 
              alt="Rodinná oslava 2" 
              className="w-full h-48 object-cover rounded-lg"
            />
            <img 
              src="https://scontent.fbts7-1.fna.fbcdn.net/v/t1.6435-9/59717473_3120197511327429_8961937772684247040_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=fJWQJ5O-XIgQ7kNvwEMuBuu&_nc_oc=AdlRcNfKWgIbAvoR6qkwcbceb06B-oIpeA3pxyR815vYKsqhROsGyjUA50doKZ3ay74&_nc_zt=23&_nc_ht=scontent.fbts7-1.fna&_nc_gid=68PwGt0kKHGuMMeqt5p65g&oh=00_AfKMP-uaPV1FASJHVnTDZl3fTn3NwJRdalgFQmG-KLauSw&oe=6860EC20" 
              alt="Rodinná oslava 3" 
              className="w-full h-48 object-cover rounded-lg"
            />
          </motion.div>
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
              Vyplňte jednoduchý formulár a náš tím vás bude kontaktovať ohľadom dostupných termínov a vytvorenia ponuky na mieru.
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

export default FamilyCelebrationsPage;