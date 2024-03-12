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
width:5%;

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
`
