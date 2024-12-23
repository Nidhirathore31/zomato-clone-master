import React, { useState } from "react";
import Delivery from "./delivery/Delivery";
import Dining from "./dining/Dining";
import Nightlife from "./nightlife/Nightlife";
import Tab from './Tab';


const Home = () =>{
    const [activeTab,setActiveTab] = useState("Delivery")
    return(
        <>
      
     
      <Tab activeTab ={activeTab} setActiveTab = {setActiveTab}/>
       {getCorrectScreen(activeTab)}
        </>
    )
}
const getCorrectScreen = (tab) =>{
    switch(tab){
        case "Delivery":
            return <Delivery/>;
        case "Dining Out":
            return <Dining/>;
       case "Night Life" :
        return <Nightlife/>;
        default :
        return <Delivery/>;
    }
}
export default Home;