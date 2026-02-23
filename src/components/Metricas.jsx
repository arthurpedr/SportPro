const stats = [
  { id: 1, name: 'clientes satisfeitos', value: '+44' },
  { id: 2, name: 'produtos disponíveis', value: '+125' },
  { id: 3, name: 'vendas realizadas', value: '+88' },
  { id: 4, name: 'faturamento', value: '+R$ 1200' },
]

export default function Stats() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <dl className="grid grid-cols-1 gap-y-12 gap-x-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center px-4
                ${index !== 0 ? 'lg:border-l lg:border-blue-600' : ''}
              `}
            >
              <dd className="order-first text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl">
                {stat.value}
              </dd>
              <dt className="mt-2 text-sm font-medium uppercase tracking-wide text-gray-700">
                {stat.name}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}