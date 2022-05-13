import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const navigate = useNavigate();
  return <>
      <div className='row px-4 py-5'>
                <div className="card mx-auto mb-4" style={{ "width": "18rem" }}>
                    <img src="https://monitorfish.com/wp-content/themes/monitorfish/images/home-hero-bottom-fish.png" className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <button className="btn btn-primary" onClick={() => {
                            navigate('/category')
                        }}>FISH</button>
                    </div>
                </div>

                <div className="card mx-auto mb-4" style={{ "width": "18rem" }}>
                    <img src="https://media.istockphoto.com/photos/king-prawns-isolated-on-white-picture-id155219892?k=20&m=155219892&s=612x612&w=0&h=yRXpbcYpAcieWMnDqnMWVi4iGfyzwHysx0WCPqltng0=" className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <button className="btn btn-primary" onClick={() => {
                            navigate('/category')
                        }}>PRAWNS</button>
                    </div>
                </div>

                <div className="card mx-auto mb-4" style={{ "width": "18rem" }}>
                    <img src="https://stylesatlife.com/wp-content/uploads/2019/10/Types-of-Fish-Species-In-World-and-Their-Facts.jpg" className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <button className="btn btn-primary" onClick={() => {
                            navigate('/category')
                        }}>EXOTIC</button>
                    </div>
                </div>
            </div>
  </>
}

export default Categories