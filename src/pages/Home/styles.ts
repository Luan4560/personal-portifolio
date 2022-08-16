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
    width: 80%;

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

  .profile-image img{
      width: 13rem;
      height: 13rem;
      border-radius: 30%;
      border: 2px solid ${({theme}) => theme.palette.common.text};
    }
  }

  .card-content {
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
`