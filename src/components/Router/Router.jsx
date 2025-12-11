import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import ToDo from '../Hooks/ToDo'
import ThemSwitcher from '../Hooks/ThemSwitcher'
import Product from '../Hooks/Product'
import PageLayout from '../Blog/PageLayout'

function Router() {
  return (
    <BrowserRouter>
    {/* navigation */}
    <nav style={{
      margin: "12px",
      padding: "5px",
      display: "flex"
    }}>
        <Link to=''>Home</Link>
        <Link to='/product'>Product</Link>
        <Link to='them'>Them Switch</Link>
        <Link to='blog'>Blog</Link>
    </nav>
      <Routes>
        <Route path='' element={<ToDo/>}/>
        <Route path='/them' element={<ThemSwitcher/>}/> 
        <Route path='product' element={<Product/>}/>
        <Route path='blog' element={<PageLayout/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router