import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { CgProfile, CgCardHearts } from 'react-icons/cg';
import { TbSettings } from 'react-icons/tb';
import { BsSearch } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';
import '../styles/Navigation.css';
import banner from '../assets/banner.png';

const Navigation = ({ theme, authentication, setAuthentication }) => {
  const [search, setSearch] = useState('');
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <nav className={`navigation navigation-${theme}`}>
      <img className={`navigation-banner navigation-banner-${theme}`} src={banner} alt="Nayeon" />
      <div className={`navigation-inputs`}>
        <form
          className={'navigation-form'}
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/u/${e.target[0].value.toLowerCase()}`);
            setSearch('');
          }}
        >
          <input
            className={`navigation-form-input navigation-form-input-${theme}`}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
          <div className={`userinfo-username`}>{authentication.username}</div>
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
