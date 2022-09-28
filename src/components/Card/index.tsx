import { useState } from "react";
import * as SC from "./styles";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

export const Card = ({ image, description, title }: CardProps) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <SC.Container
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <img src={image} alt="Card image." />

      {showDescription && (
        <SC.Description>
          <strong>{title}</strong>
          <p>{description}</p>
        </SC.Description>
      )}
    </SC.Container>
  );
};
