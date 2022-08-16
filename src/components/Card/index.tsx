import { useState } from 'react';
import * as SC from './styles'

interface CardProps {
  image: string;
}

export const Card = ({image}: CardProps) => {
  const [showDescription, setShowDescription] = useState(false);
  
  return (
    <SC.Container 
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <img src={image} alt="Card image." />
      
        {showDescription && (
          <SC.Description>
            <strong>Titulo</strong>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              suscipit magni consectetur consequatur eaque 
              debitis
            </p>
          </SC.Description>
        )}
    </SC.Container>
  )
}