import MainLayout from 'layouts/MainLayout';
import React from 'react'
import { Navigate } from 'react-router-dom';

function AppRoutes() {
    
    const auth = localStorage.getItem('tokeAccess') ;
    return auth ? <MainLayout /> : <Navigate to="/accounts" />
}

export default AppRoutes
