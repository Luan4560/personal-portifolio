import styled from 'styled-components'

export const StackContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 0.75rem;
    margin-top: 0.75rem;
    color: ${({ theme }) => theme.palette.common.textTwo};
  }

  .icon {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  @media(max-width: 1024px) {
    p {
      font-size: 0.60rem;
    }
   }

`