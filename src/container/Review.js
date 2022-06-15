import React from "react";
import { useGlobalContext } from "../context/context";

import "./styles.css"
const Review=()=>{
    const { details } = useGlobalContext();
    console.log(details)
     return(
        <div className="Review">
         <h1>Review</h1>
         {Object.entries(details).map(([key, value]) => {
            return (
              <h6>
                <span>{key}</span>  {value}
              </h6>
            );
          })}
        </div>
    )
}

export default Review;