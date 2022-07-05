import axios from 'axios';

const server = axios.create({
  baseURL: 'http://192.168.0.10:9000',
});

export async function fetchUserdataPassword(username) {
  try {
    const { data } = await server.get('/userdata/password', { params: { username } });
    return data.message.password;
  } catch (e) {}
}

export async function fetchUserdataUsername(username) {
  try {
    const { data } = await server.get('/userdata/username', { params: { username } });
    return data.message;
  } catch (e) {}
}

export async function fetchUserdataUserid(userid) {
  try {
    const { data } = await server.get('/userdata/userid', { params: { userid } });
    return data.message;
  } catch (e) {}
}

export async function postUserdata(userid, username, password, avatar, joindate, cards, trades, currency, packs) {
  try {
    return await server.post('/userdata', {
      userid,
      username,
      password,
      avatar,
      joindate,
      cards,
      trades,
      currency,
      packs,
    });
  } catch (e) {}
}

export async function fetchUsercardsUserid(userid) {
  try {
    const { data } = await server.get('/usercards/userid', { params: { userid } });
    return data.message;
  } catch (e) {}
}
