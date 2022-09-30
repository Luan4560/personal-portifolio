import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;

  h1 {
    margin: 3rem 0;
    font-size: 3rem;
    letter-spacing: 4px;
  }
`

export const DescriptionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

   h2 {
      margin-bottom: 1rem;
      font-size: 1.875rem;
      font-weight: bold;
      opacity: 0.8;
    }
    
    p {
      width: 32.5rem;
      margin-right: 3rem;
      font-size: 1.25rem;
      line-height: 1.75rem;
      opacity: 0.8;
    }

  img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
  }
`

export const TextMarkDown = styled.div`
  width: 70%;
  margin-top: 4rem;
  padding: 1rem;

  a {
    color: pink;
  }
`