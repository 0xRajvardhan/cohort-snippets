
export function Header (props) {
    return (
        <>
        <header style={{ textAlign: "center" }}>
            {/* eslint-disable-next-line react/prop-types */}
            <h1>{props.title}</h1>
        </header>
        </>
    );
};
