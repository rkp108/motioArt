import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-gradient-to-r from-[#f07122] via-[#b54a7a] to-[#8d2fb5] p-2 flex justify-between items-center w-full  bottom-0">
        <p className='px-28'>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
        <div className="flex space-x-20">
          <a href="https://qodematrix.com/docs/motion-art-for-elementor/" className="hover:underline   " style={{pointerEvents: 'all'}}>Documentation</a>
          <a href="https://support.qodematrix.com/login" className="hover:underline  pr-20 " style={{pointerEvents: 'all'}}>Support</a>
        </div>
      </footer>
      
    </div>
  )
}

export default Footer;
