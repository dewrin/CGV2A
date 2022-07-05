import '../styles/UProfile.css';

const UProfile = ({ theme }) => {
  return (
    <section className={`UProfile UProfile-${theme}`}>
      <h1 className={`uprofile-title`}>USER PROFILE</h1>
      <hr className={`uprofile-hr-${theme}`} />
    </section>
  );
};

export default UProfile;
