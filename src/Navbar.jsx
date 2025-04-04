import React from 'react';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container">
      {/* <a className="navbar-brand" href="#">MyWebsite</a> */}
      {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      
      <div className="collapse navbar-collapse" id="navbarNav">
      <i className="bi bi-house-gear-fill icon-style" onClick={() => navigate('/')}></i>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;
