import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import ShopItem from "../ShopItem/ShopItem";
import "./Shop.css";
import { shopItems } from "./cfg";

const Shop = ({baliBalance, setBaliBalance, setBaughtItems}) => {
    const [openShop, setOpenShop] = useState(false);


    return (
        <div>
            {!openShop && (
                <Button
                    content={"Shop"}
                    color='#645991'
                    size={"wide"}
                    classN='shop-btn'
                    onClick={() => {
                        setOpenShop(true);
                    }}
                />
            )}
            {openShop && (
                <div className='shop'>
                    <Button
                        content={"X"}
                        size='small'
                        onClick={() => {
                            setOpenShop(false);
                        }}
                        classN='x-btn'
                        color='#645991'
                    />
                    <div className='shop-grid '>
                        {shopItems.map((shopItem) => (
                            <ShopItem setBaughtItems={setBaughtItems} baliBalance={baliBalance} setBaliBalance={setBaliBalance} shopItem={shopItem} key={shopItem.id} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Shop;
