import { useSelector, useDispatch } from "react-redux"
//import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { AuthContext } from "./AuthProvider";
import { setLogout } from "./AuthSlice"

export default function Home () {
	//const { userData, token, logout } = useContext(AuthContext)
	const navigate = useNavigate()
    const authState = useSelector(state => state.authHandler)
    const dispatch = useDispatch()

	function handleLogout () {
		dispatch(setLogout())
        navigate("/login")
	}

	return <>
		<h1>ini Home</h1>
		<h3>Hi, {authState.user.firstName}</h3>
		<p>token anda: {authState.token}</p>
		<Link to="/about">ke about</Link>
		<br />
		<br />
		<button onClick={handleLogout}>
			logout
		</button>
	</>
}