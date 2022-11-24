import React from "react";
import { useState } from "react";


const App = () => {

  const [count,setCount] = useState(0);  // this is the same as: const count = 0. but in a React way, react to keep value we use Usestate. 

//   
const increment = () => {
setCount(count + 1); 
};
const decrement = () => {
setCount(count -1); 
};
//


  return (
    <div>

<h1>Welcome to my counter App!</h1>
<p>The count is: {count}</p>
<button onClick={decrement}>-</button>
<button onClick={increment}>+</button>

    </div>
  )
}

export default App;