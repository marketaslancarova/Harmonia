import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Harmonia</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/chakras">Chakras</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
};

export default Navbar;
