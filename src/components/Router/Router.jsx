import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import ToDo from '../Hooks/ToDo'
import ThemSwitcher from '../Hooks/ThemSwitcher'
import Product from '../Hooks/Product'

function Router() {
  return (
    <BrowserRouter>
    {/* navigation */}
    <nav>
        <Link to=''>Home</Link>
        <Link to='/product'>Product</Link>
        <Link to='them'>Them Switch</Link>
    </nav>
      <Routes>
        <Route path='' element={<ToDo/>}/>
        <Route path='/them' element={<ThemSwitcher/>}/> 
        <Route path='product' element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router