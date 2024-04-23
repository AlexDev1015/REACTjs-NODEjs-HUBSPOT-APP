import { useEffect, useState } from 'react'
import './contactinfo.css'
import { formatContact } from '../../js/formatContact'


export const TutorInfo = ({ contacts }) => {




    return (
        <div className="container">

            {Array.isArray(contacts) && contacts.length >0 ?
                contacts.map((data, index) => (
                    <div key={index} className="contactWrapper">  {/* la key debe ir en el elemento más inmediato al metodo map*/}
                        <div className="tutorData">
                            <span className='cardTitle'>Datos Tutor</span><br /><hr />
                            <label>NOMBRE:</label> <p>{data.properties.firstname}</p>
                            <label>1er APELLIDO:</label> <p>{data.properties.eca___hijo_1___primer_apellido}</p>
                            <label>2do APELLIDO:</label> <p>{data.properties.eca___tutor_1___segundo_apellido}</p>
                            <label>PARENTESCO:</label> <p>{data.properties.eca___tutor_1___parentesco}</p>
                            <label>CORREO:</label> <p>{data.properties.email}</p>
                            <label>TELÉFONO:</label> <p>{data.properties.eca___tutor_1___telefono}</p>
                            <label>CELULAR:</label> <p>{data.properties.eca___tutor_1___celular}</p>
                        </div>
                    </div>
                ))
                : contacts == null ?
                <div className='message'><p>USUARIO NO ENCOTRADO</p></div>

                    : contacts.length ==0 ?
                    <div className='message'><p>INGRESE DATOS</p></div>

                    :null
        




            }
        </div>

    )
}