import React, { useState } from 'react';
import { fishData, prawnsData, exoticData } from '../../data';
import './catefory.css';

const Category = () => {
    const [list, setList] = useState(fishData);
    return <>
        <div className="container">

            <div className='my-3 mx-auto'>
            <button type="button" className="btn btn-outline-dark me-3 button-color" onClick={() => setList(fishData)}>Fish</button>
            <button type="button" className="btn btn-outline-dark me-3 button-color" onClick={() => setList(prawnsData)}>Prawns</button>
            <button type="button" className="btn btn-outline-dark me-3 button-color" onClick={() => setList(exoticData)}>Exotic</button>
            </div>
            
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                {list.map((item) => {
                    return <>
                        <div className="col" key={item.id}>
                            <div className="card shadow-sm">
                                <img src={item.image} alt={item.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title.length > 35 ? `${item.title.substring(1, 35)}...` : item.title}</h5>
                                    <p><strong>Net wt: {item.weight}</strong></p>

                                    <h6 className="text-danger card-title my-2">MRP: Rs.{item.price}</h6>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-danger">Add To Cart</button>
                                        </div>
                                        <small className="text-muted">Deliver in 90 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                })}
            </div>
        </div>

    </>
}

export default Category