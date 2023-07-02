import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
    const [buttonColor, setButtonColor] = useState("red");

    const alternateColors = () => {
        buttonColor === "red" ? setButtonColor("blue") : setButtonColor("red");
    };

    return (
        <div className="App">
            <button
                style={{ backgroundColor: buttonColor }}
                onClick={alternateColors}
            >
                {buttonColor === "red" ? "Change to blue" : "Change to red"}
            </button>
        </div>
    );
}

export default App;
