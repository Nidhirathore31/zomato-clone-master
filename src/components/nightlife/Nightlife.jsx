import React from "react";
import './nightlife.css';
import Collections from "../Collections";
import Filter from "../Filter";
import Explore from "../exploresection/Explore";
import { Nightlifedata } from "../../data/Nightlifedata";

const  Nightlifefilter = [
    {
        id:1,
        icon:<i className="fi fi-rr-settings-sliders absolute-center"></i>,
        title: "Filters",
    },
    {
        id:2,
        title: "Ratings : 4.0+",
    },
    
    {
        id:3,
        title: "Pubs & Bars",
    },
    
];
const collectionlist =[
    {
       id:1,
       title:"18 Bars & Pubs" ,
       places:"16 places",
       cover: "https://b.zmtcdn.com/data/collections/21ebc8e2867c6917de5b0eb1aae8174e_1685695703.jpg"
    }
];
const nightlist =   Nightlifedata
const Nightlife = () => {
    return (
   <>
    <Collections list={collectionlist} />
    <div className="max-width">
        <Filter filterList={Nightlifefilter}/>
    </div>
    <Explore list={nightlist} collectionName='Nightlife Restaurants in Indore'/>
   </>
    )
}
export default Nightlife;