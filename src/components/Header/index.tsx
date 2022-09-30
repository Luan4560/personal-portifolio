import { Link } from "react-router-dom";
import LogoImage from "../../assets/logo.svg";
import * as SC from "./styles";

export const Header = () => {
  return (
    <SC.Container>
      <SC.Nav>
        <Link to="/">
          <img src={LogoImage} alt="" />
        </Link>

        <div>
          <ul>
            <li>
              <Link to="/">Portifolio</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </SC.Nav>
    </SC.Container>
  );
};
