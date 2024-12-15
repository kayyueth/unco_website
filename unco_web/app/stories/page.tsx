"use client";
import Map from '@/components/ui/map';
import { useEffect,  useState } from "react";

export default function Stories() {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight * 1.5; // Adjust maximum scroll point
      const opacity = Math.max(1 - scrollTop / maxScroll, 0);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-full">
      {/* Fixed Background Section */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <div
          className="relative w-full h-full"
          style={{ opacity: scrollOpacity }}
        >
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
      </div>

      {/* Spacer to occupy space for the fixed section */}
      <div className="h-screen"></div>

      {/* Gradient Overlay */}
      <div className="relative z-10 inset-x-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
        
      {/* Content Section */}
      <div className="relative z-20 bg-white pt-44">
        <div className="flex flex-col items-center w-full">
          <div className="w-[53%] min-h-[250px] text-left text-midGray text-5xl font-by57">
            <h1>DECENTRALIZED <br/>STORIES</h1>
          </div>
          <div className="w-[34%] min-h-[250px] text-left ml-[25%] flex flex-col gap-3">
            
            <h1 className="text-brown text-lg">What's happening in the decentralized <br/> mini-societies in the global world?</h1>
            <p className="text-lightGray text-sm">Click to view the stories <br/> from Uncommons community members.</p>
          </div>
          <div className="w-full mt-6 mb-44">
            <Map />
          </div>
          {/* <div><Map/></div> */}
          <div className="w-[53%] min-h-[250px] text-left">
            <h1 className="text-black text-lg">The World Above World: <br/> Entering an Uncommon Layer of Reality</h1>
          </div>
        </div>
      </div>
    </div>
  );
}