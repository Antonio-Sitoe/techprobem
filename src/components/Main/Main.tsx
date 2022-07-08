import Image from 'next/image';
import React from 'react';
import Button from '../Button/Button';
import { MainStyle, SectionDiv } from './style';

function Main() {
  return (
    <MainStyle>
      <SectionDiv className='container'>
        <div>
          <h1>
            Bem-vindos à <span>Tech Pro Bem</span>
          </h1>
          <p>
            A Tech Pro Bem é uma comunidade de profissionais da área de
            tecnologia dedicada a contribuir com ONGs e projetos sociais,
            potencializando o alcance digital do terceiro setor.
          </p>
          <div>
            <Button title='Sou um desenvolvedor' link='#parte'/>
            <Button outline={true} title='Sou uma ONG' link='#parte' />
          </div>
        </div>
        <div className='image'>
          <img src='/Main.png' alt=''  />
        </div>
      </SectionDiv>
    </MainStyle>
  );
}

export default Main;
