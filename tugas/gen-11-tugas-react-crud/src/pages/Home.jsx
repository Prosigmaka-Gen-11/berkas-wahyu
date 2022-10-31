import { Outlet, Link } from "react-router-dom";

export default function Home () {
    return <>
        <h1>Home</h1>
            <p>Choose your activity :</p>
            <Link  to="/biodata/form">
                <button>Order Now</button>
            </Link>
            <br />
            <Link to="/biodata/list" >
                <button>Order List</button>
            </Link>

        <Outlet/>        
    </>
}