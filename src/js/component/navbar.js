import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import Users from "./users";
import CreateUserForm from "./newUser";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	const [username, setUsername] = useState("");
	const [selectedUser, setSelectedUser] = useState("");
	useEffect(() => {
        setUsername(store.user.slug || "");
        
        
    }, [store.user])
	return (
		<nav className="navbar navbar-light mb-3">
			<Users/>
			<CreateUserForm/>
			<Link to="/">
				<span className="navbar-brand mb-0 h1">{`Agenda of: ${username}`}</span>
			</Link>
			
			


		</nav>
	);
};
