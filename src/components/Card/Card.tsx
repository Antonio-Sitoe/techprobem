import Image from 'next/image';
import React from 'react';
import { CardStyle } from './style';



interface ICardProps {
  title: string;
  description: string;
  company: string;
  className: boolean;
}
const Card = ({ title, description, company, className }: ICardProps) => {
  return (
    <CardStyle className={className ? 'className' : ''}>
      <h2>{title}</h2>
      <p>{description}</p>

      <div>
        <div>
          <Image src='/logo.png' width={25} height={25} alt='Logo' />
        </div>
        <span>{company}</span>
      </div>
    </CardStyle>
  );
};

export default Card;
