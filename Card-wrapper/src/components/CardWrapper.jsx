

{/* eslint-disable-next-line react/prop-types */ }
export function CardWrapper({ children }) {
    return (
        <>
            <div style={{ border: '2px solid black' }}>
                <div>{children}</div>
            </div>
        </>
    )
}