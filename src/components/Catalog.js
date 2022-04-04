import { useEffect, useState } from 'react';
import GameCard from './GameCard.js';
import * as GameService from '../services/gameService.js'


function Catalog(){

    const [games, setGames] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
        setloading(true);
        GameService.getAllGames()
            .then(result => {
                setloading(false)
                setGames(result);
            });

    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {loading 
                ?  <h3 className="no-articles">Loading...</h3> 
                :  games.length > 0 ? 
                   games.map(x => <GameCard  key={x._id} game={x} />) 
                   : <h3 className="no-articles">No articles yet</h3>
            }      
        </section>
    )
}

export default Catalog;