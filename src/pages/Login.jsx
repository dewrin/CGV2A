import '../styles/Login.css';

import { handleLogin } from '../utils/function';

const Login = ({ theme, setAuthentication }) => {
  return (
    <section className={`Login Login-${theme}`}>
      <form className={`login-form login-form-${theme}`} onSubmit={(e) => handleLogin(e, setAuthentication, theme)}>
        <h1 className={`login-form-logo`}>Insert title here..</h1>
        <input
          className={`login-form-input login-form-input-${theme}`}
          id="username"
          type="text"
          placeholder="username"
        />
        <input
          className={`login-form-input login-form-input-${theme}`}
          id="password"
          type="password"
          placeholder="password"
        />
        <button className={`login-form-submit login-form-submit-${theme}`} type="submit">
          LOGIN
        </button>
      </form>
    </section>
  );
};

export default Login;
