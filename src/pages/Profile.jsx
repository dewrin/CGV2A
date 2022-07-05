import '../styles/Profile.css';

const Profile = ({ theme, authentication }) => {
  // [authentication.joindate, authentication.currency, authentication.cards, authentication.trades, authentication.packs]

  return (
    <section className={`Profile Profile-${theme}`}>
      <h1 className={`profile-title`}>PROFILE</h1>
      <hr className={`profile-hr-${theme}`} />
      <div className={`profile-info`}>
        <img className={`profile-info-avatar`} src={authentication.avatar} alt="Avatar" />
        <div className={`profile-info-text`}>
          <h2 className={`profile-info-username`}>
            {authentication.username.slice(0, 1).toUpperCase()}
            {authentication.username.slice(1)}
          </h2>
          <h3 className={`profile-info-userid`}>{authentication.userid}</h3>
        </div>
      </div>
    </section>
  );
};

export default Profile;
