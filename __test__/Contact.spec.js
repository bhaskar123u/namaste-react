import Contact from "../src/components/Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// If we don't want to write render again and again ->
beforeEach(() => {
    render(<Contact />); // rendered to jsdom
});

describe('Checking rendering of Contact Us page', () => {
    // it === test, just an alias. It makes it more readable and test case name starts with 'Should...'
    it('Should load Contact component', () => {
        const headingTags = screen.getByRole('heading'); // all heading will be loaded in headingTags
        // assertion
        expect(headingTags).toBeInTheDocument();
    });

    it('Should load button inside Contact component', () => {
        const button = screen.getByRole('button'); // all button will be loaded in button, this can also be written as below
        // const button = screen.getByText('Submit');
        // assertion
        expect(button).toBeInTheDocument();
    });

    it('Should load input with placeholder name inside Contact component', () => {
        const inputName = screen.getByPlaceholderText('name');
        // assertion
        expect(inputName).toBeInTheDocument();
    });

    it('should load 2 input boxes in Contact component', () => {
        const countOfInputBox = screen.getAllByRole('textbox'); // Querying multiple items
        // it prints VDOM React element
        // console.log('countOfInputBox', countOfInputBox[0]);
        expect(countOfInputBox.length).toBe(2);
        expect(countOfInputBox.length).not.toBe(3);
    });
});

