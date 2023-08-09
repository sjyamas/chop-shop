import { useState } from 'react';
import './RadioButtonGroup.css';

export default function RadioButtonGroup({players, setPlayers, changePlayers}) {

    const handleOptionChange = (event) => {
        if(changePlayers){
            setPlayers(event.target.value);
        }
    };

    return (
        <div className="radio-group">
            <label className="radio-label">
                <input
                    className="radio-input"
                    type="radio"
                    name="options"
                    value={1}
                    checked={players === 1}
                    onChange={handleOptionChange}
                />
                1
            </label>
            <label className="radio-label">
                <input
                    className="radio-input"
                    type="radio"
                    name="options"
                    value={2}
                    checked={players === 2}
                    onChange={handleOptionChange}
                />
                2
            </label>
            <label className="radio-label">
                <input
                    className="radio-input"
                    type="radio"
                    name="options"
                    value={3}
                    checked={players === 3}
                    onChange={handleOptionChange}
                />
                3
            </label>
            <label className="radio-label">
                <input
                    className="radio-input"
                    type="radio"
                    name="options"
                    value={4}
                    checked={players === 4}
                    onChange={handleOptionChange}
                />
                4
            </label>
        </div>
    );
}

