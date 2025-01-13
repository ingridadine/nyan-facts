import React from 'react';
import { Button } from 'antd';
import './App.css';
import { NyanImg } from './components/NyanImg';
import { NyanFact } from './components/NyanFact';

export const App = () => {
  
  const [clickCounter, setClickCounter] = React.useState(0);
  
  return (
    <div className='app-container'>
      <NyanImg counter={clickCounter}/>
      <NyanFact counter={clickCounter}/>
      <Button className="update-btn" onClick={() => {setClickCounter(clickCounter + 1)} }>
        Mais fatos
      </Button>

      
    </div>
  );
};
