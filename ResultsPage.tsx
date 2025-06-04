import { motion } from 'framer-motion';
import ResultCard from '../components/ResultCard';

const resultsData = [
  {
    image: "https://scontent.fbts7-1.fna.fbcdn.net/v/t39.30808-6/489420878_1142546931220558_6414827003992111973_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eCni4r87Ms0Q7kNvwGuhU46&_nc_oc=AdnVq5hY375zB1uv9g8B0o_spucUqr7_o2Pbdum8YBJrwmfLFNA887SPvuytVC8JgjY&_nc_zt=23&_nc_ht=scontent.fbts7-1.fna&_nc_gid=tg5jPrPqNbzLe9OizTdeDQ&oh=00_AfJiIQKPR9LpmYfcPxUD-kIbNPli1G1xDaCTDW_C2Kt51w&oe=683E0AC7",
    placement: "2. miesto",
    event: "Polish Xball League",
    date: "August 2024"
  },
  {
    image: "https://scontent.fbts7-1.fna.fbcdn.net/v/t39.30808-6/489466063_1139793528162565_7974589696712065310_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-bcU-WRWJocQ7kNvwGtCf4m&_nc_oc=AdmoA0vBxUBD8kw8tzWeixnIXxNAlT2Q1etKp7KA26SVZIcc6t98ktwbSxc6Tisz_Xg&_nc_zt=23&_nc_ht=scontent.fbts7-1.fna&_nc_gid=GUFFYUOBKoispD84uJevvQ&oh=00_AfIJWO4SUjABr0J4YOmz23qgMGjMJeW04SpnGIWish-sXQ&oe=683E129A",
    placement: "1. miesto",
    event: "Polish Xball League",
    date: "Máj 2024"
  },
  {
    image: "https://images.pexels.com/photos/9896720/pexels-photo-9896720.jpeg",
    placement: "1. miesto",
    event: "Slovakia Paintball League",
    date: "Júl 2023"
  },
  {
    image: "https://images.pexels.com/photos/2138918/pexels-photo-2138918.jpeg",
    placement: "1. miesto",
    event: "Slovakia Paintball League",
    date: "Máj 2023"
  }
];

const ResultsPage = () => {
  return (
    <div className="pt-24 pb-16 bg-devil-black text-devil-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl text-devil-red mb-4">Naše výsledky</h1>
          <p className="text-devil-light max-w-2xl mx-auto">
            Prehľad našich najlepších umiestnení v súťažiach doma aj v zahraničí.
          </p>
          <div className="w-24 h-1 bg-devil-orange mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resultsData.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ResultCard {...result} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;