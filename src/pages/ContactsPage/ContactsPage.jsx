import React from 'react'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Contacts } from '../../components/Contacts/Contacts'
import { Invite } from '../../components/Invite/Invite'

export const ContactsPage = () => {
  return (
    <>
    <Header />
    <Invite />
    <Contacts />
    <Footer />
    </>
  )
}