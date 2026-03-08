import { motion } from 'framer-motion';
import jsonData from '/data/features.json';
const features = jsonData.features;

const Features = () => {
  

  return (
    <section className="py-[43px] bg-[#F5F5F5] md:min-h-[1494px] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-jakarta text-4xl md:text-[32px] font-bold text-[#333333] mb-[11px]  ">
           {features.title}
          </h2>
          <p className="text-base font-sans font-normal px-4 md:px-0 text-[#333333] text-center md:max-w-[50%] mx-auto ">
            {features.p}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid place-items-center md:grid-cols-1 gap-[24px]">
          {features.cards.map((feature, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden hover:shadow-xl transition-shadow duration-300 grid grid-cols-1 md:grid-cols-2 gap-[24px]  `}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`relative md:h-[415px] flexCenter shadow-md w-full md:max-w-[570px] rounded-[10px] overflow-hidden ${index%2==0 && "md:order-2"} `} >
                <img
                  src={feature.img}
                  alt={feature.h3}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading='lazy'
                />
                
              </div>
              <div className={`p-6 flexCenter justify-start ps-[30px] bg-white shadow-md rounded-[10px] ${index%2==0 && "md:order-1"} `} >
                <div className="md:max-w-[301px] mx-auto  ">
                  <h3 className="font-jakarta text-[24px] text-center font-semibold text-[#333333] mb-4">
                  {feature.h3}
                </h3>
                <p className="font-sans font-normal text-[20px] text-[#333333] leading-relaxed">
                  {feature.p}
                </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;