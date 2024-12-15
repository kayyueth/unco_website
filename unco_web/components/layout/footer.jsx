"use client";

export const Footer = () => {
  return (
    <footer className="w-3/5 bg-transparent mt-10 flex items-center mx-auto">
      <div className="w-full">
        {/* Desktop View */}
        <hr className="hidden md:block border-gray-300 py-2"/>
        <div className="hidden md:flex items-center justify-between mb-24">
          <img src='/logo_icon.svg'/>
          <ul className="flex justify-around space-x-8 font-medium">
            <li>
              <a
                href="https://uncommons.notion.site/"
                className="text-black hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Notion
              </a>
            </li>
            <li>
              <a
                href="https://telegram.me/theuncommons"
                className="text-black hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
            </li>
            <li>
              <a
                href="https://blog.uncommons.cc"
                className="text-black hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="https://x.com/Un__commons"
                className="text-black hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>
            </li>
          </ul>
        </div>
        <p className="text-gray-400 flex mb-20">@Uncommons 2024</p>

        {/* Mobile View */}
        <div className="md:hidden">
          <p className="text-gray-800 font-medium border-b border-gray-300 py-3">Find Us</p>
          <ul className="divide-y divide-gray-300">
            <li className="flex justify-between items-center py-3">
              <a
                href="https://uncommons.notion.site"
                className="text-gray-800 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Notion
              </a>
              <span>&#8599;</span>
            </li>
            <li className="flex justify-between items-center py-3">
              <a
                href="https://telegram.me/theuncommons"
                className="text-gray-800 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
              <span>&#8599;</span>
            </li>
            <li className="flex justify-between items-center py-3">
              <a
                href="https://x.com/Un__commons"
                className="text-gray-800 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                X (Twitter)
              </a>
              <span>&#8599;</span>
            </li>
            <li className="flex justify-between items-center py-3">
              <a
                href="https://blog.uncommons.cc"
                className="text-gray-800 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
              <span>&#8599;</span>
            </li>
          </ul>
        </div>
      </div>
          {/* Footer Note */}
        <div className="mt-6 mb-5 ml-5 text-left text-gray-800 text-sm md:hidden">
          &copy; Uncommons 2024
      </div>
    </footer>
  );
};
