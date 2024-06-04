import "./styles/index.scss";
import { classNames } from "shared/lib/class-name/classNames";
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/sidebar";
import { Suspense, useEffect } from "react";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/theme-provider";

const App = () => {
    const { theme } = useTheme();

    return (
        <Suspense fallback="">
            <div className={classNames("app", {}, [theme])}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </div>
        </Suspense>
    );
};

export default App;
