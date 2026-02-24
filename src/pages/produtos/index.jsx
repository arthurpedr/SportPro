import Cards from "../../components/CardsdProdutos";

const products = [
  {
    id: 1,
    image: "/tenis1.png",
    title: "Tênis de Corrida Pro",
    discount: "-25%",
    rating: 4,
    reviews: 234,
    price: "R$ 299,90",
    oldPrice: "R$ 399,90",
    installment: "ou 10x de R$ 29,99 sem juros",
  },
  {
    id: 2,
    image: "/tenis2.png",
    title: "Tênis Urban Flex",
    discount: "-15%",
    rating: 5,
    reviews: 112,
    price: "R$ 249,90",
    oldPrice: "R$ 289,90",
    installment: "ou 8x de R$ 31,23 sem juros",
  },
  {
    id: 3,
    image: "/tenis3.png",
    title: "Tênis Runner X",
    rating: 4,
    reviews: 98,
    price: "R$ 199,90",
    installment: "ou 6x de R$ 33,31 sem juros",
  },
  {
    id: 4,
    image: "/tenis4.png",
    title: "Tênis Runner X",
    rating: 4,
    reviews: 98,
    price: "R$ 199,90",
    installment: "ou 6x de R$ 33,31 sem juros",
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
