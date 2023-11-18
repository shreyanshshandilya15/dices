import './index.css';
import Landing from './component/Landing';
import Game from './component/Game';
import { useState } from 'react';

function App() {
  const [isstarted,setisStarted]=useState(false);

  const startgame=()=>{
    setisStarted(prev=>!prev);
  };
  return (
    <div className="App">
       {isstarted ? <Game /> :  <Landing startgame={startgame}/>}
    </div>
  );
}

export default App;
