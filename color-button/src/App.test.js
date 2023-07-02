import { fireEvent, logRoles, render, screen } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";
import { toBeChecked } from "@testing-library/jest-dom/matchers";

test("button has correct initial color and ending color", () => {
    render(<App />);
    // find button element with a role of button and text of "Change to blue"
    const colorButton = screen.getByRole("button", {
        name: "Change to Midnight Blue",
    });

    // expect the background color to be red
    expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

    // click button
    fireEvent.click(colorButton);
    expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

    //expect button text to be "Change to red"
    expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

test("initial conditions", () => {
    render(<App />);

    //Check that button starts out enabled
    const colorButton = screen.getByRole("button", {
        name: "Change to Midnight Blue",
    });
    expect(colorButton).toBeEnabled();
    // check that the checkbox starts out unchecked

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
});

test("button is disabled when checkbox is checked and enabled on second click", () => {
    render(<App />);
    const colorButton = screen.getByRole("button", {
        name: "Change to Midnight Blue",
    });
    expect(colorButton).toBeEnabled();

    const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

    fireEvent.click(checkbox);
    expect(colorButton).toBeDisabled();

    fireEvent.click(checkbox);
    expect(colorButton).toBeEnabled();
});

test("button color should be gray when disabled and normal color when enabled", () => {
    render(<App />);

    const colorButton = screen.getByRole("button", {
        name: "Change to Midnight Blue",
    });
    expect(colorButton).not.toHaveStyle({ backgroundColor: "gray" });

    const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
});

describe("spaces before camel-case capital letters", () => {
    test("Works for no inner capital letters", () => {
        expect(replaceCamelWithSpaces("Red")).toBe("Red");
    });
    test("Works for one inner capital letter", () => {
        expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
    });
    test("Works for multiple inner capital letters", () => {
        expect(replaceCamelWithSpaces("MediumVioletRed")).toBe(
            "Medium Violet Red"
        );
    });
});
