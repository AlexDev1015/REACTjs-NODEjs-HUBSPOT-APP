
import { useEffect, useState } from "react"


export const Menu = ({setMenuOptions,setContacts,menuOptions,setInput}) => {

 // reseteamos la variable dde estado contactos y el input cada que se cambia de opción para poder reutilizarlo en otros componentes
    useEffect(()=>{
        setContacts(null)
        if(menuOptions == 'status')
            setInput('Aceptado')
        else
            setInput('')


    },[menuOptions])

    

    return (
        <div className="container">
            <div className="menuWrapper">
                <button onClick={()=>setMenuOptions('search')}>BUSCAR</button>
                <button onClick={()=>setMenuOptions('create')}>ALTA DE CONTACTO</button>
                <button onClick={()=>setMenuOptions('status')}>BUSQUEDA POR ESTATUS</button>
            </div>
        </div>

    )

}