import React from 'react'
import Header from '../../components/user-header/Header'
import Hero from '../../components/user-dashboard/Hero'
import Emergency from '../../components/user-dashboard/Emergency'
import "../../components/styles.css"; // Ensure styles are imported
import Nearby from '../../components/user-dashboard/Nearby';
import FirstAidTips from '../../components/user-dashboard/FirstAidTips';
import Footer from '../../components/user-dashboard/Footer';



const Index = () => {
  return (
    <div id='Dashbaord' className='bg-[42px] ' >
      <Header />
      <Hero />
      <Emergency />
      <Nearby />
      <FirstAidTips />
      <Footer />
    </div>
  )
}

export default Index