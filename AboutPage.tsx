import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="pt-24 pb-16 bg-devil-black text-devil-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <img src="https://i.imgur.com/B11rsMm.png" alt="DEVILS Logo" className="h-24 mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl text-devil-red mb-4">O nás</h1>
            <div className="w-24 h-1 bg-devil-orange mx-auto"></div>
          </div>
          
          <div className="bg-devil-dark rounded-lg p-6 md:p-8 shadow-lg text-lg leading-relaxed space-y-6">
            <p>
              Team Devils vznikol na začiatku februára 2002. Devils ako jeden z mála slovenských klubov aktívne reprezentuje Slovensko doma a v zahraničí už 21 rokov. Team Devils pozostáva zo skúsených hráčov, ktorí v minulosti hrávali za niektoré slovenské kluby. Už prvý rok účinkovania sme sa na paintballovej scéne zaradili do prvej trojky teamov na Slovensku.
            </p>
            
            <p>
              Za dve desaťročia sme získali množstvo ocenení a trofejí. Najcennejšie sú však pre nás spomienky na výhry, ale aj prehry, získané priateľstvá, partnerstvá a rešpekt aj od tímov, ktoré majú neporovnateľne lepšie zázemie. Úplne najviac pre nás znamenajú skúsenosti, no a presne tie odovzdávajú naši starší hráči mladej generácii hráčov, ktorá nemá na Slovensku konkurenciu.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://paintballdevils.sk/wp-content/uploads/2018/05/fotofinal2.jpg" 
                  alt="Team DEVILS" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://scontent.fbts7-1.fna.fbcdn.net/v/t39.30808-6/498236204_1180501290758455_2473104591026277695_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jK_mRsh012AQ7kNvwHE3rZu&_nc_oc=AdmvHphlFA1GJisz6XirPefwbibdywhy6uBX20z6glDrgMavWhKf-wFN_BshbukuZgI&_nc_zt=23&_nc_ht=scontent.fbts7-1.fna&_nc_gid=5vMpbgNL1F1wPhdBYT7_AA&oh=00_AfKCbVK-Ga8ItPqLfObA-O-95IrIk5Yahkrq2YjZxoZ2Nw&oe=683DF32B" 
                  alt="DEVILS v akcii" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;