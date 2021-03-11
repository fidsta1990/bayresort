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
  background: #fcfcfc;
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

 img{
   width: 100;
   display: block;
   object-fit: cover;
 }

/* TITLE */
.title {
    width: 100%;
    text-align: center;
    line-height: 1.5;
    font-size: 2.4rem;
    margin: 4rem 0rem 2.4rem 0rem;
  }

  @media (min-width: 768px) {
    .title {
      font-size: 4rem;
      max-width: 500px;
    }
  }
  @media (max-height: 360px) {
    .title {
      padding-top: 4.8rem;
    }
  }
  @media (max-height: 414px) {
    padding-top: 9.6rem;

    .title {
      margin-top: 9.6rem;
    }
  }

  @media (max-height: 414px) and (max-width: 736px) {
    .title {
      padding-top: 6.4rem;
    }
  }

`;

export default Global;
