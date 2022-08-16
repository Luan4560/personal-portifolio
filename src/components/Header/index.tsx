import { Link } from 'react-router-dom'

import * as SC from './styles'

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <SC.Container>
      <SC.Nav>
        <Link to="/">
          <h2>{title}</h2>
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
  )
}