import {
  Bot,
  MessageSquare,
  Cpu,
  Building2,
  GraduationCap,
  BarChart3,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Consultoría en IA",
      icon: <Bot size={40} />,
      desc: "Diseñamos soluciones inteligentes alineadas a los objetivos del negocio.",
    },
    {
      title: "Chatbots Empresariales",
      icon: <MessageSquare size={40} />,
      desc: "Automatización de atención al cliente con enfoque profesional.",
    },
    {
      title: "Automatización de Procesos",
      icon: <Cpu size={40} />,
      desc: "Optimizamos tareas operativas para mejorar productividad y eficiencia.",
    },
    {
      title: "Soluciones para Empresas",
      icon: <Building2 size={40} />,
      desc: "Implementación tecnológica para organizaciones en crecimiento.",
    },
    {
      title: "Academia Corporativa",
      icon: <GraduationCap size={40} />,
      desc: "Capacitación en inteligencia artificial, datos y transformación digital.",
    },
    {
      title: "Analítica y Big Data",
      icon: <BarChart3 size={40} />,
      desc: "Convertimos datos en información estratégica para la toma de decisiones.",
    },
  ];

  return (
    <section id="servicios" className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-amber-400 tracking-widest font-semibold mb-3">
          SERVICIOS PROFESIONALES
        </p>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12">
          Soluciones IA para Empresas
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-slate-900 border border-amber-500/20 p-8 rounded-2xl hover:border-amber-400 transition shadow-lg"
            >
              <div className="mb-5 text-amber-400">
                {s.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {s.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}