import React from 'react'
import '../About/About.css'
import chef from '../../assets/images/chef2.jpg'

const About = () => {
  return (
    <div id='about-bg'>
      <img src={chef} alt='chef' id='chef' />
      <h1 id='about-title'>About Us</h1>
      <h2 id='about-section'>Pisans specializes in delicious food featuring fresh ingredients and masterful preparation by the Pisans culinary team. Whether you’re ordering a multi-course meal or grabbing a drink and pizza at the bar, Pisans lively, casual yet upscale atmosphere makes it perfect for dining with friends, family, clients and business associates.</h2>
    </div>
  )
};
export default About;