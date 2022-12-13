import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";



const ItemMenu = (props) => {


  return (
    <>
            <i style={{color:'green'}} className={props.icon} />
            <h4 style={{color: "grey",  }} class="pl-2 mr-4" >{props.name}</h4>

    </> 
  );
};
export default ItemMenu;
