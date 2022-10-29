import avatar from "../images/avatar.jpg"
import './Profile.css';

function Profile() {
  return (
    <div className="profile">
        <img src={avatar} alt="" className="avatar" id="profile__img"/>
        <h1 className="name">Oghenetega Esedere</h1>
        <code id="twitter">Acteggzz</code>
        <code id="slack">Oghenetega Esedere</code>
    </div>
  );
}

export default Profile;
