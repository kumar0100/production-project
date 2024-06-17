import { DeepPartial } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { StoreProvider } from "app/providers/store-provider";
import { StateSchema } from "app/providers/store-provider/config/StateSchema";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nForTest from "shared/config/i18n/i18nForTest";

interface RenderComponent {
    route?: string;
    initialState?: DeepPartial<StateSchema>
}

export const renderComponent = (
    component: ReactNode,
    options: RenderComponent = {},
) => {
    const { route = '/', initialState } = options;
    render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
};
