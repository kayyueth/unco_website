import { MoveRight } from 'lucide-react';

export default function JoinUs() {
    return (
        <div>
            <div className="flex flex-col items-center w-full mt-[246px]">
                <div className="w-[53%] min-h-[200px] text-left text-gray-900">
                    <h1 className="font-by57 text-3xl">RESEARCHER HOUSE</h1>
                </div>
                <div className="w-[34%] min-h-[200px] text-left ml-[30%]">
                    <p>In 2025, Uncommons will explore opportunities to provide funding for PhD candidates and early career academics in humanities and social sciences.</p>
                    <div className='flex mt-6 space-x-2'>
                        <a>Early Apply Here</a>
                        <MoveRight 
                        strokeWidth={1}
                        />
                    </div>
                </div>
                <div className="w-[34%] text-left ml-[30%] mt-[160px]">
                    <h3>Our<br/>Advisor</h3>
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
                <div className="w-[34%] text-left ml-[30%] mt-[80px]">
                    <h3>Cooperative<br/>Network</h3>
                    <p className='mt-6'>
                        GCC, PlanckerDAO, 4SEAS, ETHPanda, LXDAO, AAStar, OptimisimCN, dDAO, Shanhaiwoo, Wamotopia, the mu, DeSci Asia
                    </p>
                </div>
                <div className="w-[34%] text-left ml-[30%] mt-[80px] mb-[6%]">
                    <h3>Our<br/>Partner</h3>
                    <p className='mt-6'>
                        Our Partner P2P Foundation, metagov, Institute of Network Society, Matters, Ethereum Development Conference (EDCON Tokyo), GreenPill Network, reality.design, 706 Community, Social Layer, Creat0rs, Ethereum Community Network (ECN), DHK DAO
                    </p>
                </div>
            </div>
        </div>
    );
}