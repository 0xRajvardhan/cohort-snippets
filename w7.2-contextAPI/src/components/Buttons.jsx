export default function Buttons() {
    const count = 0;
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </>
    )
}