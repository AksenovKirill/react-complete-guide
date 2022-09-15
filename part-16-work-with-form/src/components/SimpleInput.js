import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);

  const handleChangeInput = (event) => {
    setEnteredName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (enteredName.trim() === "") {
      setNameIsValid(false);
      return null;
    }
    setNameIsValid(true);
    console.log(enteredName);
    setEnteredName("");
  };

  const nameInputClasses = nameIsValid ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={handleSubmit}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input value={enteredName} onChange={handleChangeInput} type="text" id="name" />
        {!nameIsValid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
