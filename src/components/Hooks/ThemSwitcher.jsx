import React, { useState } from 'react'

function ThemSwitcher() {

    const [isDark,setIsDark] = useState(true);

    const toggleButton = ()=>{
      setIsDark(!isDark);
    }

    const lightMode ={
        backgroundColor:"#f9f9f9",
        color: "#333",
        text: "center",
        minHeight: "100vh"
     }

      const darkMode ={
        backgroundColor:"#333",
        color: "#f9f9f9",
        text: "center",
        minHeight: "100vh"
     }

    

  return (
    <div style={ isDark? darkMode: lightMode}>
        <h2>{isDark? "Light Mode": "Dark Mode"}</h2>
        <button onClick={()=> toggleButton()}>Switch to{isDark? "Light": "Dark"}</button>
    </div>
  )
}

export default ThemSwitcher;