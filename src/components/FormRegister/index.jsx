import React, { useState } from "react";
import "bulma/css/bulma.css";
import { createUser } from "../../utils/createUser";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    father: {
      name: "",
      age: 0,
      rfc: "",
      phone: "",
      email: "",
      address: { street: "", neighbourhood: "", zip: "" },
      child: { name: "", phone: "" },
      password: "",
      bankaccount: { numbercard: "", expdate: "", ccv: "" },
      status: "active",
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser(formData);
    console.log(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      father: {
        ...prevState.father,
        [name]: value,
      },
    }));
  };

  return (
    <div className="columns is-centered">
      <div className="column is-one-third">
        <form onSubmit={handleSubmit}>
          {/* First column */}
          <div className="field">
            <label className="label">Nombre del Padre:</label>
            <div className="control">
              <input
                className="input is-success"
                type="text"
                name="name"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Edad del Padre:</label>
            <div className="control">
              <input
                className="input is-success"
                type="number"
                name="age"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">RFC del Padre:</label>
            <div className="control">
              <input
                className="input is-success"
                type="text"
                name="rfc"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Teléfono del Padre:</label>
            <div className="control">
              <input
                className="input is-success"
                type="text"
                name="phone"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email del Padre:</label>
            <div className="control">
              <input
                className="input is-success"
                type="email"
                name="email"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Contraseña:</label>
            <div className="control">
              <input
                className="input is-success"
                type="password"
                name="password"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Second column */}
          <div className="field">
            <label className="label">Dirección:</label>
            <div className="control">
              <input
                className="input is-success"
                type="text"
                name="address.street"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Colonia:</label>
            <div className="control">
              <input
                className="input is-success"
                type="text"
                name="address.neighbourhood"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Código Postal:</label>
            <div className="control">
              <input
                className="input is-success"
                type="text"
                name="address.zip"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Third column */}
          <div className="field">
            <label className="label">Nombre del Hijo:</label>
            <div className="control">
              <input
                className="input is-success"
                type="text"
                name="child.name"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Teléfono del Hijo:</label>
            <div className="control">
              <input
                className="input is-success"
                type="text"
                name="child.phone"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Número de Tarjeta:</label>
            <div className="control">
              <input
                className="input is-success"
                type="text"
                name="bankaccount.numbercard"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Fecha de Expiración:</label>
            <div className="control">
              <input
                className="input is-success"
                type="text"
                name="bankaccount.expdate"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">CCV:</label>
            <div className="control">
              <input
                className="input is-success"
                type="text"
                name="bankaccount.ccv"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button className="button is-primary" type="submit">
                Registrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
