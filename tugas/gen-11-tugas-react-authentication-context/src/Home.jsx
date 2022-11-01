import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export default function Home () {
	const { userData, logout } = useContext(AuthContext)
	const [comments, setComments] = useState([])

	function handleLogout () {
		logout()
	}

	function getComments () {
		axios.get('https://dummyjson.com/auth/comments', {
			headers: {
				Authorization: 'Bearer ' + token
			}
		}).then(res => {
			setComments(res.data.comments)
		}).catch(err => {
			console.log(err.response)
		})
	}

	useEffect(() => {
		getComments()
	}, [])

	return <>
		<center><h1>Home</h1></center>
		<h3>Hi, {userData.firstName}</h3>
		<Link to="/about">ke about</Link>
		<br />
		<br />
		<button onClick={handleLogout}>
			logout
		</button>
		<ul>
			{comments.map(comments =>
				<li>{comments.body}</li>
			)}
		</ul>
	</>
}