import { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="pb-[48px] bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-jakarta text-[20px] md:text-[32px] font-bold text-[#007AFF] mb-8">
            Subscribe to our Newsletter
          </h2>
          
          <form onSubmit={handleSubmit} className="max-w-[764px] h-[92px] flexCenter md:bg-[#F9F9F9] rounded-[50px] mx-auto">
            <fieldset className=" flexBetween flex-col md:flex-row w-full py-[11px] px-[21px] gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-transparent px-6 py-4 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-transparent text-gray-900 placeholder-[#B9B9B9] font-[500] max-w-[90%] "
                required
              />
              <motion.button
                type="submit"
                className="flexCenter font-inter text-[24px] w-[169px] h-[61px] bg-primary-500 text-white rounded-[50px] font-semibold hover:bg-white hover:text-primary-500 transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitted}
              >
                {isSubmitted ? 'Subscribed!' : 'Submit'}
              </motion.button>
            </fieldset>
          </form>

          {isSubmitted && (
            <motion.div
              className="mt-8 md:mt-4 text-primary-500 "
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p>Thank you for subscribing! You'll receive our latest updates.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;