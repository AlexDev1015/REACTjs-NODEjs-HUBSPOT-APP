import { Client } from "@hubspot/api-client";
import dotenv from "dotenv";
dotenv.config();



const hubspotClient = new Client({ accessToken: process.env.HUBSPOT_API_KEY });


export let dailyInfo = async() =>{
 
    //daily data  
    const publicObjectSearchRequest ={
        filterGroups:[
            {
                filters: [
                    {
                        propertyName: 'createdate',
                        operator: 'GTE',
                        value:`${Date.now() - 24 * 60 * 60000}`
                    }
                ]
            }
        ],
        sorts: [{ propertyName: 'createdate', direction: 'DESCENDING' }],
        properties: ["eca____hijo_1___estatus_del_contacto","firstname"],
        limit: 100,
        after: 0,
    }
    const response = await hubspotClient.crm.contacts.searchApi.doSearch(publicObjectSearchRequest)
    return response;



}

export let ApiResponse = async (searchParam, optionParam,offsetValue) => { // las fn asincronas retornan promosas
    let offset = 0; 

    if(offsetValue>0)
        offset = offsetValue

    
    if (optionParam != "") {

        if (optionParam == 'search') {


            const publicObjectSearchRequest = {
                filterGroups: [
                    {
                        filters: [
                            {
                                propertyName: 'email',
                                operator: 'EQ',
                                value: `${searchParam}`
                            }
                        ]
                    },
                    {
                        filters: [
                            {
                                propertyName: 'phone',
                                operator: 'EQ',
                                value: `${searchParam}`
                            }
                        ]
                    }


                ],

                sorts: [{ propertyName: 'firstname', direction: 'DESCENDING' }],
                properties: ["firstname", "email", "eca___tutor_1___nombre", "eca___tutor_1___primer_apellido", "eca___tutor_1___segundo_apellido", "eca___tutor_1___telefono", "eca___tutor_1___celular", "eca___tutor_1___parentesco", "eca___hijo_1___nombre", "eca___hijo_1___primer_apellido", "eca___hijo_1___open_school_asistido", "seccion_de_interes_eca", "eca_grado", "eca____hijo_1___estatus_del_contacto", "eca___hijo_2___nombre", "eca___hijo_2___primer_apellido", "eca___hijo_2___open_school_asistido", "eca___hijo_2____seccion", "eca___hijo_2___grado", "eca____hijo_2___estatus_del_contacto", "eca___hijo_3___nombre", "eca___hijo_3___primer_apellido", "eca___hijo_3___open_school_asistido", "eca___hijo_3____seccion", "eca___hijo_3___grado", "eca____hijo_3___estatus_del_contacto"],
                limit: 100,
                after: offset,
            }

            const response = await hubspotClient.crm.contacts.searchApi.doSearch(publicObjectSearchRequest)

            return response;


        }

        if (optionParam == 'status') {
            const publicObjectSearchRequest = {
                filterGroups: [
                    {
                        filters: [
                            {
                                propertyName: 'eca____hijo_1___estatus_del_contacto',
                                operator: 'EQ',
                                value: `${searchParam}`
                            }
                        ]
                    },
                    {
                        filters: [
                            {
                                propertyName: 'eca____hijo_2___estatus_del_contacto',
                                operator: 'EQ',
                                value: `${searchParam}`
                            }
                        ]
                    },
                    {
                        filters: [
                            {
                                propertyName: 'eca____hijo_3___estatus_del_contacto',
                                operator: 'EQ',
                                value: `${searchParam}`
                            }
                        ]
                    }


                ],

                sorts: [{ propertyName: 'firstname', direction: 'DESCENDING' }],
                properties: ["lastname", "firstname", "phone", "email", "eca___tutor_1___nombre", "eca___tutor_1___primer_apellido", "eca___tutor_1___segundo_apellido", "eca___tutor_1___telefono", "eca___tutor_1___celular", "eca___tutor_1___parentesco", "eca___hijo_1___nombre", "eca___hijo_1___primer_apellido", "eca___hijo_1___open_school_asistido", "seccion_de_interes_eca", "eca_grado", "eca____hijo_1___estatus_del_contacto", "eca___hijo_2___nombre", "eca___hijo_2___primer_apellido", "eca___hijo_2___open_school_asistido", "eca___hijo_2____seccion", "eca___hijo_2___grado", "eca____hijo_2___estatus_del_contacto", "eca___hijo_3___nombre", "eca___hijo_3___primer_apellido", "eca___hijo_3___open_school_asistido", "eca___hijo_3____seccion", "eca___hijo_3___grado", "eca____hijo_3___estatus_del_contacto"],
                limit: 20,
                after: offset,
            }

            const response = await hubspotClient.crm.contacts.searchApi.doSearch(publicObjectSearchRequest)

            //detalles de la petición
            console.log(response)

            //detalles de los contactos. en results
            //console.log(response.results)


            //retornamos toda la respuesta 
            return response;


        }


        //si no lo encuentra
        else
            return null
    }
}

