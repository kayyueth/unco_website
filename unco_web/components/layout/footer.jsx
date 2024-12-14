"use client";

export const Footer = () => {
  return (
    <footer className="w-full bg-transparent mt-10">
      <div className="max-w-screen-xxl mx-auto px-10 py-4">
        {/* Desktop View */}
        <hr className="hidden md:block border-gray-300 py-2"/>
        <div className="hidden md:flex items-center justify-around py-2">
          <p className="text-gray-800 font-medium flex-1">Find Us</p>
          <ul className="flex justify-around space-x-8 font-medium flex-1">
            <li>
              <a
                href="#"
                className="text-gray-800 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Notion
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-800 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-800 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-800 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <p className="text-gray-800 font-medium border-b border-gray-300 py-3">Find Us</p>
          <ul className="divide-y divide-gray-300">
            <li className="flex justify-between items-center py-3">
              <a
                href="#"
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
                href="#"
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
                href="#"
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
                href="#"
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
