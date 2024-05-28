import React from 'react';

function MySection() {
  return (
    <section className='w-full sm:640px md:768px lg:1024px xl:1280px'>
      <div className='w-full mb-14 '>
        <pre className='flex justify-center items-center text-4xl font-bold text-white'>
          Apply On Any Section Or Enable{'\n'}For Whole Page
        </pre>
      </div>
      <section className="w-full">
        <div className="flex flex-wrap ">
          <div className="w-full md:w-1/2 p-4 ">
            <div className="p-4 md:w-10/12 bg-[#100821] z-10 rounded-lg border border-slate-950 ml-28">
              <h2 className="text-left text-3xl font-bold text-white my-4">Apply On Section</h2>
              <p className='text-[#9891ab] my-4 text-start'>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.</p>
              <img
                loading="lazy"
                decoding="async"
                width="552"
                height="357"
                src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img11.png"
                alt="Apply On Section"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 ">
            <div className="p-4 md:w-10/12 bg-[#100821] z-10 rounded-lg border border-slate-950 mr-28 mt-24 ">
              <h2 className="text-left text-3xl font-bold text-white my-4">Apply On Page</h2>
              <p className='text-[#9891ab] my-4 text-start'>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
              <img
                loading="lazy"
                decoding="async"
                width="552"
                height="397"
                src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img10.png"
                alt="Apply On Page"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#160f26] p-8 rounded-lg mx-auto my-8 w-10/12 z-10 border border-slate-950 mr-28 mt-24">
    <div className="flex flex-col items-center">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-[#eee6ff]">Supported by All Popular Browsers</h2>
            <p className="text-[#eee6ff]">Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
        </div>
        <div className="text-center">
            <img className="mx-auto" loading="lazy" decoding="async" src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img8.png" alt="Motion Art Image" />
        </div>
    </div>
</section>





      
    </section>
    
  );
}

export default MySection;
