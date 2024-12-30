import './navBar.css';
import { Link } from 'react-router-dom';
function NavBar(){
    return(
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
        <a className="navbar-brand" href="/home">
            AMSKY
        </a>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <a className="nav-link" href="/home">
                Home
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/airport">
                Airports
                </a>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/checkout">
                Flights
                </Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#contact">
                Contact Us
                </a>
            </li>
            </ul>
        </div>
        </div>
        </nav>
        <div className="hero">
        <div className="container">
        <h1>View Airports</h1>
        <p>Explore the airports available in our booking system.</p>
        </div>
        </div>
    </div>)
}
export default NavBar