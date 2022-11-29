import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
id: "j1",
title: "Empire State Building",
description: "One of the most famous skyscrappers in NY City",
imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg",
address: "20 W 34th St., New York, NY 10001, United States",
location: {
    lat:40.7484445 ,
    lng: -73.9878531
},
creator: "u1"
},
{
    id: "j2",
    title: "Empire State Building",
    description: "One of the most famous skyscrappers in NY City",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
        lat:40.7484445 ,
        lng: -73.9878531
    },
    creator: "u2"
    }
];

const UserPlaces = () => {

    return <PlaceList items={DUMMY_PLACES}/>;
};


export default UserPlaces;


