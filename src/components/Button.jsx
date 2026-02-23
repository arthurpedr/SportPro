function Button() {
  return (
    <button className="group relative hidden md:inline-flex items-center justify-center overflow-hidden rounded-lg border border-blue-600 px-6 py-2 shadow-[#3B82F6]/90 transition hover:shadow-lg">
      {/* Barrinha inferior */}
      <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-600 transition-all duration-300 group-hover:h-full"></span>

      {/* Texto */}
      <span className="relative z-10 text-lg font-medium text-black transition-colors duration-300 group-hover:text-white">
        Entre
      </span>
    </button>
  );
}

export default Button;
