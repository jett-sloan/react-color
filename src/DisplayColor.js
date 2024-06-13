import React from "react";
import { useParams } from "react-router-dom"

const DisplayColor = ()=>{
    const params = useParams();
    return (
    <div>
      <h1>This is { params.color }</h1>
    </div>
    )
}

export default DisplayColor