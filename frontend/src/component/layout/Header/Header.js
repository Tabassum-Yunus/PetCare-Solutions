import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
  burgerColorHover : "tomato",
    logo,
    logoWidth : "20vmax",
    navColor1 : "white",
    logoHoverSize: "10px",
    logoHoverColor : "#66cdaa",
    link1Text : "Home",
    link2Text : "Products",
    link3Text : "Contact",
    link4Text : "About",
    link1Url : "/",
    link2Url : "/products",
    link3Url : "/contact",
    link4Url : "/about",
    link1Size : "1.3vmax",
    link1Color : "rgb(35, 35, 35, 0.8)",
    nav1justifyContent : "flex-end",
    nav2justifyContent : "flex-end",
    nav3justifyContent : "flex-start",
    nav4justifyContent : "flex-start",
    link1ColorHover : "#66cdaa",
    link1Margin : "1vmax",
    profileIconUrl : "/Login",
    profileIconColor : "rgb(35, 35, 35, 0.8)",
    searchIconColor : "rgb(35, 35, 35, 0.8)",
    cartIconColor : "rgb(35, 35, 35, 0.8)",
    searchIconColorHover : "#66cdaa",
    profileIconColorHover : "#66cdaa",
    cartIconColorHover : "#66cdaa",
    cartIconMargin : "1vmax",
}
const Header = () => {
    return <ReactNavbar {...options}/> 
  };
  
  export default Header;

  