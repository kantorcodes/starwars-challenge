///testing router;
jest.mock("~/services/swService");
import React from 'react';
import App from '~/App';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import store from '~/data/starwars/store';
import { Link, Route, Router, Switch } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent, cleanup } from '@testing-library/react'
import {
    getByLabelText,
    getByText,
    getByTestId,
    queryByTestId,
    // Tip: all queries are also exposed on an object
    // called "queries" which you could import here as well
    wait,
  } from '@testing-library/dom'
import * as swService from "~/services/swService";


const mockService = () => {
    jest.spyOn(swService,"get");
    swService.get.mockImplementation(() => {
       return Promise.resolve({
           count: 1,
           results: [

           ]
       })
    });
}



beforeEach(() => {
    mockService()
})

function renderWithRouter(
    ui,
    { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) {
    return {
        ...render(
            renderWithRedux(<Router history={history}>{ui}</Router>)
        ),
        // adding `history` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details).
        history,
    }
}

function renderWithRedux(
    ui,
) {
    let app = store({});
    return {
        ...render(<Provider store={app}>{ui}</Provider>),
        // adding `store` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details).
        store,
    }
}


describe('router testing', () => {
    test('full app rendering/navigating', () => {
        const { container, getByText, getAllByTestId } =
            renderWithRedux(
                <App />
            )
        
        expect(container.innerHTML).toMatch('Star Wars Api')
    })

})
