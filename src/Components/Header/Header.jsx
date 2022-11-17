import React from 'react';
import './Header.css';
import {useNavigate} from 'react-router-dom';


const Header = () => {

    let navigate = useNavigate();
    
    return(
        <div className='headerDesign'>
            <div className='linkDesign' onClick={() => navigate("/")}>Home</div>
            <div className='linkDesign' onClick={() => navigate("/BestTrends")}>Weekly trend</div>
            <div className='linkDesign' onClick={() => navigate("/Search")}>Search</div>
        </div>
    )
}

export default Header;