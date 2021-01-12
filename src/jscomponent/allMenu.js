import React from 'react';
import { CockTail, Shot, OrdinaryDrink, CoffeTea, Surprise } from "./homeMenu";

const AllMenu = () => {
    return(
        <div style={{padding: "1rem"}}>
            <CockTail />
            <Shot />
            <OrdinaryDrink />
            <CoffeTea />
            <Surprise />
        </div>
    )
}

export default AllMenu;