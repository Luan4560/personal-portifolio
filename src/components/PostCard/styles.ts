import styled from 'styled-components';

export const Container = styled.div`
border-radius: 10px;
overflow: hidden;
margin-top: 5rem;
-webkit-box-shadow: 0px 11px 19px -4px #000000; 
box-shadow: 0px 11px 19px -4px #000000;
border: 2px solid ${({ theme }) => theme.palette.common.text};

div {
  padding: 1rem;
}

img {
  width: 100%;
  height: 30rem;
  object-fit: cover;
}

.text-content{
  text-align: center;

  h1, h2, p {
    margin: 2rem 0;
  }

  .tag-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    p {
      padding: 0.60rem;
      background-color: ${({ theme }) => theme.palette.common.pink};
      border-radius: 15px;
    }
  }

  button {
    padding: 0.75rem;
    border: 2px solid ${({ theme }) => theme.palette.common.pink};
    color: ${({ theme }) => theme.palette.common.pink};
    background-color: inherit;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1.5rem;
    transition: 0.3s;

    :hover {
      opacity: 0.7;
    }
  }
}
`