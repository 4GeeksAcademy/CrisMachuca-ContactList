import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Contact from "./contact.js";

const ContactList = () => {
    const {store, actions} = useContext(Context)
    return(
        <>

        <h1>lista de contactos</h1>
        <div className="container" style={{background: "red"}}>
        <div style={{background: "pink" }} className="d-flex flex-column align-items-center justify-content-center">

            <Contact/>
            
        </div>




        
            
        </div>
        </>
    )
}

export default ContactList