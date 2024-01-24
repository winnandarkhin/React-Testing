import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import TestButton from './index';

describe("Button", () => {
    
    test("start learning button is render after clicking the login button", async() => {
        user.setup()
        render(<TestButton />)
        const loginButton = screen.getByRole("button", {name: "Login"})
        await user.click(loginButton)
        const welcomeButton = screen.getByRole("button", {name: "Welcome"})
        expect(welcomeButton).toBeInTheDocument()
    })
    
})
