import React, {useState} from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
    const [marvel, setMarvel] = useState('Marvel Comics') 
    return (
        <div>
            <h1>Marvel Screen</h1>
            <HeroList publisher={marvel} />
        </div>
    )
}
