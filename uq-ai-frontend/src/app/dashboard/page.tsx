"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type Lead = {
  id: number;
  nombre: string;
  email: string;
  empresa: string;
  telefono: string;
  mensaje: string;
  fechaRegistro: string;
};

export default function Dashboard() {
  const [rol, setRol] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const rolGuardado = localStorage.getItem("rol");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    setRol(rolGuardado || "");

    if (rolGuardado === "ADMIN") {
      axios
        .get("http://localhost:8080/api/leads", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setLeads(res.data))
        .catch(() => console.log("No se pudieron cargar leads"));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-serif font-bold text-white">
          Panel Ejecutivo
        </h1>

        <button
          onClick={logout}
          className="bg-amber-400 text-slate-950 px-5 py-2 rounded-lg font-bold hover:bg-amber-300 transition"
        >
          Cerrar Sesión
        </button>
      </div>

      <div className="bg-slate-900 border border-amber-500/20 p-6 rounded-xl mb-6">
        <h2 className="text-2xl font-bold text-amber-400">
          Centro de Gestión Empresarial
        </h2>

        <p className="mt-3 text-slate-300">
          Plataforma de monitoreo y gestión de soluciones inteligentes.
        </p>

        <p className="mt-3 text-slate-400">
          Impulsando la transformación digital mediante Inteligencia Artificial.
        </p>

        <p className="mt-4">
          Rol: <strong className="text-amber-300">{rol}</strong>
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl border border-amber-500/20">
          <h3 className="text-lg font-bold text-amber-400">
            📊 Proyectos
          </h3>
          <p className="text-3xl font-black mt-2">24</p>
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl border border-amber-500/20">
          <h3 className="text-lg font-bold text-amber-400">
            🤖 Soluciones IA
          </h3>
          <p className="text-3xl font-black mt-2">12</p>
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl border border-amber-500/20">
          <h3 className="text-lg font-bold text-amber-400">
            📈 Crecimiento
          </h3>
          <p className="text-3xl font-black mt-2">+18%</p>
        </div>
      </div>

      {rol === "ADMIN" ? (
        <div className="bg-slate-900 border border-amber-500/20 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-amber-400">
            Oportunidades Comerciales
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-slate-700">
              <thead>
                <tr className="bg-slate-800 text-amber-300">
                  <th className="p-3 border border-slate-700">Nombre</th>
                  <th className="p-3 border border-slate-700">Email</th>
                  <th className="p-3 border border-slate-700">Empresa</th>
                  <th className="p-3 border border-slate-700">Teléfono</th>
                  <th className="p-3 border border-slate-700">Mensaje</th>
                </tr>
              </thead>

              <tbody>
                {leads.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="p-6 text-center text-slate-400 border border-slate-700"
                    >
                      No hay oportunidades comerciales registradas.
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-800/70">
                      <td className="p-3 border border-slate-700">
                        {lead.nombre}
                      </td>
                      <td className="p-3 border border-slate-700">
                        {lead.email}
                      </td>
                      <td className="p-3 border border-slate-700">
                        {lead.empresa}
                      </td>
                      <td className="p-3 border border-slate-700">
                        {lead.telefono}
                      </td>
                      <td className="p-3 border border-slate-700">
                        {lead.mensaje}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-slate-900 border border-amber-500/20 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-amber-400">
            Perfil Profesional
          </h2>

          <p className="text-slate-300">
            Como usuario USER puede visualizar su información de perfil y acceder
            a los recursos asignados por la organización.
          </p>
        </div>
      )}
    </div>
  );
}