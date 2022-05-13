import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
  return <>
      <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span className="fs-4">SEA BASKET</span>
      </a>

      <ul className="nav nav-pills">
      <li className="nav-item me-2">
      <NavLink to="/" className="nav-link" aria-current="page" style={({isActive}) => {
          return {backgroundColor: isActive ? "red" : ""}}}>Home</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/category" className="nav-link" aria-current="page" style={({isActive}) => {
          return {backgroundColor: isActive ? "red" : ""}}}>Category</NavLink>
      </li>       
      </ul>

      <div className="text-end mx-2">
          <button type="button" className="btn btn-outline-warning me-2">Login</button>
        </div>
    </header>
  </div>
  <Outlet />
  </>
}

export default Navbar