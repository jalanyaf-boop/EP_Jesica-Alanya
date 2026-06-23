"use client";

import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    empresa: "",
    telefono: "",
    mensaje: "",
  });

  const [respuesta, setRespuesta] = useState("");
  const [loading, setLoading] = useState(false);

  const cambiar = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:8080/api/leads", form);

      setRespuesta(
        "Gracias por contactarnos. Nuestro equipo se comunicará con usted."
      );

      setForm({
        nombre: "",
        email: "",
        empresa: "",
        telefono: "",
        mensaje: "",
      });
    } catch {
      setRespuesta(
        "No fue posible procesar la solicitud. Intente nuevamente."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="bg-slate-950 text-white py-24">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-amber-400 tracking-widest font-semibold mb-3">
            CONTACTO CORPORATIVO
          </p>

          <h2 className="text-5xl font-serif font-bold mb-4">
            Conversemos sobre su proyecto
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Nuestro equipo está preparado para ayudarle a implementar
            soluciones basadas en Inteligencia Artificial y Transformación
            Digital.
          </p>
        </div>

        <form
          onSubmit={enviar}
          className="bg-slate-900 border border-amber-500/20 p-10 rounded-2xl"
        >
          <div className="grid md:grid-cols-2 gap-5">

            <input
              name="nombre"
              value={form.nombre}
              onChange={cambiar}
              placeholder="Nombre Completo"
              required
              className="p-4 rounded-lg bg-slate-800 border border-slate-700 focus:border-amber-400 outline-none"
            />

            <input
              name="email"
              value={form.email}
              onChange={cambiar}
              type="email"
              placeholder="Correo Electrónico"
              required
              className="p-4 rounded-lg bg-slate-800 border border-slate-700 focus:border-amber-400 outline-none"
            />

            <input
              name="empresa"
              value={form.empresa}
              onChange={cambiar}
              placeholder="Empresa"
              className="p-4 rounded-lg bg-slate-800 border border-slate-700 focus:border-amber-400 outline-none"
            />

            <input
              name="telefono"
              value={form.telefono}
              onChange={cambiar}
              placeholder="Teléfono"
              className="p-4 rounded-lg bg-slate-800 border border-slate-700 focus:border-amber-400 outline-none"
            />

          </div>

          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={cambiar}
            rows={5}
            placeholder="Describa brevemente su requerimiento"
            className="w-full mt-5 p-4 rounded-lg bg-slate-800 border border-slate-700 focus:border-amber-400 outline-none"
          />

          <button
            disabled={loading}
            className="mt-6 w-full bg-amber-400 text-slate-950 py-4 rounded-lg font-bold hover:bg-amber-300 transition"
          >
            {loading ? "Enviando..." : "Solicitar Información"}
          </button>

          {respuesta && (
            <p className="text-center text-amber-300 mt-5">
              {respuesta}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}