import React from "react";
import "./baughtitem.css";

const BaughtItem = ({ item }) => {

    return (
                <img src={item.image} alt='baught' className='baught-item'/>

    );
};

export default BaughtItem;
