import { fireEvent, render, screen } from '@testing-library/react';
// eslint-disable-next-line max-len
import { renderComponent } from 'shared/lib/tests/render-component/renderComponent';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Is there', () => {
        renderComponent(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test toggle', () => {
        renderComponent(<Sidebar />);
        const btn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(btn);
        expect(screen.getByTestId('sidebar')).toHaveClass('colapsed');
    });
});
