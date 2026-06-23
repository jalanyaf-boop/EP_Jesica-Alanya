export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-950 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(212,175,55,0.18), transparent 30%), linear-gradient(120deg, #020617 0%, #0f172a 55%, #111827 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <p className="text-amber-400 font-semibold tracking-widest mb-4">
          UQ AI BUSINESS SOLUTIONS
        </p>

        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
          Transformando negocios con
          <span className="block text-amber-300">
            Inteligencia Artificial
          </span>
        </h1>

        <p className="text-xl text-slate-300 max-w-2xl mb-10">
          Soluciones inteligentes para empresas que buscan innovar,
          optimizar procesos y alcanzar resultados sostenibles.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#servicios"
            className="bg-amber-400 text-slate-950 px-8 py-4 rounded-lg font-bold hover:bg-amber-300 transition"
          >
            Conocer Más
          </a>

          <a
            href="#contacto"
            className="border border-slate-500 px-8 py-4 rounded-lg font-bold hover:border-amber-400 hover:text-amber-300 transition"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
}