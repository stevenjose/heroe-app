import React, {useState} from "react";
import { HeroList } from "../heroes/HeroList";

export const DcScreen = () => {
    const [dc, setStateDc] = useState('DC Comics');

    return (
        <div>
            <h2> DC Screen</h2>
            <HeroList publisher={dc}/>
        </div>
    )
}