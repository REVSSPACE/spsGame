import React  from 'react';
import './App.css';
import Game from './Games';

function App() {
   
    return (
        <div className="App">
             <div id="App">
                Choose your oppponent !
            </div>
            <div id="opponents">
                <button >
                    Play with AI !!!
                </button>
                <button >
                    Play with Your Friends !!!
                </button>
            </div>
            <div id="PlayArea">
                <Game />
            </div>
        </div>
            
     
    );
}

export default App;