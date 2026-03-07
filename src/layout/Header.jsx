import { useState, useEffect, useRef } from "react";
import { LuTrendingUp } from "react-icons/lu";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import Button from "../components/Button";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > 0) {
        headerRef.current.classList.add("scrolled");
      } else {
        headerRef.current.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear o scroll quando o menu estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
      <header
      ref={headerRef}
      id="main-header"
      className="fixed w-full flex justify-around bg-white  top-0 left-0 text-black font-bold z-50 transition-all duration-300"
    >
      <div className="flex max-lg:w-[90vw] w-7xl items-center justify-between py-4">
        {/* Logo */}
        <div>
            <a href="/inicio" className="flex items-center gap-2">
              <LuTrendingUp className="text-blue-600 size-8" />
              <p className="text-2xl font-bold text-gray-900">SportPro</p>
            </a>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-x">
          <ul className="flex items-center gap-8">
            <li>
              <a className="underline-hover" href="#Produtos">Produtos</a>
            </li>
            <li>
              <a className="underline-hover" href="#Ofertas">Ofertas</a>
            </li>
            <li>
              <a className="underline-hover" href="#Sobre">Sobre</a>
            </li>
            <li>
              <a className="underline-hover" href="#Contato">Contato</a>
            </li>
          </ul>
        </nav>

        <div className="flex justify-center items-center gap-5">
           <FaMagnifyingGlass className="size-5"/>
           <FiShoppingCart className="size-5"/>
           <Button />
            
            {/* Botão Menu Mobile */}
        <button
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle Menu"
          className="md:hidden right-0 z-60"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} className="menuanimation" />}
        </button>
        </div>

        
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <nav className="md:hidden fixed top-0 left-0 w-full h-screen bg-white/5 backdrop-blur-lg z-40 flex flex-col items-center justify-center text-lg font-bold text-white transition-all duration-300">
          <ul className="flex flex-col items-center justify-center gap-6">
            <li>
              <a className="underline-hover" onClick={toggleMenu} href="#Produtos">Produtos</a>
            </li>
            <li>
              <a className="underline-hover" onClick={toggleMenu} href="#Ofertas">Ofertas</a>
            </li>
            <li>
              <a className="underline-hover" onClick={toggleMenu} href="#Sobre">Sobre</a>
            </li>
            <li>
              <a className="underline-hover" onClick={toggleMenu} href="#Contato">Contato</a>
            </li>
            <li>
              <a className="px-6 py-2 bg-blue-600 rounded-lg" onClick={toggleMenu} href="#">Entre</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
