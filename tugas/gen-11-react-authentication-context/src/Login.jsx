import axios from "axios"
import { useState } from "react";
//import { useContext, useState } from "react"
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
//import { Navigate, useNavigate } from "react-router-dom"
import { setLogin } from "./AuthSlice"
//import { AuthContext } from "./AuthProvider"

export default function Login() {
	//const navigate = useNavigate()
	//const { handleAfterLogin, isLogin } = useContext(AuthContext)
	const authState = useSelector(state => state.authHandler)
    const dispatch = useDispatch()

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	function handleLogin (evt) {
		evt.preventDefault()

		axios.post('https://dummyjson.com/auth/login', {
			username,
			password
		}).then(res => {
			console.log(res.data)
			dispatch(setLogin(result.data))
			//handleAfterLogin(res.data)
		}).catch(err => {
			console.log(err.response)
			alert(err.message)
		})
	}

	if (authState.isLogin) {
		return <Navigate to="/" />
	}

	return <>
		<h1>Login Form</h1>

		<form onSubmit={handleLogin}>
			<label>
				Username: <br />
				<input
					required
					type="text"
					value={username}
					onChange={evt => setUsername(evt.target.value)} />
			</label>
			<br /><br />

			<label>
				Password: <br />
				<input
					required
					type="password"
					value={password}
					onChange={evt => setPassword(evt.target.value)} />
			</label>
			<br /><br />

			<button>
				Login
			</button>
		</form>
	</>
}