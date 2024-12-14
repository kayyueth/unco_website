
export default function Stories() {
  return (
      <div>
        <div className="relative mb-24">
          <img className="w-full inset-0 object-cover" src='/stories_bg.svg' />
          <img className="w-full absolute inset-0" src='/stories_overlay.svg' />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
        </div>

        <div className="flex flex-col items-center w-full">
            <div className="w-[53%] min-h-[200px] text-left text-gray-900">
              <h1>DECENTRALIZED STORIES</h1>
            </div>
            <div className="w-[34%] min-h-[200px] text-left ml-[30%]">
              
              <h1>What's happening in the decentralized <br/> mini-societies in the global world?</h1>
              <p>Click to view the stories <br/> from Uncommons community members.</p>
            </div>
            <div></div>
        </div>
    </div>
  );
}