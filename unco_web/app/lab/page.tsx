'use client';
import { useState } from "react";

const Lab = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen); 
  };

  return (
      <div>
        <div className="flex flex-col items-center md:w-4/5 mx-auto">

              {/* Mobile-Only Image */}
            <div className="md:hidden w-full">
              <img src="/lab_mobile.svg" className="w-full"/>
            </div>

            {/* Mobile-Version Title */}
            <div className="md:hidden absolute top-[16%] left-[10%] md:items-center md:text-left text-midGray font-by57 text-2xl">
              <h1>DECENTRALIZATION<br/>CULTURE LAB</h1>
            </div>

            {/* Web-Version Title */}
            <div className="hidden md:mt-44 md:w-[53%] md:min-h-[500px] md:flex md:items-center md:text-left text-midGray font-by57 md:text-5xl">
              <h1>Decentralization<br/>Culture Lab</h1>
            </div>
            
            <div className="mt-20 w-full flex flex-col px-20 md:items-center md:flex-row md:items-start md:gap-10 md:gap-[10%] px-6 md:px-[100px]">
              {/* Web-Only Image */}
              <img
                src="/lab_img.svg"
                className="w-full max-w-[310px] md:w-[40%] object-contain hidden sm:block"
                alt="Sculpture"
              />

              {/* Content Section */}
              <h1 className="md:hidden font-by57 text-2xl text-[8AAFAF]">01 LAB PROJECTS</h1>
              <div className="flex flex-wrap gap-12 text-left text-midGray text-sm">
                <div className="w-full lg:max-w-[45%]">
                  <h1 className="font-semibold text-lg mb-2 mt-2">Summer of Protocols CN</h1>
                  <p className="text-black mt-3">
                    Tech Art Project. Supported over 10 artists and writers, focusing on new
                    media art, crypto art, and anonymous culture research. Initiated by
                    Ethereum Foundation, co-sponsored by Ethereum Foundation and GCC.
                  </p>
                </div>
                <div className="w-full lg:max-w-[45%]">
                  <h1 className="font-semibold text-lg mb-2">Raw School</h1>
                  <p className="text-black mt-3">
                    Uncommons' crypto study room, focusing on open-style liberal arts
                    education. Driven by peer-to-peer discussions and mentorship, aiming to
                    enhance community members' understanding of crypto humanities.
                  </p>
                </div>
                <div className="w-full lg:max-w-[45%]">
                  <h1 className="font-semibold text-lg mb-2">Regenerative crypto-economics</h1>
                  <p className="mt-3">
                    Broadcasting regenerative finance and crypto culture in China. In 2023,
                    our squad translated the GreenPill and ImpactDAO books. Over the next two
                    years, community members conducted dozens of podcast interviews on
                    related topics.
                  </p>
                </div>
                <div className="w-full  lg:max-w-[45%]">
                  <h1 className="font-semibold text-lg mb-2 text-brown">Decentralized Science</h1>
                  <p className="mt-3">
                    Uncommons' (formerly GreenPill CN community) lecture series,
                    discussions, and articles on decentralized science. Additionally,
                    Uncommons has donated $10,000 to the DeSci ecosystem.
                  </p>
                </div>

                {/* More Section */}
                <div className="w-full lg:max-w-[45%]">
                  <div className="md:hidden w-full border-t border-gray-300 my-4"></div>
                  <div className="flex justify-between ml-2 md:ml-0 mr-2">
                    <h1 className="md:font-semibold text-lg mb-1 mt-1">More</h1>
                    <img
                      src="/plus_icon.svg"
                      alt="Toggle Content"
                      className="cursor-pointer w-4 h-4 mt-2 md:hidden"
                      onClick={toggleContent}
                    />
                  </div> 
                  <p className={`${
                        isOpen ? "block" : "hidden"
                      } md:block ml-2 md:ml-0 text-gray-600 underline`}
                    >
                    On-chain Governance <br />
                    Crypto Regulation <br />
                    Ethereum Translation Team
                  </p>
                  <div className="md:hidden w-full border-t border-gray-300 my-4"></div>
                </div>

              </div>
            </div>


            <div className="flex flex-col mt-44 mb-44 w-full gap-2 items-center md:w-[53%] md:items-start">
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <img
                  src="/lab_book1.svg"
                  className="w-1/3 md:w-1/5 md:max-h-[200px] object-contain"
                  alt="book1"
                />
                <img
                  src="/lab_book2.svg"
                  className="w-1/3 md:w-1/5 md:max-h-[200px] object-contain"
                  alt="book2"
                />
                <img
                  src="/lab_book3.svg"
                  className="w-1/3 md:w-1/5 md:max-h-[200px] object-contain"
                  alt="book3"
                />
                <img
                  src="/lab_book4.svg"
                  className="w-1/3 max-h-[185px] md:w-1/6 md:max-h-[170px] object-contain"
                  alt="book4"
                />
              </div>
              <p className="italic text-brown text-left">Books published by Uncommons</p>
            </div>
        </div>
    </div>
  );
}

export default Lab;
