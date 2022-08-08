import { Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './Header.scss';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { signOut } from '../../utils/firebase/firebase.utils';

export function Header() {
  const { currentUser } = useContext(UserContext);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {}
  };

  return (
    <div className='Header'>
      <Link className='Header-logo' to='/'>
        <CrownLogo />
      </Link>

      <div className='Header-links'>
        <Link className='Header-link' to='/shop'>
          SHOP
        </Link>

        {currentUser ? (
          <span className='Header-link' onClick={handleSignOut}>
            SIGN OUT
          </span>
        ) : (
          <Link className='Header-link' to='/auth'>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
}
