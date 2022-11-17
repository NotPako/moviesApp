import React from 'react';
import './BestTrends.css';
import {useState, useEffect} from 'react';
import { getTrendy } from '../../services/apicalls';
import MovieDetail from '../../Components/MovieDetail/MovieDetail';

const BestTrends = () => {

    const[movies, setMovies] = useState([]);
    const[choosen, setChoosen] = useState("");

    useEffect(() => {
        if(movies.length === 0){
        getTrendy().then(res => 
                setMovies(res.data.results)).catch(error => console.log(error));
        } else {
            console.log(movies);
        }
    });

   


    return (
        <div className="moviesShowcase">
        <div className="leftSide">
            {
            movies.map(film => {
                return <div className="filmDesign" key={film.id}>
                    <div>{film.title}</div>
                    <div onClick={() => setChoosen(film)}><img src={"https://image.tmdb.org/t/p/original/" + film.poster_path} alt={film.title}></img></div>
                </div>
                
                })
            
        }
        </div>
        <div className="whereSelected">
        {
            choosen?.id !== undefined &&
            <MovieDetail choosen={choosen}/>
        }
        </div>
        </div>
    )
}

export default BestTrends;