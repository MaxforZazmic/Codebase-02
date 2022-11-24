import React, { useState, useEffect } from 'react'


const App = () => { 

  const [count, setCount] = useState(5);
  const [secondCount, setSecondCount] = useState(1); 

const secondCountincrement = () => {
  setSecondCount(secondCount+1);
}


useEffect (() => {
setCount(count+1);
}, [secondCount])

 return (

<div>
{count}
<button onClick={secondCountincrement}>Increase</button>
</div>  

  )
}


export default App;
