import React from 'react';
import { Container } from './styles';

import api from '../../services/api.json';

function Animes() {
  return api.packs.map((pack) => (
    <Container>
      <h1>{pack.name}</h1>
      <p>
        <strong>Total de Artes:</strong> {pack.artAmount}
      </p>
      <p>
        <strong>Total de Mockups:</strong> {pack.mockupAmount}
      </p>
      <p>
        {' '}
        <strong>Valor JPGS:</strong> {pack.value}
      </p>
      <p>
        {' '}
        <strong>Valor JPGS + Editáveis:</strong> {pack.valueEditable}
      </p>

      <img src={pack.image} alt={pack.name} />
    </Container>
  ));
}

export default Animes;
