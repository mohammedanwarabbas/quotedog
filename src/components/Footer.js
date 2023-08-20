import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="row py-3 my-4 border-top bg-warning">
    <p className="col-md-4 mb-0">© 2023 QuoteDog, Inc</p>
    
    <ul className="nav col-md-4 mb-2 mb-lg-0">
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-dark">Home</Link></li>
      <li className="nav-item"><Link to="/random-quote" className="nav-link px-2 text-dark">Generate random quote</Link></li>
      <li className="nav-item"><Link to="/about" className="nav-link px-2 text-dark">About us</Link></li>
    </ul>
    
    <Link to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <h3 className="text-secondary">&quot;QuoteDog</h3>
    </Link>
  </footer>
  
  );
}

export default Footer;
