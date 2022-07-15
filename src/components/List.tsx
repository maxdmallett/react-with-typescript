import React from "react";
import { IState as IProps } from "../App";
import "../styles/List.css"

const List:React.FC<IProps> = ({ people }) => {

    const renderList = (): JSX.Element[] => {
        return people.map((person, index) => {
            return (
                <li key={'listItem' + index} className="list-item">

                    <div className="profile">
                        <div className="img" style={{backgroundImage: `url(${person.url})`}} />
                        <p>{person.name}</p>
                    </div>

                    <p>{person.age} years old</p>
                    <p className="note">{person.note}</p>
                </li>
            )
        });
    }

    return (
        <ul className="list">
            {
                renderList()
            }
        </ul>
    )
}

export default List;