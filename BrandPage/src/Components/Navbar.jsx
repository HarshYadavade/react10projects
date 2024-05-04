import './Navbar.css';
export default function NavBar() {
    return(
        <div>
            <nav>
                <img src="/images/brand_logo.png" alt="logo" />
                <ul>
                    <li>Menu</li>
                    <li>Location</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <button>Login</button>
            </nav>
        </div>
    )
}