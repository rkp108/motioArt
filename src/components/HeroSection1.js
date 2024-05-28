import React from 'react';
import motionLogo from "../assets/MotionArtEffect-logo.png";

function HeroSection1() {

  const handleClick = () => {
    window.location.href = 'https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891'
  }
  return (
    <div className="relative w-[1220px] h-screen mx-auto bg-transparent flex-col items-center justify-between sm:640px md:768px lg:1024px xl:1280px ">
      <div className="relative flex w-full justify-between items-start pt-20">
        <img 
          src={motionLogo} 
          alt="Description" 
          className="w-30 h-15 rounded-full shadow-lg hover:cursor-pointer" 
        />
        <button 
          className="bg-[#ffffff] border border-white text-black py-3 px-8 rounded transition duration-300 ease-in-out hover:bg-transparent hover:text-white hover:border-white" 
          onClick={handleClick}
          style={{pointerEvents: 'all'}}
        >
          Purchase Now
        </button>
      </div>
      <div className='h-4/5 flex '>
      <section className=" flex items-center justify-center ">
        <div className="text-2xl  items-center justify-center text-start ">
            <pre>
          <h1 className='bg-gradient-to-r from-blue-500 to-orange-500 text-transparent bg-clip-text text-xl '>Transform{'\n'}Your Website </h1>
          <p className='text-[#e8defa] py-2 text-xl'>With motion Art{'\n'}Effect </p>
          <p >
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
          


            
          </p>
          </pre>
        </div>
      </section>
      <section className=" flex items-center justify-center w-3/4 pt-10 px-8  ">
        <div className="   items-center justify-center text-start">
        <pre className='text-6xl '>
            <p className='text-[#eee6ff] font-semibold'>Attract Your{'\n'}Visitors Attention{'\n'}With Colorful{'\n'}<span className='bg-gradient-to-r from-blue-500 to-orange-500 text-transparent bg-clip-text'>Motion Art Effect</span></p>
          </pre>
            <pre className='text-xl pt-6 text-[#aaa4ba] '>Unleash the power of creativity  with Motion Art for Elementor - your {'\n'}ultimate solution for seamlessly integrating captivating animations into {'\n'}your website.</pre>
            
        </div>

      </section>
      </div>
      
    </div>
  );
}

export default HeroSection1;
