import React, { useState } from "react";

const Buttons = ({ deniedCount, setDeniedCount }) => {
    const [sizeButton, setSizeButton] = useState(1);
    const [randomPos, setRandomPos] = useState();

    const smallerButton = () => {
        setDeniedCount((curr) => {
            return curr + 1;
        });

        setSizeButton((curr) => {
            return (curr -= 0.1);
        });
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
