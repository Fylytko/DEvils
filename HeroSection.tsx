import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-hero-pattern bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://paintballdevils.sk/wp-content/uploads/2023/08/devils_team_01.jpg')",
            backgroundPosition: "center 30%"
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-devil-black/80 via-devil-black/70 to-devil-black" />
      </div>
      
      <motion.div 
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <motion.h1 
          className="font-display text-6xl sm:text-7xl md:text-8xl text-devil-red mb-4 tracking-wide drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          DEVILS
        </motion.h1>
        <motion.h2 
          className="font-body text-xl sm:text-2xl md:text-3xl text-devil-light mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Slovenský reprezentačný klub
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="#content" 
            className="inline-block mt-8 animate-bounce"
          >
            <svg 
              className="w-8 h-8 text-devil-orange"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              >
              </path>
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;