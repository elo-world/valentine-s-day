import React, { useState } from "react";

const Buttons = ({ deniedCount, setDeniedCount }) => {
    const [sizeButton, setSizeButton] = useState(1);
    const [randomPos, setRandomPos] = useState([0, 0]);

    const smallerButton = () => {
        setDeniedCount((curr) => {
            return curr + 1;
        });

        setSizeButton((curr) => {
            return (curr -= 0.1);
        });

        setRandomPos([
            Math.floor(Math.random() * 201) - 100,
            Math.floor(Math.random() * 201) - 100,
        ]);
    };

    const deniedButton = () => {
        if (deniedCount !== 8) {
            return (
                <button
                    onClick={() => {
                        smallerButton();
                    }}
                    style={{
                        fontSize: `${6 * sizeButton}vw`,
                        padding: `${3 * sizeButton}vw ${5 * sizeButton}vw`,
                        transform: `translate(${randomPos[0]}%, ${randomPos[1]}%)`,
                    }}
                    className="denied"
                >
                    Refuser
                </button>
            );
        }
    };

    return (
        <div className="buttons">
            <button className="agree">Accepter</button>
            {deniedButton()}
        </div>
    );
};

export default Buttons;
