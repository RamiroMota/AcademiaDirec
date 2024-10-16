import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [ShowPassword, SetShowPassword] = useState(false)

  return (
    <div className=" bg-gray-800 p-8 rounded-xl drop-shadow-md w-auto lg:w-[450px] items-center shadow-2xl shadow-gray-800">
      <h1 className=" text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
        Iniciar sesión
      </h1>
      <form className=" bg-gray-800 mb-8">
        <button className=" flex items-center justify-center py-3 px-4 gap-2 bg-gray-900 w-full rounded-full mb-8">
          <img
            className=" w-4 h-4"
            src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_-1024x1024.png"
          />
          Ingresa con cuenta institucional
        </button>
        <div className="relative mb-4">
          <i className="ri-mail-line absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            className=" py-3 pl-8 pr-4 bg-gray-900 w-full outline-none rounded-lg"
            type="email"
            placeholder="Correo electrónico"
          />
        </div>
        <div className="relative mb-4">
          <i className="ri-lock-line absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            className=" py-3 px-8 bg-gray-900 w-full outline-none rounded-lg"
            type={ShowPassword ? "text" : "password"}
            placeholder="Contraseña"
          />
          {ShowPassword ? (
            <i
              onClick={() => SetShowPassword(!ShowPassword)}
              className=" cursor-pointer ri-eye-2-line absolute top-1/2 -translate-y-1/2 right-2"
            />
          ) : (
            <i
              onClick={() => SetShowPassword(!ShowPassword)}
              className=" cursor-pointer ri-eye-close-line absolute top-1/2 -translate-y-1/2 right-2"
            />
          )}
        </div>
        <div>
          <button
            className="bg-gray-900 hover:bg-blue-600 transition duration-700 font-medium w-full py-3 px-4 rounded-lg outline-none"
            type="submit"
          >
            Ingresar
          </button>
        </div>
      </form>
      <div className=" flex flex-col gap-4 items-center">
        <Link to="/auth/recuperar-contraseña" className=' text-yellow-500'>¿Olvidaste tu contraseña?</Link>
        <Link
          className=" text-teal-500 hover:text-white underline decoration-teal-500 hover:decoration-white"
          to="/auth/registro"
        >
          Regístrate aquí
        </Link>
      </div>
    </div>
  );
}

export default Login