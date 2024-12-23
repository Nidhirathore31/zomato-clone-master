import React from "react";
import "./explorecard.css";

const Explorecard = ({restaurant}) =>{
    const name = restaurant?.info?.name ?? "";
    const coverImage = restaurant?.info?.image?.url;
    const deliveryTime = restaurant?.order?.deliveryTime;
    const rating = restaurant?.info?.rating?.rating_text;
    const approxPrice = restaurant?.info?.cfo?.text;
    const offers = restaurant?.bulkOffers ?? [];
    const cuisines = restaurant?.info?.cuisine?.map((item)=>item.name).slice(0,3);
    const bottomContainers = restaurant?.bottomContainer;
    const goldOff = restaurant?.gold?.text;
    const proOff = offers.length>1?offers[0].text : null;
    const discount = offers.length > 1 ?offers[1].text : offers.length ===1 ? offers[0].text : null;

    return (
        <>
        <div className="explore-card cur-pointer">
            <div className="explore-card-cover">
                <img  src={coverImage} 
                      alt={ name}
                      className="explore-card-img"/>
                      <div className="delivery-time">{deliveryTime}</div>
                      
                      {proOff && <div className="proOff">{proOff}</div>}
                      { goldOff && <div className=" goldOff absolute-center">{ goldOff}</div>}
                      {discount && <div className="discount absolute-center">{discount}</div>}
            </div>
           <div className="res-row">
            <div className="res-name">{name}</div>
            {rating && <div className="res-rating absolute-center">{rating}<i className="fi fi-rr-star absolute-center "></i></div>}
            
           </div>
           <div className="res-row">
            {cuisines.length && <div className="res-cuisine">
                {cuisines.map((item,i) =>{
                    return <span className="res-cuisine-tag">{item}{i!==cuisines.length-1 && ", "}</span>
                })}
              
                </div>}
              {approxPrice && <div className="approxPrice">{approxPrice}</div>}
           </div>
        </div>
        </>
    )
}
export default Explorecard; 