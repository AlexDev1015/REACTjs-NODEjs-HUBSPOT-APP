import { useEffect, useState } from "react";
import { apiSearch } from "../js/apiSearch";

import right from '../assets/right.svg'
import left from '../assets/left.svg'


export const Pagination = ({ pagination, input, menuOptions, handleSetContacts }) => {

    const [counter, setCounter] = useState(null)
    const [flag, setFlag] = useState(null) // para evitar error en useeffect cuando aun no hay input, menuopt etc.


    useEffect(() => {
        if(input != '')
            setCounter(0)
    },[input])

    useEffect(() => {     
        if (counter !=null ) {
            const search = apiSearch(input, menuOptions, counter)
                .then((res) => {
                    handleSetContacts(res.results)
                    if(res.paging)
                        setFlag(true)
                    else
                        setFlag(false)
                })
        }



    }, [counter])


    const handleSetIncrease = () => {
        setCounter((count) => count + 20)
    }

    const handleSetDecrease = () => {
        setCounter((count) => count - 20)
    }


    return (
        <div className="paginationWrapper">
            {counter == 0 ?
                <div className="PaginationElement">
                    <img className="arrow" onClick={handleSetIncrease} src={right} />
                </div>

                : flag == true ?
                    <div className="PaginationElement">
                        <img className="arrow" onClick={handleSetDecrease} src={left} />
                        <img className="arrow" onClick={handleSetIncrease} src={right} />
                    </div>

                    : flag == false ?
                        <div className="PaginationElement">
                            <img className="arrow" onClick={handleSetDecrease} src={left} />
                        </div>
                    
                        : null
            }


        </div>
    )

}