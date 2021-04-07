import React from 'react';
import './ImageList.css'
const ImageList = (props) => {

    return (
        <div className="row">
        {props.images.map(item => <div className="col col-md-4 col-lg-4">
            <div className="card">
                <img src={item.urls.regular} style={{height:"45vh"}} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <p className="card-text">{item.alt_description}</p>
                </div>
              </div>
        </div>)}
    </div>
    );
}

export default ImageList;