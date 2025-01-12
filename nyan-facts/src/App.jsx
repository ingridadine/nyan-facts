import './App.css';
import { NyanImg } from './components/NyanImg';
import { NyanFact } from './components/NyanFact';

export const App = () => {
  return (
    <div className='app-container'>
      <NyanImg/>
      <NyanFact/>
    </div>
  );
};
