import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { CgProfile, CgCardHearts } from 'react-icons/cg';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = ({ theme }) => {
  const { pathname } = useLocation();
  return (
    <nav className={`navigation navigation-${theme}`}>
      <h1 className={`navigation-logo`}>Insert title here..</h1>
      <div className="flex" style={{ display: 'flex', flexDirection: 'column' }}>
        <input className={`navigation-input navigation-input-${theme}`} type="text" placeholder="Search..." />
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
    </nav>
  );
};

export default Navigation;
