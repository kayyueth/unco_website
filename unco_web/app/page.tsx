import { MoveRight } from 'lucide-react';

export default function Home() {
  return (
    <div>
        <img className="w-full" src='/home_bg.svg' />
        <div className="flex justify-center">
            <img src='/home_flower.svg' className="flex mt-[80px]"/>
            <div className="absolute text-center mt-[76px]">
<<<<<<< HEAD
                <h1 className="text-4xl font-5by7">Uncommons</h1>
                <h3 className="text-xl font-5by7">IS A RESEARCHER GARDEN</h3>
                <p className="mt-10 font-spacemono">FOR DECENTRALIZED THOUGHT</p>
                <p className="font-spacemono">AND TECHNO-SOCIAL PHILOSOPHIES</p>
=======
                <h1 className="text-4xl font-spacemono">Uncommons</h1>
                <h3 className="text-xl font-spacemono">IS A RESEARCHER GARDEN</h3>
                <p className="mt-10 font-by7">FOR DECENTRALIZED THOUGHT</p>
                <p className="font-by7">AND TECHNO-SOCIAL PHILOSOPHIES</p>
>>>>>>> 7036c41e17361f9e429f6ea16e6841cee2175539
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