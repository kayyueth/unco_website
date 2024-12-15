"use client";
import { MoveRight } from 'lucide-react';
import { useEffect, useState } from "react";

export default function Home() {
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
    <div>
      {/* Fixed Background Section */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <div
          className="relative w-full h-full"
          style={{ opacity: scrollOpacity }}
        >
          <img
            className="w-full h-full object-cover overflow-hidden"
            src="/home_bg.svg"
            alt="Background"
          />
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="/home_overlay.svg"
            alt="Overlay"
          />
          <img
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src="/home_ellipse.svg"
            alt="Overlay"
          />
        </div>
      </div>

      {/* Spacer to create scroll effect */}
      <div className="h-screen"></div>

      {/* Gradient Overlay */}
      <div className="relative z-10 inset-x-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent"></div>

      {/* Content Section with Full White Background */}
      <div className="relative z-10 bg-white">
 
        <div className="text-center">
          <h1 className="text-4xl font-by57">Uncommons</h1>
          <h3 className="text-xl font-by57">IS A RESEARCHER GARDEN</h3>
          <p className="mt-8 font-spacemono">FOR DECENTRALIZED THOUGHT</p>
          <p className="font-spacemono">AND TECHNO-SOCIAL PHILOSOPHIES</p>
          <div className='flex items-center justify-center mt-[60px] space-x-2'>
            <a
              href="https://uncommons.notion.site/"
              className="flex justify-center underline"
            >
              Join us
            </a>
            <MoveRight strokeWidth={1} />
          </div>
        </div>

        {/* Content Grid */}
        <div className="flex flex-row mt-[260px] w-3/5 mx-auto justify-center items-center items-stretch">
          <div className="w-[33%] p-4 flex flex-col">
            <a href="https://uncommons.notion.site/Onboarding-Guide-1512d6bf93b8800aa876fde907caa7ba?pvs=4">
              <div className="flex justify-center mb-9">
                <img src="/home_pic1.svg" className="w-[116px] h-[99px]" />
              </div>
              <h3 className='text-center mb-3 text-lg'>Getting Started</h3>
            </a>
            <p>Follow Alice down the rabbit hole into our digital garden with our onboarding guide.</p>
          </div>
          <div className="w-[33%] p-4 flex flex-col">
            <a href="https://blog.uncommons.cc/">
              <div className="flex justify-center mb-9">
                <img src="/home_pic2.svg" className="w-[116px] h-[99px]" />
              </div>
              <h3 className='text-center mb-3 text-lg'>Newsletter</h3>
            </a>
            <p>Digital digest curated by our community. Subscribe to Uncommons' newsletter to read original stories, or contribute your own.</p>
          </div>
          <div className="w-[33%] p-4 flex flex-col">
            <a href="https://calendar.google.com/calendar/embed?src=bdd312e1a2003f5bbac8fdf3748450c9ea093a58a2cd35f186d958c87df3c25e%40group.calendar.google.com&ctz=Asia%2FSingapore">
              <div className="flex justify-center mb-9">
                <img src="/home_pic3.svg" className="w-[116px] h-[99px]" />
              </div>
              <h3 className='text-center mb-3 text-lg'>Town Hall</h3>
            </a>
            <p>Meet up in cyberspace and say hi! Join our Community Call every Friday. See you there!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
