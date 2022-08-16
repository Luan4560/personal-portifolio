import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 3rem 0 0 0;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  main {
    max-width: 896px;
    width: 90%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .image-content {
      overflow: hidden;
      background-size: cover;
      max-width: 816px; 
      width: 90%;
      height: 504px;
      border-radius: 0.5rem;
      
      background-color: #fff;
      
      img {
        width: 100%;
        height: 100%;
      }
    }

    .description-content {
      max-width: 896px;
      width: 85%;
      color: ${({ theme }) => theme.palette.common.text};
      
      h1 {
        margin: 1.5rem 0;
        font-weight: 400;
      }

      .tag-content {
        width: 9rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

       a {
        padding: 0.3rem 1rem;
        background: ${({theme}) => theme.palette.common.comment};
        border-radius: 1rem;
        color: ${({theme}) => theme.palette.common.text};
        margin-bottom: 1.5rem;
        transition: all .2s ease-in-out;

        &:hover {
          transform: scale(1.1);
          color: ${({theme}) => theme.palette.common.purple}
        }
       }
      }

      .links-content {
        margin-bottom: 1.5rem;
        width: 9rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        a {
          font-weight: bold;
          color: ${({theme}) => theme.palette.common.pink};
          border-bottom: 1px solid ${({theme}) => theme.palette.common.pink};
          transition: all .2s ease-in-out;

          &:hover {
            transform: scale(1.1);
          }
        }
      }

      .description-p-content {
        width: 100%;

        p {
          text-align: justify;
          font-size: 1.3rem;
          line-height: 30px;
          letter-spacing: 1px;
        }
      }
    }
  }
`