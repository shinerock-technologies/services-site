"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import NavItem from "./NavItem";
import { useModal } from "../../contexts/ModalContext";

const navigations = [
  {
    label: "Consulting",
    emoji: "",
    path: "/consulting",
    color: "text-purple-500",
  },
  {
    label: "Development",
    emoji: "",
    path: "/development",
    color: "text-purple-500",
  },
  {
    label: "Automations",
    emoji: "",
    path: "/automations",
    color: "text-purple-500",
  },
];

const Header = () => {
  const { openModal } = useModal();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="">
      <header className="h-20 relative ">
        <div className="flex flex-row items-center justify-between w-full py-4 px-0 text-lg">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-between w-auto z-50">
            <ul className="flex items-center gap-6 text-base flex-row">
              {navigations.map((nav) => (
                <NavItem
                  key={nav.label + nav.color + nav.emoji + nav.path}
                  label={nav.label}
                  emoji={nav.emoji}
                  path={nav.path}
                  color={nav.color}></NavItem>
              ))}
              <li>
                <button
                  onClick={openModal}
                  className="border border-zinc-500 hover:bg-zinc-500 hover:text-white px-6 py-2 font-semibold transition-colors text-customBlack dark:text-white">
                  Get In Touch
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 z-50"
            aria-label="Toggle menu">
            <span
              className={`w-6 h-0.5 bg-customBlack dark:bg-white transition-all ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}></span>
            <span
              className={`w-6 h-0.5 bg-customBlack dark:bg-white transition-all ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}></span>
            <span
              className={`w-6 h-0.5 bg-customBlack dark:bg-white transition-all ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-white dark:bg-zinc-900 z-40 transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}>
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            <ul className="flex flex-col items-center gap-8 text-2xl">
              {navigations.map((nav) => (
                <li key={nav.label + nav.path} onClick={handleMobileMenuClick}>
                  <Link
                    href={nav.path}
                    className="text-customBlack dark:text-white hover:text-gray-600 dark:hover:text-gray-400">
                    {nav.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    openModal();
                    handleMobileMenuClick();
                  }}
                  className="border border-zinc-500 hover:bg-zinc-500 hover:text-white px-8 py-3 font-semibold transition-colors text-customBlack dark:text-white text-xl">
                  Get In Touch
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
