import avatar from "../images/avatar.jpg"
import './Profile.css';

function Profile() {
  return (
    <div className="profile">
        <img src={avatar} alt="" className="avatar"/>
        <h1 className="name">Oghenetega Esedere</h1>
    </div>
  );
}

export default Profile;
