import styled,{createGlobalStyle} from "styled-components"
import Sininho from "../assets/Sininho.jpg"


const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
`
export const StyledButton=styled.button`
cursor:pointer;
margin-bottom:20%;
margin-left:20%;
width:7%;

@media (min-width: 506px) and (max-width:834px ){
    width: 15%;
    margin-bottom: 12.9em;
    position: absolute;
    z-index: 1;
}

@media (min-width: 100px) and (max-width:200px ){
    position: fixed;
    width: 20%;
    height: 8%;
    margin-bottom: 80%;
}

    @media (min-width: 201px) and (max-width:505px ){
    position: fixed;
    width: 20%;
    height: 8%;
   margin-bottom: 12.9em;
}
`
export const StyledMain=styled.main`
background-image: url(${Sininho});
height:80vh;
width:80%;
display:flex;
background-repeat:no-repeat;
background-size:78% 88%;
align-items:center;
justify-content:center;
margin-left:10%;

@media (min-width:100px) and (max-width:215px){
width:15rem;
height: 100vh; 
}

@media (min-width:216px) and (max-width:305px){
width:15.5rem;
height: 75vh; 
}
`

export const Button=styled.button`
width:25%;
height:10%;
cursor: pointer;

@media (min-width:100px) and (max-width:505px){
width:30%;
height: 45%; 

}
`
