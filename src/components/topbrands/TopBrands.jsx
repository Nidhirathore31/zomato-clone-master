import React from "react";
import "./topbrands.css";
import NextArrow from "../carousel/NextArrow";
import PrevArrow from "../carousel/PrevArrow";
import Slider from "react-slick";

const brandList =[
    {
        id: 1,
        title: "Oye 24",
        time: "31min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/663fe0524260a8b13f7e29234f6b0246_1650443683.png?output-format=webp"
    },
    {
        id: 2,
        title: "MC Donald's",
        time: "22min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625165086.png?output-format=webp"
    },
    {
        id: 3,
        title: "Nafees Restaurant",
        time: "26min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/948574cd50798ba77c066b93e11b0e24_1617972221.png?output-format=webp"
    },
    {
        id: 4,
        title: "Tinku's",
        time: "27min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/e8615ce7298eee6684772eab78020240_1617972313.png?output-format=webp"
    },
    {
        id: 5,
        title: "Pizza Hut",
        time: "29min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/7059708ecf9568fc43490b7dad4c8f85_1672382255.png?output-format=webp"
    },
    {
        id: 6,
        title: "Burger Farm",
        time: "27min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/f905a1891242f846e44a8d1f292a13d8_1698914856.png?output-format=webp"
    },
    {
        id: 7,
        title: "KFC",
        time: "27min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433238.png?output-format=webp"
    },
]


const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
};
const TopBrands = () =>{
    return(
        <>
        <div className="top-brands max-width"> 
        <div className="collection-tittle">Top brands for you</div>
        <Slider {...settings}>
          {brandList.map((brand)=>{
            return <div>
                <div className="top-brands-cover">
                    <img src={brand.cover} alt={brand.title}  className="top-brands-image"/>

                </div>
            </div>
          })}
        </Slider>

        </div>
        </>
    )
}
export default TopBrands;