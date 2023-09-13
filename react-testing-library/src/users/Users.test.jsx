import {render, screen, fireEvent, act, findAllByTestId} from '@testing-library/react';
import Users from "./Users";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import {MemoryRouter, Routes, Route} from "react-router-dom";
import UserDetailsPage from "../pages/UserDetailsPage";
import AppRouter from "../router/AppRouter";
import RenderWithRouter from "../tests/helpers/renderWithRouter";

jest.mock('axios')

describe('USERS TEST', ()=> {
    let response;
    beforeEach(()=> {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                },
            ]
        }
    })

    afterEach(()=> {
        jest.clearAllMocks()
    })

    test('renders learn react link', async () => {
        axios.get.mockReturnValue(response);
        await act(async () => {
            render(<Users />);
        });

        const users = await screen.findAllByTestId('user-item');

        expect(users.length).toBe(2)
        expect(axios.get).toBeCalledTimes(1)
        screen.debug()
    });

    test('test redirect to details page', async () => {
        axios.get.mockReturnValue(response);
            render(RenderWithRouter(null, '/users'));

        const users = await screen.findAllByTestId('user-item');

        act(()=> {
            userEvent.click(users[0])
        })

        expect(screen.getByTestId('user-details-page')).toBeInTheDocument()

        screen.debug()

    });
})





