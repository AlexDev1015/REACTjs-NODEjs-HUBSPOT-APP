
//se encarga de adecuarda el array enviado de hbspt a un array del tipo [{prop}] en lugar de [{prop prop prop }]   y para agregar texto a cambios nulos
export const formatContact = ( contacts ) => {
    let tempData = {}
        let tempContact = []
         tempContact = contacts.map((contact) => {
            Object.keys(contact.properties).forEach((property) => {
                tempData[property] = contact.properties[property] !== null ? contact.properties[property] : "n/d"
            })
            return tempData
        })


        if(tempContact.length>0){  
            return tempContact
        }
        else{return null}





}