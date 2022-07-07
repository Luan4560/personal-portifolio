import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai';
import { theme } from '../../styles/theme';

import * as SC from './styles'

export const Footer = () => {
  
  return (
    <SC.Container>
      <nav>
        <ul>
          <li>
            <Link to="/">Portfolio</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
      </nav>

      <SC.IconsContent>
        <a href="https://github.com/Luan4560">
          <AiFillGithub size={38} color={theme.palette.common.primary}/>
        </a>
        <a href="https://twitter.com/Luan_z2">
          <AiFillTwitterCircle size={38} color={theme.palette.common.primary} />
        </a>
        <a href="https://www.linkedin.com/in/luan-nascimento-4560/">
          <AiFillLinkedin size={38} color={theme.palette.common.primary}/>
        </a>
      </SC.IconsContent>
      <p>Copyright © 2022 - All right reserved Luan Nascimento</p>
    </SC.Container>
  )
}