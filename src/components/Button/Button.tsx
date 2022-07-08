import React from "react";
import { ButtonStyle } from "./style";
interface IButtonProps {
  title: string;
  link?: string;
  outline?: boolean;
}

const Button = ({ title, outline, link }: IButtonProps) => {
  return (
    <ButtonStyle href={link} className={outline ? "outline" : ""}>
      {title}
    </ButtonStyle>
  );
};

export default Button;
