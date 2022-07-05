import { fetchUserdataUsername, fetchUserdataUserid } from './connection';

export const handleUProfileLoad = async (pathname, setUser) => {
  const input = pathname.split('/')[2];

  if (/^[0-9]{16}$/.test(input)) {
    const a = await fetchUserdataUserid(input);
    setUser(a);
  } else {
    const a = await fetchUserdataUsername(input);
    setUser(a);
  }
};
