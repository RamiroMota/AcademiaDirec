import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//iconos
import { 
  RiHome3Line,
  RiBookOpenLine,
  RiMenuSearchLine,
  RiLogoutBoxRLine,
  RiArrowDropRightLine
 } from "react-icons/ri";

const Sidebar = () => {
  const [showSubmenu1, setShowSubmenu1] = useState(false);
  const [showSubmenu2, setShowSubmenu2] = useState(false);
  return (
    <div className="xh:h-[100vh] fixed xl:static w-full h-full -left-full top-0 bg-gray-800 p-8 flex flex-col justify-between">
      <div>
        <h1 className=' text-center text-2xl font-bold text-white mb-10'>Plataforma<span className=' text-amber-500 text-4xl'>.</span></h1>
        <ul>
          <li>
            <Link to='/' className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-black transition-colors"><RiHome3Line className='text-amber-500'/>Inicio</Link>
          </li>
          <li>
            <button onClick={() => setShowSubmenu1(!showSubmenu1)} className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-black transition-colors" type="button">
              <RiBookOpenLine className='text-amber-500'/>Calidad Educativa<RiArrowDropRightLine className={`w-6 h-6 mt-1 ${showSubmenu1 && "rotate-90"} transition-all`} />
            </button>
            <ul className={`my-2 ${!showSubmenu1 && "hidden"}`}>
              <li>
                  <Link to="/" className='py-2 px-4 border-l border-gray-400 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-amber-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-gray-800 hover:transition-colors hover:text-white'>Secuencia Didáctica</Link>
              </li>
            </ul>
          </li>
          <li>
            <button onClick={() => setShowSubmenu2(!showSubmenu2)} className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-black transition-colors hover:text-white" type='button'>
              <RiMenuSearchLine className='text-amber-500'/>Investigación<RiArrowDropRightLine className={`w-6 h-6 mt-1 ${showSubmenu2 && "rotate-90"} transition-all`} />
            </button>
            <ul className={`my-2 ${!showSubmenu2 && "hidden"}`}>
              <li>
              <Link to="/" className='py-2 px-4 border-l border-gray-400 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-400 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-gray-800 hover:transition-colors hover:text-white'>Proyectos</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <nav>
          <Link to='/' className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-black transition-colors"> <RiLogoutBoxRLine className='text-amber-500'/>Cerrar Sesión</Link>
      </nav>
    </div>
  )
}

export default Sidebar