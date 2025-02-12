import React, { useState } from "react";
import Buttons from "./Buttons";

const Home = ({ params }) => {
    const [deniedCount, setDeniedCount] = useState(0);

    const renderCat = () => {
        if (deniedCount > 0) {
            if (deniedCount === 7) {
                return (
                    <>
                        <p>
                            Un vieu dicton dit : Rejoins le ou tu périras dans d'atroce souffrance !
                        </p>
                        <img src={`./images/cat/${deniedCount}-denied-cat.png`} alt="cat" />
                    </>
                );
            } else {
                return <img src={`./images/cat/${deniedCount}-denied-cat.png`} alt="cat" />;
            }
        } else {
            return <img src="./images/cat/cat.png" alt="cat" />;
        }
    };

    return (
        <div className="home">
            <h1>Veux-tu être ma valentine {params.get("name")} ?</h1>
            {renderCat()}
            <Buttons deniedCount={deniedCount} setDeniedCount={setDeniedCount} />
        </div>
    );
};

export default Home;
