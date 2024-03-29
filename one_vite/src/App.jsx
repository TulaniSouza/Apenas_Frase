import React from "react"
import Header from "./Header/Header.jsx"
import Main from "./Main/Main_one.jsx"
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
`
function App(){
  return(
    <>
      <Header/>
      <Main/>
      <GlobalStyle/>
    </>
  )
}
export default App