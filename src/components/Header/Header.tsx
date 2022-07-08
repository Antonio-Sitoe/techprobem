import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CgClose, CgMenu } from 'react-icons/cg';

import { Header as HeaderStyle, MarginTops, Nav } from './style';
import Button from '../Button/Button';

const Header = () => {
  const list = React.useRef<HTMLUListElement | null>(null);
  const [mobile, setMobile] = React.useState(false);
  const openMenu = ({ target }: any) => {
    if (list.current !== target) setMobile(!mobile);
  };

  function handle({ target }: any) {
    if (mobile === true && list.current !== target) {
      setMobile(false);
    }
  }
  return (
    <>
      <MarginTops />
      <HeaderStyle mobile={mobile} onClick={handle}>
        <Nav mobile={mobile} className='container'>
          <Link href='/'>
            <a>
              <Image
                src='/logo.png'
                alt='logo do site'
                width={40}
                height={40}
              />
            </a>
          </Link>
          <ul ref={list}>
            <li>
              <a href='#projects'>Nossos projectos</a>
            </li>
            <li>
              <a href='#apoio'>Apoadores</a>
            </li>
            <li>
              <Button link="#parte" title='Quero fazer parte' />
            </li>
          </ul>
          <button onClick={openMenu}>
            {mobile ? <CgClose /> : <CgMenu />}
          </button>
        </Nav>
      </HeaderStyle>
    </>
  );
};

export default Header;
