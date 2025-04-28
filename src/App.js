import { useState } from "react";


export default function Board() {
  return (
    <> 
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

function Square() {
  // value stores the value and setValue is a function that can be used to change the value
  const [value,setValue] = useState(null);

  function handleClick(){
    setValue('X');
  }

  return (
  <button 
    className="square"
    onClick={handleClick}
  >
    {value}
    </button>
  );
}
