import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ActivityProps } from '../types';

const ActivityCard = ({ title, description, price, image, link }: ActivityProps) => {
  return (
    <motion.div 
      className="bg-devil-dark rounded-lg overflow-hidden shadow-lg border border-devil-dark hover:border-devil-red transition-colors duration-300"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-0 right-0 bg-devil-red text-white px-3 py-1 font-semibold">
          {price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-display text-2xl text-devil-red mb-3">{title}</h3>
        <p className="text-devil-light mb-5">{description}</p>
        
        <Link 
          to={link}
          className="inline-block w-full text-center py-3 bg-devil-dark hover:bg-devil-red text-white font-medium rounded-md transition-colors duration-300 border border-devil-red"
        >
          Zobraziť viac
        </Link>
      </div>
    </motion.div>
  );
};

export default ActivityCard;