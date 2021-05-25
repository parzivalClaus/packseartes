import React, { useState, useEffect } from 'react';
import { Container, MenuContainer, ContentContainer } from './styles';

import api from '../../services/api.json';

export default function Animes() {
  const [packs, setPacks] = useState(api.packs);
  const [category, setCategory] = useState('animes');

  useEffect(() => {
    const data = api.packs.filter((pack) => pack.category === category);
    setPacks(data);
  }, [category]);

  return (
    <Container>
      <MenuContainer activeCategory={category}>
        <ul>
          <button
            type="button"
            onClick={() => setCategory('animes')}
            style={
              category === 'animes' ? { color: '#fff' } : { color: '#333' }
            }
          >
            <li>ANIMES</li>
          </button>
          <button
            type="button"
            onClick={() => setCategory('series')}
            style={
              category === 'series' ? { color: '#fff' } : { color: '#333' }
            }
          >
            <li>SÉRIES</li>
          </button>
          <button
            type="button"
            onClick={() => setCategory('datasComemorativas')}
            style={
              category === 'datasComemorativas'
                ? { color: '#fff' }
                : { color: '#333' }
            }
          >
            <li>DATAS COMEMORATIVAS</li>
          </button>
          <button
            type="button"
            onClick={() => setCategory('futebol')}
            style={
              category === 'futebol' ? { color: '#fff' } : { color: '#333' }
            }
          >
            <li>FUTEBOL</li>
          </button>
          <button
            type="button"
            onClick={() => setCategory('frases')}
            style={
              category === 'frases' ? { color: '#fff' } : { color: '#333' }
            }
          >
            <li>FRASES</li>
          </button>
        </ul>
        <div className="payment">
          <p>
            O PAGAMENTO É <br />
            VIA PIX
          </p>
          <p>
            CPF <strong>39949445892</strong>
          </p>
        </div>
      </MenuContainer>

      <ContentContainer>
        {packs.map((pack) => (
          <div className="packBox">
            <img src={pack.image} alt={pack.name} />

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
          </div>
        ))}
      </ContentContainer>
    </Container>
  );
}
