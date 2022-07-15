import React, { useState } from "react";
import "./styles/App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
    people: {
        name: string,
        url: string,
        age: number,
        note?: string
    }[]
}

function App() {
    const [people, setPeople] = useState<IState["people"]>([
        {
            name: "Peter Crouch",
            url: "https://upload.wikimedia.org/wikipedia/commons/7/74/Chelsea_3_Stoke_0_%2813677350585%29_-_Peter_Crouch_%28cropped%29.jpg",
            age: 42,
            note: "Does the robot"
        },
        /* {
            name: "Youssef Safri",
            url: "https://media.gettyimages.com/photos/youssef-safri-norwich-city-picture-id661159628",
            age: 47,
            note: "Long ranger punter"
        },
        {
            name: "Ludo",
            url: "https://static.wikia.nocookie.net/labyrinth/images/9/9e/7.png",
            age: 811,
            note: "Renaissance man"
        },
        {
            name: "Zinedine Zidane",
            url: "https://i.pinimg.com/474x/ed/85/a9/ed85a9cc80014b7297940b1b9aaacb84.jpg",
            age: 50,
            note: "Keeps a clear head"
        } */
    ]);

    return (
        <div className="App">
            <h1>Toe-punt specialists</h1>
            <AddToList people={people} setPeople={setPeople} />
            <List people={people}/>
        </div>
    );
}

export default App;
