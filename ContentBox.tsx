import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ContentBoxProps } from '../types';

const ContentBox: React.FC<ContentBoxProps> = ({ image, title, buttonText, buttonLink, reverse = false }) => {
  return (
    <section className={`py-16 bg-devil-dark`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16`}>
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img 
                src={image} 
                alt={title}
                className="w-full h-[300px] md:h-[400px] object-cover transform hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-devil-black/80 to-transparent"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-devil-red mb-6">{title}</h2>
            <div className="mb-8 text-devil-light">
              <p className="text-lg mb-4">
                Zažite adrenalínovú zábavu s profesionálmi z Devils paintballového klubu.
              </p>
            </div>
            
            <Link 
              to={buttonLink} 
              className="inline-flex items-center justify-center px-6 py-3 bg-devil-red hover:bg-devil-orange text-white font-medium rounded-md transition-colors duration-300 shadow-devil"
            >
              {buttonText}
              <svg 
                className="ml-2 w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                >
                </path>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContentBox;