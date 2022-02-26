import React from 'react'
import {Link} from 'react-router-dom'
function Login() {
  return (
    <div>
        Login
        <Link to="/accounts/register">
            Register
        </Link>
        </div>

  )
}

export default Login