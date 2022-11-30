// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [fristvalue,setFristvalue] = useState(1)
  const [secondvalue,setSecondvalue] = useState(1)
  console.log(typeof(fristvalue))
  console.log(typeof(secondvalue))

  return (
    <div className="App">
      <header className="App-header">
        <h1>calculator</h1>
        <p>Frist value is : {fristvalue}</p>
        <p>Second value is : {secondvalue}</p>
        <input type='number' min='0' value={fristvalue} onChange={(e) => {setFristvalue(e.target.value)}}></input>
        <input type='number' min='0' value={secondvalue} onChange={(e) => {setSecondvalue(e.target.value)}}></input>
        <div className='buttondiv'>
        </div>
        <div className='buttondiv'>
        <p>Addition : {parseInt(fristvalue) + parseInt(secondvalue)}</p>
        <p>Subtraction : {fristvalue - secondvalue}</p>
        <p>Multiplication :  {fristvalue * secondvalue}</p>
        <p>Divison :  {(fristvalue / secondvalue).toFixed(0)}</p>
        <p>Reminder :  {(fristvalue % secondvalue)}</p>
        </div>
        {/* <p>{resadd}</p> */}
      </header>
    </div>
  );
}

export default App;
