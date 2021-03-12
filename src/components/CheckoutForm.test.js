import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //Arrange: render component
    render(<CheckoutForm/>)
    //Act: find the header on the page
    const header = screen.getByText(/checkout form/i)
    //assert: text that it is on the document (using getByText in act, so will throw an error if not there)
});

test("form shows success message on submit with form details", () => {
    //Arrange: render component
    render(<CheckoutForm/>)

    const testData = {
        firstName: "Clint",
        lastName: "Fix",
        address: "890 Overview Rd",
        city: 'Grand Junction',
        state: 'Colorado',
        zip: '81506'
    }

    //Act: Find and fill out each form field with text:
    const firstNameInput = screen.getByLabelText("First Name:")
    userEvent.type(firstNameInput, testData.firstName)

    const lastNameInput = screen.getByLabelText("Last Name:")
    userEvent.type(lastNameInput, testData.lastName)

    const addressInput = screen.getByLabelText("Address:")
    userEvent.type(addressInput, testData.address)

    const cityInput = screen.getByLabelText("City:")
    userEvent.type(cityInput, testData.city)

    const stateInput = screen.getByLabelText("State:")
    userEvent.type(stateInput, testData.state)

    const zipInput = screen.getByLabelText("Zip:")
    userEvent.type(zipInput, testData.zip)

    //find and click checkout button
    const button = screen.getByRole("button")
    userEvent.click(button);

    //assert
    const successMessage = screen.getByTestId('successMessage')
    expect(successMessage).toBeInTheDocument();
});
