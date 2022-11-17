import React from 'react';
import './MovieDetail.css';

const MovieDetail = ({choosen}) => {

    return(
        <div className='movieDetailDesign'>
            <div><img src={"https://image.tmdb.org/t/p/original/" + choosen.poster_path} alt={choosen.name}/></div>
            <div>{choosen.title}</div>
            <br></br>
            <div>{choosen.release_date}</div>
            <br></br>
            <div>{choosen.overview}</div>
        </div>
    )
};



export default MovieDetail;