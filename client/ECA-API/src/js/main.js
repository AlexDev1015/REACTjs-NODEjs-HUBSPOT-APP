import { dailyInfo } from "./apiSearch"
//obtenemos los contactos generados en el día anterior a la fecha 
export const dailyPreview = async () => {

    let createDatesArray = [null]
    try {
        const res = await dailyInfo();
        //console.log(res.total)


        res.results.forEach((contact,index) => {
            createDatesArray[index] = contact.properties.createdate;
        })

        //console.log(createDatesArray)
        return createDatesArray




    } catch (error) { }




}