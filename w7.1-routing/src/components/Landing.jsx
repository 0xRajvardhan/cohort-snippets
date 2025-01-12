
export default function Landing() {
    const styles = {
        container: {

        },
        heading: {
            fontSize: '2.5rem',
            color: '#333',
            marginBottom: '20px'
        },
        paragraph: {
            fontSize: '1.2rem',
            color: '#666',
            textAlign: 'center',
            marginBottom: '30px'
        },
        button: {
            padding: '10px 20px',
            fontSize: '1rem',
            color: '#fff',
            backgroundColor: '#007BFF',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        }
    };
    return (
        <>
            <div style={styles.container}>
                <h1 style={styles.heading}>Welcome to Our Website</h1>
                <p style={styles.paragraph}>We are glad to have you here. Explore our features and enjoy your stay!</p>
                <button style={styles.button}>Get Started</button>
            </div>
        </>
    )
}