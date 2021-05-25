import React, { useState, useEffect } from 'react';
import { Container, MenuContainer, ContentContainer } from './styles';

import camisetasNaruto from '../../assets/camiseta-naruto.jpeg';

export default function Animes() {
  const packsData = {
    packs: [
      {
        name: 'Shingeki no Kyojin',
        artAmount: 15,
        mockupAmount: 15,
        value: 15,
        valueEditable: 30,
        image: camisetasNaruto,
        category: 'animes',
      },
      {
        name: 'Naruto 1.0',
        artAmount: 15,
        mockupAmount: 15,
        value: 13,
        valueEditable: 25,
        image: camisetasNaruto,
        category: 'animes',
      },
    ],
  };

  const [packs, setPacks] = useState(packsData.packs);
  const [category, setCategory] = useState('animes');

  function sort(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  useEffect(() => {
    const data = packsData.packs.filter((pack) => pack.category === category);
    const dataSorted = data.sort((a, b) => sort(a, b));
    setPacks(dataSorted);
  }, [category]);

  return (
    <Container>
      <MenuContainer activeCategory={category}>
        <ul>
          <button
            type="button"
            onClick={() => setCategory('animes')}
            style={
              category === 'animes' ? { color: '#fff' } : { color: '#bababa' }
            }
          >
            <li>ANIMES</li>
          </button>
          <button
            type="button"
            onClick={() => setCategory('series')}
            style={
              category === 'series' ? { color: '#fff' } : { color: '#bababa' }
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
                : { color: '#bababa' }
            }
          >
            <li>DATAS COMEMORATIVAS</li>
          </button>
          <button
            type="button"
            onClick={() => setCategory('futebol')}
            style={
              category === 'futebol' ? { color: '#fff' } : { color: '#bababa' }
            }
          >
            <li>FUTEBOL</li>
          </button>
          <button
            type="button"
            onClick={() => setCategory('frases')}
            style={
              category === 'frases' ? { color: '#fff' } : { color: '#bababa' }
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
        <div className="packsContainer">
          {packs.map((pack) => (
            <div className="packBox" key={pack.name}>
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
        </div>
      </ContentContainer>
    </Container>
  );
}
