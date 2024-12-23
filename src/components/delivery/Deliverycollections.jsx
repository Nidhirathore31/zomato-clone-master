import React from "react";
import "./deliverycollections.css";
import NextArrow from "../carousel/NextArrow";
import PrevArrow from "../carousel/PrevArrow";
import Slider from "react-slick";
import DeliveryItem from "./DeliveryItem";

const deliveryItem = [
    {
        id:1,
        title:"Pizza",
        cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
        id:2,
        title:"Burger",
        cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {
        id:3,
        title:"Cake",
        cover:"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"
    },
    {
        id:4,
        title:"Biryani",
        cover:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
    },
    {
        id:5,
        title:"Thali",
        cover:"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
    },
    {
        id:6,
        title:"Sandwich",
        cover:"https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png"
    },
    {
        id:7,
        title:"Chicken",
        cover:"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
    },
    {
        id:8,
        title:"North Indian",
        cover:"https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg"
    },
    {
        id:9,
        title:"Rolls",
        cover:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
    },
    {
        id:10,
        title:"Momos",
        cover:"https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png"
    },
    {
        id:11,
        title:"Paneer",
        cover:"https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png"
    },
    {
        id:12,
        title:"Dosa",
        cover:"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
    },
]

const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
};

const Deliverycollections = () =>{
    return(
        <>
        <div className="delivery-collection">
            <div className="max-width">
                <div className="collection-tittle">Eat what makes you happy</div>
                <Slider {...settings}>
                    {deliveryItem.map((item) =>{
                        return <DeliveryItem item ={item}/>
                    })}

                </Slider>


            </div>
        </div>
        </>
    )
}
export default Deliverycollections;