import { useState, useEffect } from 'react'
import Die from './components/Die.jsx'

function GetRandomDieValues() {
  return new Array(10)
      .fill(0).map(() => {
          let random = Math.ceil(Math.random() * 6)
          if (random === 0) {
            random = 1
          }
          return random;
  });
}

function App() {
  const [dieValues, setDieValues] = useState(
    GetRandomDieValues().map((value) => ({value: value, isHeld: false}))
  );

  const dieElements = dieValues.map((die, index) => (
    <Die key={index} value={die.value} isHeld={die.isHeld} onClick={() => hold(index)} />
  ));
  
  /*useEffect(() => {
    //console.log(GetRandomDieValues());
  }, []);*/

  function hold(index) {

    //console.log(index);
    setDieValues((prevDieValues) => {
      const newDieValues = prevDieValues.map((die) => ({...die}))

      newDieValues[index].isHeld = !newDieValues[index].isHeld
      return newDieValues;
    })
    
  }


  function rollDice() {
    
    const randomValues = GetRandomDieValues()

    const newDieValues = dieValues.map((die, index) => ({
      value: die.isHeld ? die.value : randomValues[index],
      isHeld: die.isHeld
    }))

    setDieValues(
      newDieValues
    );
    console.log(dieValues);
  }

  return (
    <>
      <main>
        <div className="grid-container">
          {dieElements}
        </div>

        <div>
          <button onClick={rollDice} className="roll-dice">Roll Dice</button>
        </div>
      </main>
    </>
  )
}

export default App
export { GetRandomDieValues }

