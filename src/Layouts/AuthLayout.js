import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UseIsLoggedIn from '../Config/Hooks';

const AuthLayout = () => {

	const isLoggedIn = UseIsLoggedIn()

	if(isLoggedIn===null) return <h1>Loading...</h1>
	else if(isLoggedIn===true) return <Navigate replace to="/admin" />

  return <Outlet/>
}

export default AuthLayout
