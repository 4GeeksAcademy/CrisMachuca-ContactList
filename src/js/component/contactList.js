import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Contact from "./contact.js";

const ContactList = () => {
    const {store, actions} = useContext(Context)
    return(
        <>

        
        <div className="container">
        <div className="d-flex flex-column align-items-center justify-content-center">

            <Contact/>
            
        </div>




        
            
        </div>
        </>
    )
}

export default ContactList