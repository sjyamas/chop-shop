import { useState } from 'react';
import './RadioButtonGroup.css'; // Import the CSS file

export default function RadioButtonGroup() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="radio-group">
            <label className="radio-label">
                <input
                    className="radio-input"
                    type="radio"
                    name="options"
                    value="1"
                    checked={selectedOption === "1"}
                    onChange={handleOptionChange}
                />
                1
            </label>
            <label className="radio-label">
                <input
                    className="radio-input"
                    type="radio"
                    name="options"
                    value="2"
                    checked={selectedOption === "2"}
                    onChange={handleOptionChange}
                />
                2
            </label>
            <label className="radio-label">
                <input
                    className="radio-input"
                    type="radio"
                    name="options"
                    value="3"
                    checked={selectedOption === "3"}
                    onChange={handleOptionChange}
                />
                3
            </label>
            <label className="radio-label">
                <input
                    className="radio-input"
                    type="radio"
                    name="options"
                    value="4"
                    checked={selectedOption === "4"}
                    onChange={handleOptionChange}
                />
                4
            </label>
        </div>
    );
}

