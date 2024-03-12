import styled,{createGlobalStyle} from "styled-components"
import Menino from "../assets/Menino.jpg"
import React from "react"
import * as S from "./Style.jsx"

function Menino(){
    return(
        
        <S.StyledMenino>
            <img src={Menino} alt=""></img>
        </S.StyledMenino>
       

    )

}
export default Menino
