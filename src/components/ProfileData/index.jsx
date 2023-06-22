import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const FatherData = ({ userInfo }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const handleToggle = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <div className="box">
              <div className="father-data-header" onClick={handleToggle}>
                <div className="title-container">
                  <h2 className="title">Datos del Padre {isExpanded ? <FaAngleUp /> : <FaAngleDown />}</h2>
                </div>
              </div>
              {isExpanded && (
                <div>
                  <div className="field">
                    <label className="label">Dirección</label>
                    <input
                      className="input"
                      type="text"
                      value={userInfo.father.address.street}
                      placeholder="Dirección"
                      readOnly
                    />
                  </div>
                  <div className="field">
                    <label className="label">Barrio</label>
                    <input
                      className="input"
                      type="text"
                      value={userInfo.father.address.neighbourhood}
                      placeholder="Barrio"
                      readOnly
                    />
                  </div>
                  <div className="field">
                    <label className="label">Código Postal</label>
                    <input
                      className="input"
                      type="text"
                      value={userInfo.father.address.zip}
                      placeholder="Código Postal"
                      readOnly
                    />
                  </div>
                  <div className="field">
                    <label className="label">Nombre</label>
                    <input
                      className="input"
                      type="text"
                      value={userInfo.father.name}
                      placeholder="Nombre"
                      readOnly
                    />
                  </div>
                  <div className="field">
                    <label className="label">Edad</label>
                    <input
                      className="input"
                      type="text"
                      value={userInfo.father.age}
                      placeholder="Edad"
                      readOnly
                    />
                  </div>
                  <div className="field">
                    <label className="label">RFC</label>
                    <input
                      className="input"
                      type="text"
                      value={userInfo.father.rfc}
                      placeholder="RFC"
                      readOnly
                    />
                  </div>
                  <div className="field">
                    <label className="label">Teléfono</label>
                    <input
                      className="input"
                      type="text"
                      value={userInfo.father.phone}
                      placeholder="Teléfono"
                      readOnly
                    />
                  </div>
                  <div className="field">
                    <label className="label">Correo Electrónico</label>
                    <input
                      className="input"
                      type="email"
                      value={userInfo.father.email}
                      placeholder="Correo Electrónico"
                      readOnly
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

const ChildData = ({ userInfo }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const handleToggle = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <div className="box">
              <div className="child-data-header" onClick={handleToggle}>
                <div className="title-container">
                  <h2 className="title">Datos del Hijo(a) {isExpanded ? <FaAngleUp /> : <FaAngleDown />}</h2>
                </div>
              </div>
              {isExpanded && (
                <div>
                  <div className="field">
                    <label className="label">Nombre</label>
                    <input
                      className="input"
                      type="text"
                      value={userInfo.father.child.name}
                      placeholder="Nombre"
                      readOnly
                    />
                  </div>
                  <div className="field">
                    <label className="label">Teléfono</label>
                    <input
                      className="input"
                      type="text"
                      value={userInfo.father.child.phone}
                      placeholder="Teléfono"
                      readOnly
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

const BankAccount = ({ userInfo }) => {
  const { numbercard, expdate, ccv } = userInfo.father.bankaccount;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <div className="box">
            <div className="bank-account-header" onClick={handleToggle}>
              <div className="title-container">
                <h2 className="title">
                  Cuenta Bancaria {isExpanded ? <FaAngleUp /> : <FaAngleDown />}{" "}
                </h2>
              </div>
            </div>
            {isExpanded && (
              <div>
                <div className="field">
                  <label className="label">Número de Tarjeta</label>
                  <input
                    className="input"
                    type="text"
                    value={numbercard}
                    placeholder="Número de Tarjeta"
                    readOnly
                  />
                </div>
                <div className="field">
                  <label className="label">Fecha de Expiración</label>
                  <input
                    className="input"
                    type="text"
                    value={expdate}
                    placeholder="Fecha de Expiración"
                    readOnly
                  />
                </div>
                <div className="field">
                  <label className="label">CCV</label>
                  <input
                    className="input"
                    type="password"
                    value={ccv}
                    placeholder="CCV"
                    readOnly
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { FatherData, ChildData, BankAccount };
