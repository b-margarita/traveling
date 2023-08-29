import { useState } from 'react';
import './App.css';
import { data } from './data';

function App() {
  const [place, setPlace] = useState(0);
  const {id, name, image, description} = data[place];
  const backPlase = () => {
    setPlace((place => {
      place --;
      if (place < 0) {
        return data.length - 1;
      }
      return place;
    }))
  }
  const nextPlace = () => {
    setPlace((place => {
      place ++;
      if (place > data.length - 1) {
        place = 0
      }
      return place;
    }))
  }
  return (
    <div>
      <div className='container'>
        <h1>{id} {name}</h1>
      </div>
      <div className='container'>
        <img src={image} alt='place' width="500px"/>
      </div>
      <div className='container'>
        <a href={description} target='_blank' rel="noopener noreferrer">description</a>
      </div>
      <div className='container btn'>
        <button onClick={backPlase}>Back</button>
        <button onClick={nextPlace}>Next</button>
      </div>
    </div>
  );
}

export default App;
