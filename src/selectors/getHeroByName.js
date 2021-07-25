import React from 'react'
import { heroes } from '../data/heroes';

export const getHeroByName = (name = "") => {
    
    if(!name){
        return heroes;
    }
    
    return heroes.filter( hero => hero.superhero.toLowerCase().includes(name.toLowerCase()));
}
