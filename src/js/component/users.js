import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/contact.css";

const Users = () => {
    const { store, actions } = useContext(Context);
    const [selectedValue, setSelectedValue] = useState(""); 

    useEffect(() => {
        actions.showUsers();
        actions.getContactList(); // Cargar la lista de contactos al principio
    }, []);

    const handleChange = (e) => {
        // Actualizar el estado del valor seleccionado al cambiar el usuario
        setSelectedValue(e.target.value);
        actions.getSelectedUser(e.target.value);
        actions.getContactList(); // Volver a cargar la lista de contactos al seleccionar un usuario
    };

    return (
        <div className="d-flex align-items-center justify-content-center ms-2">
            <div className="fw-bold pe-3">User:</div>
            <select 
                className="form-select" 
                aria-label="User list" 
                id="user-select"
                value={selectedValue} // Utiliza el estado seleccionado
                onChange={handleChange}
            >
                {store.users.length > 0 && (
                    store.users.map((user) => (
                        <option key={user.id} value={`${user.slug}_${user.id || ""}`}>{user.slug}</option>
                    ))
                )}
            </select>
        </div>
    );
};

export default Users;
