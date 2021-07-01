import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from "./App";


// this function tests to see that the components render correctly
it("renders correctly", ()=>{
    const {queryByTestId, queryByPlaceholderText} =render (<App />)

    expect (queryByTestId("search-button")).toBeTruthy()
    expect (queryByPlaceholderText("Search")).toBeTruthy()
})


// this function tests to see that the Input value changes when altered or updated
describe ("Input value", ()=>{
    it("updates on change", ()=>{
        const {queryByPlaceholderText}= render(<App />)

        const searchInput = queryByPlaceholderText ("Search");
        fireEvent.change(searchInput, {target: {value: "test"}})

        expect (searchInput.value).toBe("test")
    })
})
