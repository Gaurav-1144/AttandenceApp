import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav >
                <div >
                    <Link style={{padding:"10px"}} to="/">Home</Link>
                    <Link style={{padding:"10px"}} to="/about">About Us</Link>
                    <Link style={{padding:"10px"}} to="/contact">Contact Us</Link>
                    <Link style={{padding:"10px"}} to="/register">Register</Link>
                    <Link style={{padding:"10px"}} to="/login">Login</Link>
                </div>
            </nav>
        </div>

    )
}

export default Navbar;