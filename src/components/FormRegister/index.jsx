import React, { useState } from "react";
import "bulma/css/bulma.css";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    father: {
      name: "",
      age: 0,
      rfc: "",
      phone: "",
      email: "",
      address: {
        street: "",
        neighbourhood: "",
        zip: "",
      },
      child: {
        name: "",
        birthdate: "",
        phone: "",
        avatar: "",
      },
      password: "",
      bankaccount: {
        numbercard: "",
        expdate: "",
        ccv: "",
      },
    },
    deleted_at: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      father: {
        ...prevFormData.father,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform any necessary actions with the form data
    console.log(formData);
  };

  return (
    <div className="columns is-centered">
      <div className="column is-one-third">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Nombre del Padre:</label>
            <div className="control">
              <input
                className="input is-success"
                type="text"
                name="name"
                value={formData.father.name}
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
                value={formData.father.age}
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
                value={formData.father.rfc}
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
                value={formData.father.phone}
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
                value={formData.father.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Dirección:</label>
            <div className="control">
              <input
                className="input is-success"
                type="text"
                name="address.street"
                value={formData.father.address.street}
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
                value={formData.father.address.neighbourhood}
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
                value={formData.father.address.zip}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Nombre del Hijo:</label>
            <div className="control">
              <input
                className="input is-success"
                type="text"
                name="child.name"
                value={formData.father.child.name}
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
                value={formData.father.child.phone}
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
                value={formData.father.bankaccount.numbercard}
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
                value={formData.father.bankaccount.expdate}
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
                value={formData.father.bankaccount.ccv}
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
