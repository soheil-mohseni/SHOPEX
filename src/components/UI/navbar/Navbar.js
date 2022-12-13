import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import ItemMenu from "./ItemMenu";
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';



const Navbar = () => {
  const [value3, setValue3] = useState('');
  const [visibleRight, setVisibleRight] = useState(false);


  return (
    <>
    <div class="card justify-content-center">
      <div style={{width: "100%",height:"66%",marginTop:"10px"}} class="flex card-container m-0 blue-container mt-1 justify-content-center overflow-hidden">
          <div style={{minWidth: "65%",height:"66%",marginTop:"10px",}} class="flex-none  m-0 flex h-4rem bg-blue500 align-items-center justify-content-between font-bold text-white border-round ">
            <div class="flex align-items-center justify-content-start flex-wrap card-container blue-container">
                <h2 style={{color: 'black'}} class="pl-4 mr-4" >SHOPEX</h2>
                <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText className="w-10rem" value={value3} onChange={(e) => setValue3(e.target.value)} placeholder="Search" />
                </span>
            </div>

            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                    <h3>Right Sidebar</h3>
            </Sidebar>
            <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} className="mr-2" />

            <div class="hidden md:flex md:align-items-center md:justify-content-start md:flex-wrap md:card-container md:blue-container ">

              <ItemMenu icon={"pi pi-user"} name={"Account"}/>
              <ItemMenu icon={"pi pi-user"} name={"Account"}/>
              <ItemMenu icon={"pi pi-user"} name={"Account"}/>
              <ItemMenu icon={"pi pi-user"} name={"Account"}/>

            </div>

             
          </div>
      </div>
    </div>

    
    
    
    </> 
  );
};
export default Navbar;
