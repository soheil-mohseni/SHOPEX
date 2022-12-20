import React, { useEffect, useState } from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import ItemMenu from "./ItemMenu";
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from "./utility/NodeService";



const SideBar = () => {
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

  return (
    <>


              <ItemMenu icon={"pi pi-globe"} name={"Blog"}/>
              <ItemMenu icon={"pi pi-user"} name={"User"}/>
              {/* <ItemMenu icon={"pi pi-microsoft"} name={""}/> */}
              <TreeSelect value={selectedNodeKey2} options={nodes} className="border-0" onChange={(e) => setSelectedNodeKey2(e.target.value)} filter placeholder={<i className="pi pi-microsoft text-green-700"> Product</i>}/><br/><br/>
              <ItemMenu icon={"pi pi-home"} name={"Home"}/>


    </> 
  );
};
export default SideBar;
