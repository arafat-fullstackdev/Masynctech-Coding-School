import React from 'react'

import './App.css'
import Donation from './components/Donation/donation'
import Page from './components/PageLayout/Page'
import PageHub from './components/PageLayout/PageHub'
import UseStateHook from './components/Hooks/useStateHook'
import ThemSwitcher from './components/Hooks/ThemSwitcher'
import Form from './components/Hooks/Form'
import HookProject from './components/Hooks/HookProject'

function App() {

  return (
    <>
      <div>
       {/* <Donation/> */}
       {/* <PageHub/> */}
       {/* <UseStateHook/>
       <ThemSwitcher/> */}
       {/* <Form/> */}
       <HookProject/>
      </div>
      
    </>
  )
}

export default App
