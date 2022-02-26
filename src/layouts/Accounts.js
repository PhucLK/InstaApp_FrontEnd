import Login from 'pages/authentication/Login'
import React from 'react'
import { Outlet } from 'react-router-dom'

function Accounts() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default Accounts