import { Link } from 'react-router-dom';

import paymentIcon from '../../assets/icons/credit-card.svg';
import deliveryIcon from '../../assets/icons/delivery.svg';
import logOutIcon from '../../assets/icons/log-out.svg';
import menuIcon from '../../assets/icons/menu.svg';
import contactsIcon from '../../assets/icons/phone.svg';
import cartIcon from '../../assets/icons/shopping-cart.svg';
import { COOKIE_ACCESS_TOKEN, userSlice } from '../../entities/user';
import { COOKIE_REFRESH_TOKEN, COOKIE_USER_ID } from '../../entities/user/consts/constants.ts';
import { deleteCookie } from '../../shared/lib/helpers';
import { useAppDispatch, useAppSelector, useRevokeAccessRefreshTokens } from '../../shared/lib/hooks';

function NavMenu() {
  const {
    isLogged,
    accessToken: oldAccessToken,
    refreshToken: oldRefreshToken,
  } = useAppSelector((state) => state.userReducer);
  const revokeTokens = useRevokeAccessRefreshTokens();
  const dispatch = useAppDispatch();
  const { loggedOut } = userSlice.actions;

  async function handleLogout() {
    dispatch(loggedOut());
    deleteCookie(COOKIE_ACCESS_TOKEN, COOKIE_USER_ID, COOKIE_REFRESH_TOKEN);
    revokeTokens(oldAccessToken, oldRefreshToken);
  }

  return (
    <ul
      className="
        mt-2
        flex
        w-full
        justify-between
        md:mt-8
        md:max-h-full
        md:flex-col
        md:items-end
        md:justify-start
        md:gap-6
        lg:mt-12
        "
    >
      <li className="navMenuItem">
        <Link to="/" className="navMenuLink text-text-grey">
          <img src={menuIcon} alt="" className="navMenuIcon md:inline-block" />
          Our&nbsp;menu
        </Link>
      </li>
      <li className="navMenuItem lg:hidden">
        <Link to="/cart" className="navMenuLink text-text-grey">
          <img src={cartIcon} alt="" className="navMenuIcon md:inline-block" />
          Cart
        </Link>
      </li>
      <li className="navMenuItem">
        <Link to="/delivery" className="navMenuLink text-text-grey">
          <img src={deliveryIcon} alt="" className="navMenuIcon md:inline-block" />
          Delivery
        </Link>
      </li>
      <li className="navMenuItem">
        <Link to="/payment" className="navMenuLink text-text-grey">
          <img src={paymentIcon} alt="" className="navMenuIcon md:inline-block" />
          Payment
        </Link>
      </li>
      <li className="navMenuItem">
        <Link to="/about" className="navMenuLink text-text-grey">
          <img src={contactsIcon} alt="" className="navMenuIcon md:inline-block" />
          Contacts
        </Link>
      </li>
      {isLogged && (
        <li className="navMenuItem hidden md:absolute md:bottom-6 md:block">
          <button onClick={handleLogout} type="button" className="navMenuLink text-text-dark">
            <img src={logOutIcon} alt="" className="navMenuIcon md:inline-block" />
            Log out
          </button>
        </li>
      )}
    </ul>
  );
}

export default NavMenu;
