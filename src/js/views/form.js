import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

const Form = () => {
	const { actions } = useContext(Context); // Obtener las acciones del contexto del store
  
	const [nuevoContacto, setNuevoContacto] = useState({
	  nombre: "",
	  email: "",
	  telefono: "",
	  direccion: ""
	});
  
	const handleChange = (e) => {
	  const { name, value } = e.target;
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
	  <div id="formulario">
		<h2>Agregar nuevo contacto</h2>
		<form onSubmit={handleSubmit}>
		  <div>
			<label htmlFor="nombre">Nombre:</label>
			<input
			  type="text"
			  id="nombre"
			  name="nombre"
			  value={nuevoContacto.nombre}
			  onChange={handleChange}
			/>
		  </div>
		  <div>
			<label htmlFor="email">Email:</label>
			<input
			  type="email"
			  id="email"
			  name="email"
			  value={nuevoContacto.email}
			  onChange={handleChange}
			/>
		  </div>
		  <div>
			<label htmlFor="telefono">Teléfono:</label>
			<input
			  type="tel"
			  id="telefono"
			  name="telefono"
			  value={nuevoContacto.telefono}
			  onChange={handleChange}
			/>
		  </div>
		  <div>
			<label htmlFor="direccion">Dirección:</label>
			<input
			  type="text"
			  id="direccion"
			  name="direccion"
			  value={nuevoContacto.direccion}
			  onChange={handleChange}
			/>
		  </div>
		  <button type="submit">Guardar cambios</button>
		</form>
		<Link to="/">
				<span>or get back to contacts</span>
			</Link>
	  </div>
	);
  };
  
  export default Form;