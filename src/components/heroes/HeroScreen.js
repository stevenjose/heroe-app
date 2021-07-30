import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {
    const { heroeId } = useParams(); 
    //const  hero  = getHeroesById(heroeId);
    const hero = useMemo(() => getHeroesById(heroeId), [heroeId])

    if( !hero ) {
        console.log(hero);
        return <Redirect to="/marvel"/>
    }

    const {superhero, publisher, alter_ego, first_appearance, characters } = hero;

    const handleReturn = () => {
        console.log('aca');
        if(history.length <= 2){
            history.push('/');
        }else{
            history.goBack();
        }
    }
    
    return (
        <>
            <h1 className="mt-4">Heroes Screen</h1>
            <div className="row">
                <div className="col-4">
                    <img 
                        src={`../assets/heroes/${heroeId}.jpg`}
                        alt={ superhero }
                        className="img-thumbnail animate_animated animate__fadeInLeft"
                    />
                </div>
                <div className="col-8">
                    <h3> { superhero } </h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b> Alter Ego : </b>{ alter_ego}
                        </li>
                        <li className="list-group-item">
                            <b> Publisher : </b>{ publisher }
                        </li>
                        <li className="list-group-item">
                            <b> Firts Appeareance : </b>{ first_appearance }
                        </li>
                    </ul>
                    <h5 className="mt-4">Characters</h5>
                    <p> { characters } </p>

                    <button className="btn btn-outline-info"
                     onClick={ handleReturn }>
                        Return
                    </button>
                </div>
            </div>
        </>
    )
}
