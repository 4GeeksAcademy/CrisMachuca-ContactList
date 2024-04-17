import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/form.css";

const Form = () => {
    const { actions } = useContext(Context); 

    const [nuevoContacto, setNuevoContacto] = useState({
        nombre: "",
        email: "",
        telefono: "",
        direccion: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Validar si el campo es el teléfono y restringir la entrada a solo números
        if (name === "telefono" && isNaN(value)) {
            return; // No actualizamos el estado si el valor no es un número
        }

        // Limitar la longitud del teléfono a 9 caracteres
        if (name === "telefono" && value.length > 9) {
            return; // No actualizamos el estado si excede la longitud máxima
        }

        setNuevoContacto({ ...nuevoContacto, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Llamar a la función newContact del store con los datos del nuevo contacto
        actions.newContact(nuevoContacto.nombre, nuevoContacto.email, nuevoContacto.telefono, nuevoContacto.direccion);
        // Limpiar los campos del formulario
        setNuevoContacto({ nombre: "", email: "", telefono: "", direccion: "" });
    };

    return (
        <div id="formulario" className="container">
            <h1>Add a new contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="d-flex flex-column">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Full Name"
                        value={nuevoContacto.nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        value={nuevoContacto.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor="telefono">Teléfono:</label>
                    <input
                        type="text"
                        id="telefono"
                        name="telefono"
                        placeholder="Enter Phone"
                        value={nuevoContacto.telefono}
                        onChange={handleChange}
                    />
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor="direccion">Dirección:</label>
                    <input
                        type="text"
                        id="direccion"
                        name="direccion"
                        placeholder="Enter Address"
                        value={nuevoContacto.direccion}
                        onChange={handleChange}
                    />
                </div>
                <button className="btn btn-dark w-100" type="submit">Save</button>
            </form>
            <Link to="/">
                <span>or get back to contacts</span>
            </Link>
        </div>
    );
};

export default Form;
