
export function Header (props) {
    return (
        <header style={{ backgroundColor: 'lightblue', textAlign: "center" }}>
            {/* eslint-disable-next-line react/prop-types */}
            <h1>{props.title}</h1>
        </header>
    );
};
