import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Containers/Home/Home';
import BestTrends from './Containers/bestTrends/BestTrends';
import Search from './Containers/Search/Search';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/BestTrends" element={<BestTrends/>}/>
          <Route path="/Search" element={<Search/>}/>
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
