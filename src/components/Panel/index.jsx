import React, { useState } from "react";
import 'bulma/css/bulma.min.css';
import './style.css'

const Panel = ({ filters, applyFilters }) => {
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");

  const handleApplyFilters = () => {
    const appliedFilters = {
      price: price.trim(),
      brand: brand.trim(),
      category: category.trim()
    };
    applyFilters(appliedFilters);
  };

  const handleResetFilters = () => {
    setPrice("");
    setBrand("");
    setCategory("");
    applyFilters({});
  };

  return (
    <div className="panel">
      <p className="panel-heading">Filtros</p>
      <div className="panel-block">
        <div className="field">
          <label className="label">Precio</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="panel-block">
        <div className="field">
          <label className="label">Marca</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="panel-block">
        <div className="field">
          <label className="label">Categoria</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="panel-block">
      <button className="button is-success mr-2" onClick={handleApplyFilters}>
        Aplicar Filtros
      </button>
      <button className="button is-light" onClick={handleResetFilters}>
        Borrar Filtros
      </button>
    </div>
    
    </div>
  );
};

export default Panel;
