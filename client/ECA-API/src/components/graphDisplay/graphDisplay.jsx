import { useEffect } from "react";

import { dailyPreview } from "../../js/main"
import { Contacts } from "../contacts/contacts";



export const GraphDisplay = ({ contactsDate, handleSetContactsDate }) => {
    // solicitar el arreglo con las fechas de todos los contacos generados 
    const setDates = async () => {
        try {
            const dates = await dailyPreview()
            handleSetContactsDate(dates)
        } catch (error) { }

    }

    //obtener cantidad de elemtos por dia 
    const getGraphArray = (array) => {

        let aux=[]; 

        (array != null) ?
            (array.map((date,index) => {
                aux[index]=date;



                console.log(`fecha: ${aux[index]}`)
            })


            )

            : null


    }



    useEffect(() => { setDates() }, [])

    useEffect(() => {

        getGraphArray(contactsDate)

    }, [contactsDate])

    return (
        <>
            {contactsDate != null ?
                <>
                    <p>{contactsDate}</p>
                    <br />
                </>
                : null}
        </>
    )

}