import Home from "./home/Home.jsx";
import About from "./about/About.jsx";
import Portfolio from "./portfolio/Portfolio.jsx";

import { Route, Routes } from 'react-router-dom';

export default function MultiPageRoutes() {
    return (
        <Routes>
            <Route exact path={'/'} element={<Home />} />
            <Route exact path={'/about'} element={<About />} />
            <Route exact path={'/portfolio'} element={<Portfolio />} />
        </Routes>
    )
}