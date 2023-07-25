import { useState } from "react";
export default function App() {
    const [display, setDisplay] = useState('')
    const handleClick = (e) => { 
        setDisplay(display + e.target.value);
    }
    const handleEqual = () => { 
        try {
            const result = eval(display);
            setDisplay(result.toString());
        }catch(err) {
            setDisplay('error');
        }
      
    }
    return (
        <div className="calculator">
  <div className="display">{display}</div>
            <div className="grid">
                
                <button className="operator" value={'('} onClick={handleClick}>(</button>
                <button className="operator" value={')'} onClick={handleClick}>)</button>
                <button className="clear" onClick={() => setDisplay('')}>Clear</button>
                <button className="delete" onClick={() => setDisplay((prevDisplay) => prevDisplay.slice(0, -1))}>Delete</button>         
    <button value={7} onClick={handleClick}>7</button>
    <button value={8} onClick={handleClick}>8</button>
    <button value={9} onClick={handleClick}>9</button>
    <button className="operator" value={"+"} onClick={handleClick}>+</button>         
    <button value={4} onClick={handleClick}>4</button>
    <button value={5} onClick={handleClick}>5</button>
    <button value={6} onClick={handleClick} >6</button>
     <button className="operator" value={'-'} onClick={handleClick}>-</button>         
    <button value={1} onClick={handleClick}>1</button>
    <button value={2} onClick={handleClick}>2</button>
    <button value={3} onClick={handleClick}>3</button>
                    <button className="operator" value={'*'} onClick={handleClick}>x</button>
                <button className="decimal" value={'.'} onClick={handleClick} >.</button>
                  <button value={0} onClick={handleClick}>0</button>
    <button className="operator" value={'/'} onClick={handleClick}>/</button>
                    <button className="equal" onClick={handleEqual}>=</button>               
  </div>
</div>
    )
}

