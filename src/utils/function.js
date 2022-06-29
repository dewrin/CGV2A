import bcrypt from 'bcryptjs';
import { toast } from 'react-toastify';

import { fetchUserdata, fetchUserdataPassword } from './connection';

export const handleLogin = async (e, setAuthentication, theme) => {
  e.preventDefault();
  const formUsername = e.target.username.value;
  const formPassword = e.target.password.value;
  const userdata = await fetchUserdata(formUsername);
  const realPassword = await fetchUserdataPassword(formUsername);

  if (!userdata || !bcrypt.compareSync(formPassword, realPassword)) {
    return toast.error('Invalid username or password', { theme: theme });
  }

  setAuthentication((prevState) => ({
    ...prevState,
    isAuthenticated: true,
    userid: userdata.userid,
    username: userdata.username,
    avatar: userdata.avatar,
    joindate: userdata.joindate,
    currency: userdata.currency,
    cards: userdata.cards,
    trades: userdata.trades,
    packs: userdata.packs,
  }));
};
