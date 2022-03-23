import React, { useEffect, useState } from "react";
import "./buybali.css";
import Button from "../Button/Button";

const BuyBali = ({ buyBali, setBuyBali, ethBalance, setEthBalance }) => {
    const [baliModalClass, setBaliModalClass] = useState("buy-bali");
    useEffect(() => {
        let classN = buyBali ? "buy-bali active-buy" : "buy-bali";
        setBaliModalClass(classN);
    }, [buyBali]);

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
                <div className='info-row eth-balance-buy'>ETH Balance:</div>
                <div className='info-row bali-price-buy'>$BALI Price:</div>
                <div className='info-row can-buy'>
                    Max available $BALI to Buy:
                </div>
                <input
                    type={"text"}
                    className='buy-row amount-buy'
                    placeholder='Amount to Buy:'
                />
                <Button content={"Buy"} color='#645991' classN='buy-btn' />
            </div>
        </div>
    );
};

export default BuyBali;
