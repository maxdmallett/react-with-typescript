import React, { useState } from "react";
import { IState as Props} from "../App";
import "../styles/AddToList.css";

interface IProps {
    people: Props['people'],
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>,
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        img: "",
        note: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (!input.name ||
            !input.age ||
            !input.img
            ) {
                return;
        }

        setPeople([
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.img,
                note: input.note
            },
            ...people
        ]);
    }

    return (
        <div className="add-to-list">
            <form 
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder="Name"
                    className="add-to-list-input"
                    value={input.name}
                    onChange={handleChange}
                    name='name'
                />
                <input
                    type="number"
                    placeholder="Age"
                    className="add-to-list-input"
                    value={input.age}
                    onChange={handleChange}
                    name='age'
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    className="add-to-list-input"
                    value={input.img}
                    onChange={handleChange}
                    name='img'
                />
                <textarea
                    placeholder="Note"
                    className="add-to-list-input"
                    value={input.note}
                    onChange={handleChange}
                    name='note' 
                />
                <input
                    className="add-to-list-btn"
                    type="submit"
                    value="Add to list"
                />
                    
            </form>
        </div>
    );
};

export default AddToList;
