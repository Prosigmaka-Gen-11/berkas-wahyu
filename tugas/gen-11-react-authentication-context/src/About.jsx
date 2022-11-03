import axios from "axios";
import { useSelector } from "react-redux"
import { useEffect, useState } from "react";
//import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { AuthContext } from './AuthProvider'

export default function About() {
	//const { token } = useContext(AuthContext)
	const authState = useSelector(state => state.authHandler)
	const [products, setProducts] = useState([])

	function getProducts () {
		axios.get('https://dummyjson.com/auth/products', {
			headers: {
				Authorization: 'Bearer ' + authState.token
			}
		}).then(res => {
			setProducts(res.data.products)
		}).catch(err => {
			console.log(err.response)
		})
	}

	useEffect(() => {
		getProducts()
	}, [])

	return <>
		<h1>ini About</h1>
		<Link to="/">ke home</Link>

		<ul>
			{products.map(product =>
				<li>{product.title} - ${product.price}</li>
			)}
		</ul>
	</>
}