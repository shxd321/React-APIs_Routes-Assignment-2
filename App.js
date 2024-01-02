import {Router,Route, Routes} from 'react-router-dom'
import './App.css';
import Albums from './components/Albums/Albums';
import Posts from './components/Posts/Posts';
import  Navbar  from './components/Navbar/Navbar';
import AlbumDetail from './components/AlbumDetail/AlbumDetail';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route path='/albums' element ={<Albums />}/>
        <Route path='/posts' element ={<Posts />}/>
        <Route path='/albumDetail/:id' element ={<AlbumDetail />}/>
        <Route path='*' element ={<Home />}/>
        
     </Routes>
      
    </div>
  );
}

export default App;
