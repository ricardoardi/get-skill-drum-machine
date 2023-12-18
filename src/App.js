import React, { useEffect, useState } from 'react';
import './App.scss';
import arr from './button';

function App() {
  const [displayKey, setDisplayKey] = useState('')

  useEffect(() => {
    document.addEventListener('keydown',(event)=>{
      playAudio(event.key.toUpperCase())
    })
  }, [])
  
  function playAudio(selector){
    let audio = document.getElementById(selector)
    audio.play();
    setDisplayKey(selector);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div id="drum-machine">
        <div id="display">{displayKey}</div>
        <div className="drum-pads">
          {arr.map((drumPad)=><button key={drumPad.src} onClick ={()=>playAudio(drumPad.text)} className='drum-pad' 
          id={drumPad.src}>{drumPad.text}
          <audio src={drumPad.src} className="clip" id={drumPad.text}></audio></button>)}
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
