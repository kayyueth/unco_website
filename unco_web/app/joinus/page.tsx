import { MoveRight } from 'lucide-react';

export default function JoinUs() {
    return (
      <div className="relative items-center w-full mx-auto">
        <div className="flex px-[10%] md:px-[25%] mt-80 items-center">
          <h1 className='text-left text-midGray text-3xl md:text-5xl font-by57 z-10'>RESEARCH SCOPE</h1>
        </div>
        <div className="flex px-[10%] md:px-[25%] mt-20 mb-20 items-center">
          <img src='/joinus_dandelion.svg'/>
        </div>

        <div className="flex flex-col w-full px-[10%] md:px-[25%]">
          <h1 className='text-left text-midGray text-3xl md:text-5xl font-by57'>RESEARCH HOUSE</h1>
          <div className="mt-16 mb-16 text-left">
            <p>In 2025, Uncommons will explore opportunities to provide funding for PhD candidates and early career academics in humanities and social sciences.</p>
            <div className='flex mt-6 space-x-2'>
                <a>Early Apply Here</a>
                <MoveRight 
                strokeWidth={1}
                />
            </div>
          </div>

          <hr className="border-t border-gray-300" />

          <div className="text-left mt-20">
            <h3 className='font-semibold'>Our<br/>Advisor</h3>
            <p className='mt-6'>
                Michel Bauwens is the founder of P2P Foundation, a renowned theoretical
                scholar in the fields of distributed networks, macro-historical cycles, and
                existential risks. During the early development of Bitcoin, Satoshi Nakamoto
                engaged in discussions on the 
                <a 
                    href="https://p2pfoundation.net" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="underline mx-1 my-1"
                > 
                P2P Foundation forum
                </a>
                and had multiple private email exchanges with Michel.</p>
          </div>
          <div className='flex flex-col mt-16 mb-[6%] md:flex-row gap-16'>
            <div className="text-left flex-[1]">
                <h3 className='font-semibold'>Cooperative<br/>Network</h3>
                <div className='flex flex-row gap-20 md:flex-col md:gap-0 mt-6'>
                  <p>
                      GCC<br/>PlanckerDAO<br/>4SEAS<br/>ETHPanda<br/>LXDAO<br/>AAStar
                  </p>
                  <p>
                    OptimisimCN<br/>dDAO<br/>Shanhaiwoo<br/>Wamotopia<br/>the mu<br/>DeSci Asia
                  </p>
                </div>

            </div>
            <div className="text-left flex-[2]">
                <h3 className='font-semibold'>Our<br/>Partner</h3>
                <p className='mt-6'>
                    P2P Foundation<br/>metagov<br/>Institute of Network Society<br/>Matters<br/>Ethereum Development Conference (EDCON Tokyo)<br/>GreenPill Network<br/>reality.design<br/>706 Community<br/>Social Layer<br/>Creat0rs<br/>Ethereum Community Network (ECN)<br/>DHK DAO
                </p>
            </div>
          </div>

            </div>
        </div>
    );
}