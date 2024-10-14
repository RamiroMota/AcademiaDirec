import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className=' overflow-y-scroll contenedor xl:static xl:h-screen fixed w-full h-full -left-full top-0 bg-gray-800 p-8'>
      <div>
        <h1 className=' text-center text-2xl font-semibold text-white'>Admin<span className=' text-amber-500 text-4xl'>.</span></h1>
        <nav>
          <Link to='/' className=' flex items-center gap-4 py-2 px-4 rounded-lg'><i className="ri-bar-chart-grouped-line text-violet-600"/>Estadísticas</Link>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar