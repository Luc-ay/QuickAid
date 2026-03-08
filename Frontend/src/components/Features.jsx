import { motion } from 'framer-motion';
import { FaAmbulance, FaHospital, FaHeartbeat } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaAmbulance className="text-4xl text-coral-500" />,
      title: "Emergency Request System",
      description: "One-tap emergency button with smart categorization and instant connection to first responders in your area.",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <FaHospital className="text-4xl text-primary-500" />,
      title: "Hospital/Facility Locator",
      description: "Interactive map showing nearby hospitals, clinics, and emergency facilities with real-time availability.",
      image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <FaHeartbeat className="text-4xl text-green-500" />,
      title: "First-Aid Guidance",
      description: "Step-by-step first-aid instructions for common emergencies, written in simple language anyone can follow.",
      image: "https://images.pexels.com/photos/7089391/pexels-photo-7089391.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
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
            Features of QuickAid
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the tools that put safety, speed, and support at your fingertips. 
            QuickAid makes handling emergencies simpler, smarter, and faster.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                  {feature.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;