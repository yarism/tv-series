import {
  Link,
} from "react-router-dom";
import "./header.css";

function Header() {

  return (
    <header>
      <Link to="/" className="header__title">ShowSpotter</Link>
    </header>
  )
}

export default Header;
