import { useNavigate } from "react-router-dom";

export function AppBar() {
    const navigate = useNavigate();
    return (
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center' }}>
            <h1 style={{ color: '#333', fontFamily: 'Arial, sans-serif' }}>This is constant topbar</h1>
            <button
                onClick={() => { navigate("/") }}
                style={{ margin: '5px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Landing page</button>
            <button
                onClick={() => { navigate("/dashboard") }}
                style={{ margin: '5px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Dashboard</button>
        </div>
    )
}