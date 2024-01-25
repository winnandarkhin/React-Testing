import { render, screen } from '@testing-library/react';
import Form from './index';

describe("Form", () => {

    test("renders a form", () => {
        render(<Form />)
        const formEl = screen.getByTitle("Register")
        expect(formEl).toBeInTheDocument()
    })

    test("renders the first name field as a text box", () => {
        render(<Form />);
        const inputEl = screen.getByTestId("firstName");
        expect(inputEl).toBeInTheDocument()
        expect(inputEl).toHaveAttribute('type', 'text');
    });

    test("renders a label for the first name field", () => {
        render(<Form />);
        const inputEl = screen.getByLabelText('First Name');
        expect(inputEl).toBeInTheDocument()
    })

    test("includes the existing value for the first name", () => {
        const customer = { firstName: "Ashley" };
        render(<Form original={customer} />);
        const inputEl = screen.getByLabelText('First Name');
        expect(inputEl.value).toBe(customer.firstName);
    })

    test("renders a submit button", () => {
        render(<Form />);
        const buttonEl = screen.getByText('Add');
        expect(buttonEl).toBeInTheDocument()

    })
})
