import styled from 'styled-components';

export const Container = styled.header`
  background-color:${({ theme }) => theme.palette.common.secondary};
  width: 100%;
  display: flex;
  align-items:  center;
  padding: 1rem;

  img {
    width: 8rem;
    height: 5rem;
  }
 `



export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around ;
    width: 100%;

    a {
      color: ${({ theme }) => theme.palette.common.text}
    }
    
  ul {
    display: flex;
    align-items: center;
    width: 100%;
    
    li {
      margin: auto 2rem;
      
      a {
        color: ${({ theme }) => theme.palette.common.text};
        transition: 0.6s;

        &:hover {
          color: ${({ theme }) => theme.palette.common.purple};
        } 
      }
    }
  }
`