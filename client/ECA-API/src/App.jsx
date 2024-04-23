import { useEffect, useState } from 'react'
import './App.css'


import { Header } from './components/header/header'
import { Menu } from './components/menu/menu'
import { Search } from './components/search/search'
import { TutorInfo } from './components/contactInfo/tutorinfo'
import { ChildInfo } from './components/contactInfo/childinfo'
import { Contacts } from './components/contacts/contacts'
import { Pagination } from './components/pagination'
import { GraphDisplay } from './components/graphDisplay/graphDisplay'




export const App = () => {

  const [contacts, setContacts] = useState(null);
  const [menuOptions, setMenuOptions] = useState(null);
  const [pagination, setpagination] = useState([]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState(null);
  const [contactsDate, setContactsDate] = useState(null)





  //obtener en el front el contacto
  const handleSetContacts = (data) => { setContacts(data) }

  //obtenemos la paginacion de los contactos 
  const handlePagination = (total) => {
    let counter = 1;
    let tempPaginationArray = [];
    let pagination = Math.ceil(total / 10)

    do {
      tempPaginationArray[counter] = counter;
      counter++;
    } while (counter <= pagination)

    setpagination(tempPaginationArray)

  }

  const handleSetContactsDate = (dates) => {
    setContactsDate(dates)
  }

 







  return (
    <>
      <Header />
      <Menu setMenuOptions={setMenuOptions} setContacts={setContacts} menuOptions={menuOptions} setInput={setInput} />

      <div className="mainWrapper">

        {menuOptions == "search" ?
          <>
            <Search input={input} setInput={setInput} status={status} setStatus={setStatus} menuOptions={menuOptions} handleSetContacts={handleSetContacts} />
            <div className='searchWrapper'>
              <TutorInfo contacts={contacts} />
              <ChildInfo contacts={contacts} />
            </div>
          </>

          : menuOptions == "status" ?
            <>
              <Search menuOptions={menuOptions} handlePagination={handlePagination} handleSetContacts={handleSetContacts} input={input} setInput={setInput} status={status} setStatus={setStatus} />
              <Contacts contacts={contacts} pagination={pagination} />
              <Pagination input={input} menuOptions={menuOptions} handleSetContacts={handleSetContacts} />

            </>
            :
            <>
              <GraphDisplay contactsDate={contactsDate} handleSetContactsDate={handleSetContactsDate}  />
            </>
        }
      </div>
    </>
  )
}