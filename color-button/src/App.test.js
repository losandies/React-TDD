import { fireEvent, logRoles, render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
    render(<App />);
    // find button element with a role of button and text of "Change to blue"
    const colorButton = screen.getByRole("button", { name: "Change to blue" });

    // expect the background color to be red
    expect(colorButton).toHaveStyle({ backgroundColor: "red" });

    // click button
    fireEvent.click(colorButton);
    expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

    //expect button text to be "Change to red"
    expect(colorButton).toHaveTextContent("Change to red");
});

test("button has correct initial text", () => {
    render(<App />);
});
