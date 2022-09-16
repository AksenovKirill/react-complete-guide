import {useEffect, useRef, useState} from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;
    const nameInputClasses = nameInputIsInValid ? "form-control invalid" : "form-control";

    const handleChangeInput = (event) => {
        setEnteredName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setEnteredNameTouched(true);

        if (!enteredNameIsValid) {
            return null;
        }
        setEnteredName("");
    };

    const handleBlurInput = (event) => {
        setEnteredNameTouched(true)
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input value={enteredName} onBlur={handleBlurInput} onChange={handleChangeInput} type="text" id="name"/>
                {nameInputIsInValid && <p className="error-text">Name must not be empty.</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
