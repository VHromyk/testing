import {render, screen, act} from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";


describe('ROUTER TEST', () => {
    test('Test link about page', ()=> {
        render(<MemoryRouter>
            <App />
        </MemoryRouter>)

        const mainLink = screen.getByTestId('main-link');
        const aboutLink = screen.getByTestId('about-link');
        act(()=> {
            userEvent.click(aboutLink);
        })
        expect(screen.getByTestId('about-page')).toBeInTheDocument();

        act(()=> {
            userEvent.click(mainLink)
        })
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    })

    test('Error test page', ()=> {
        render(<MemoryRouter initialEntries={['/asaasasasasas']}>
            <App />
        </MemoryRouter>)

        expect(screen.getByTestId('error-page')).toBeInTheDocument();
        screen.debug()
    })
})