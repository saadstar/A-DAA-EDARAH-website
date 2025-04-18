import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './splash.css';

const Splash = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="splash-container"
      initial={{ opacity: 1 }}
      animate={{ opacity: isOpen ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="door-wrapper">
        <motion.div
          className="door left-door"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isOpen ? -90 : 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        <motion.div
          className="door right-door"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isOpen ? 90 : 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </div>

      <div className="center-logo-wrapper">
        <motion.div
          className="progress-circle"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2.3, ease: 'linear' }}
        >
          <img src="/assets/img/logo.png" alt="Logo" className="splash-logo" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Splash;
