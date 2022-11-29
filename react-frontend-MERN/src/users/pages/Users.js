import React from "react";
import UsersList from "../components/UsersList";


const Users = () => {

const USERS = [
    {
        id: "s1", 
        name:"Max Arabuli", 
        image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80", 
        places:3
    }
];


    return <UsersList items= {USERS} />;
}

export default Users;