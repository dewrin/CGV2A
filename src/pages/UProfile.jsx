import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/UProfile.css';

import { handleUProfileLoad } from '../utils/uprofile.js';

const UProfile = ({ theme }) => {
  const [user, setUser] = useState({});
  const { pathname } = useLocation();

  useEffect(() => {
    handleUProfileLoad(pathname, setUser);
  }, [pathname]);

  if (user) {
    return (
      <section className={`UProfile UProfile-${theme}`}>
        <h1 className={`uprofile-title`}>USER PROFILE</h1>
        <hr className={`uprofile-hr-${theme}`} />
        <div className={`profile-info`}>
          <img className={`profile-info-avatar`} src={user.avatar} alt="Avatar" />
          <div className={`profile-info-text`}>
            <h2 className={`profile-info-username`}>{user.username}</h2>
            <h3 className={`profile-info-userid`}>{user.userid}</h3>
          </div>
        </div>
      </section>
    );
  }

  if (!user) {
    return (
      <section className={`UProfile UProfile-${theme}`}>
        <h1 className={`uprofile-title`}>USER PROFILE</h1>
        <hr className={`uprofile-hr-${theme}`} />
        <h1>THIS USER DOES NOT EXIST</h1>
      </section>
    );
  }
};

export default UProfile;
