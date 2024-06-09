import 'shared/config/i18n/i18n';
import { render } from 'react-dom';
import { ErrorBoundary } from 'app/providers/error-boundary';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import ThemeProvider from './app/providers/theme-provider/ui/ThemeProvider';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
