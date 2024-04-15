import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


const Contact = () => {
    const {store} = useContext(Context)
    return(
        <h2>Contacto 1{name}</h2>
    )
}

export default Contact