import { useEffect, useState } from 'react';
import * as GameService from '../services/gameService.js'
import LatestGameCard from './LatestGameCard.js'


const Home = () => {

    const [games, setGames] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
        setloading(true);
        GameService.getLatestGames()
            .then(result => {
                setloading(false)
                setGames(result);
            });

    }, []);

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="/images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                {loading 
                ?  <h3 className="no-articles">Loading...</h3> 
                :  games.length > 0 ? 
                   games.map(x => <LatestGameCard  key={x._id} game={x} />) 
                   : <h3 className="no-articles">No Games Yet</h3>
            } 
                
            </div>
        </section>
    )
}

export default Home;