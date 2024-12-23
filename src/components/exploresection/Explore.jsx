import React from "react";
import "./explore.css";
import Explorecard from "./Explorecard";

const Explore = ({list,collectionName}) =>{
    return(
        <>
        <div className="max-width explore-section">
            <div className="collection-tittle">{collectionName}</div>
            <div className="explore-grid">
                {list.map((restaurant)=>{
                    return <Explorecard restaurant={restaurant}/>
                })}
                 
            </div>

        </div>
        </>
    )
}
export default Explore;