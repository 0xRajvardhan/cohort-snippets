import { useState } from "react";

export default function MyComponent() {
    const [count, setCount] = useState(0);

    const incrementCount = () => setCount(count + 1);

    return (
        <>
            <p>You clicked {count} times</p>
            <button onClick={incrementCount}>Click me</button>
        </>
    );
}