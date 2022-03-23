import React, { useEffect, useState,useRef } from "react";
import "./buybali.css";
import Button from "../Button/Button";

const BuyBali = ({ buyBali, setBuyBali,baliPrice, ethBalance, setEthBalance, setBaliBalance }) => {
    const [baliModalClass, setBaliModalClass] = useState("buy-bali");
    useEffect(() => {
        let classN = buyBali ? "buy-bali active-buy" : "buy-bali";
        setBaliModalClass(classN);
    }, [buyBali]);

    const amountRef = useRef();
    const handleBuyClick = (e)=>{
        const amount = amountRef.current.value;

        if(baliPrice * amount <= ethBalance) {
            setEthBalance((prev)=>{return prev-(baliPrice * parseFloat(amount))})
            setBaliBalance((prev)=>{return prev+parseFloat(amount)});
            console.log("Buy:: Succesful")
        }
        else{

            console.log("Buy:: Unsuccesful")
        }
    }
    return (
        <div className={baliModalClass}>
            <Button
                content={"X"}
                size='small'
                onClick={() => {
                    setBuyBali(false);
                }}
                classN='x-btn'
                color='#645991'
            />
            <div className='information-buy'>
                <div className='info-row eth-balance-buy'>ETH Balance: {ethBalance}</div>
                <div className='info-row bali-price-buy'>$BALI Price: {baliPrice}ETH</div>
                <div className='info-row can-buy'>
                    Max available $BALI to Buy: {ethBalance/baliPrice}
                </div>
                <input
                    type={"text"}
                    className='buy-row amount-buy'
                    placeholder='Amount to Buy:'
                    ref={amountRef}
                />
                <Button content={"Buy"} color='#645991' onClick={handleBuyClick} classN='buy-btn' />
            </div>
        </div>
    );
};

export default BuyBali;
