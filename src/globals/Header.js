import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="page-center">
        <div className="header-inner">
          <div className="logo">
            <img src={Logo} alt="Company Logo" />
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;