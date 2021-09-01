import React, {Fragment,useState} from 'react';
import uuid from 'uuid/dist/v4'
import PropTypes from 'prop-types';

const Formulario = ({crearCitas}) => {

    const [cita,setCita] = useState({
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
            [e.target.name] : e.target.value
        })
    }

    const {mascota, propietario, fecha, hora, sintomas} = cita;

    const sumbitCita = e => {
        e.preventDefault();

        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
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
            id: '',
        })
    }

    return (
        <Fragment>
            <h2>Crear mi cita</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form
                onSubmit= {sumbitCita}
            >
                <label>Nombre Mascota</label>
                    <input
                        type="text"
                        classNam="u-full-width"
                        placeholder="Nombre Mascota"
                        name="mascota"
                        onChange={actualizarState}
                        value={mascota}
                    />

                <label>Nombre Dueño</label>
                    <input
                        type="text"
                        classNam="u-full-width"
                        placeholder="Nombre Dueño"
                        name="propietario"
                        onChange={actualizarState}
                        value={propietario}
                    />

                <label>Fecha</label>
                    <input
                        type="date"
                        classNam="u-full-width"
                        name="fecha"
                        onChange={actualizarState}
                        value={fecha}
                    />

                <label>Hora</label>
                    <input
                        type="time"
                        classNam="u-full-width"
                        name="hora"
                        onChange={actualizarState}
                        value={hora}
                    />

                <label>Sintomas</label>
                    <textarea
                        classNam="u-full-width"
                        name="sintomas"
                        onChange={actualizarState}
                        value={sintomas}
                    ></textarea>
                    
                <button 
                    type="submit"
                    className="u-full-width button-primary">
                        Agregar Cita
                    </button>


            </form>
        </Fragment>
    );
}

Formulario.propTypes = {
    crearCitas: PropTypes.func.isRequired
}

export default Formulario;