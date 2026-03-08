import { motion } from 'framer-motion';

const ScrollingBanner = () => {
  const bannerText = "Emergency service ✱ First aid guide ✱ Hospital in your palm ✱ ";
  
  return (
    <div className="bg-primary-600 text-white py-4 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Repeat the text multiple times to ensure seamless loop */}
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="flex items-center">
            <span className="text-lg font-semibold mx-8">{bannerText}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingBanner;