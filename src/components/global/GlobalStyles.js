import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

 *{
   margin:0;
   padding:0;
   box-sizing: border-box;
 }

 html{
   font-size: 62.5%;
 }

 body{
  font-family: 'Quicksand', sans-serif;
 }

 h1,h2,h3,h4{
   line-height:1;
 }

 h1{
   font-size: 4.8rem;
 }
 h2{
   font-size: 4rem;
 }
 h3{
   font-size: 3.2rem;
 }
 h4{
   font-size: 2.4rem;
 }

 @media(max-width: 799px){
  h1{
   font-size: 4rem;
 }
 h2{
   font-size: 3.2rem;
 }
 h3{
   font-size: 2.4rem;
 }
 h4{
   font-size: 1.6rem;
 }
 }

 ul,li{
   list-style-type: none;
 }

 a{
   text-decoration: none;
 }

`;

export default Global;
