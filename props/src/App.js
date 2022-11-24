import React from "react";
import Products from "./components/Products";


const App = () => {
  return (
    <div>
<h2>Products</h2>

<Products 
name="macbook air m1" 
description="best laptop ever" 
price={1299.99}  
/>

<Products 
name="macbook pro m1" 
description="best laptop ever" 
price={1499.99}  
/>

<Products 
name="Iphone Pro Max" 
description="best cellphone ever" 
price={899.99}  
/>


    </div>
  );
  };

export default App;
