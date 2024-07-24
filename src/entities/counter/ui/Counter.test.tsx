import { fireEvent, render, screen } from "@testing-library/react";
// eslint-disable-next-line max-len
import { renderComponent } from "shared/lib/tests/render-component/renderComponent";
import { userEvent } from "@storybook/testing-library";
import { Counter } from "./Counter";

describe("Counter", () => {
    test("Is there", () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 5 } },
        });
        expect(screen.getByTestId('text')).toHaveTextContent('5');
    });
    test("Incr", () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 5 } },
        });
        userEvent.click(screen.getByTestId('btnincr'));
        expect(screen.getByTestId('text')).toHaveTextContent('6');
    });
    test("Decr", () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 5 } },
        });
        userEvent.click(screen.getByTestId('btndecr'));
        expect(screen.getByTestId('text')).toHaveTextContent('4');
    });
});
