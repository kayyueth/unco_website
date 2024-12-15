import Map from '@/components/ui/map' 
import Stats from '@/components/ui/stats' 

export default function Stories() {
  return (
      <div>
        <div className="relative mb-36">
          <img className="w-full inset-0 object-cover" src='/stories_bg.svg' />
          <img className="w-full absolute inset-0" src='/stories_overlay.svg' />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
        </div>

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
        <div className='flex justify-center'>
          <Stats />
        </div>

    </div>
  );
}