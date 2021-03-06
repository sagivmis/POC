import React, { useState, useRef } from "react";
import BaughtItem from "../BaughtItem/BaughtItem";
import Button from "../Button/Button";
import Plugin from "../Plugin/Plugin";
import Shop from "../Shop/Shop";
import "./game.css";

const Game = ({baughtItems, setBaughtItems}) => {
    const [open, setOpen] = useState(false);
    const [baliBalance, setBaliBalance] = useState(10000);


    // const setBalance=(balanceToSet)=>{
    //     balanceRef.current.value=balanceToSet;
    // }

    return (
        <div className='game'>

            <div className='plugin-btn'>
                {!open && (
                    <Button
                        content={">"}
                        size='small'
                        onClick={() => {
                            setOpen(!open);
                        }}
                        color='#645991'
                    />
                )}
            </div>
            <div className='plugin-container'>
                {open && <Plugin setOpen={setOpen} open={open} baliBalance={baliBalance} setBaliBalance={setBaliBalance}/>}
            </div>
            <div className='balance'>$BALI: {baliBalance}</div>
            <Shop 
                baliBalance={baliBalance}
                setBaliBalance={setBaliBalance}
                setBaughtItems={setBaughtItems}
             />
        </div>
    );
};

export default Game;
