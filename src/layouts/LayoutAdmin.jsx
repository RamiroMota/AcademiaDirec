import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'

function LayoutAdmin() {
  return (
    <div className=' min-h-screen grid xl:grid-cols-6'>
      <Sidebar />
      <div className=' xl:col-span-5'>
        <Header />
        <div className='h-[90vh] overflow-y-scroll contenedor p-8'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default LayoutAdmin