import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";
import ContactList from "../component/contactList"

	export const Home = () => (
		<div className="d-flex flex-column align-items-center">
			<div className="col">
				<div className="ml-auto">
					<Link to="/form">
						<button className="btn btn-success">Add new contact</button>
					</Link>
					<ContactList></ContactList>
				</div>
			</div>
		</div>
	);
