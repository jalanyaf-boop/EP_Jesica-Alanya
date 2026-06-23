export default function Lab() {
  const proyectos = ["Prototipos IA", "Demos empresariales", "Investigación aplicada", "Proyectos con estudiantes"];

  return (
    <section id="lab" className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">UQ AI Lab</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {proyectos.map((proyecto) => (
            <div key={proyecto} className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-lg font-bold">{proyecto}</h3>
              <p className="text-gray-400 mt-2">Innovación, pruebas y comunidad IA.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}