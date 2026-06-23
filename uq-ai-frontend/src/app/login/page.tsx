"use client";

import { useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);
  const [intentos, setIntentos] = useState(0);
  const [bloqueadoHasta, setBloqueadoHasta] = useState(0);

  const bloqueado = Date.now() < bloqueadoHasta;
  const segundos = Math.ceil((bloqueadoHasta - Date.now()) / 1000);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();

    if (bloqueado) return;

    setLoading(true);
    setMensaje("");

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        { email, password }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("rol", response.data.rol);

      window.location.href = "/dashboard";
    } catch {
      const nuevosIntentos = intentos + 1;
      setIntentos(nuevosIntentos);

      if (nuevosIntentos >= 3) {
        setBloqueadoHasta(Date.now() + 30000);
        setIntentos(0);
        setMensaje("Demasiados intentos. Espere 30 segundos.");
      } else {
        setMensaje("Credenciales incorrectas");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background:
          "linear-gradient(135deg, #020617 0%, #0f172a 50%, #111827 100%)",
      }}
    >
      <form
        onSubmit={login}
        className="bg-slate-900/95 border border-amber-500/20 p-10 rounded-2xl w-full max-w-md shadow-2xl"
      >
        <div className="text-center mb-8">
          <p className="text-amber-400 tracking-widest text-sm font-semibold">
            UQ AI BUSINESS SOLUTIONS
          </p>

          <h1 className="text-white text-4xl font-serif font-bold mt-3">
            Acceso Corporativo
          </h1>

          <p className="text-slate-400 mt-3">
            Ingrese sus credenciales para continuar
          </p>
        </div>

        <input
          className="w-full p-3 mb-4 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-amber-400 outline-none"
          placeholder="Correo corporativo"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="w-full p-3 mb-4 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-amber-400 outline-none"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          disabled={loading || bloqueado}
          className="w-full bg-amber-400 text-slate-950 py-3 rounded-lg font-bold hover:bg-amber-300 transition disabled:opacity-50"
        >
          {loading
            ? "Validando..."
            : bloqueado
            ? `Bloqueado ${segundos}s`
            : "Iniciar Sesión"}
        </button>

        {mensaje && (
          <p className="text-amber-300 mt-4 text-center">
            {mensaje}
          </p>
        )}
      </form>
    </div>
  );
}