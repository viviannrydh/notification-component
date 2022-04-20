
import react, { useState } from 'react';
import './App.css'
import { motion } from 'framer-motion';


function App() {
  const [active, setActive] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);
  const [activeThree, setActiveThree] = useState(false);

  const toggleShake = () => { 
    setActive(!active)
  }
  const toggleScale = () => {
    setActiveTwo(!activeTwo)
  }

  const toggleBounce = () => { 
    setActiveThree(!activeThree)
  }
  return (
    <div>
      
      <div
        className=
        {active
          ? 'notification-shake'
          : "notification-text"}>
        Youth is not a time of life;
        it is a state of mind;
        it is not a matter of rosy cheeks,
        red lips and supple knees;
        it is a matter of the will,
        a quality of the imagination,
        a vigor of the emotions;
        it is the freshness of the deep springs of life.
      </div>
      <button onClick={() => toggleShake()}>Shake it</button>
      <div
        className=
        {activeTwo
          ? 'notification-scale'
          : "notification-middle"}>
        Youth is not a time of life;
        it is a state of mind;
        it is not a matter of rosy cheeks,
        red lips and supple knees;
        it is a matter of the will,
        a quality of the imagination,
        a vigor of the emotions;
        it is the freshness of the deep springs of life.
      </div>
      <button onClick={() => toggleScale()}>Transform it</button>
    
    <div
        className=
        {activeThree
          ? 'notification-bounce'
          : "notification-top"}>
      Youth is not a time of life;
      it is a state of mind;
      it is not a matter of rosy cheeks,
      red lips and supple knees;
      it is a matter of the will,
      a quality of the imagination,
      a vigor of the emotions;
      it is the freshness of the deep springs of life.
      </div>
      <button onClick={() => toggleBounce()}>Bounce it</button>
    
    </div>
     
  );
}

export default App;
