import styled from 'styled-components'

export const GameArea = styled.div`
position: relative; 
margin: 50px auto;
width: 600px;
height: 600px;
border: 2px solid #000;
z-index: 3;
`

export const SnakeDot=styled.div`
position:absolute;
width:4%;
height:4%;
background: green;
border: 1px solid white;
z-index: 2;
`

export const SnakeFood=styled.div`
position:absolute;
width:4%;
height:4%;
background: red;
border: 1px solid white;
z-index: 1;
`