import React, {useState} from "react";
import Sino from "./Main/Sininho.jpg";
import Style from "./Style.jsx";


const [number,setNumber]= useState (0)


function Add(){
    setNumber(number+1)
    return(
        <S.StyledAdd>
            <img src={Sino} alt="Sininho"/>
            <Style/>
        
            <section>
                <h2>{number}</h2>
                <button onClick={Add}>+</button>
                <button onClick>-</button>
                <button onClick>C</button>
            </section>
        </S.StyledAdd>
    )
}
export default Add