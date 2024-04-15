import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	const [username, setUsername] = useState("");
	const [selectedUser, setSelectedUser] = useState("");
	useEffect(() => {
        setUsername(store.user.slug || "");
        
        
    }, [store.user])
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">{`Contact List of: ${username}`}</span>
			</Link>
			<div className="ml-auto">
			{store.mensaje}
				
			</div>
			<div className="users-text">
                <p>Select a User:</p>
                <select >
                    <option value="">User</option>
                    
                </select>
				<button onClick={actions.showUsers}>Usuarios totales</button>
                </div>
		</nav>
	);
};
