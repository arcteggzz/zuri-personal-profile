import avatar from "../images/avatar.jpg"
import AvatarShareIcon from "../Components/AvatarShareIcon"
import AvatarShareIconMobile from "../Components/AvatarShareIconMobile"
import './Profile.css';

function Profile() {
  return (
    <div className="profile">
        <div className="avatar-profile">
          <AvatarShareIcon />
        </div>
        <div className="avatar-profile-mobile">
          <AvatarShareIconMobile />
        </div>
        <img src={avatar} alt="" className="avatar" id="profile__img"/>
        <h1 className="name">Oghenetega Esedere</h1>
        <code id="twitter">Acteggzz</code>
        <code id="slack">Oghenetega Esedere</code>
    </div>
  );
}

export default Profile;
