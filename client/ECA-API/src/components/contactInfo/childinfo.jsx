import { useEffect, useState } from 'react'
import './contactinfo.css'
import { formatContact } from '../../js/formatContact'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export const ChildInfo = ({ contacts }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 5,
        slidesToShow: 1,
        slidesToScroll: 1
      };






    return (

        <div className="container">
            {Array.isArray(contacts) ?
                contacts.map((data, index) => (
                    <div key={index}>
                    < Slider {...settings} >

                        <div className="contactWrapper">  {/* la key debe ir en el elemento más inmediato al metodo map*/}
                            <div className="childData">
                                <span className='cardTitle'>Datos Hijo 1</span><br/><hr/>
                                <label>NOMBRE:</label> <p>{data.properties.eca___hijo_1___nombre}</p>
                                <label>1er APELLIDO:</label> <p>{data.properties.eca___hijo_1___primer_apellido}</p>
                                <label>SECCION:</label> <p>{data.properties.seccion_de_interes_eca}</p>
                                <label>GRADO:</label> <p>{data.properties.eca_grado}</p>
                                <label>ESTATUS:</label> <p>{data.properties.eca____hijo_1___estatus_del_contacto}</p>
                            </div>
                        </div>

                        <div className="contactWrapper">  {/* la key debe ir en el elemento más inmediato al metodo map*/}
                            <div className="childData">
                                <span className='cardTitle'>Datos Hijo 2</span><br/><hr/>
                                <label>NOMBRE:</label> <p>{data.properties.eca___hijo_1___nombre}</p>
                                <label>1er APELLIDO:</label> <p>{data.properties.eca___hijo_1___primer_apellido}</p>
                                <label>SECCION:</label> <p>{data.properties.seccion_de_interes_eca}</p>
                                <label>GRADO:</label> <p>{data.properties.eca_grado}</p>
                                <label>ESTATUS:</label> <p>{data.properties.eca____hijo_1___estatus_del_contacto}</p>
                            </div>
                        </div>
                    </Slider>
                    </div>

                ))
                : <p>DATOS DEL Alumno:</p>}




        </div>

    )
}