import React from 'react';
import App from '~/App';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import store from '~/data/starwars/store';
import { render, fireEvent, cleanup } from '@testing-library/react'
import {
    wait
} from '@testing-library/dom';
import Banner from '~/components/Banner';



describe("banner", () => {
    it("test banner component", () => {
        let { getByText, getByRole } = render(<Banner title="Banner" description="Hello" />)

        let title = getByText("Banner");

        expect(title.innerHTML).toContain("Banner");

        let button = getByRole("button");

        fireEvent.click(button)

        const count = () => getByText("Counter:", { exact: false });

        expect(count().innerHTML).toEqual("Counter: 1");

        fireEvent.click(button)

        expect(count().innerHTML).toEqual("Counter: 2");
    })
})