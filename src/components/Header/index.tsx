import { Link } from 'react-router-dom'

import * as SC from './styles'

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <SC.Container>

      <SC.Nav>
        <div>
          <h2>{title}</h2>
        </div>
        
        <div>
          <ul>
            <li>
              <Link to="/">Portifolio</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
          </ul>
        </div>
      </SC.Nav>
    </SC.Container>
  )
}