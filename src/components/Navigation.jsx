import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { CgProfile, CgCardHearts } from 'react-icons/cg';
import { TbSettings } from 'react-icons/tb';
import { BsSearch } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../styles/Navigation.css';
import banner from '../assets/banner.png';

import { handleSearch } from '../utils/function';

const Navigation = ({ theme, authentication, setAuthentication }) => {
  const { pathname } = useLocation();
  return (
    <nav className={`navigation navigation-${theme}`}>
      <img className={`navigation-banner navigation-banner-${theme}`} src={banner} alt="Nayeon" />
      <div className={`navigation-inputs`}>
        <form className={'navigation-form'} onSubmit={(e) => handleSearch(e)}>
          <input
            className={`navigation-form-input navigation-form-input-${theme}`}
            type="text"
            placeholder="Search..."
          />
          <button className={`navigation-form-input-submit`} type="submit">
            <BsSearch style={{ color: theme === 'light' ? '#000' : '#fff' }} />
          </button>
        </form>
        <div className="navigation-links">
          <Link
            className={`navigation-link navigation-link-${theme} ${
              pathname === '/profile' ? `navigation-link-${theme}-active` : null
            }`}
            to="/profile"
          >
            <CgProfile className={'navigation-link-icon'} />
            Profile
          </Link>
          <Link
            className={`navigation-link navigation-link-${theme} ${
              pathname === '/collection' ? `navigation-link-${theme}-active` : null
            }`}
            to="/collection"
          >
            <CgCardHearts className={'navigation-link-icon'} />
            Collection
          </Link>
          <Link
            className={`navigation-link navigation-link-${theme} ${
              pathname === '/store' ? `navigation-link-${theme}-active` : null
            }`}
            to="/store"
          >
            <MdOutlineLocalGroceryStore className={'navigation-link-icon'} />
            Store
          </Link>
        </div>
      </div>
      <div className={`userinfo userinfo-${theme}`}>
        <img className={`userinfo-avatar`} src={authentication.avatar} alt="Avatar" />
        <div className={`userinfo-text`}>
          <div className={`userinfo-username`}>
            {authentication.username.slice(0, 1).toUpperCase()}
            {authentication.username.slice(1)}
          </div>
          <div
            className={`userinfo-userid`}
            onClick={() => {
              navigator.clipboard.writeText(authentication.userid);
              toast.success('Copied to clipboard!', { theme: theme });
            }}
          >
            {authentication.userid}
          </div>
        </div>
        <TbSettings
          className={`userinfo-settings-icon`}
          onClick={() => setAuthentication((prev) => ({ ...prev, theme: theme === 'light' ? 'dark' : 'light' }))}
        />
      </div>
    </nav>
  );
};

export default Navigation;
