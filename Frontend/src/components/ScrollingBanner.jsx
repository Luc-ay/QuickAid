import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const ScrollingBanner = () => {
  const bannerText = "Emergency service ✱ First aid guide ✱ Hospital in your palm ✱ ";
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        duration: 40,
        repeat: Infinity,
        ease: 'linear',
      },
    });
  }, [controls]);

  return (
    <div className="sticky top-[64px] lg:top-[84px] z-[40] h-[70px]">
      {/* Skewed red background */}
      <div className="absolute inset-0 -z-10 transform skew-y-[0.57deg] bg-[#E53935]"></div>

      {/* Scrolling text (not skewed) */}
      <div className="h-full bg-primary-600 flex items-center justify-center text-white overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={controls}
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() =>
            controls.start({
              x: ['0%', '-50%'],
              transition: {
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              },
            })
          }
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <span key={index} className="text-lg font-semibold mx-8">
              {bannerText}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollingBanner;
