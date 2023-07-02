import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
    const [buttonColor, setButtonColor] = useState("red");
    const [checkboxIsClicked, setCheckboxIsClicked] = useState(false);

    const alternateColors = () => {
        buttonColor === "red" ? setButtonColor("blue") : setButtonColor("red");
    };

    return (
        <div className="App">
            <button
                style={{ backgroundColor: buttonColor }}
                onClick={alternateColors}
                disabled={checkboxIsClicked}
            >
                {buttonColor === "red" ? "Change to blue" : "Change to red"}
            </button>
            <input
                type="checkbox"
                onClick={() => setCheckboxIsClicked(!checkboxIsClicked)}
            />
        </div>
    );
}

export default App;
