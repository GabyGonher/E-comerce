import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold">
          <NavLink to="/">Logo</NavLink>
        </li>
        <li>
          <NavLink to="/">All</NavLink>
        </li>
        <li>
          <NavLink to="/clothes">Clothes</NavLink>
        </li>
        <li>
          <NavLink to="/electronics">Electronics</NavLink>
        </li>
        <li>
          <NavLink to="/elemento">elemento</NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-4">
        <li>usuario</li>
        <li>
          <NavLink to="/my-orders">My Orders</NavLink>
        </li>
        <li>
          <NavLink to="/my-account">My Account</NavLink>
        </li>
        <li>
          <NavLink to="/sign-in">Sign In</NavLink>
        </li>
        <li> Carrito 0</li>
      </ul>
    </nav>
  );
};

export default Navbar;
