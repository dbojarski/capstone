import { Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './Header.scss';

export function Header() {
  return (
    <div className='Header'>
      <Link className='Header-logo' to='/'>
        <CrownLogo />
      </Link>

      <div className='Header-links'>
        <Link className='Header-link' to='/shop'>
          SHOP
        </Link>

        <Link className='Header-link' to='/sign-in'>
          SIGN IN
        </Link>
      </div>
    </div>
  );
}
