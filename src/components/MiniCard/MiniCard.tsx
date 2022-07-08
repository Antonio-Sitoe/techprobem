import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import { MiniCardStyle } from "./style";

interface MiniCardProps {
  title: string;
}
const MiniCard = ({ title }: MiniCardProps) => {
  return (
    <MiniCardStyle>
      <div>
        <Image src="/logo.png" width={40} height={40} alt="logo" />
      </div>
      <h3>{title}</h3>
      <div>
        <Button title="Escolher" />
      </div>
    </MiniCardStyle>
  );
};

export default MiniCard;
