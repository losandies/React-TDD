import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
    return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
    const [buttonColor, setButtonColor] = useState("red");
    const [checkboxIsClicked, setCheckboxIsClicked] = useState(false);

    const alternateColors = () => {
        buttonColor === "red" ? setButtonColor("blue") : setButtonColor("red");
    };

    return (
        <div className="App">
            <button
                style={{
                    backgroundColor: checkboxIsClicked ? "gray" : buttonColor,
                }}
                onClick={alternateColors}
                disabled={checkboxIsClicked}
            >
                {buttonColor === "red" ? "Change to blue" : "Change to red"}
            </button>
            <input
                type="checkbox"
                id="disable-button-checkbox"
                onClick={() => setCheckboxIsClicked(!checkboxIsClicked)}
            />
            <label htmlFor="disable-button-checkbox">Disable button</label>
        </div>
    );
}

export default App;
