import { useState } from "react"
import { useEffect } from "react"
import { formatContact } from "../../js/formatContact"

import { Pagination } from "../pagination"

import './contacts.css'

import profileIcon from '../../assets/profile-icon.svg' 
import whatsIcon from '../../assets/whats-icon.svg'
import mailIcon from '../../assets/mail-icon.svg'
import noAvailable from '../../assets/no-available-icon.svg'

export const  Contacts = ({ contacts, pagination }) => {


    return (
        <>
            <div className="cwrapper">

                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Teléfono WA</th>
                            <th>MAIL</th>
                            <th>HIJO 1</th>
                            <th>HIJO 2</th>
                            <th>HIJO 3</th>
                        </tr>
                    </thead>
                        {contacts  ?
                            contacts.map((contact, index) => (
                                <tr key={index}>
                                    <td>{contact.properties.firstname}</td>
                                    <td>{contact.properties.lastname}</td>
                                    <td style={{textAlign:'center'}} > <a href={`https://api.whatsapp.com/send?phone=${contact.properties.phone}`}><img src={whatsIcon} /></a></td>
                                    <td style={{textAlign:'center'}}> <a href={`mailto:${contact.properties.email}`}><img src={mailIcon} /></a></td>
                                    {contact.properties.eca___hijo_1___nombre ? <td style={{textAlign:'center'}}> <a href={`#`}><img src={profileIcon} /></a></td>: <td><p>N / D</p></td>}
                                    {contact.properties.eca___hijo_2___nombre ? <td style={{textAlign:'center'}}> <a href={`#`}><img src={profileIcon} /></a></td>:  <td><p>N / D</p></td>}
                                    {contact.properties.eca___hijo_3___nombre ? <td style={{textAlign:'center'}}> <a href={`#`}><img src={profileIcon} /></a></td>:  <td><p>N / D</p></td>}
                                </tr>
                            ))

                            : null}


                </table>


            </div>


        </>


    )

}