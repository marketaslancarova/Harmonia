import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>
        <h4>About Us</h4>
        <p>
          Harmonia offers products focused on balancing body and spirit,
          inspired by anciet traditions.{" "}
        </p>
      </div>
      <div>
        <h4>Customer Support</h4>
        <Link to="/shop">Shop</Link>
        <Link to="/chakras">Chakras</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/cart">cart</Link>
      </div>
      <div>
        <h4>Follow Us</h4>
        <a href="https://www.facebook.com">Facebook</a>
        <a href="https://www.instagram.com">Instagram</a>
        <a href="https://www.twitter.com">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
