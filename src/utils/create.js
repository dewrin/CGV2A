import bcrypt from 'bcryptjs';
import { toast } from 'react-toastify';

import { fetchUserdataUsername, fetchUserdataUserid, postUserdata } from './connection';

export const handleCreate = async (e, setAuthentication, theme) => {
  e.preventDefault();
  const formUsername = e.target.username.value;
  const formPassword1 = e.target.password1.value;
  const formPassword2 = e.target.password2.value;
  const userdata = await fetchUserdataUsername(formUsername.toLowerCase());
  if (formUsername.length < 4) return toast.error('Username must be at least 4 characters', { theme: theme });
  if (formUsername.length > 14) return toast.error('Username must be less than 15 characters', { theme: theme });
  if (!/^[a-z0-9]{4,}$/.test(formUsername.toLowerCase()))
    return toast.error('Username can not contain special characters', { theme: theme });
  if (userdata) return toast.error('This username is already taken', { theme: theme });
  if (formPassword1.length < 6) return toast.error('Password must be at least 6 characters', { theme: theme });
  if (formPassword1.length > 64) return toast.error('Password must be less than 65 characters', { theme: theme });
  if (formPassword1 !== formPassword2) return toast.error('Passwords do not match', { theme: theme });
  const encryptedPassword = await bcrypt.hash(formPassword1, 10);
  const userid = await createUserid();
  const avatar = 'https://data.whicdn.com/images/336976158/original.jpg';
  const joindate = new Date().toISOString();
  const currency = 0;
  const cards = 0;
  const trades = 0;
  const packs = 0;

  const posted = await postUserdata(
    userid,
    formUsername,
    encryptedPassword,
    avatar,
    joindate,
    cards,
    trades,
    currency,
    packs
  );

  if (!posted) return toast.error('Something went wrong', { theme: theme });

  setAuthentication((prevState) => ({
    ...prevState,
    isAuthenticated: true,
    userid: userid,
    username: formUsername,
    avatar: avatar,
    joindate: joindate,
    currency: currency,
    cards: cards,
    trades: trades,
    packs: packs,
  }));
};

export const createUserid = async () => {
  const array = [];
  while (array.length < 16) {
    const number = Math.floor(Math.random() * 10);
    if (number !== 0) array.push(number);
  }
  const user = await fetchUserdataUserid(array.join(''));
  if (user) return createUserid();
  return array.join('');
};
