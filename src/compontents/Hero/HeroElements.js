import styled from 'styled-components'
import ImgBg from '../../images/pizza.jpg'

export const HeroContainer = styled.div`

background: linear-gradient(to right, rgba(0,0,0,0.7),
rgba(0,0,0,0.1)), url(${ImgBg});
height:100vh;
background-position: center;
background-size: cover;
`
export const HeroContent = styled.div`
height: calc(90vh);
max-height:100%100vh;
width:100vw;
`
export const HeroItems = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
height:80vh;
max-height:100%100vh;
padding: 0 2rem;
width:650px;
color:#fff;
text-transform:uppercase;
line-height:1;
font-weight:bold;
@media screen and (max-width:650px) {
    width:100%;
}
`
export const HeroH1 = styled.div`
font-size: clamp(2.5rem,10vw, 5rem);
margin-bottom:1rem;
box-shadow:3px 5px #e9ba23;
letter-spacing:3px;
`
export const HeroP = styled.p`
font-size: clamp(2rem,2.5vw,3rem);
margin-bottom:2rem;
`
export const HeroBtn = styled.button`
font-size:1.4rem;
padding:1rem 4rem;
border:none;
a{
    text-decoration:none;
    color:black;
}

&:hover{
    background:#ffc500;
    transition: 0.2s ease-out;
    cursor:pointer;
    color:#000;
}
`
