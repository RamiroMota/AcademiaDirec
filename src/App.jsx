import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'remixicon/fonts/remixicon.css'

/*---------------Auth------------------*/
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ForgetPassword from './pages/auth/ForgetPassword'

/*---------------Pages Admin------------------*/
import Error404 from './pages/Error404'
import Home from './pages/admin/Home'
import Chat from './pages/auth/Chat'

/*--------------Layouts-------------------*/
import LayoutAdmin from './layouts/LayoutAdmin'
import LayoutAuth from './layouts/LayoutAuth'



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<LayoutAuth />}>
          <Route index element={<Login />} />
          <Route path='registro' element={<Register />} />
          <Route path='recuperar-contraseña' element={<ForgetPassword />} />
        </Route>
        <Route path='/' element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path='chat' element={<Chat />} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}
