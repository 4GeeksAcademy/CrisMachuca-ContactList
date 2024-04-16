import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


const Contact = () => {
    const {store, actions} = useContext(Context)
    
        return(
            <ul className="list-group">
            {store.contacts.map((item, id) => {
                return (
                    
                    <li key={id} className="list-group-item d-flex justify-content-between">
                        <span>{item.name}</span>
                        <span>{item.email}</span>
                        <span>{item.phone}</span>
                        <span>{item.address}</span>
                        <span>{item.id}</span>
                        <button onClick={() => {actions.deleteContact(item.id)}}>Eliminar</button>
                    </li>
                    
                );
            })}
        </ul>
        )  
    }
    


export default Contact