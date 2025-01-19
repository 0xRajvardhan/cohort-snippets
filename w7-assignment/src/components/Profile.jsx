import './Profile.css';
const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-header">
                <img src="../../public/dp.jpg" alt="Profile" className="profile-image" />
                <h1 className="profile-name">John Doe</h1>
            </div>
            <div className="profile-details">
                <p><strong>Email:</strong> john.doe@example.com</p>
                <p><strong>Location:</strong> New York, USA</p>
                <p><strong>Bio:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            </div>
        </div>
    );
};

export default Profile;