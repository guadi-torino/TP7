import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

const Formulario = ({ crearCitas }) => {
  const [cita, setCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
    id: ''
  });

  const [error, setError] = useState(false);

  const actualizarState = e => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const sumbitCita = e => {
    e.preventDefault();

    if (
      mascota.trim() === '' ||
      propietario.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
      setError(true);
      return;
    }

    cita.id = uuid();

    setError(false);

    crearCitas(cita);

    setCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: '',
      id: ''
    });
  };

  return (
    <Fragment>
      <h2>Crear mi cita</h2>

      {error ? (
        alert("Todos los campos son obligatorios")
      ) : null}
      <div className="card">
        <form onSubmit={sumbitCita}>
          <label>Nombre Mascota</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Nombre Mascota"
            name="mascota"
            onChange={actualizarState}
            value={mascota}
          />

          <label>Nombre Dueño</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Nombre Dueño"
            name="propietario"
            onChange={actualizarState}
            value={propietario}
          />

          <label>Fecha</label>
          <input
            type="date"
            className="u-full-width"
            name="fecha"
            onChange={actualizarState}
            value={fecha}
          />

          <label>Hora</label>
          <input
            type="time"
            className="u-full-width"
            name="hora"
            onChange={actualizarState}
            value={hora}
          />

          <label>Sintomas</label>
          <textarea
            className="u-full-width"
            name="sintomas"
            onChange={actualizarState}
            value={sintomas}
          />

          <button type="submit" className="u-full-width button-primary">
            Agregar Cita
          </button>
        </form>
      </div>
    </Fragment>
  );
};

Formulario.propTypes = {
  crearCitas: PropTypes.func.isRequired
};

export default Formulario;
