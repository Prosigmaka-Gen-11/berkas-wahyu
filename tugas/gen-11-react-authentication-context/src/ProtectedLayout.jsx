//import { useContext } from "react";
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
//import { AuthContext } from "./AuthProvider";

export default function ProtectedLayout () {
	//const { isLogin } = useContext(AuthContext)
	const authState = useSelector(state => state.authHandler)
	console.log(authState.isLogin)

	if (authState.isLogin) {
		return <Outlet />
	} else {
		return <Navigate to="/login" />
	}
}