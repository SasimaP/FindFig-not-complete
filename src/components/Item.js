import React from 'react';

function Item() {
  const cardStyle = {
    width: '15rem'
  };

  return (
    <div className="card mx-4" style={cardStyle}>
      <img src="https://www.thaiticketmajor.com/variety/img_content/imgeditor/Cubs.png" className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column align-items-start">
        <h5 className="card-title mb-0">Product Name</h5>
        <p className="card-text text-muted">Price: $19.99</p>
        <a href="#" className="btn btn-primary w-100 my-1">
          Add to Cart
        </a>
      </div>
    </div>
  );
}

export default Item;
