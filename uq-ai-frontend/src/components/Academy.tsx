export default function Academy() {
  const cursos = ["IA para empresas", "Machine Learning", "RAG", "LLM", "Agentes inteligentes", "Cloud Computing"];

  return (
    <section id="academy" className="bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">UQ AI Academy</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {cursos.map((curso) => (
            <div key={curso} className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold">{curso}</h3>
              <p className="text-gray-400 mt-2">Curso especializado con enfoque práctico.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}