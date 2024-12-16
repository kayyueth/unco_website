"use client";

export const Footer = () => {
  return (
    <footer className="w-full bg-white relative z-20 flex items-center justify-center mx-auto ">
      <div className="w-full px-[10%] mt-10 ">
        <hr className="border-gray-300 py-2"/>
        <div className="flex items-center justify-between md:mb-24 mb-16">
          < img src='/logo_icon.svg'/>
          <ul className="flex justify-around space-x-4 text-sm md:text-lg font-medium">
            <li>
              <a
                href=" "
                className="text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                Notion
              </a >
            </li>
            <li>
              <a
                href="https://telegram.me/theuncommons"
                className="text-black hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a >
            </li>
            <li>
              <a
                href="https://blog.uncommons.cc"
                className="text-black hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a >
            </li>
            <li>
              <a
                href="https://x.com/Un__commons"
                className="text-black hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a >
            </li>
          </ul>
        </div>
        <p className="text-gray-400 flex text-sm md:text-lg md:mb-20 mb-16">@Uncommons 2024</p >
      </div>
    </footer>
  );
};