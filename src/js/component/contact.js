import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/contact.css";


const Contact = () => {
    const {store, actions} = useContext(Context)
    
        return(
            <ul className="list-group">
            {store.contacts.map((item, id) => {
                return (
                    
                    <li key={id} className="list-group-item d-flex justify-content-between">
                        <div className="image">
                        <i className="fa-solid fa-circle-user"></i>
                        </div>
                        <div className="d-flex flex-column w-50">
                            <span>{item.name}</span>
                            <span>{item.email}</span>
                            <span>{item.phone}</span>
                            <span>{item.address}</span>
                        </div>
                        <button onClick={() => {actions.deleteContact(item.id)}}><i className="fa-solid fa-trash"></i></button>
                    </li>
                    
                );
            })}
        </ul>
        )  
    }
    


export default Contact