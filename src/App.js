import React, { useEffect } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import Home from "./js/Home";

const App = () => {
    const [queryParameters] = useSearchParams();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home params={queryParameters} />} />
            </Routes>
        </>
    );
};

export default App;
