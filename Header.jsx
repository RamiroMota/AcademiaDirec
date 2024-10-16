import React from 'react'

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
        arrow="arrow"
        arrowClassName="bg-gray-800"
        menuClassName="bg-gray-800 P-4"
        >
          <h1 className='text-slate-300 text-center font-medium'>Notificaciones</h1>
            <MenuItem className="p-0 hover:bg-transparent">Corrección</MenuItem>
          </Menu>
        <Menu menuButton={
          <MenuButton className='flex items-center gap-x-2 hover:bg-gray-700 p-2 rounded-lg transition-colors'>
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Avatar.jpg" className='w-8 h-8 p-0.5 rounded-full object-cover ring-2 ring-green-400' />
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