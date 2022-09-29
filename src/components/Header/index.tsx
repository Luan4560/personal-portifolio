import { Link } from "react-router-dom";
import LogoImage from "../../assets/logo.svg";
import * as SC from "./styles";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
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
              <Link to="/">About</Link>
            </li>
          </ul>
        </div>
      </SC.Nav>
    </SC.Container>
  );
};
