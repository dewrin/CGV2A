import '../styles/Create.css';

import { handleCreate } from '../utils/function';

const Create = ({ theme, setAuthentication }) => {
  return (
    <section className={`Create Create-${theme}`}>
      <form className={`create-form create-form-${theme}`} onSubmit={(e) => handleCreate(e, setAuthentication, theme)}>
        <h1 className={`create-form-logo`}>Insert title here..</h1>
        <input
          className={`create-form-input create-form-input-${theme}`}
          id="username"
          type="text"
          placeholder="username"
        />
        <input
          className={`create-form-input create-form-input-${theme}`}
          id="password1"
          type="password"
          placeholder="password"
        />
        <input
          className={`create-form-input create-form-input-${theme}`}
          id="password2"
          type="password"
          placeholder="confirm password"
        />
        <button className={`create-form-submit create-form-submit-${theme}`} type="submit">
          CREATE
        </button>
      </form>
    </section>
  );
};

export default Create;
