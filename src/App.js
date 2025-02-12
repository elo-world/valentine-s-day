import React, { useEffect } from "react";
import { Routes, Route, useSearchParams, useNavigate } from "react-router-dom";
import Home from "./js/Home";

const App = () => {
    const [queryParameters] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        navigate("./#");
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<Home params={queryParameters} />} />
            </Routes>
        </>
    );
};

export default App;
