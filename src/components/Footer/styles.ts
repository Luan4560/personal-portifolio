import styled from "styled-components";

export const Container = styled.footer`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
  padding: 2rem 0;
  background-color:${({ theme }) => theme.palette.common.secondary};
  overflow: hidden;

  p {
    margin-top: 2rem;
  }
  
  ul {
    display: flex;
    align-items: center;
    justify-content:center;
    margin-bottom: 3rem;

    li {
      margin-right: 1rem;
    }

    a {
      color: ${({ theme }) => theme.palette.common.text};
      transition: 0.5s;

      :hover {
        color: ${({ theme }) => theme.palette.common.purple};
      }
    }
  }
`;

export const IconsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-evenly ;
  width: 20%;
`