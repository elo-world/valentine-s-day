import React from "react";
import Action from "./Action";

const Home = ({ params }) => {
    return (
        <div>
            <h1>Veux-tu être ma valentine {params.get("name")} ?</h1>
            <img src="./images/cat/1-agree-cat.png" alt="cat" />
            <Action />
        </div>
    );
};

export default Home;
