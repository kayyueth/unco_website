"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Menu from "./menu";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent">
      <div className="flex items-center justify-between mx-auto px-[10%] py-10">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2 z-30">
          <img src="/logo.svg" className="h-12" alt="Logo" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex md:items-center md:justify-center">
          <ul className="flex flex-row space-x-8 font-medium">
            <li>
              <a
                href="/stories"
                className={`py-2 px-4 rounded-lg hover:text-gray-700 ${
                  currentPath === "/stories" ? "text-[#C98392]" : "text-darkGray"
                }`}
              >
                Stories
              </a>
            </li>
            <li>
              <a
                href="/lab"
                className={`py-2 px-4 rounded-lg hover:text-gray-700 ${
                  currentPath === "/lab" ? "text-[#95B3C7]" : "text-darkGray"
                }`}
              >
                Lab
              </a>
            </li>
            <li>
              <a
                href="/joinus"
                className={`py-2 px-4 rounded-lg hover:text-gray-700 ${
                  currentPath === "/joinus" ? "text-[#84AF7F]" : "text-darkGray"
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
            className="py-2 px-4 text-darkGray hover:text-gray-700"
          >
            Connect Wallet
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-30 text-darkGray text-base font-medium focus:outline-none"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen z-20 bg-white">
          <Menu />
        </div>
      )}
    </nav>
  );
};
