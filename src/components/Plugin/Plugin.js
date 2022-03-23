import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import BuyBali from "../BuyBali/BuyBali";
import "./plugin.css";

const Plugin = ({ setOpen, open, setBaliBalance, baliBalance }) => {
    const [pluginClass, setPluginClass] = useState("plugin");
    const [baliPrice, setBaliPrice] = useState(0.001);
    const [ethBalance, setEthBalance] = useState(1);
    const [buyBali, setBuyBali] = useState(false);

    useEffect(() => {
        let classN = open ? "plugin active" : "plugin";
        setPluginClass(classN);
    }, [open, baliBalance]);

    return (
        <div className={pluginClass}>
            <Button
                content={"X"}
                size='small'
                onClick={() => {
                    setOpen(false);
                }}
                classN='x-btn'
                color='#645991'
            />
            <div className='title'>INFORMATION</div>
            <div className='information'>
                <div className='info-row bali-balance'>
                    $BALI balance: {baliBalance}
                </div>
                <div className='info-row eth-balance'>
                    ETH balance: {ethBalance}
                </div>
            </div>

            <Button
                content='Buy $BALI'
                onClick={() => {
                    setBuyBali(true);
                }}
                color='#474067'
                size='wide'
            />
            {buyBali && (
                <BuyBali
                    ethBalance={ethBalance}
                    setEthBalance={setEthBalance}
                    buyBali={buyBali}
                    setBuyBali={setBuyBali}
                    baliPrice={baliPrice}
                    setBaliBalance={setBaliBalance}
                />
            )}
        </div>
    );
};

export default Plugin;
