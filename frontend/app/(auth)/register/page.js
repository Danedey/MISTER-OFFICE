// app/(auth)/register/page.js

'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { registrar } from '../../../src/services/auth.service';
import { register } from "next/dist/next-devtools/userspace/pages/pages-dev-overlay-setup";


export default function Registro() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e)  => {
    e.preventDefault();
    // console.log("Nombre:", nombre);
    // console.log("Correo:", email);
    // console.log("Contraseña:", password);

    const result = await registrar(nombre, email, password);
    if (result.success){
      // AQui va la logica en caso de que el registro sea exitoso

      console.log('Bienvenido', result.msg);
    } else {
      console.warn('Error: ', result.msg);
      // AQui va la logica en caso de algun problem al hacer un registro 
      // la variable 'result.msg' guarda  descripcion del error si lo quieren utilizar para un mensaje en pantalla

    }

    // router.push('/dashboard');
  };

  const irLogin = () => {
    router.push("/login");
  };

  return (
    <div className="flex h-screen font-sans">
      {/* Lado izquierdo */}
      <div
        className="w-1/2 colorprimario flex flex-col items-center justify-center text-center p-10"
      >
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          MisterOffice <br /> Descubre los mejores productos
        </h1>
        <img
          src="/logo.png"
          alt="Ilustración ventas"
          className="w-3/4 max-w-sm my-6"
        />
      </div>

      {/* Lado derecho */}
      <div className="w-1/2 flex items-center justify-center p-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm space-y-4 "
        >
          <h2 className="text-2xl font-semibold text-center mb-4">Crear Cuenta</h2>
             <button
           type="button"
           className="flex items-center justify-center w-full border border-gray-500 rounded-md bg-white hover:bg-gray-300 py-2 px-4 shadow-sm transition"
          >
           <img
            src="google.svg"
            alt="Google logo"
           className="w-5 h-5 mr-2"
          />
          <span className="text-sm text-gray-700 font-medium">Registrarse con Google</span>
          </button>

          <div className="text-center text-gray-500">O</div>

          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />


          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-pink-600"
          >
            Registrarse
          </button>

          <p className="text-center text-sm">
            ¿Ya tienes una cuenta?{' '}
            <button
              type="button"
              onClick={irLogin}
              className="text-blue-600 hover:underline"
            >
              Inicia sesión
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

