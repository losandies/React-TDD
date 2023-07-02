import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
    return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
    const [buttonColor, setButtonColor] = useState("MediumVioletRed");
    const [checkboxIsClicked, setCheckboxIsClicked] = useState(false);

    const alternateColors = () => {
        buttonColor === "MediumVioletRed"
            ? setButtonColor("MidnightBlue")
            : setButtonColor("MediumVioletRed");
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
                {buttonColor === "MediumVioletRed"
                    ? "Change to Midnight Blue"
                    : "Change to Medium Violet Red"}
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
