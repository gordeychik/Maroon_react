import { Catalog } from '../../components/Catalog/Catalog'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import styles from './CatalogPage.module.scss'
import { CartPage } from '../CartPage/CartPage'
import { Invite } from '../../components/Invite/Invite'
import { Contacts } from '../../components/Contacts/Contacts'

export const CatalogPage = () => {
  return (
    <>
    <Header />
    <Catalog />
    <Invite />
    <Contacts />
    <Footer />
    </>
  )
}