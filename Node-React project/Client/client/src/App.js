import React, {useEffect, useState} from "react";

function App () {

const [backendData, setBackendData] = useState([{}])

useEffect(() => {
    fetch("/api").then ( // fetch method requests data from the server
        response => response.json() // get response in Json 
    ).then(
        data => {
            setBackendData(data) // keep backened data into this variable
        }
    ) 
}, [])

    return  (
        <div>

        {(typeof backendData.users  === "undefined" ) ? (
            <p>Loading...</p>
        ):(
            backendData.users.map((user, i ) =>(
                <p key={i}>{user} </p>
            ))
        )}

        </div>
    )
  
}


export default App;