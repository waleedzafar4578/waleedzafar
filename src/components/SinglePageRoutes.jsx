import Home from "./home/Home.jsx";
import About from "./about/About.jsx";
import Portfolio from "./portfolio/Portfolio.jsx";
import React from 'react';
import { Box } from "@mui/material";

export default function SinglePageRoutes({refs}) {
    return (<Box mt={'3rem'}>
        <Home innerRef={refs.refHome}/>
        <About innerRef={refs.refAbout}/>
        <Portfolio innerRef={refs.refPortfolio}/>
    </Box>)
}