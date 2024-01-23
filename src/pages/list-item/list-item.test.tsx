import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import ListItem from "./index"

describe("List Item", () => {
    
    const list = ["HTML", "CSS", "JS"]

    test("renders correctly",() => {
        render(<ListItem list={list} />)
        expect(screen.getByRole("list")).toBeInTheDocument()
        expect(screen.getAllByRole("listitem")).toHaveLength(list.length)
    })
    
})
