import React from "react"; 
import "./filter.css";
import Filteritem from "./Filteritem";

const Filter = ({filterList}) => {
    return(
        <>
      <div className="filters">
        {filterList && filterList.map((filter) =>{
        return(
            <Filteritem filter={filter} key={filter.id}/>
        )
      })}</div>
        </>
    )
}
export default Filter;
