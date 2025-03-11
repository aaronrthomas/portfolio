import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const socialLinks = [
    { Icon: BsLinkedin, url: "https://linkedin.com/in/https://www.linkedin.com/in/aaron-r-thomas-ba311931a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { Icon: BsWhatsapp, url: "https://wa.me/7034670789" },
    { Icon: BsInstagram, url: "https://www.instagram.com/aa.r.on_?igsh=MWh1b2YxYmRjeHZhaw==" },
    { Icon: BsGithub, url: "https://github.com/your-username" },
  ];

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      {/* Logo */}
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Aaron R Thomas
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10">
        {["Home", "Tech", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            <li>{item}</li>
          </a>
        ))}
      </ul>

      {/* Social Links (Desktop) */}
      <ul className="hidden md:flex gap-5">
        {socialLinks.map(({ Icon, url }, index) => (
          <li
            key={index}
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100"
          >
            <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Link to ${url}`}>
              <Icon />
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} aria-label="Close menu" />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} aria-label="Open menu" />
      )}

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start gap-10 border border-gray-800 bg-black/90 p-12 transition-transform duration-300">
          {/* Mobile Menu Items */}
          <ul className="flex flex-col gap-8">
            {["Home", "Tech", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
                onClick={closeMenu}
              >
                <li>{item}</li>
              </a>
            ))}
          </ul>

          {/* Social Links (Mobile) */}
          <ul className="flex gap-5">
            {socialLinks.map(({ Icon, url }, index) => (
              <li
                key={index}
                className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100"
              >
                <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Link to ${url}`}>
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
