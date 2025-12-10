import React from 'react'

import Donation from './components/Donation/donation'
import UseEffect from './components/Hooks/UseEffect'
import Product from './components/Hooks/Product'
import Todo from './components/Hooks/ToDo'


import Page from './components/PageLayout/Page'
import PageHub from './components/PageLayout/PageHub'
import UseStateHook from './components/Hooks/useStateHook'
import ThemSwitcher from './components/Hooks/ThemSwitcher'
import Form from './components/Hooks/Form'
import HookProject from './components/Hooks/HookProject'
import FeedBack from './components/Hooks/FeedBack'
import Map from './components/Hooks/Map'
import Router from './components/Router/Router'


function App() {

  return (
    <>
      <div>
       {/* <Donation/> */}
       {/* <UseEffect/> */}
       {/* <Product/> */}
       {/* <Todo/> */}
       <Router/>
      </div>
      
    </>
  )
}

export default App
