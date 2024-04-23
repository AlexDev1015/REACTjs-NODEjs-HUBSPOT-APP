//comunicación del front con el backend

export const apiSearch = async (input, menuOptions, offsetValue = 0) => {

    const params = { userSearch: input, userOption: menuOptions, offsetValue: offsetValue }

    try {
        const search = await fetch("http://localhost:3009/api/search", {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(params)
        });
        const response = await search.json();

        return response;

    }

    catch { console.log('error -> searchSpi') }

}





// para obtener las opciones de estatus que definimos en el servidor


export const statusOptions = async () => {

    try {
        const values = await fetch("http://localhost:3009/api/statusOptions")
        const opcs = await values.json()
        return opcs

    }
    catch { console.log('error -> statusOptions') }

}


export const dailyInfo = async () => {
    try {
        const data = await fetch("http://localhost:3009/api/dailyInfo")
        const response = await data.json();
        return response
    }
            catch { console.log('error -> dailyInfo') }


    }



