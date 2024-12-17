"use client";
import Map from '@/components/ui/map';
/* import { useEffect,  useState } from "react"; */
import FallingBlocks from '@/components/ui/falling_block';
import { StoriesList } from '@/components/ui/stories_list';

export default function Stories() {
  return (
    <div className="relative w-screen h-full overflow-x-hidden">
      {/* Fixed Background Section */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        
        {/* <div
          className="relative w-full h-full"
          style={{ opacity: scrollOpacity }}
        > */}
          <img
            className="w-full h-full object-cover"
            src="/stories_bg.svg"
            alt="Background"
          />
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="/stories_overlay.svg"
            alt="Overlay"
          />
        </div>

      {/* Spacer to occupy space for the fixed section */}
      <div className="flex h-screen items-center">
        <h1 className='text-left px-[10%] md:px-[25%] text-midGray text-3xl md:text-5xl font-by57 z-10'>DECENTRALIZATION <br/>CULTURE LAB</h1>
      </div>

      {/* Gradient Overlay */}
      <div className="w-full relative z-10 h-32 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
        
      {/* Content Section */}
      <div className="relative z-20 bg-white pt-44 pb-28">
        <div className="flex flex-col items-center w-full">
{/*       <div className="w-[53%] min-h-[250px] text-left text-midGray text-5xl font-by57">
            
          </div> */}
          <div className="px-[10%] w-full min-h-[250px] text-left md:ml-[75%] flex flex-col gap-3">
            
            <h1 className="text-brown text-base md:text-lg">What's happening in the decentralized <br/> mini-societies in the global world?</h1>
            <p className="text-lightGray text-sm">Click to view the stories <br/> from Uncommons community members.</p>
          </div>
          <div className="w-full mt-6 mb-44">
            <Map />
          </div>
          <StoriesList/>
          {/* <div><Map/></div> */}
          <div className="px-[10%] w-full md:ml-[30%] min-h-[200px] text-left flex items-center">
            <h1 className="text-base md:text-lg">The World Above World: <br/> Entering an Uncommon Layer of Reality</h1>
          </div>
        </div>

        {/* <div className='flex justify-center z-100'>
            <FallingBlocks />
        </div> */}

        <div className='flex justify-center mt-10'>
          <img src='/pedals/sum.svg'/>
        </div>

      </div>
    </div>
  );
}