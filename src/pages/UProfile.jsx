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
        <h1>USERNAME: {user.username}</h1>
        <h1>USERID: {user.userid}</h1>
        <h1>AVATAR: {user.avatar}</h1>
        <h1>JOINDATE: {user.joindate}</h1>
        <h1>CURRENCY: {user.currency}</h1>
        <h1>CARDS: {user.cards}</h1>
        <h1>TRADES: {user.trades}</h1>
        <h1>PACKS: {user.packs}</h1>
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
