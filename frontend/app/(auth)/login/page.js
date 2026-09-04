// app/(auth)/login/page.js
'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { FiSearch, FiShoppingCart, FiUserPlus, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { login } from '../../../src/services/auth.service';


export default function LoginPage() {
  const router = useRouter(); 
  const handleRegisterRedirect = () => {
  router.push('/register');
};

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await login(email, password);
    if (result.success){
      // AQui va la logica en caso de que el login sea exitoso

      console.log('Bienvenido', result.msg);
    } else {
      console.warn('Error: ', result.msg);
      // AQui va la logica en caso de algun problem al hacer login 
      // la variable 'result.msg' guarda  descripcion del error si lo quieren utilizar para un mensaje en pantalla

    }

  };

  
    
  return (
     <div className="flex h-screen">
      {/* Lado izquierdo */}
      <div className="w-1/2 colorprimario flex flex-col items-center justify-center text-center p-10">
        <h1 className="text-3xl font-bold mb-4">
           MisterOffice<br /> Descubre a los mejores productos
        </h1>
        <img
          src="/logo.png"
          alt="Ilustración ventas"
          className="w-3/4 max-w-sm my-6"
        />
        {/*< p className="text-sm text-gray-700">Arte por: Ilustrador/a</p>*/}
      </div>

      {/* Lado derecho */}
      <div className="w-1/2 flex items-center justify-center p-10">
        <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold text-center">Inicia sesión </h2>

          <button
           type="button"
           className="flex items-center justify-center w-full border border-gray-500 rounded-md bg-white hover:bg-gray-300 py-2 px-4 shadow-sm transition"
          >
           <img
            src="google.svg"
            alt="Google logo"
           className="w-5 h-5 mr-2"
          />
          <span className="text-sm text-gray-700 font-medium">Iniciar con Google</span>
          </button>

          <div className="text-center text-gray-500">O</div>

          
            <input
              type="text"
              placeholder="Usuario o correo"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />

            <input
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />

            <div className="text-right">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-pink-600"
            >
              Ingresar
            </button>

          <p className="text-center text-sm">
            ¿No tienes cuenta?{' '}
            <button onClick={handleRegisterRedirect} className="text-blue-600 hover:underline">
              Regístrate aquí  
            </button>
          </p>
        </form>
      </div>
    </div>
  )
  
}
