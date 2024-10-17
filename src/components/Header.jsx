import React from 'react'

import { Link } from 'react-router-dom'

import { RiNotification2Line , RiArrowDownSLine } from 'react-icons/ri'

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
          <h1 className='text-slate-300 text-center font-medium'>Notificaciones</h1>
          <div className='h-[2px] bg-gray-500 w-full'></div>
            <MenuItem className="p-0 hover:bg-transparent">
              <Link to="/" className='flex items-center gap-2 py-1 px-2 hover:bg-gray-700 transition-colors rounded-lg'>
              <img src="./fernando.webp" alt="avatar.webp" className='w-10 h-10 rounded-full object-cover' />
                <div className='text-sm flex flex-col'>
                  <div className='flex items-center justify-between gap-4'>
                    <span className='text-slate-300 font-medium'>Dr. Fernando Arreola</span>{' '}
                    <span className='text-[12px] text-slate-300'>16/10/2024</span>
                  </div>
                  <p className='text-slate-500 font-medium'>[Correcciones de Secuencia didáctica]</p>
                </div>
              </Link>
            </MenuItem>
            <MenuItem className="p-0 hover:bg-transparent">
              <Link to="/" className='flex items-center gap-2 py-1 px-2 hover:bg-gray-700 transition-colors rounded-lg'>
              <img src="./fernando.webp" alt="avatar.webp" className='w-10 h-10 rounded-full object-cover' />
                <div className='text-sm flex flex-col'>
                  <div className='flex items-center justify-between gap-4'>
                    <span className='text-slate-300 font-medium'>Dr. Fernando Arreola</span>{' '}
                    <span className='text-[12px] text-slate-300'>16/10/2024</span>
                  </div>
                  <p className='text-slate-500 font-medium'>[Correcciones de Secuencia didáctica]</p>
                </div>
              </Link>
            </MenuItem>
            <MenuItem className="p-0 hover:bg-transparent">
              <Link to="/" className='flex items-center gap-2 py-1 px-2 hover:bg-gray-700 transition-colors rounded-lg'>
              <img src="./fernando.webp" alt="avatar.webp" className='w-10 h-10 rounded-full object-cover' />
                <div className='text-sm flex flex-col'>
                  <div className='flex items-center justify-between gap-4'>
                    <span className='text-slate-300 font-medium'>Dr. Fernando Arreola</span>{' '}
                    <span className='text-[12px] text-slate-300'>16/10/2024</span>
                  </div>
                  <p className='text-slate-500 font-medium'>[Correcciones de Secuencia didáctica]</p>
                </div>
              </Link>
            </MenuItem>
          </Menu>
        <Menu menuButton={
          <MenuButton className='flex items-center gap-x-2 hover:bg-gray-700 p-2 rounded-lg transition-colors'>
            <img src="./fernando.webp" alt="Avatar.jpg" className='w-8 h-8 p-0.5 rounded-full object-cover ring-2 ring-green-400' />
            <span>Herman Perez López</span>
            <RiArrowDownSLine />
          </MenuButton>}
          menuClassName="bg-gray-800 text-slate-300  rounded-lg shadow-lg"
          >
            <MenuItem>Cut</MenuItem>
            <MenuItem>Copy</MenuItem>
            <MenuItem>Paste</MenuItem>
        </Menu>
      </nav>
    </header>
  )
}

export default Header