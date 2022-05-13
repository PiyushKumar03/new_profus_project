import React from 'react'

const Footer = () => {
  return <>
      <div className="container">
  <footer className="row row-cols-5 py-5 mt-5 border-top">
    <div className="col">
      <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
      <h1>SEA BASKET</h1>
      </a>
    </div>

    <div className="col">

    </div>

    <div className="col">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Support</a></li>
        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">About Us</a></li>
        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Privacy Policy</a></li>

      </ul>
    </div>

    <div className="col">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Terms & Conditions</a></li>
        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Return & Refund Policy</a></li>
        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Shipping & Delivery Policy</a></li>
      </ul>
    </div>

  </footer>

  <footer>
    <p className="text-center text-muted">Sea Basket | All Rights Reserved | ©2021 copyright</p>
  </footer>
</div>
  </>
}

export default Footer