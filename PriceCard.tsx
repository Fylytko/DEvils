import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { PriceItemProps } from '../types';

const PriceCard = ({ price, title, features }: PriceItemProps) => {
  return (
    <motion.div 
      className="bg-devil-dark rounded-lg overflow-hidden border border-devil-orange shadow-lg"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="p-6">
        <div className="text-center mb-6">
          <p className="text-4xl font-display text-devil-orange">{price}</p>
          <h3 className="text-xl text-devil-light font-medium mt-2">{title}</h3>
        </div>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle size={18} className="text-devil-red mr-2 flex-shrink-0 mt-1" />
              <span className="text-devil-light">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default PriceCard;