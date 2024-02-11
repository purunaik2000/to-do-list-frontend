import React, {useEffect} from 'react';
import './notFound.css';
export default function NotFound() {

  const changeColor = () => {
    const colors = ["hotpink", "white", "pink", "yellow", "orange", "red", "black", "brown", "aqua"];
    setInterval(()=>{
      document.getElementById('not-found').style.color = colors[parseInt(Math.random()*colors.length)]
    }, 300)
  }

  useEffect(()=>{
    changeColor();
  }, []);
  return (
    <div className='notfound-container'>
      <h1><span id='err-1'>4</span><span id='err-2'>0</span><span id='err-3'>4</span></h1>
      <p id='not-found'>Page not found!</p>
    </div>
  );
}
