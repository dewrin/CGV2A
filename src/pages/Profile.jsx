import '../styles/Profile.css';

const Profile = ({ theme }) => {
  return (
    <section className={`Profile Profile-${theme}`}>
      <h1 className={`profile-title`}>PROFILE</h1>
      <hr className={`profile-hr-${theme}`} />
    </section>
  );
};

export default Profile;
