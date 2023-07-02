import { fireEvent, logRoles, render, screen } from "@testing-library/react";
import App from "./App";
import { toBeChecked } from "@testing-library/jest-dom/matchers";

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

test("initial conditions", () => {
    render(<App />);

    //Check that button starts out enabled
    const colorButton = screen.getByRole("button", { name: "Change to blue" });
    expect(colorButton).toBeEnabled();
    // check that the checkbox starts out unchecked

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
});

test("button is disabled when checkbox is checked and enabled on second click", () => {
    render(<App />);
    const colorButton = screen.getByRole("button", { name: "Change to blue" });
    expect(colorButton).toBeEnabled();

    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);
    expect(colorButton).toBeDisabled();

    fireEvent.click(checkbox);
    expect(colorButton).toBeEnabled();
});
