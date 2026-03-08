import React, { useState } from 'react'
import jsonData from '/data/dashboard.json'; // Import JSON data
const {footer} = jsonData; // Destructure to get the footer data
import { motion } from 'framer-motion';
import LogoSection from '../user-header/LogoSection';
import { Link } from 'react-router-dom';

const Footer = () => {
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
    <div className='bg-[#F8F8F8] min-h-[301px] w-full mt-[64px] py-[32px] ' >
     <div className=" bg-white px-2 lg:px-0 md:max-w-[1120px] mx-auto pb-[26px]  ">
       <div className=' px-4 min-h-[97px] lg:px-0 pt-[8px] pb-[32px] gap-4 flexBetween flex-col md:flex-row lg:items-start'>
        {/* boxa */}
        <div className="">
          <h2  className='text-[#454A53] font-jakarta font-bold text-[24px]  text-center md:text-start' >{footer.title}</h2>
          <p className="mt-2 font-sans  text-base font-normal  text-[#747474] text-center md:text-start  ">{footer.p}</p>
          
        </div>
        {/* boxb */}
        <div className="">
           <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          
          <form onSubmit={handleSubmit} className="max-w-[764px] h-[92px] flexColStart  rounded-[50px] mx-auto">
            <fieldset className=" flexBetween flex-col md:flex-row w-full py-[11px]  gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-transparent h-[56] w-[320px] px-6 py-4 rounded-lg border-[1px] border-[#7474747A] focus:outline-none focus:ring-2 focus:ring-transparent text-gray-900 placeholder-[#B9B9B9] font-[500]  "
                required
              />
              <motion.button
                type="submit"
                className="flexCenter font-sans text-[14px] p-4 bg-primary-500 text-[#FFFFFF] rounded-xl font-[500] hover:bg-white hover:text-primary-500 transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitted}
              >
                {isSubmitted ? 'Subscribed!' : 'Subscribe'}
              </motion.button>
            </fieldset>
            <p className="flexStart gap-2 mt-[10px] ">
              <img src="/svg/info.svg" alt="info icon" loading='lazy' />
              <span className=""> {footer.form.info} </span>
            </p>
          </form>

          {isSubmitted && (
            <motion.div
              className="mt-8 md:mt-8 text-primary-500 "
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p>Thank you for subscribing! You'll receive our latest updates.</p>
            </motion.div>
          )}
        </motion.div>
        </div>
        </div>
        {/* nav footer */}
        <div className="flexCenter mt-[120px] ">
          <LogoSection logo={footer.logo} title={footer.logoText} isScrolled={false} />
        </div>
        <div className="flexCenter"> 
          <ul className="flexCenter flex-wrap gap-6 mt-4">
            {footer.links.map((link, index) => (
              <li key={index}>  
              <Link to={link.path} className="text-[#1E1E1E] text-base font-jakarta font-[500] hover:text-primary-500 transition-colors duration-300">
                {link.name}
              </Link>
              </li>
            ))}
              </ul>
           </div>
     </div>
    </div>
  )
}

export default Footer