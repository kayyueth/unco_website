"use client";
import { MoveRight } from 'lucide-react';
import { useEffect, useState } from "react";
import Image from 'next/image';

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
          <Image
            className="w-full h-full object-cover overflow-hidden"
            src="/home_bg.svg"
            alt="Background"
            width={1512}
            height={950}
          />
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src="/home_overlay.svg"
            alt="Overlay"
            width={1512}
            height={563}
          />
          <Image
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src="/home_ellipse.svg"
            alt="Overlay"
            width={236}
            height={509}
          />
        </div>
      </div>

      {/* Spacer to create scroll effect */}
      <div className="h-screen"></div>

      {/* Gradient Overlay */}
      <div className="relative z-10 inset-x-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent"></div>

      {/* Content Section with Full White Background */}
      <div className="relative z-10 bg-white">
 
        <div className="text-left px-[10%] md:text-center">
          <h1 className="text-4xl font-by57">Uncommons</h1>
          <h3 className="text-xl font-by57">IS A RESEARCHER GARDEN</h3>
          <p className="mt-8 font-spacemono">FOR DECENTRALIZED THOUGHT</p>
          <p className="font-spacemono">AND TECHNO-SOCIAL PHILOSOPHIES</p>
          <div className='flex items-center md:justify-center mt-[60px] space-x-2'>
            <a
              href="https://uncommons.notion.site/"
              className="flex justify-center underline"
            >
              Join us
            </a>
            <MoveRight strokeWidth={1} />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 py-24 px-[10%] w-full md:w-3/5 mx-auto">
        
        {/* Getting Started */}
        <div className="flex flex-row gap-4 md:flex-col items-center">
          <a
            href="https://uncommons.notion.site/Onboarding-Guide-1512d6bf93b8800aa876fde907caa7ba?pvs=4"
            className="flex-shrink-0"
          >
            <Image
              src="/home_pic1.svg"
              alt="Getting Started"
              width={116}
              height={99}
              className="w-[90px] h-auto md:w-[80px] md:h-[80px] object-contain"
            />
          </a>
          <div className="flex flex-col text-start md:text-center">
            <a
              href="https://uncommons.notion.site/Onboarding-Guide-1512d6bf93b8800aa876fde907caa7ba?pvs=4"
              className="hover:underline"
            >
              <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
            </a>
            <p className="text-sm leading-relaxed text-gray-600">
              Follow Alice down the rabbit hole into our digital garden with our onboarding guide.
            </p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-row gap-4 items-center md:flex-col items-start">
          <a
            href="https://blog.uncommons.cc/"
            className="flex-shrink-0"
          >
            <Image
              src="/home_pic2.svg"
              alt="Newsletter"
              width={100}
              height={90}
              className="w-[90px] h-auto md:w-[80px] md:h-[80px] object-contain"
            />
          </a>
          <div className="flex flex-col text-start md:text-center">
            <a
              href="https://blog.uncommons.cc/"
              className="hover:underline"
            >
              <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
            </a>
            <p className="text-sm leading-relaxed text-gray-600">
              Digital digest curated by our community. Subscribe to Uncommons&apos; newsletter to read
              original stories, or contribute your own.
            </p>
          </div>
        </div>

        {/* Town Hall */}
        <div className="flex flex-row gap-4 md:flex-col items-center">
          <a
            href="https://calendar.google.com/calendar/embed?src=bdd312e1a2003f5bbac8fdf3748450c9ea093a58a2cd35f186d958c87df3c25e%40group.calendar.google.com&ctz=Asia%2FSingapore"
            className="flex-shrink-0"
          >
            <Image
              src="/home_pic3.svg"
              alt="Town Hall"
              width={100}
              height={86}
              className="w-[90px] h-auto md:w-[80px] md:h-[80px] object-contain"
            />
          </a>
          <div className="flex flex-col text-start md:text-center">
            <a
              href="https://calendar.google.com/calendar/embed?src=bdd312e1a2003f5bbac8fdf3748450c9ea093a58a2cd35f186d958c87df3c25e%40group.calendar.google.com&ctz=Asia%2FSingapore"
              className="hover:underline"
            >
              <h3 className="text-lg font-semibold mb-2">Town Hall</h3>
            </a>
            <p className="text-sm leading-relaxed text-gray-600">
              Meet up in cyberspace and say hi! Join our Community Call every Friday. See you there!
            </p>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}
