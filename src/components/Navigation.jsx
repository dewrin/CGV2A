import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = ({ theme }) => {
  return (
    <nav className={`navigation navigation-${theme}`}>
      <h1 className={`navigation-logo`}>Insert title here..</h1>
      <div className="flex" style={{ display: 'flex', flexDirection: 'column' }}>
        <input className={`navigation-input navigation-input-${theme}`} type="text" placeholder="Search..." />
        <Link className={`navigation-link navigation-link-${theme}`} to="/profile">
          Profile
        </Link>
        <Link className={`navigation-link navigation-link-${theme}`} to="/collection">
          Collection
        </Link>
        <Link className={`navigation-link navigation-link-${theme}`} to="/store">
          Store
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
