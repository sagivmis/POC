import "./App.css";
import Game from "../Game/Game";
import bomb from "../../shots/1.png";
import {useEffect, useState} from 'react';
import BaughtItems from "../BaughtItems/BaughtItems";


function App() {    
    const [baughtItems, setBaughtItems] = useState([{
    id: 0,
    image: bomb,
    text: "Bomb",
    price: 500
}
]);
    let carousel = <BaughtItems baughtItems={baughtItems}/>

    useEffect(()=>{
        carousel = <BaughtItems baughtItems={baughtItems}/>
    },[baughtItems])
    return (
        <div className='App'>
            <BaughtItems baughtItems={baughtItems}/>
            <Game baughtItems={baughtItems} setBaughtItems={setBaughtItems}/>
        </div>
    );
}

export default App;
