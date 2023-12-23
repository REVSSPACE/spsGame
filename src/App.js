import * as React from 'react';
import './App.css';

import PlayerTabs from './tab';

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
                <PlayerTabs />
            </div>  
        </div>
            
     
    );
}

export default App;