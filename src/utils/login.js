import bcrypt from 'bcryptjs';
import { toast } from 'react-toastify';

import { fetchUserdataUsername, fetchUserdataPassword, fetchUsercardsUserid } from './connection';

export const handleLogin = async (e, setAuthentication, theme) => {
  e.preventDefault();
  const formUsername = e.target.username.value;
  const formPassword = e.target.password.value;
  const userdata = await fetchUserdataUsername(formUsername.toLowerCase());
  const usercards = await fetchUsercardsUserid(userdata.userid);
  const realPassword = await fetchUserdataPassword(formUsername.toLowerCase());
  if (!userdata || !bcrypt.compareSync(formPassword, realPassword)) {
    return toast.error('Invalid username or password', { theme: theme });
  }

  setAuthentication((prevState) => ({
    ...prevState,
    isAuthenticated: true,
    userid: userdata.userid,
    username: formUsername,
    avatar: userdata.avatar,
    joindate: userdata.joindate,
    currency: userdata.currency,
    cards: userdata.cards,
    trades: userdata.trades,
    packs: userdata.packs,
    usercards: usercards,
  }));
};
