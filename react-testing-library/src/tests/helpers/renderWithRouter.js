import React from 'react';
import {MemoryRouter} from "react-router-dom";
import AppRouter from "../../router/AppRouter";

const RenderWithRouter = (component, initialRoute = '/') => {
    return (
        <MemoryRouter initialEntries={[initialRoute]}>
            <AppRouter />
            {component}
        </MemoryRouter>
    );
};

export default RenderWithRouter;