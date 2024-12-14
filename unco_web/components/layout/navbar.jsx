"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-20 bg-transparent">
      <div className="max-w-screen-xxl flex items-center justify-between mx-auto px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src="/logo.svg" className="h-12" alt="Logo" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex md:items-center md:justify-center">
          <ul className="flex flex-row space-x-8 font-medium">
            <li>
              <a
                href="/stories"
                className={`py-2 px-4 rounded-lg hover:text-gray-700 ${
                  currentPath === "/stories" ? "text-[#C98392]" : "text-gray-900"
                }`}
              >
                Stories
              </a>
            </li>
            <li>
              <a
                href="/lab"
                className={`py-2 px-4 rounded-lg hover:text-gray-700 ${
                  currentPath === "/lab" ? "text-[#C98392]" : "text-gray-900"
                }`}
              >
                Lab
              </a>
            </li>
            <li>
              <a
                href="/joinus"
                className={`py-2 px-4 rounded-lg hover:text-gray-700 ${
                  currentPath === "/joinus" ? "text-[#C98392]" : "text-gray-900"
                }`}
              >
                Join us
              </a>
            </li>
          </ul>
        </div>

        {/* Connect Wallet (Desktop Only) */}
        <div className="hidden md:flex">
          <a
            href="#"
            className="py-2 px-4 text-gray-900 hover:text-gray-700"
          >
            Connect Wallet
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-900 text-base font-medium focus:outline-none"
        >
          Menu
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="w-[90%] bg-white bg-opacity-80 rounded-lg shadow-md absolute top-full left-1/2 transform -translate-x-1/2 z-10 md:hidden">
          <ul className="flex flex-col font-medium text-left py-3 px-5 divide-y divide-gray-500">
            <li className="relative group">
              <a
                href="/stories"
                className={`block py-4 px-4 rounded-l hover:text-[#C98292] hover:text- ${
                  currentPath === "/stories" ? "text-[#C98392]" : "text-gray-900"
                }`}
              >
                Stories
              </a>
              <div className="absolute inset-0 bg-transparent rounded-lg group-hover:opacity-50"></div>
            </li>
            <li className="relative group">
              <a
                href="/lab"
                className={`block py-4 px-4 rounded-lg hover:bg-[#C98292] hover:text-white ${
                  currentPath === "/lab" ? "text-[#C98392]" : "text-gray-900"
                }`}
              >
                Lab
              </a>
              <div className="absolute inset-0 bg-transparent rounded-lg group-hover:bg-[#C98292] group-hover:opacity-50"></div>
            </li>
            <li className="relative group">
              <a
                href="/joinus"
                className={`block py-4 px-4 rounded-lg hover:text-[#C98292] hover:text-white ${
                  currentPath === "/joinus" ? "text-[#C98392]" : "text-gray-900"
                }`}
              >
                Join us
              </a>
              <div className="absolute inset-0 bg-transparent rounded-lg group-hover:bg-[#C98292] group-hover:opacity-50"></div>
            </li>
            <li className="relative group">
              <a
                href="#"
                className="block py-4 px-4 rounded-lg hover:bg-[#C98292] hover:text-white text-gray-900"
              >
                Connect Wallet
              </a>
              <div className="absolute inset-0 bg-transparent rounded-lg group-hover:bg-[#C98292] group-hover:opacity-50"></div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
