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

export async function fetchUserdata(username) {
  try {
    const { data } = await server.get('/userdata', { params: { username } });
    return data.message;
  } catch (e) {}
}
