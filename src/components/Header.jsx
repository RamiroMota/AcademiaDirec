import React from 'react'

import { Link } from 'react-router-dom'

import { RiNotification2Line , RiArrowDownSLine, RiVerifiedBadgeFill,RiSpam3Fill, RiAtFill } from 'react-icons/ri'

import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';

function Header() {
  return (
    <header className='h-[7vh] md:h-[5vh] border-b border-gray-700 p-8 flex items-center justify-end'>
      <nav className='flex items-center gap-x-1'>
        <Menu
          menuButton={
            <MenuButton className=' relative hover:bg-gray-700 p-2 rounded-lg transition-colors'>
            <RiNotification2Line className='w-6 h-6'/>
            <span class="absolute -top-0.5 right-0 px-[5px] py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">2</span>
          </MenuButton>
        }
        transition
        menuClassName="bg-gray-800 P-4"
        >
          <h1 className='text-slate-300 text-center font-medium mb-4'>Notificaciones</h1>
          <div className='h-[1px] bg-gray-500 w-full'></div>
            <MenuItem className="p-0 hover:bg-transparent">
              <Link to="/" className='flex items-center gap-2 py-1 px-2 hover:bg-gray-700 ease-in duration-500 transition-colors rounded-lg'>
              <RiVerifiedBadgeFill className='w-8 h-8 text-green-500 bg-green-100 rounded-full' />
                <div className='text-sm flex flex-col'>
                  <div className='flex items-center justify-between gap-4'>
                    <span className='text-slate-300 font-medium'>Fernando Arreola</span>{' '}
                    <span className='text-[12px] text-slate-300'>16/10/2024</span>
                  </div>
                  <p className='text-slate-500 font-medium'>[Tu equipo se aprobó.]</p>
                </div>
              </Link>
            </MenuItem>
            <MenuItem className="p-0 hover:bg-transparent">
              <Link to="/" className='flex items-center gap-2 py-1 px-2 hover:bg-gray-700 ease-in duration-500 transition-colors rounded-lg'>
              <RiSpam3Fill className='w-8 h-8 text-red-500 bg-red-100 rounded-full' />
                <div className='text-sm flex flex-col'>
                  <div className='flex items-center justify-between gap-4'>
                    <span className='text-slate-300 font-medium'>Fernando Arreola</span>{' '}
                    <span className='text-[12px] text-slate-300'>16/10/2024</span>
                  </div>
                  <p className='text-slate-500 font-medium'>[Tu equipo no se aprobó.]</p>
                </div>
              </Link>
            </MenuItem>
          </Menu>
        <Menu menuButton={
          <MenuButton className='flex items-center gap-x-2 hover:bg-gray-700 p-2 rounded-lg transition-colors'>
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Avatar.jpg" className='w-8 h-8 p-0.5 rounded-full object-cover ring-2 ring-green-400' />
            <span>Herman Perez López</span>
            <RiArrowDownSLine />
          </MenuButton>}
          menuClassName="bg-gray-800 P-4"
          >
          <h1 className='text-slate-300 text-center font-medium mb-4'><span class="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">Docente</span></h1>
          <div className='h-[1px] bg-gray-500 w-full'></div>
            <MenuItem className="p-0 hover:bg-transparent">
              <Link to="/" className='flex items-center gap-2 py-1 px-2 hover:bg-gray-700 ease-in duration-500 transition-colors rounded-lg'>
              <RiAtFill className='w-8 h-8 text-orange-500 bg-orange-100 rounded-full' />
                <div className='text-sm flex flex-col'>
                  <div className='flex items-center justify-between gap-4'>
                    <span className='text-slate-300 font-medium'>hernan.perez@upgch.mx</span>
                  </div>
                  <p className='text-slate-500 font-medium'>[Dirección de Negocios]</p>
                </div>
              </Link>
            </MenuItem>
        </Menu>
      </nav>
    </header>
  )
}

export default Header