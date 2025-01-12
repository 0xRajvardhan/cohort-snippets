
export default function Dashboard() {
    return (
        <>
            <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                <h1 style={{ color: '#333' }}>Dashboard</h1>
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                    <div style={{ width: '30%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                        <h2 style={{ color: '#555' }}>Section 1</h2>
                        <p style={{ color: '#777' }}>Content for section 1</p>
                    </div>
                    <div style={{ width: '30%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                        <h2 style={{ color: '#555' }}>Section 2</h2>
                        <p style={{ color: '#777' }}>Content for section 2</p>
                    </div>
                    <div style={{ width: '30%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                        <h2 style={{ color: '#555' }}>Section 3</h2>
                        <p style={{ color: '#777' }}>Content for section 3</p>
                    </div>
                </div>
            </div>
        </>
    )
}