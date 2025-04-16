import { useState, useEffect, useRef } from "react";   
import { motion, useAnimation, useScroll, AnimatePresence } from "framer-motion";

// Animated section component
const AnimatedSection = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay }}
  >
    {children}
  </motion.div>
);

// Animated counter component
const Counter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);  

  useEffect(() => {
    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);        
      setCount(Math.floor(percentage * end));        
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };      

    animationFrame = requestAnimationFrame(updateCount);      
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);    
  return <span>{count}%</span>;
};

// Tilt card effect component
const TiltCard = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ perspective: 1000 }}
      whileInView={{ 
        rotateX: 0,
        rotateY: 0,
        transition: { duration: 0.5 } 
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

// Navbar animation component
const AnimatedNavbar = ({ children }) => {
  const { scrollY } = useScroll();
  const controls = useAnimation();
  
  useEffect(() => {
    const updateNavbar = () => {
      if (scrollY?.current > 20) {
        controls.start({
          y: 0,
          opacity: 1,
          transition: { duration: 0.3 }
        });
      } else {
        controls.start({
          y: "-100%",
          opacity: 0,
          transition: { duration: 0.3 }
        });
      }
    };

    const unsubscribe = scrollY.onChange(updateNavbar);
    updateNavbar(); // Initialize

    return () => unsubscribe();
  }, [scrollY, controls]);

  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={controls}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {children}
    </motion.div>
  );
};

// Modal animation (for login/signup)
const AnimatedModal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25 
            }}
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
          >
            <div onClick={e => e.stopPropagation()}>
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Enhanced tilt card with mouse tracking and reflection effect
const AdvancedTiltCard = ({ children, className, tiltMaxAngle = 10, scale = 1.05, reflectionOpacity = 0.2 }) => {
  const cardRef = useRef(null);
  const [tiltValues, setTiltValues] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    // Get card dimensions and position
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to card center (in percentages)
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate tilt based on mouse position
    // Map the range so the center is 0 and edges reach max angle
    const tiltX = -((e.clientY - centerY) / (rect.height / 2)) * tiltMaxAngle;
    const tiltY = ((e.clientX - centerX) / (rect.width / 2)) * tiltMaxAngle;
    
    setTiltValues({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Reset tilt when mouse leaves
    setTiltValues({ x: 0, y: 0 });
  };
  
  return (
    <motion.div
      ref={cardRef}
      className={`${className} relative overflow-hidden`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      animate={{
        rotateX: tiltValues.x,
        rotateY: tiltValues.y,
        scale: isHovering ? scale : 1,
      }}
      initial={{ 
        rotateX: 0, 
        rotateY: 0,
        scale: 1
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 15,
        scale: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      whileInView={{ 
        opacity: 1,
        transition: { duration: 0.5 } 
      }}
      viewport={{ once: true }}
    >
      {children}
      
      {/* Reflection overlay that follows tilt direction */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(
            ${-tiltValues.y * 5 + 90}deg, 
            rgba(255,255,255,0) 0%, 
            rgba(255,255,255,${isHovering ? reflectionOpacity : 0}) 50%, 
            rgba(255,255,255,0) 100%
          )`,
          mixBlendMode: "overlay"
        }}
        animate={{
          opacity: isHovering ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

// Horizontal scroll animation component
const HorizontalScrollContainer = ({ children, className }) => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <motion.div
      ref={scrollRef}
      className={`${className} cursor-grab active:cursor-grabbing`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

const MovingBlobBackground = ({position=''}) => {
  return (
    <div className="inset-0 overflow-hidden z-0 pointer-events-none">
      <div className={`absolute inset-0 flex items-center justify-center ${position}`}>
        {/* Main background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-800/10" />
        
        {/* First blob */}
        <motion.div
          animate={{
            x: [-90, 120, -60, 0],
            y: [0, -80, 90, 0],
            scale: [1, 1.2, 1.15, 1],
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.6) 0%, rgba(37,99,235,0.4) 70%, rgba(37,99,235,0.2) 100%)",
            filter: 'blur(50px)',
          }}
        >
          {/* Brightness overlay that changes with position */}
          <motion.div
            animate={{
              opacity: [0.2, 0.8, 0.7, 0.2],
              background: [
                "radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(37,99,235,0.3) 100%)",
                "radial-gradient(circle, rgba(147,197,253,0.8) 0%, rgba(59,130,246,0.5) 100%)",
                "radial-gradient(circle, rgba(96,165,250,0.7) 0%, rgba(37,99,235,0.4) 100%)",
                "radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(37,99,235,0.3) 100%)"
              ],
            }}
            transition={{
              duration: 12,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="absolute inset-0 rounded-full"
          />
        </motion.div>
        
        {/* Second blob */}
        <motion.div
          animate={{
            x: [0, -100, 80, 0],
            y: [0, 70, -50, 0],
            scale: [1, 1.3, 1.1, 1],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.5
          }}
          className="absolute w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(30,64,175,0.6) 0%, rgba(30,64,175,0.4) 70%, rgba(30,64,175,0.2) 100%)",
            filter: 'blur(40px)',
          }}
        >
          {/* Brightness overlay that changes with position */}
          <motion.div
            animate={{
              opacity: [0.3, 0.9, 0.6, 0.3],
              background: [
                "radial-gradient(circle, rgba(37,99,235,0.5) 0%, rgba(30,64,175,0.3) 100%)",
                "radial-gradient(circle, rgba(96,165,250,0.8) 0%, rgba(59,130,246,0.5) 100%)",
                "radial-gradient(circle, rgba(59,130,246,0.7) 0%, rgba(37,99,235,0.4) 100%)",
                "radial-gradient(circle, rgba(37,99,235,0.5) 0%, rgba(30,64,175,0.3) 100%)"
              ],
            }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
              delay: 0.5
            }}
            className="absolute inset-0 rounded-full"
          />
        </motion.div>
        
        {/* Third blob */}
        <motion.div
          animate={{
            x: [0, 70, -90, 0],
            y: [0, -60, -30, 0],
            scale: [1, 1.15, 1.25, 1],
          }}
          transition={{
            duration: 14,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 1
          }}
          className="absolute w-72 h-72 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.5) 0%, rgba(37,99,235,0.3) 70%, rgba(37,99,235,0.1) 100%)",
            filter: 'blur(45px)',
          }}
        >
          {/* Brightness overlay that changes with position */}
          <motion.div
            animate={{
              opacity: [0.25, 0.85, 0.75, 0.25],
              background: [
                "radial-gradient(circle, rgba(37,99,235,0.5) 0%, rgba(29,78,216,0.3) 100%)",
                "radial-gradient(circle, rgba(191,219,254,0.8) 0%, rgba(147,197,253,0.5) 100%)",
                "radial-gradient(circle, rgba(147,197,253,0.7) 0%, rgba(96,165,250,0.4) 100%)",
                "radial-gradient(circle, rgba(37,99,235,0.5) 0%, rgba(29,78,216,0.3) 100%)"
              ],
            }}
            transition={{
              duration: 14,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
              delay: 1
            }}
            className="absolute inset-0 rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MovingBlobBackground;

export { 
  AnimatedSection, 
  Counter, 
  TiltCard, 
  AnimatedNavbar, 
  AnimatedModal, 
  AdvancedTiltCard,
  HorizontalScrollContainer,
  MovingBlobBackground
};