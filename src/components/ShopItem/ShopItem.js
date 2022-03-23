import React from "react";
import Button from "../Button/Button";
import "./shopItem.css";

const ShopItem = ({ baliBalance, shopItem, setBaliBalance, setBaughtItems }) => {
    const handleBuyItem = (e)=>{
        if(shopItem.price<=baliBalance){
            setBaliBalance((prev)=>{return prev-shopItem.price})
            setBaughtItems((prevBaughtItems)=>{ return [...prevBaughtItems, shopItem]});
        }
    }
    return (
        <Button size='document'>
            <div className='shop-item'>
                <div className='shop-item-title'>{shopItem.text}</div>
                <img
                    src={shopItem.image}
                    alt={`${shopItem.text}`}
                    className=''
                />
                <div className='shop-item-price'>{shopItem.price} $BALI</div>
                <Button
                    content={"Buy"}
                    classN='shop-item-buy'
                    size='small'
                    color='#e9e7f0'
                    fontColor='#6b609b'
                    onClick={handleBuyItem}
                />
            </div>
        </Button>
    );
};

export default ShopItem;
