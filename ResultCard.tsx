import { motion } from 'framer-motion';
import { ResultCardProps } from '../types';

const ResultCard = ({ image, placement, event, date }: ResultCardProps) => {
  return (
    <motion.div 
      className="bg-devil-dark rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={event}
          className="w-full h-full object-cover" 
        />
        <div className="absolute top-0 left-0 bg-devil-red text-white px-3 py-1 font-display text-xl">
          {placement}
        </div>
      </div>
      
      <div className="p-4 text-center">
        <h3 className="font-display text-xl text-devil-light mb-2">{event}</h3>
        <p className="text-gray-400 text-sm">{date}</p>
      </div>
    </motion.div>
  );
};

export default ResultCard;