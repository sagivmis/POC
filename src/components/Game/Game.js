import React, { useState } from "react";
import Button from "../Button/Button";
import Plugin from "../Plugin/Plugin";
import Shop from "../Shop/Shop";
import "./game.css";

const Game = () => {
    const [open, setOpen] = useState(false);

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
                {open && <Plugin setOpen={setOpen} open={open} />}
            </div>
            <div className='balance'>$BALI: 500</div>
            <Shop />
        </div>
    );
};

export default Game;
