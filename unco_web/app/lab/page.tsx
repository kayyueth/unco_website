
export default function Lab() {
  return (
      <div>
        <div className="flex flex-col items-center w-full">

            <div className="mt-44 md:w-[53%] min-h-[500px] flex items-center text-left text-midGray text-5xl font-by57">
              <h1>Decentralization<br/>Culture Lab</h1>
            </div>
            
            <div className="mt-20 w-full flex flex-col px-20 items-center md:flex-row md:items-start gap-10 md:gap-[10%] px-6 md:px-[100px]">
              {/* Image Section */}
              <img
                src="/lab_img.svg"
                className="w-full max-w-[310px] md:max-w-[60%] object-contain"
                alt="Sculpture"
              />

              {/* Content Section */}
              <div className="flex flex-wrap gap-12 text-left text-midGray text-sm">
                <div className="w-full md:min-w-60 lg:max-w-[40%]">
                  <h1 className="font-bold text-lg mb-2">Summer of Protocols CN</h1>
                  <p>
                    Tech Art Project. Supported over 10 artists and writers, focusing on new
                    media art, crypto art, and anonymous culture research. Initiated by
                    Ethereum Foundation, co-sponsored by Ethereum Foundation and GCC.
                  </p>
                </div>
                <div className="w-full md:min-w-60 lg:max-w-[40%]">
                  <h1 className="font-bold text-lg mb-2">Raw School</h1>
                  <p>
                    Uncommons' crypto study room, focusing on open-style liberal arts
                    education. Driven by peer-to-peer discussions and mentorship, aiming to
                    enhance community members' understanding of crypto humanities.
                  </p>
                </div>
                <div className="w-full md:min-w-60 lg:max-w-[40%]">
                  <h1 className="font-bold text-lg mb-2">Regenerative crypto-economics</h1>
                  <p>
                    Broadcasting regenerative finance and crypto culture in China. In 2023,
                    our squad translated the GreenPill and ImpactDAO books. Over the next two
                    years, community members conducted dozens of podcast interviews on
                    related topics.
                  </p>
                </div>
                <div className="w-full md:min-w-60 lg:max-w-[40%]">
                  <h1 className="font-bold text-lg mb-2">Decentralized Science</h1>
                  <p>
                    Uncommons' (formerly GreenPill CN community) lecture series,
                    discussions, and articles on decentralized science. Additionally,
                    Uncommons has donated $10,000 to the DeSci ecosystem.
                  </p>
                </div>
                <div className="w-full md:min-w-60 lg:max-w-[40%]">
                  <h1 className="font-bold text-lg mb-2">More</h1>
                  <p>
                    On-chain Governance <br />
                    Crypto Regulation <br />
                    Ethereum Translation Team
                  </p>
                </div>
              </div>
            </div>


            <div className="w-[53%] min-h-[250px] text-left">
              <div>
                <img/>
              </div>
              <p className="">Books published by Uncommons</p>
            </div>
        </div>
    </div>
  );
}