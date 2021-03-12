import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //Arrange: render component
    render(<CheckoutForm/>)
    //Act: find the header on the page
    const header = screen.getByText(/checkout form/i)
    //assert: text that it is on the document (using getByText in act, so will throw an error if not there)
});

test("form shows success message on submit with form details", () => {});
