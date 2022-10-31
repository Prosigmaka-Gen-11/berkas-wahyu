import { Link } from "react-router-dom"

export default function Home () {
    return <>
         <center><h1>Halaman Home</h1></center>
         <Link to="/list">Halaman List</Link>
         <br /><br />
         <Link to="/form">Halaman Form</Link>
         <br /><br />
         <Link to="/detail">Halaman Detail</Link>
    </>
}