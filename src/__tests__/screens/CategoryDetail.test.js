/* eslint-disable import/first */
jest.mock("~/services/swService");
import React from 'react';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import store from '~/data/starwars/store';
import { render, fireEvent, cleanup } from '@testing-library/react'
import {
    wait
} from '@testing-library/dom';
import CategoryDetail from '~/screens/CategoryDetail';
import {Router} from "react-router-dom";
import { createMemoryHistory } from 'history'

import * as swService from "~/services/swService";

jest.spyOn(swService,"byId");


const mockService  = ( ) => {
    swService.byId.mockImplementation((id) => {
        return Promise.resolve({
            data:{
                result: {}
            }
        })
    })
}



function renderWithRouter(
    ui,
    { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) {
    return {
        ...render(
            <Router route={route} history={history}>{ui}</Router>
        ),
        // adding `history` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details).
        history,
    }
}


describe("category screen", () => {
    it("test mocking", () => {
        mockService();
        const { getByText } = renderWithRouter(<CategoryDetail />, {
            route: '/detail/people/1'
        });


    })
})