import "./shared/config/i18n/i18n";
import "app/styles/index.scss";
import { render } from "react-dom";
import { ErrorBoundary } from "app/providers/error-boundary";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "app/providers/store-provider";
import App from "./app/App";
import ThemeProvider from "./app/providers/theme-provider/ui/ThemeProvider";

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,

    document.getElementById("root"),
);
