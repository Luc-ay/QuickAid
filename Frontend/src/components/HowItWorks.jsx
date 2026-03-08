import { motion } from 'framer-motion';
import jsonData from '/data/works.json';
import { useNavigate } from 'react-router-dom';
const works = jsonData.works;

const HowItWorks = () => {
  const redir = useNavigate();
  const colorSteps = ["bg-coral-500","bg-orange-500","bg-green-500"]
  return (
    <section className="pt-[96px] pb-[80px] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-jakarta text-center text-[20px] md:text-[32px] font-bold text-[#333333] mb-[11px] ">
            {works.title}
          </h2>
          <p className="font-sans font-normal text-base text-[#333333] max-w-3xl mx-auto">
            {works.p}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
        
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {works.steps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Step Number Circle */}
                <motion.div
                  className={`w-16 h-16  ${colorSteps[index]} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative `}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                 
                 {
                    (index >0 && index <works.steps.length) && <div className='hidden md:grid min-w-[170px] max-w-[14vw] border-[2px] border-[#AEAEAE] border-dashed absolute top-8 right-[75px] lg:right-[139px] ' >  </div>
                  }
                </motion.div>

                {/* Step Content */}
                <h3 className="font-jakarta text-2xl font-semibold text-[#333333] mb-4">
                  {step.title}
                </h3>
                <p className="font-sans font-normal text-base text-[#333333] leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
        {/* cta */}
        <div className="w-[80%] lg:max-w-[1086px] flexCenter mx-auto mt-[80px] ">
        <button className='w-full  h-[63px] flexCenter rounded-[6px]  bg-[#1565C0] text-white font-[500] text-[12px] font-inter '  onClick={()=> redir(works.button.part) } aria-label='Click to get started' >
            {works.button.text }
        </button>

        </div>
    </section>
  );
};

export default HowItWorks;