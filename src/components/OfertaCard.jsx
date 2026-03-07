const imageColumns = [
  [
    {
      src: "https://down-br.img.susercontent.com/file/sg-11134201-22100-yxhj6wc2t4iv36.webp",
      hiddenOnSm: true,
    },
    {
      src: "https://down-br.img.susercontent.com/file/sg-11134201-7rdxs-lyruz9eghs0700.webp",
    },
  ],
  [
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg",
    },
    {
      src: "https://down-br.img.susercontent.com/file/sg-11134201-7rdwv-m166qhglffcw83.webp",
    },
    {
      src: "https://down-br.img.susercontent.com/file/cn-11134207-7ras8-mdfvqt90jm5v49.webp",
    },
  ],
  [
    {
      src: "https://down-br.img.susercontent.com/file/br-11134207-81ztc-mj1hrcpkdxq96c.webp",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg",
    },
  ],
];

export default function OfertaCard() {
  return (
    <div className="relative overflow-hidden bg-linear-to-br from-blue-600 via-blue-700 to-blue-900">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="mt-10">
            {/* Decorative image grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div className="absolute sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  {imageColumns.map((column, columnIndex) => (
                    <div
                      key={columnIndex}
                      className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                    >
                      {column.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          className={`h-64 w-44 overflow-hidden rounded-lg ${
                            image.hiddenOnSm
                              ? "sm:opacity-0 lg:opacity-100"
                              : ""
                          }`}
                        >
                          <img
                            src={image.src}
                            alt=""
                            className="size-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <div className="flex flex-col px-2 mb-4">
                      <h1 className="text-4xl md:text-6xl font-bold text-white">
                        Ofertas
                      </h1>
                      <p className="hidden md:flex mt-4 text-lg text-gray-200 w-130">
              Aproveite as melhores ofertas e descontos exclusivos em nossos produtos esportivos.
                      </p>
                    </div>
               <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition-all hover:bg-white/20 hover:shadow-lg"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}