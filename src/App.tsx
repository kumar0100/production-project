import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense, useContext, useState } from "react";
import { AboutPageAsync } from "./pages/about-page/AboutPage.async";
import { MainPageAsync } from "./pages/main-page/MainPage.async";
import { useTheme } from "./theme/useTheme";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>TOOGLE</button>
            <Link to={"/"}>Main Page</Link>
            <Link to={"/about"}>About Page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPageAsync />} />
                    <Route path={"/about"} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
