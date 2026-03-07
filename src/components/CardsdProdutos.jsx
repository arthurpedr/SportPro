import { ShoppingCart } from "lucide-react";

export default function CardsdProdutos({
  image,
  title,
  discount,
  rating,
  reviews,
  price,
  oldPrice,
  installment,
}) {
  return (
    <div className="w-100 rounded-2xl bg-white hover:shadow-xl overflow-hidden transition-shadow duration-300 border border-gray-300">
      {/* Imagem */}
      <div className="relative bg-pink-400">
        {discount && (
          <span className="absolute top-3 left-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
            {discount}
          </span>
        )}

        <img
          src={image}
          alt={title}
          className="object-contain object-center hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Conteúdo */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>

        {/* Avaliação */}
        <div className="flex items-center gap-1 text-sm">
          <span className="text-yellow-400">
            {"★".repeat(rating)}
            {"☆".repeat(5 - rating)}
          </span>
          <span className="text-gray-400">({reviews})</span>
        </div>

        {/* Preço */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-blue-600">
              {price}
            </span>
            {oldPrice && (
              <span className="text-sm text-gray-400 line-through">
                {oldPrice}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600">
            {installment}
          </p>
        </div>

        {/* Botão */}
        <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 text-white font-medium transition hover:bg-blue-700 cursor-pointer">
          <ShoppingCart size={18} />
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}