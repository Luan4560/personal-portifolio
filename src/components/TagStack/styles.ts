import styled from 'styled-components'

export const StackContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 1rem;
    margin-top: 0.75rem;
  }

  .icon {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
`