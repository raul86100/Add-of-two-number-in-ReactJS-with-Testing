import React, { useState } from 'react';
import './App.css';
const Place=(prop)=>{
  return(
  <input type="text" onChange={prop.anonyfun} placeholder={prop.keyword} />
  );
}
function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [ans, setAns] = useState(0);
  console.log(Number.MIN_SAFE_INTEGER);


  return (
    <div className="ho">
      <div className="bg">
        <h1>Addition calculator</h1>

        <div><Place anonyfun={(e) => { setA(e.target.value) }} keyword={"enter first number"}/></div>
        <div><Place anonyfun={(e) => { setB(e.target.value) }} keyword={"enter second number"}/> </div>
        <div> <button onClick={() => {
          if (a !== null && b !== null) {
            
            if ((parseFloat(a) + parseFloat(b)) > Number.MAX_SAFE_INTEGER) { setAns("Overflow"); }
            else if ((parseFloat(a) + parseFloat(b)) < Number.MIN_SAFE_INTEGER) { setAns("Underflow"); }
            else{
              setAns(parseFloat(a) + parseFloat(b));
            }
          }
          
          else if (a === null) {
            setAns(parseFloat(b));
          }
          else if (b === null) {
            setAns(parseFloat(a));
          }
          else {
            setAns("NaN")
          }

        }
        } label="calculate">calculate</button></div>
        <div><p>Result:{ans}</p></div>
      </div>
    </div>

  );
}

export default App;
