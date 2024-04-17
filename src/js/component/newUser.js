import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const CreateUserForm = () => {
    const { actions } = useContext(Context);
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.newUser(username);
        setUsername(""); // Limpiar el campo de entrada después de enviar el formulario
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="ms-2"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
            />
            <button type="submit" className="btn ms-2" style={{background: "#0f0e17", color: "white"}}>Create User</button>
        </form>
    );
};

export default CreateUserForm;