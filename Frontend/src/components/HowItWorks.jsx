import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Tap Emergency Button",
      description: "Press the emergency button and input your email address into our quick dialog box menu.",
      color: "bg-coral-500"
    },
    {
      number: "2", 
      title: "Automatic Dispatch",
      description: "Have an ambulance dispatched to you or you will receive directions to the nearest hospitals in your vicinity.",
      color: "bg-orange-500"
    },
    {
      number: "3",
      title: "Get Help Fast",
      description: "Receive immediate first-aid guidance while help is on the way. Track response status in real-time.",
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How QuickAid Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting help is simple and fast. Follow these three steps to access emergency assistance.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center">
              <div className="w-1/3 h-0.5 bg-gray-300"></div>
              <div className="w-1/3 h-0.5 bg-gray-300"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
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
                  className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </motion.div>

                {/* Step Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;