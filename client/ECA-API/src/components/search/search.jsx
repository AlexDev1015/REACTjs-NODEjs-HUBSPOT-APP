import { useEffect, useState } from "react"
import "./search.css"
import { apiSearch } from "../../js/apiSearch";
import { statusOptions } from "../../js/apiSearch";

export const Search = ({ handleSetContacts, menuOptions, handlePagination,input, setInput,status,setStatus}) => {

    useEffect(()=>{getStatusOptions()},[])

    const getStatusOptions = async () => {
        const opcs = await statusOptions()
        setStatus(opcs)
    }   


    const handleSearch = (event) => setInput(event.target.value) // escritura en t eclado
    const handleSelect = (event) => setInput(event.target.value) //seleción de opcion de estatus 



    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = await apiSearch(input, menuOptions)
        //aqui retornamos exclusivamente los contactos que estan en el arreglo results como prop de data
        handleSetContacts(data.results)
        console.log(data)
        if(menuOptions=='status')
            handlePagination(data.total)
    }


    return (
        <div id="searchBar">

            {menuOptions == 'search' ?
                <>
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleSearch} value={input}></input>
                        <button type="submit">BUSCAR</button>
                    </form>
                </>

                : menuOptions == 'status' ?
                    <>
                        <form onSubmit={handleSubmit}>
                            {Array.isArray(status) ?
                                <select onChange={handleSelect} name="statusOpc" id="status">
                                    {status.map((status, index) => (
                                        <option key={index} value={status} >{status}</option>
                                    ))}
                                </select>
                                : null}

                            <button type="submit">BUSCAR</button>
                        </form>
                    </>

                    : null

            }




        </div >
    )

}