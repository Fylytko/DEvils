import { motion } from 'framer-motion';
import ActivityCard from '../components/ActivityCard';
import { Link } from 'react-router-dom';

const activities = [
  {
    title: "Paintball",
    description: "Adrenalínová hra s farbami a stratégiou. Zdokonaľte svoju tímovú spoluprácu a taktické myslenie.",
    price: "od 20€",
    image: "https://images.pexels.com/photos/9896719/pexels-photo-9896719.jpeg",
    link: "/paintball"
  },
  {
    title: "Airsoft",
    description: "Realistická taktická hra s replikami zbraní. Zažite vojenský simulátor na vlastnej koži.",
    price: "od 25€",
    image: "https://images.pexels.com/photos/165040/pexels-photo-165040.jpeg",
    link: "/airsoft"
  },
  {
    title: "Gelly Ball",
    description: "Mäkšia alternatíva k paintballu vhodná aj pre mladších. Zábavná a bezpečná aktivita pre všetkých.",
    price: "od 15€",
    image: "https://images.pexels.com/photos/163452/war-desert-guns-gunshow-163452.jpeg",
    link: "/gelly-ball"
  },
  {
    title: "Rodinné oslavy",
    description: "Nezabudnuteľná oslava pre celú rodinu plná akcie a zábavy v unikátnom prostredí.",
    price: "od 200€",
    image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
    link: "/rodinne-oslavy"
  },
  {
    title: "Detský tábor",
    description: "Prázdninový tábor pre deti s paintballovým programom, outdoor aktivitami a zábavou.",
    price: "od 300€",
    image: "https://images.pexels.com/photos/1734436/pexels-photo-1734436.jpeg",
    link: "/detsky-tabor"
  }
];

const OffersPage = () => {
  return (
    <div className="pt-24 pb-16 bg-devil-black text-devil-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl text-devil-red mb-4">Team Building Aktivity</h1>
          <p className="text-devil-light max-w-2xl mx-auto">
            Ponúkame širokú škálu aktivít pre firemné eventy, tímové stretnutia, alebo len pre zábavu s priateľmi.
          </p>
          <div className="w-24 h-1 bg-devil-orange mx-auto mt-4"></div>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
            >
              <ActivityCard {...activity} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="font-display text-3xl text-devil-red mb-6">Nevybrali ste si?</h2>
          <p className="text-devil-light max-w-xl mx-auto mb-8">
            Kontaktujte nás a pripravíme pre vás program na mieru podľa vašich požiadaviek.
          </p>
          <Link 
            to="/kontakt" 
            className="inline-flex items-center justify-center px-8 py-4 bg-devil-red hover:bg-devil-orange text-white font-medium rounded-md transition-colors duration-300 shadow-devil"
          >
            Kontaktujte nás
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default OffersPage;