import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.palette.common.text};

img {
  border-radius: 10px;
  width: 100%;
  height: 14.375rem;
  object-fit: cover;
  }
`

export const Description = styled.div`
  width: 100%;
  background-color:  ${({ theme }) => theme.palette.common.secondary};
  color: ${({ theme }) => theme.palette.common.text};
  margin-top: -8rem;
  position: absolute;
  padding: 1rem;
  height: 100%;
  
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
    width: 90% !important;
    font-size: 1rem !important;
    opacity: 0.8 !important;
  }
;
`