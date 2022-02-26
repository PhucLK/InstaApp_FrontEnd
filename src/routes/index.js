import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import AppRoutes from './AppRoutes'

export const Loadable = Component => props => {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Component {...props} />
    </Suspense>
  )
}
function Routing() {
  return (
    <Routes>
      <Route path="/" element={<AppRoutes />}>

      </Route>
      <Route path="/accounts" element={<Accounts />}>
        {/* <Route index element={<Login />} /> */}
        <Route index element={<Register />} />
      </Route>
    </Routes>
  )
}

export default Routing

const MainLayout = Loadable(lazy(() => import('layouts/MainLayout')));
const Accounts = Loadable(lazy(() => import('layouts/Accounts')));
const Register = Loadable(lazy(() => import('pages/authentication/Register')));
const Login = Loadable(lazy(() => import('pages/authentication/Login')));