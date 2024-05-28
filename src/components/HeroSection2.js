import React from 'react';
import motionImage from '../assets/motion.png';
import motion1 from "../assets/motionarteffect-img4.png";
import motion2 from "../assets/motionarteffect-img5.png";
import motion3 from "../assets/motionarteffect-img1.png";
import motion4 from "../assets/motionarteffect-img3.png";
import { FaArrowRight } from "react-icons/fa";

function HeroSection2() {

  const handleClick = () => {
    window.location.href = 'https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891';
  };

  return (
    <div className='h-screen sm:640px md:768px lg:1024px xl:1280px'>
      <header className='flex justify-center py-28'>
        <h2 className='text-[#eee6ff] text-xl'>Trusted by Thousands of users around the world</h2>
      </header>
      <section className='flex justify-between px-24 space-x-2'>
        <div className='flex'>
          <img src={motionImage} alt='Motion Image'/>
          <div>
            <img className='pt-6' src={motion1} alt='Motion 1'/>
            <pre className='py-4 text-[#a29db3]'> 4.5 Score, 9 Reviews</pre>
          </div>
        </div>
        <div className='flex'>
          <img src={motion3} alt='Motion 3'/>
          <div>
            <img className='pt-6' src={motion1} alt='Motion 1'/>
            <pre className='py-4 text-[#a29db3]'> 4.5 Score, 9 Reviews</pre>
          </div>
        </div>
        <div className='flex'>
          <img src={motion4} alt='Motion 4'/>
          <div>
            <img className='pt-6' src={motion1} alt='Motion 1'/>
            <pre className='py-4 text-[#a29db3]'> 4.5 Score, 9 Reviews</pre>
          </div>
        </div>
      </section>
      <section className='flex py-16'>
        <div className='w-3/4'>
          <pre className='text-justify text-[#eee6ff] text-4xl px-28 font-semibold'>
            Turn Your Cursor into A Colourful{'\n'}Magic Wand & Charm Your Visitors 
          </pre>
          <pre className='text-start text-xl text-[#b2acc2] py-4 px-28'>
            Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse{'\n'}your website with visually stunning motion art elements.
          </pre>
          <button className="bg-gradient-to-r ml-28 from-blue-500 to-orange-500 text-white py-3 px-8 mt-4 rounded-md flex items-center"
          onClick={handleClick} style={{pointerEvents: 'all'}} >
            Purchase from Envacto <FaArrowRight className='ml-2 '/>
          </button>
        </div>
        <div>
          <img src={motion2} alt='Motion 2'/>
        </div>
      </section>
    </div>
  );
}

export default HeroSection2;


