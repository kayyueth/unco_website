import { MoveRight } from 'lucide-react';

export default function Homepage() {
    return (
        <div>
            <img className="w-full" src='/home_bg.svg' />
            <div className="flex justify-center">
                <img src='/home_flower.svg' className="flex mt-[80px]"/>
                <div className="absolute text-center mt-[76px]">
                    <h1 className="text-4xl">Uncommons</h1>
                    <h3 className="text-xl">IS A RESEARCHER GARDEN</h3>
                    <p className="mt-10">FOR DECENTRALIZED THOUGHT</p>
                    <p>AND TECHNO-SOCIAL PHILOSOPHIES</p>
                    <div className='flex items-center justify-center mt-[100px] space-x-2'>
                        <a
                        href="https://uncommons.notion.site"
                        className="flex justify-center underline"
                        >
                            Join us
                        </a>
                        <MoveRight 
                            strokeWidth={1}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}