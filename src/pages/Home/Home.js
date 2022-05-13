import React from 'react'
import Categories from '../../components/Categories';
import Header from '../../components/Header';
import './home.css';

const Home = () => {
    return <>
        <Header />
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">HOW IT WORKS???</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Sea Basket delivers fresh sourced seafood in a few easy click</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Know More</button>
                </div>
            </div>
        </div>

        <div className="container">
        <h3>Categories</h3>
        <Categories />
        </div>

        {/* A Glance at our product */}
        <div className="mt-5 text-center">
            <h1 className="display-4 fw-bold">A GLANCE AT OUR PRODUCT</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. In amet explicabo reprehenderit officiis ipsam ullam, nulla facilis deserunt modi. Voluptate dolorum quibusdam architecto aliquam non nihil doloribus ut iste at!</p>
            </div>
            <div className="overflow-hidden" >
                <div className="container video-responsive">
                    <iframe
                        width="500"
                        height="550"
                        src="https://www.youtube.com/embed/uXWycyeTeCs"
                        title='video'
                    ></iframe>
                </div>
            </div>
        </div>

        {/* FAQ */}
        <div className='container'>
        <div className="text-center">
            <h1 className="px-3 display-5 fw-bold">FAQs</h1>
        </div>

            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header btn-lg" id="panelsStayOpen-headingOne">
                        <button className="accordion-button btn-lg" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, animi iste. Voluptatem repudiandae, adipisci perspiciatis quo tempora alias consequuntur nemo? Porro praesentium sequi quaerat ducimus perferendis quae incidunt minima sunt?</h5>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header btn-lg" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, animi iste. Voluptatem repudiandae, adipisci perspiciatis quo tempora alias consequuntur nemo? Porro praesentium sequi quaerat ducimus perferendis quae incidunt minima sunt?</h5>

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header btn-lg" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body">
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, animi iste. Voluptatem repudiandae, adipisci perspiciatis quo tempora alias consequuntur nemo? Porro praesentium sequi quaerat ducimus perferendis quae incidunt minima sunt?</h5>

                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* HAVE A READ */}
        <div className="container">
        <div className="px-4 py-3 mt-5 text-center">
            <h1 className="display-5 fw-bold">HAVE A READ</h1>
        </div>
        <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">The Right Quality</h1>
        <p className="col-md-12 fs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quaerat consequuntur laborum asperiores voluptas repudiandae, modi qui possimus molestias molestiae. Nobis impedit explicabo magnam nemo quam, illum fugit quis modi.</p>
        <a href="/" className="icon-link btn-lg text-decoration-none">
          Read More
        </a>
      </div>
    </div>

    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">The Right Time</h1>
        <p className="col-md-12 fs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quaerat consequuntur laborum asperiores voluptas repudiandae, modi qui possimus molestias molestiae. Nobis impedit explicabo magnam nemo quam, illum fugit quis modi.</p>
        <a href="/" className="icon-link btn-lg text-end text-decoration-none">
          Read More
        </a>
      </div>
    </div>

    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">The basis of a balanced diet</h1>
        <p className="col-md-12 fs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quaerat consequuntur laborum asperiores voluptas repudiandae, modi qui possimus molestias molestiae. Nobis impedit explicabo magnam nemo quam, illum fugit quis modi.</p>
        <a href="/" className="icon-link btn-lg text-decoration-none">
          Read More
        </a>
      </div>
    </div>
        </div>
    </>
};

export default Home