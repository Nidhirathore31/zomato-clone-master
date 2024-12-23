import React from "react";
import './delivery.css';
import Filter from "../Filter";
import Deliverycollections from "./Deliverycollections";
import TopBrands from "../topbrands/TopBrands";
import Explore from "../exploresection/Explore";
import { Restaurant } from "../../data/Restaurant";


const  deliveryfilter = [
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
        title: "Pure Veg",
    },
   
    {
        id:4,
        title: "cuisines",
        icon:<i className="fi fi-rr-angle-small-down absolute-center"></i>, 
    },
];
const restaurantList = Restaurant;
const Delivery = () => {
    return(
        <>
      <div className="max-width">
      <Filter filterList ={deliveryfilter}/>
      </div>
      <Deliverycollections/>
      <TopBrands/>
      <Explore list ={restaurantList} collectionName='Best Food in Indore'/>
        </>
    )
}
export default Delivery;
 