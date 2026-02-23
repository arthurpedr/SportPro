import { IoIosArrowForward } from "react-icons/io";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1765302741884-e846c7a178df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Atleta treinando"
          className="h-full w-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/80 via-blue-800/70 to-blue-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl space-y-6">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-1 text-sm font-semibold text-gray-900 shadow-lg">
              🔥 MEGA PROMOÇÃO — ATÉ 10% OFF
            </span>

            {/* Title */}
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Equipamentos Esportivos de
              <span className="block text-yellow-400">
                Alta Performance
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-blue-100 md:text-xl">
              Alcance seus objetivos com os melhores produtos esportivos do mercado.
              Qualidade profissional, desempenho máximo e preços imbatíveis.
            </p>

            {/* Actions */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#ofertas"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-gray-900 transition-all hover:bg-yellow-500 hover:shadow-lg"
              >
                Ver Ofertas
                <IoIosArrowForward className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#produtos"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition-all hover:bg-white/20 hover:shadow-lg"
              >
                Explorar Produtos
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}