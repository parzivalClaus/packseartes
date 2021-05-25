import React from 'react';

import { Container } from './styles';

import whatsIcon from '../../assets/whatsicon.png';

function whatsButton() {
  return (
    <Container>
      <a
        href="http://api.whatsapp.com/send?1=pt_BR&phone=5511964279420"
        alt="Me chama no Whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        <img src={whatsIcon} alt="WhatsApp" />
      </a>
    </Container>
  );
}

export default whatsButton;
