import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bulma/css/bulma.min.css";
import "./style.css";

const ProductCards = ({ products, addToCart }) => {

  return (
    <div className="columns is-multiline">
      {products.map((product) => (
        <div className="column is-one-third" key={product._id}>
          <div className="card is-small">
            <div className="card-image">
              <Carousel showThumbs={false}>
                {product.images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={product.name} />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="card-content">
              <div className="content">
                <p className="title is-4">{product.name}</p>
                <p className="subtitle is-6">{product.brand}</p>
                <p>{product.description}</p>
                <div className="price-button-container">
                  <p className="has-text-weight-bold">${product.price}</p>
                  <button
                    className="button is-success"
                    onClick={() => addToCart(product)}
                  >
                    Lo quiero!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
