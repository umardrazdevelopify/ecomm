import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">
      <a className="navbar-brand text-white fw-bold" href="/">UD Store</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Products</a>
          </li>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item " href="#">Electronics</a></li>
            <li><a className="dropdown-item" href="#">Food</a></li>
            <li><hr className="dropdown-divider"/></li>
            
          </ul>
        </li>
        <li className="nav-item">
            <a className="nav-link text-white" href="#">Blog</a>
          </li>
          <li className="nav-item">
          <a className="nav-link text-white" href="#">About US</a>
        </li>
        <li className="nav-item">
        <a className="nav-link text-white" href="#">Contact</a>
      </li>
      <li className="nav-item">
      <Link className="nav-link text-white" to="/login">Login</Link>
    </li>  <li className="nav-item">
    <Link className="nav-link text-white" to="/register">Register</Link>
  </li>
        </ul>
     
      </div>
    </div>
    </nav>
  )
}

export default Navbar