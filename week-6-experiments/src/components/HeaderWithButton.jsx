import { useState } from "react";
import { Header } from "./Header";

export function HeaderWithButton() {
    const [title, setTitle] = useState("header 1")

    function updateTitle() {
        setTitle(Math.random())
    }
    return (
        <>
            <Header title={title}/>
                <div
                    style={{
                        marginTop: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <button
                        onClick={updateTitle}
                        style={{
                            padding: "5px 5px",
                            cursor: "pointer",
                        }}
                    >
                        Click to change the title
                    </button>
                </div>
            </>
            );
};
