import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:  center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  
  h1 {
    margin: 4rem 0px;
    font-size: 3rem;
    opacity: 0.8;
  }
  
  section {
    display: flex;
    align-items:  center;
    justify-content: center;

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

  .profile-image img {
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.palette.common.text};
    }
  }

  .card-content {
    width: 65%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    grid-gap: 2rem;
    margin-top: 5rem;
  }

  .card-content img {
    background-repeat: no-repeat;
    background-size: contain;
    object-fit: cover;
  }

  /* Mobile */
  @media(max-width: 48rem) {
    h1 {
      text-align: center;
    }

    section {
      flex-direction: column-reverse;
      align-items: center;
      text-align: center;

      h2 {
        margin-top: 1.5rem;
      }
    }

    .card-content {
      grid-template-columns: 1fr 1fr ;
      grid-gap: 2rem;
    }
  }

  @media(max-width: 26.5625rem) {
    h1{
      font-size: 1.5rem;
    }

    section {
      text-align: center;

      h2 {
        font-size: 1.4rem;
      }

      p {
        width: 23rem;
        font-size: 1rem;
        margin: 0;
      }
    }

    .card-content {
      grid-template-columns: 1fr ;
      grid-gap: 2rem;
    }
  }
`