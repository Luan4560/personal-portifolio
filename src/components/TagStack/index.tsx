import { ReactNode } from "react";
import * as SC from "./styles";

interface TagStackProps {
  icon: ReactNode;
  name: string;
}

export const TagStack = ({ name, icon }: TagStackProps) => {
  return (
    <SC.StackContainer>
      <div className="icon">{icon}</div>
      <p>{name}</p>
    </SC.StackContainer>
  );
};
