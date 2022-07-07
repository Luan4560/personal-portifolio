import styled from 'styled-components';

export const Container = styled.div`
position: relative;
overflow: hidden;
border-radius: 10px;
cursor: pointer;

img {
  border-radius: 10px;
  width: 100%;
  height: 230px;
  object-fit: cover;
  }
`

export const Description = styled.div`
  width: 100%;
  background-color:  ${({theme}) => theme.palette.common.comment};
  margin-top: -8rem;
  position: absolute;
  padding: 1rem;
  
  opacity: 0;
  transition: 0.5s;

  &:hover {
    opacity: 100;
  }

  strong {
    font-weight: bold;
    font-size: 1.25rem;
    opacity: 0.8 !important;
  }

  p {
    width: 320px !important;
    font-size: 1rem !important;
    opacity: 0.8 !important;
  }
;
`