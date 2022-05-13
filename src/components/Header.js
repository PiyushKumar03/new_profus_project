import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return <>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src='https://c4.wallpaperflare.com/wallpaper/564/324/1011/food-fish-black-background-caviar-wallpaper-preview.jpg' height="500px" className="d-block w-100" alt="..." />
    </div>
    <div className="container">
          <div className="carousel-caption text-start">
            <h1>SEA BASKET</h1>
            <p>SEA BASKET is your one-stop fresh sea items delivery shop. </p>
            <p><button className="btn btn-lg btn-warning" onClick={() => navigate('/category')}>Explore Menu</button></p>
          </div>
        </div>
  </div>
</div>
  </>
};

export default Header