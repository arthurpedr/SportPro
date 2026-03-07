// ─── Componente Reutilizável ───────────────────────────────────────────────
function ReviewCard({ rating = 5, comment = "", author = "", date = "" }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-sm w-full flex flex-col gap-3">
      {/* Estrelas */}
      <div className="flex gap-0.5 text-xl text-yellow-400">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i}>{i < rating ? "★" : "☆"}</span>
        ))}
      </div>

      {/* Comentário */}
      <p className="text-gray-800 text-sm leading-relaxed">
        "{comment}"
      </p>

      {/* Rodapé */}
      <div className="flex justify-between items-center mt-1">
        <span className="text-gray-900 font-semibold text-sm">{author}</span>
        <span className="text-gray-400 text-xs">{date}</span>
      </div>
    </div>
  );
}

// ─── Dados de exemplo ─────────────────────────────────────────────────────
const reviews = [
  {
    id: 1,
    rating: 5,
    comment:
      "Produtos de excelente qualidade! A meia antiderrapante superou minhas expectativas.",
    author: "Ana Silva",
    date: "Há 2 dias",
  },
  {
    id: 2,
    rating: 5,
    comment: "Entrega rápida, produto de qualidade! Recomendo a todos.",
    author: "Carlos Mendes",
    date: "Há 5 dias",
  },
  {
    id: 3,
    rating: 5,
    comment: "Atendimento excelente meu produto chegou antes do prazo previsto.",
    author: "Juliana Costa",
    date: "Há 1 semana",
  },
];

// ─── App ──────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className=" bg-gray-100 flex flex-col items-center justify-center gap-5 px-4 py-10">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-600 text-center">
          O que nossos clientes estão dizendo
        </h1>
        <p className="text-lg">
          Mais de 50 clientes satisfeitos
        </p>
      <div className="flex flex-col md:flex-row gap-5 bg-gray-100 items-center justify-center px-4 py-10">
          {reviews.map((r) => (
            <ReviewCard
              key={r.id}
              rating={r.rating}
              comment={r.comment}
              author={r.author}
              date={r.date}
            />
          ))}
      </div>
    </div>
  );
}