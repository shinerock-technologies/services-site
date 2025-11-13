"use client";
import Link from "next/link";
import identity from "../../data/useIdentity";
import data from "../../data/useData";
import { useModal } from "../../contexts/ModalContext";

const Footer = () => {
  const { footer } = data;
  const { openModal } = useModal();

  return (
    <footer className="border-t border-zinc-500 mt-20">
      <div className="py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footer.sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-customBlack dark:text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.path}
                      className="text-gray-600 dark:text-gray-400 hover:text-customBlack dark:hover:text-white transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="border-t border-zinc-500 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="text-xl font-semibold text-customBlack dark:text-white mb-2">
                Ready to start your project?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Let's discuss how we can help bring your ideas to life.
              </p>
            </div>
            <button
              onClick={openModal}
              className="border border-zinc-500 hover:bg-zinc-500 hover:text-white px-6 py-3 font-semibold transition-colors text-customBlack dark:text-white whitespace-nowrap">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-zinc-500">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {identity.footer.copyright}
          </div>
          <div className="flex gap-6">
            <Link
              href={identity.social.linkedin}
              className="text-gray-600 dark:text-gray-400 hover:text-customBlack dark:hover:text-white transition-colors text-sm"
              target="_blank"
              rel="noopener noreferrer">
              LinkedIn
            </Link>
            <Link
              href={identity.social.github}
              className="text-gray-600 dark:text-gray-400 hover:text-customBlack dark:hover:text-white transition-colors text-sm"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
