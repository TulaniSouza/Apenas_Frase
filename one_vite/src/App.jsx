import React from "react"
import Sino from "./Main/Sininho.jpg"
import Main from "./Main/Main_one.jsx"
import * as S from "./Main/Main_one.jsx"
import styled from "styled-components"


function App(){
  return(
    <>
      <h1>Contando o tempo</h1>
      <img src={Sino} alt=""/>
      <Main/>
    </>
  )
}
export default App