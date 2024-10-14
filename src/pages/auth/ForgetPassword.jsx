import React from 'react'
import { Link } from 'react-router-dom'

function ForgetPassword() {
  return (
    <div className=" bg-gray-800 p-8 rounded-xl drop-shadow-md w-auto lg:w-[450px] items-center">
    <h1 className=" text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
      Recupera contraseña
    </h1>
    <form className=" bg-gray-800 mb-8">
      <div className="relative mb-4">
        <i className="ri-mail-line absolute top-1/2 -translate-y-1/2 left-2" />
        <input
          className=" py-3 pl-8 pr-4 bg-gray-900 w-full outline-none rounded-lg"
          type="email"
          placeholder="Correo electrónico"
        />
      </div>
      <div>
        <button
          className="bg-gray-900 hover:bg-yellow-600 transition duration-700 font-medium w-full py-3 px-4 rounded-lg outline-none"
          type="submit"
        >
          Enviar instrucciones
        </button>
      </div>
    </form>
    <div className=" flex flex-col gap-4 items-center">
      <span className=' flex items-center gap-2'>¿Ya tienes cuenta?
        <Link to="/auth" className='text-teal-500 hover:text-white underline decoration-teal-500 hover:decoration-white'>inicia sesión</Link>
      </span>
      <span className=' flex items-center gap-2'>¿No tienes cuenta?
      <Link
        className=" text-teal-500 hover:text-white underline decoration-teal-500 hover:decoration-white"
        to="/auth/registro"
      >
        Regístrate aquí
      </Link>
      </span>
    </div>
  </div>
  )
}

export default ForgetPassword