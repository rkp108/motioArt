import React from 'react';
import motionImage from '../assets/motion.png';

const Header = () => {

  const handleClick = () => {
    window.location.href = 'https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891?_gl=1*gzuy2l*_ga*NTc3MTc4NjI1LjE3MTU5NDUyMTk.*_ga_ZKBVC1X78F*MTcxNjEwNjIwMi4xNi4xLjE3MTYxMDgxMDYuMC4wLjA.&_ga=2.251978510.606752863.1715945219-577178625.1715945219'
  };
  const handleClick1 = () => {
    window.location.href = 'https://codecanyon.net/checkout/102291228/create_account?_ga=2.2898999.606752863.1715945219-577178625.1715945219'
  };

  return (
    <div>
      <div className="preview__header fixed top-0 left-0 w-full z-50 sm:640px md:768px lg:1024px xl:1280px bg-[#262626] text-white p-6 flex justify-between items-center h-14 leading-14 mb-1">
        <div className="preview__envato-logo flex items-center ">
          <img src={motionImage} alt="Motion Art" className="h-11  " />
          <button className="header-envato_market text-lg " 
          onClick={handleClick}>
            envato<span className="text-[#83b541]">market</span>
          </button>
        </div>
        <div id="js-preview__actions" className="preview__actions">
          <div className="preview__action--buy">
            <button className="text-black py-2 px-4 rounded bg-[#83b541]"
            onClick={handleClick1} style={{pointerEvents: 'all'}} >
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;





