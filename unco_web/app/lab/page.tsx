
export default function Lab() {
  return (
      <div>
        <div className="relative items-center w-4/5 mx-auto">

{/*             <div className="mt-44 md:w-[53%] min-h-[500px] flex items-center text-left text-midGray text-5xl font-by57">
              <h1>Decentralization<br/>Culture Lab</h1>
            </div> */}

            <div className="relative h-screen">
              <h1 className='absolute px-5 top-1/2 md:left-1/3 transform -translate-y-1/2 md:-translate-x-1/2 text-left text-midGray text-3xl md:text-5xl font-by57 z-10'>DECENTRALIZATION <br/>CULTURE LAB</h1>
            </div>
            
            <div className="flex flex-col">
              <h1 className="font-by57">01 LAB PROJECTS</h1>
              {/* <div className="mt-20 w-full flex flex-col px-20 items-center md:flex-row md:items-start gap-10 md:gap-[10%] px-6 md:px-[100px]"> */}
            {/* <img src="/lab_img.svg" className="w-full max-w-[310px] md:w-[40%] object-contain" alt="Sculpture" />*/}  
              {/* Content Section */}
              <div className="flex flex-wrap gap-12 text-left text-midGray text-sm md:w-[80%]">
                <div className="w-full lg:max-w-[45%]">
                  <h1 className="font-semibold text-lg mb-2 text-brown">Summer of Protocols CN</h1>
                  <p className="text-black">
                    Tech Art Project. Supported over 10 artists and writers, focusing on new
                    media art, crypto art, and anonymous culture research. Initiated by
                    Ethereum Foundation, co-sponsored by Ethereum Foundation and GCC.
                  </p>
                </div>
                <div className="w-full lg:max-w-[45%]">
                  <h1 className="font-semibold text-lg mb-2 text-brown">Raw School</h1>
                  <p className="text-black">
                    Uncommons' crypto study room, focusing on open-style liberal arts
                    education. Driven by peer-to-peer discussions and mentorship, aiming to
                    enhance community members' understanding of crypto humanities.
                  </p>
                </div>
                <div className="w-full lg:max-w-[45%]">
                  <h1 className="font-semibold text-lg mb-2 text-brown">Regenerative crypto-economics</h1>
                  <p className="text-black">
                    Broadcasting regenerative finance and crypto culture in China. In 2023,
                    our squad translated the GreenPill and ImpactDAO books. Over the next two
                    years, community members conducted dozens of podcast interviews on
                    related topics.
                  </p>
                </div>
                <div className="w-full  lg:max-w-[45%]">
                  <h1 className="font-semibold text-lg mb-2 text-brown">Decentralized Science</h1>
                  <p className="text-black">
                    Uncommons' (formerly GreenPill CN community) lecture series,
                    discussions, and articles on decentralized science. Additionally,
                    Uncommons has donated $10,000 to the DeSci ecosystem.
                  </p>
                </div>
                <div className="w-full lg:max-w-[45%]">
                  <h1 className="font-semibold text-lg mb-2 text-brown">More</h1>
                  <p className="text-black">
                    On-chain Governance <br />
                    Crypto Regulation <br />
                    Ethereum Translation Team
                  </p>
                </div>
              </div>
            {/* </div> */}
            
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