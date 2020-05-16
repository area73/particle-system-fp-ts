import './App.css';
import React from 'react';
import useAnimationFrame from './hooks/useAnimationFrame';

function App() {
  const [count, setCount] = React.useState(0);
  useAnimationFrame((deltaTime: number) => {
    // Pass on a function to the setter of the state
    // to make sure we always have the latest state
    setCount((prevCount) => (prevCount + deltaTime * 0.01) % 100);
  });
  return (
    <>
      <canvas id="canvas" style={{ backgroundColor: 'black' }} />
      <div className="overlay">λ {Math.round(count)}</div>
    </>
  );
}

export default App;
