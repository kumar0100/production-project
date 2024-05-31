import "./styles/index.scss";
import { classNames } from "shared/lib/class-name/classNames";
import { useTheme } from "./providers/theme-provider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/sidebar";
import { Suspense } from "react";

const App = () => {
    const { theme } = useTheme();

    return (
        <Suspense fallback=''>
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
