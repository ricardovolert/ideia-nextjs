import React,{useState, useEffect} from 'react';
import Link from 'next/link';

function App() {
  const [currentSum,setCurrentSum]=useState(0);
  const [clear,setClear]=useState(false);

  useEffect(()=>{
    document.querySelector('#result').value="";
  },[])
  
  useEffect(()=>{
    if(clear)
    document.querySelector('#result').value="";
  })

  const Add=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let currentNum=document.querySelector('#num').value
    if(currentNum=='')
    return;
    let sum= currentSum+parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector('#num').value="";
      
  }

  const Clear=(e)=>{
    e.preventDefault();
    console.log('sum:', currentSum);
    document.querySelector('form').reset();
    setClear(true);
    setCurrentSum(0);
  }

  return (
    <div className="App text-center">
      <div className="app-title">
        <h1 className="text-5xl">How to Build a Basic Form Calculator in React.js</h1>
        <h2 className="text-3xl"> Basic Form Calculator</h2>
      </div>
      <form className="text-black text-xl">
            <p><input type="text" id="result" className="text-black border rounded-full p-2" value={currentSum}  readOnly /></p>
            <p>&nbsp;</p>   
            <p><input type="text" id="num" className="text-black border rounded-full p-2" placeholder="enter a number" /></p>
            <p>&nbsp;</p>
            <p><button onClick={Add} className="text-white border rounded-full p-2 bg-green-600">Adicionar Valor</button></p>
            <p>&nbsp;</p>
            <p><button onClick={Clear} className="text-white border rounded-full p-2 bg-red">Limpar Calculadora</button></p>
      </form>

      <p>&nbsp;</p>

      <p>Referência: <Link href="https://www.pluralsight.com/guides/how-to-build-a-basic-form-calculator-in-reactjs"><a target="_blank" className="font-extrabold">pluralsight</a></Link></p>
    </div>
  );
}

export default App;