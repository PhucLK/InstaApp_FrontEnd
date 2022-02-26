import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import AppRoutes from './AppRoutes'

const Loadable = Component => props => {
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
        <Route index element={<MainLayout />} />
      </Route>
      <Route path="/login" element={<LoginLayout />}>
      </Route>
    </Routes>
  )
}

export default Routing

const MainLayout = Loadable(lazy(() => import('layouts/MainLayout')));
const LoginLayout = Loadable(lazy(() => import('layouts/LoginLayout')));