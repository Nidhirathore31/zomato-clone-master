import React from "react";
import './dining.css';
import Collections from "../Collections";
import { Diningdata } from "../../data/Diningdata";
import Filter from "../Filter";
import Explore from "../exploresection/Explore";

const collectionList = [
  {
    id:"1",
    title:"12 Best Luxury Dining Places",
    places:"13 places",
    cover:"	https://b.zmtcdn.com/data/collections/1861a2246de9e8cc96569b5dc4c3405c_1685696585.jpg"
  },
  {
    id:"2",
    title:"11 Romantic Dining Places",
    places:"11 places",
    cover:"https://b.zmtcdn.com/data/collections/aaccef7199995c73258750f61c1961f0_1685696893.jpg"
  },
  {
    id:"3",
    title:"17 Great Cafes",
    places:"18 places",
    cover:"	https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1685698994.jpg"
  },
  {
    id:"4",
    title:"12 Local Favourite Places",
    places:"9 places",
    cover:"	https://b.zmtcdn.com/data/collections/047d79ba26a7d5fec76b22ecf4a5ae02_1685698329.png"
  },
  {
    id:"5",
    title:"9 Serene Rooftop Places",
    places:"9 places",
    cover:"	https://b.zmtcdn.com/data/collections/d54e4b6a1158807ed119c9741510ea73_1685698615.jpg"
  },
  {
    id:"6",
    title:"8 Great Buffets",
    places:"8 places",
    cover:"	https://b.zmtcdn.com/data/collections/6d15bb3be793058440ed5e7006149c07_1685697152.jpg"
  },
  {
    id:"7",
    title:"18 Best Bras & Pubs",
    places:"16 places",
    cover:"https://b.zmtcdn.com/data/collections/21ebc8e2867c6917de5b0eb1aae8174e_1685695703.jpg"
  },
  {
    id:"8",
    title:"26 Live Cricket Screening",
    places:"24 places",
    cover:"	https://b.zmtcdn.com/data/collections/ef140246fb4f5b15717d0ac120a303e0_1693550413.png"
  },

];
const  Diningfilter = [
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
      title: "Outdoor Seating",
  },
  {
      id:4,
      title: "Serves Alcohol",
  },
  {
      id:5,
      title: "Open Now",
  },
];
const dininglist = Diningdata

const Dining = () => {
  return (
    <>
    <Collections list ={collectionList}/>
    <div className="max-width">
      <Filter filterList={Diningfilter}/>

    </div>
    <Explore list={dininglist} collectionName='Trending dining restaurants in Indore'/>
    </>
  )
}
export default Dining;
