import React, { useEffect, useState } from "react";
import './baughtitems.css';
import ItemsCarousel from 'react-items-carousel';
import BaughtItem from '../BaughtItem/BaughtItem'

const BaughtItems = ({ baughtItems}) => {
    const [openShop, setOpenShop] = useState(false);
    const [activeItemIndex, setActiveItemIndex] = useState(0);

    const chevronWidth = 40;

    return (
        <div style={{ padding: `0 ${chevronWidth*0}px` }} className="item-carousel">
            <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={12}
            gutter={20}
            leftChevron={<button>{'<'}</button>}
            rightChevron={<button>{'>'}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
            >
            {baughtItems.map((item)=>{
                    return <BaughtItem item={item}/>
            })}
            {/* <div style={{ height: 200, background: '#EEE' }}>First card</div>
            <div style={{ height: 200, background: '#EEE' }}>Second card</div>
            <div style={{ height: 200, background: '#EEE' }}>Third card</div>
            <div style={{ height: 200, background: '#EEE' }}>Fourth card</div> */}
            </ItemsCarousel>
        </div>

    );
};

export default BaughtItems;

