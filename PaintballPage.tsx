import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import PriceCard from '../components/PriceCard';

const PaintballPage = () => {
  const priceItemFeatures = [
    'Tippmann FT-12 marker',
    'Kombinéza s maskou',
    '100 ks guličiek',
  ];

  return (
    <div className="pt-24 pb-16 bg-devil-black text-devil-light">
      <div className="relative overflow-hidden">
        <div 
          className="h-96 bg-cover bg-center relative"
          style={{
            backgroundImage: "url('https://scontent.fbts7-1.fna.fbcdn.net/v/t39.30808-6/483101751_1035853965234072_6642793349765249103_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RV2npJjMchoQ7kNvwGqgX-v&_nc_oc=AdmLJv4ID-GtWY4LKVefSTmWvmcUgv-ldGTNS6IWSbyM8dum2jkjTn5VqTLobjSm6S8&_nc_zt=23&_nc_ht=scontent.fbts7-1.fna&_nc_gid=xhb96I1qB5vr7QTYSIWhLA&oh=00_AfKZuQPxgcqA-2uaK9IYrf2ur5Ms6Bu_LeRe_xU6jO2d1w&oe=683DF1DE')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-devil-black/70 via-devil-black/70 to-devil-black"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display text-5xl md:text-6xl text-devil-red mb-4">Paintball</h1>
              <p className="text-xl text-devil-light max-w-xl mx-auto">
                Zažite adrenalínovú zábavu a zdokonalite svoju tímovú spoluprácu
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
              price="20€/osoba" 
              title="Základný balík" 
              features={priceItemFeatures} 
            />
            
            <div className="mt-8 bg-devil-dark p-6 rounded-lg">
              <div className="flex items-start">
                <Info size={24} className="text-devil-orange mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl text-devil-light mb-2">Dôležité informácie</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Strelivo: 100 ks = 5 €</li>
                    <li>Hracia doba: max. 2 hodiny</li>
                    <li>Minimálny počet: 10 hráčov</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link 
                to="/objednat"
                className="block w-full py-3 bg-devil-red hover:bg-devil-orange text-white font-medium rounded-md transition-colors duration-300 text-center"
              >
                Rezervovať termín
              </Link>
            </div>
          </div>
          
          <div>
            <h2 className="font-display text-3xl text-devil-red mb-6">Galéria</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/464367879_28112254261695075_2549495367684724157_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=HKs0tHcDW9cQ7kNvwGgLCWl&_nc_oc=Adnu7JC1WmIXPIRi4-7AiclpcwPHg8ho9RWCoFOWZxGWFwAsZuxbbnVTjTakZPEYy4I&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=rdp9H-DQ8fRx93JQ_bAPLw&oh=00_AfLUuYsHVCjcJ9tMKWktae3exy1Kd2PILAkeQ9aYIe7uoQ&oe=683E3DEF" 
                  alt="Paintball 1" 
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/464902711_28112281725025662_3199674033563976419_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=w883qjXKYXgQ7kNvwF-ORcu&_nc_oc=AdkRIUy1uUVHcwue_yY75jNDfXGlpvGVMm5LsBjR2kAR-HgRS4-AALcXRO7wKoSH6Rs&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=DgmNOKtJE49H8ujDGSA07w&oh=00_AfKRkIQp5Nbx_k0ukoQwbp7m6Yzz8eHiRfhKHsn2wA3KFw&oe=683E434D" 
                  alt="Paintball 2" 
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/464929656_28113104431610058_5846171805367248493_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=IPoDQAPrxX8Q7kNvwEs9BN9&_nc_oc=Admc2WHhw16sNXYJD3rnYUIf_o7OIygbdEL_an3lzE53vqOkcHaREH2bDoccVE1oGNI&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=hzK-QVNHMgTIhEAAQSojdg&oh=00_AfIiw_mFlDHGE5pM20NzOrATba9f1rTqCKf1UY9B8JuRlw&oe=683E3BD1" 
                  alt="Paintball 3" 
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/36087108_2422761317737722_522760183496048640_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=WVvT7vQlnToQ7kNvwECsWpe&_nc_oc=Adl9rigAilf8mtdaUVhbN3rT_G5xFmnDXCDk0lYH9q2jokpCNFs7HP0NYGVhU7tDjNo&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=vrjXtQeVkJfFBoLF3zvBHg&oh=00_AfJWtkkLkFKCSqfUVoTQ2jt2exSf3aapyICJn_Rfvw5uVQ&oe=685FDADE" 
                  alt="Paintball 4" 
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PaintballPage;