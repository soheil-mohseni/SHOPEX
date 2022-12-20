import React, { useEffect, useState } from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import ItemMenu from "./ItemMenu";
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import SideBar from "./SideBar";
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from "./utility/NodeService";


const Navbar = () => {
  const [value3, setValue3] = useState('');
  const [visibleRight, setVisibleRight] = useState(false);
  const [selectedNodeKey2, setSelectedNodeKey2] = useState('pr');
  const [nodes, setNodes] = useState(null);
  const nodeService = new NodeService();

  useEffect(() => {
 //   nodeService.getTreeNodes().then(data => setNodes(data));
 const ss = hu()
}, []); // eslint-disable-line react-hooks/exhaustive-deps

  const hu = async () =>{
    const res = await nodeService.getTreeNodes()
    console.log("2222222222222222222222222222",res['root']);
    setNodes(res['root'])
  }
 console.log(selectedNodeKey2);
 console.log("222222",selectedNodeKey2) 
  return (
    <>
    <div style={{width: "100%",backgroundColor:'white'}} class="card fixed  z-1 justify-content-center">
      <div style={{width: "100%",height:"66%",marginTop:"10px"}} class="flex card-container m-0 blue-container mt-1 justify-content-center overflow-hidden">
          <div style={{minWidth: "65%",height:"66%",marginTop:"10px",}} class="flex-none  m-0 flex h-4rem bg-blue500 align-items-center justify-content-between font-bold text-white border-round ">
          <Button icon="pi pi-align-justify" onClick={() => setVisibleRight(true)} className="sm:hidden ml-0 inline" />

            <div class="flex align-items-center justify-content-start flex-wrap card-container blue-container">
                <h2 style={{color: 'black'}} class="pl-3 mr-4" >SHOPEX</h2>
                <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText className="md:w-17rem w-10rem" value={value3} onChange={(e) => setValue3(e.target.value)} placeholder="Search" />
                </span>
            </div>

            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
              <SideBar/>
            </Sidebar>

            <div class="hidden md:flex md:align-items-center md:justify-content-start md:flex-wrap md:card-container md:blue-container ">

              <ItemMenu icon={"pi pi-globe"} name={"Blog"}/>
              <ItemMenu icon={"pi pi-user"} name={"User"}/>
              {/* <ItemMenu icon={"pi pi-microsoft"} name={"Product"}/> */}
                <TreeSelect value={selectedNodeKey2} options={nodes} className="border-0" onChange={(e) => setSelectedNodeKey2(e.target.value)} filter placeholder={<i className="pi pi-microsoft text-green-700"> Product</i>}>
              
                </TreeSelect><br/>
              <ItemMenu icon={"pi pi-home"} name={"Home"}/>

            </div>
             
          </div>
      </div>
    </div>   
    </> 
  );
};
export default Navbar;
