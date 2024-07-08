import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { CartPage } from './pages/CartPage/CartPage';
import './App.css'

function App() {

  return (
    <>
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/catalog' element={<CatalogPage />} />
    <Route path='/contacts' element={<ContactsPage />} />
    <Route path='/product/:id' element={<ProductPage />} />
    <Route path='/cart' element={<CartPage />} />
  </Routes>
    </>
  )
}

export default App;
