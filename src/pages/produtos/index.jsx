import Cards from "../../components/CardsdProdutos";

const products = [
  {
    id: 1,
    image: "https://down-br.img.susercontent.com/file/sg-11134201-7rdxs-lyruz9eghs0700.webp",
    title: "Meias Antiderrapantes De Futebol",
    discount: "-26%",
    rating: 5,
    reviews: 130,
    price: "R$ 19,99",
    oldPrice: "R$ 27,15",
    installment: "ou 10x de R$ 1,99 sem juros",
  },
  {
    id: 2,
    image: "https://down-br.img.susercontent.com/file/sg-11134201-7rdwv-m166qhglffcw83.webp",
    title: "Fita Kinesio Tape",
    discount: "-30%",
    rating: 5,
    reviews: 458,
    price: "R$ 24,99",
    oldPrice: "R$ 35,80",
    installment: "ou 10x de R$ 2,49 sem juros",
  },
  {
    id: 3,
    image: "https://down-br.img.susercontent.com/file/br-11134207-81ztc-mj1hrcpkdxq96c.webp",
    title: "Bermuda De Compressão 2 Em 1 Dry Fit",
    discount: "-32%",
    rating: 4,
    reviews: 244,
    price: "R$ 54,90",
    oldPrice: "R$ 79,90",
    installment: "ou 10x de R$ 5,49 sem juros",
  },
];

function index() {
  return (
    <div id="Produtos"
     className="flex flex-col justify-center items-center mb-4">
      <div className="flex flex-col text-center px-2 mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-600">
          Produtos
        </h1>
        <p className="mt-4 text-lg">
          Selecionamos os melhores produtos com os maiores descontos
          especialmente para você
        </p>
      </div>

      <section className="max-w-7xl flex flex-wrap gap-6 justify-center">
        {products.map((product) => (
          <Cards key={product.id} {...product} />
        ))}
      </section>
    </div>
  );
}

export default index;
