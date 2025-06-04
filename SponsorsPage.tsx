import { motion } from 'framer-motion';

const sponsors = [
  {
    name: "Kalinkovo",
    logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/65/56/7c/65567c3c-6bf3-8fd0-fed7-c73a2b0fc7d6/AppIcon.kalinkovo-0-0-1x_U007emarketing-0-5-0-85-220.png/1200x600wa.png",
    description: "Obec Kalinkovo"
  },
  {
    name: "SEVEN paintball",
    logo: "https://7paintball.com/wp-content/uploads/2022/05/Seven-Logos-Bronze-07.png",
    description: "Reveal your hidden side !"
  },
  {
    name: "Planet Eclipse",
    logo: "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg",
    description: "Profesionálne paintballové markery svetovej kvality."
  },
  {
    name: "HK Army",
    logo: "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg",
    description: "Lifestylová značka a výrobca paintballového oblečenia."
  },
  {
    name: "Virtue Paintball",
    logo: "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg",
    description: "Inovatívne podávače a príslušenstvo pre paintball."
  },
  {
    name: "Tippmann Sports",
    logo: "https://images.pexels.com/photos/6476809/pexels-photo-6476809.jpeg",
    description: "Legendárny výrobca paintballových markerov a príslušenstva."
  }
];

const SponsorsPage = () => {
  return (
    <div className="pt-24 pb-16 bg-devil-black text-devil-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl text-devil-red mb-4">Naši sponzori</h1>
          <p className="text-devil-light max-w-2xl mx-auto">
            Ďakujeme všetkým našim partnerom za dlhoročnú podporu a spoluprácu.
          </p>
          <div className="w-24 h-1 bg-devil-orange mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-devil-dark rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-devil-orange mb-3">{sponsor.name}</h3>
                <p className="text-devil-light">{sponsor.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="font-display text-3xl text-devil-red mb-6">Staňte sa naším sponzorom</h2>
          <p className="text-devil-light max-w-2xl mx-auto mb-8">
            Máte záujem podporiť náš tím? Kontaktujte nás a radi vám predstavíme možnosti spolupráce a benefity, ktoré ponúkame našim partnerom.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center justify-center px-6 py-3 bg-devil-red hover:bg-devil-orange text-white font-medium rounded-md transition-colors duration-300 shadow-devil"
          >
            Kontaktujte nás
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default SponsorsPage;