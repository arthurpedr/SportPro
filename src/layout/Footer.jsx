import { LuTrendingUp } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footertwo() {
  return (
    <div id="Contato"
    className="w-full text-black py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        <div>
       
          <a
            href="/main-header"
            className="flex justify-center items-center gap-2"
          >
            <LuTrendingUp className="text-blue-600 size-8" />
            <p className="text-2xl font-bold text-gray-900">SportPro</p>
          </a>
      
        </div>

        <div className="flex flex-col text-center gap-2 font-semibold">
          <p className="font-bold mb-2">Links úteis</p>
          <ul className="flex flex-col items-center gap-4">
            <li>
              <a className="underline-hover" href="#Produtos">
                Produtos
              </a>
            </li>
            <li>
              <a className="underline-hover" href="#Ofertas">
                Ofertas
              </a>
            </li>
            <li>
              <a className="underline-hover" href="#Sobre">
                Sobre
              </a>
            </li>
            <li>
              <a className="underline-hover" href="#Contato">
                Contato
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col text-center lg:text-left gap-2">
          <p className="font-bold mb-2">Redes Sociais</p>
          <div className="flex flex-col justify-center items-center gap-4">
            <FaInstagram className="size-12 hover:bg-blue-600 hover:text-white transition-colors p-2 rounded-2xl" />
            <FaFacebook className="size-12 hover:bg-blue-600 hover:text-white transition-colors p-2 rounded-2xl" />
            <FaXTwitter className="size-12 hover:bg-blue-600 hover:text-white transition-colors p-2 rounded-2xl" />
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-4">
          <p className="font-bold mb-2">Entre em contato</p>
              <div className="flex gap-2">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Insira seu e-mail"
                    className="mt-4 w-full max-w-xs p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button type="button" className="mt-4 bg-blue-600 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Entre</button>
              </div>
        </div>
      </div>

      <div className="w-full text-center mt-10 py-4 border-t">
        <p className="text-sm md:text-base">
          &copy; SportPro 2026 - Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}
export default Footertwo;
