"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [logueado, setLogueado] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLogueado(!!token);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-slate-950/95 backdrop-blur-md border-b border-amber-500/10 z-50">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-serif font-bold text-white">
            UQ AI
          </h1>
          <p className="text-xs text-amber-400 tracking-widest">
            BUSINESS SOLUTIONS
          </p>
        </div>

        <ul className="hidden md:flex gap-8 items-center text-slate-300">
          <li>
            <a href="#servicios" className="hover:text-amber-400 transition">
              Servicios
            </a>
          </li>

          <li>
            <a href="#academy" className="hover:text-amber-400 transition">
              Academia
            </a>
          </li>

          <li>
            <a href="#lab" className="hover:text-amber-400 transition">
              Lab
            </a>
          </li>

          <li>
            <a href="#contacto" className="hover:text-amber-400 transition">
              Contacto
            </a>
          </li>

          {logueado ? (
            <li>
              <Link
                href="/dashboard"
                className="bg-amber-400 text-slate-950 px-5 py-2 rounded-lg font-semibold"
              >
                Dashboard
              </Link>
            </li>
          ) : (
            <li>
              <Link
                href="/login"
                className="border border-amber-400 text-amber-300 px-5 py-2 rounded-lg hover:bg-amber-400 hover:text-slate-950 transition"
              >
                Iniciar Sesión
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}