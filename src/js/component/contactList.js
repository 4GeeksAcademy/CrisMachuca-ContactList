import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Contact from "./contact.js";

const ContactList = () => {
    const {store} = useContext(Context)
    return(
        <>
        <h1>lista de contactos</h1>

        <div style={{background: "pink" }} className="d-flex flex-column align-items-center justify-content-center">
            {store.contacts.map((contact) => (
                <React.Fragment key={contact.id}>
                    <Contact name={contact.name} id={contact.id} email={contact.email} phone={contact.phone} address={contact.address} />
                </React.Fragment>
            ))}
        </div>




        <div className="container" style={{background: "red"}}>
            <Contact />
        </div>
        </>
    )
}

export default ContactList