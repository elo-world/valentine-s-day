import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
var CryptoJS = require("crypto-js");

const Home = ({ params }) => {
    const [deniedCount, setDeniedCount] = useState(0);
    const [agree, setAgree] = useState(false);
    const [message, setMessage] = useState("");
    const [catNumber, setCatNumber] = useState(Math.floor(Math.random() * 4) + 1);

    const decryptURL = () => {
        setAgree(true);
        var bytes = CryptoJS.AES.decrypt(params.get("message"), "14 Febuary");
        setMessage(bytes.toString(CryptoJS.enc.Utf8));
        if (params.get("cat")) {
            setCatNumber(params.get("cat"));
        }
    };

    useEffect(() => {
        console.log(CryptoJS.AES.encrypt("Je t'aime", "14 Febuary"));
    }, []);

    const renderCat = () => {
        if (agree) {
            return (
                <>
                    <img src={`./images/cat/${catNumber}-agree-cat.png`} alt="happy cat" />
                    <p>{message}</p>
                </>
            );
        } else if (deniedCount > 0) {
            if (deniedCount === 7) {
                return (
                    <>
                        <p>
                            Un vieu dicton dit : Rejoins le ou tu périras dans d'atroce souffrance !
                        </p>
                        <img src={`./images/cat/${deniedCount}-denied-cat.png`} alt="sad cat" />
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
            <Buttons
                deniedCount={deniedCount}
                setDeniedCount={setDeniedCount}
                decryptURL={decryptURL}
            />
        </div>
    );
};

export default Home;
