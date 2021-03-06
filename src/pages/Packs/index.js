/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { Container, MenuContainer, ContentContainer } from './styles';

import WhatsButton from '../../components/whatsButton';

export default function Animes() {
  const packsData = {
    packs: [
      {
        name: 'Naruto - Camisetas',
        artAmount: 50,
        mockupAmount: 50,
        value: 'R$ 25,00',
        valueEditable: '-',
        image: `${process.env.PUBLIC_URL}/camiseta-naruto.jpeg`,
        url: 'https://www.facebook.com/groups/285138669211755/permalink/399584554433832/',
        category: 'animes',
      },
      {
        name: 'Liga da Justiça - Camisetas e Canecas',
        artAmount: '12 canecas / 2 camisetas',
        mockupAmount: '12 canecas / 2 camisetas',
        value: 'R$ 13,00',
        valueEditable: 'R$ 25,00',
        image: `${process.env.PUBLIC_URL}/canecasCamisetasLigaJustica.jpg`,
        url: 'https://www.facebook.com/groups/285138669211755/permalink/369775890748032/',
        category: 'filmes/livros',
      },
      {
        name: 'Mulher Maravilha Debochada - Camisetas e Canecas',
        artAmount: '10 canecas / 10 camisetas',
        mockupAmount: '10 canecas / 10 camisetas',
        value: 'R$ 15,00',
        valueEditable: 'R$ 30,00',
        image: `${process.env.PUBLIC_URL}/canecasCamisetasMulherMaravilhaDebochada.jpg`,
        url: 'https://www.facebook.com/groups/285138669211755/permalink/378206436571644',
        category: 'frases',
      },
      {
        name: 'Now United - Canecas',
        artAmount: 19,
        mockupAmount: 19,
        value: 'R$ 16,00',
        valueEditable: 'R$ 30,00',
        image: `${process.env.PUBLIC_URL}/canecasNowUnited.jpg`,
        url: 'https://www.facebook.com/groups/285138669211755/permalink/358450011880620/',
        category: 'musica',
      },
      {
        name: 'Patrulha Canina - Canecas',
        artAmount: 9,
        mockupAmount: 9,
        value: 'R$ 10,00',
        valueEditable: 'R$ 30,00',
        image: `${process.env.PUBLIC_URL}/canecasPatrulhaCanina.jpeg`,
        url: 'https://www.facebook.com/groups/285138669211755/posts/448676666191287/',
        category: ['filmes/livros', 'desenhos'],
      },
      {
        name: 'Filmes Infantis com Foto - Canecas',
        artAmount: 10,
        mockupAmount: 10,
        value: 'R$ 10,00',
        valueEditable: 'R$ 30,00',
        image: `${process.env.PUBLIC_URL}/canecasFilmesInfantis.jpeg`,
        url: 'https://www.facebook.com/groups/285138669211755/posts/456724738719813/',
        category: ['filmes/livros', 'desenhos'],
      },
      {
        name: 'The King of Fighters - Canecas',
        artAmount: 13,
        mockupAmount: 13,
        value: 'R$ 13,00',
        valueEditable: 'R$ 30,00',
        image: `${process.env.PUBLIC_URL}/canecasKingOfFighters.jpeg`,
        url: 'https://www.facebook.com/groups/285138669211755/posts/457122905346663/',
        category: 'jogos',
      },
      {
        name: 'La Casa de Papel - Canecas',
        artAmount: 16,
        mockupAmount: 16,
        value: 'R$ 15,00',
        valueEditable: 'R$ 30,00',
        image: `${process.env.PUBLIC_URL}/canecasLaCasaDePapel.jpeg`,
        url: 'https://www.facebook.com/groups/285138669211755/posts/459339391791681/',
        category: 'series',
      },
      {
        name: 'Stranger Things - Canecas',
        artAmount: 11,
        mockupAmount: 11,
        value: 'R$ 13,00',
        valueEditable: 'R$ 30,00',
        image: `${process.env.PUBLIC_URL}/strangerThingsCanecas.jpg`,
        url: 'https://www.facebook.com/groups/285138669211755/posts/491454771913476/',
        category: 'series',
      },
      {
        name: 'Alice in Borderland - Canecas',
        artAmount: 12,
        mockupAmount: 12,
        value: 'R$ 13,00',
        valueEditable: 'R$ 30,00',
        image: `${process.env.PUBLIC_URL}/aliceInBorderlandCanecas.jpg`,
        url: 'https://www.facebook.com/groups/285138669211755/posts/494316214960665/',
        category: 'series',
      },
      {
        name: 'Supernatural - Canecas',
        artAmount: 11,
        mockupAmount: 11,
        value: 'R$ 15,00',
        valueEditable: 'R$ 30,00',
        image: `${process.env.PUBLIC_URL}/canecasSupernatural.jpg`,
        url: 'https://www.facebook.com/groups/285138669211755/posts/487462072312746/',
        category: 'series',
      },
      {
        name: 'Com Café / Sem Café - Canecas',
        artAmount: '13 (ou muito mais)',
        mockupAmount: '13 (ou muito mais)',
        value: 'R$ 15,00',
        valueEditable: 'R$ 30,00',
        image: `${process.env.PUBLIC_URL}/canecasCoffee.jpeg`,
        url: 'https://www.facebook.com/groups/285138669211755/posts/472464073812546/',
        category: ['series', 'desenhos', 'filmes', 'animes', 'jogos', 'filmes/livros'],
        frase: 'Na compra desse pack você pode me solicitar 1 arte no mesmo estilo com um personagem da sua escolha, e ainda terá acesso às artes criadas para os outros clientes também!'
      },
      {
        name: 'Old School Gamer - Super Nintendo',
        artAmount: '20',
        mockupAmount: '20',
        value: 'R$ 10,00',
        valueEditable: 'R$ 20,00',
        image: `${process.env.PUBLIC_URL}/canecasOldGamer.gif`,
        url: 'https://www.facebook.com/groups/285138669211755/posts/480256166366670/',
        category: 'jogos',
      },
      {
        name: 'La Casa de Papel - Camisetas',
        artAmount: 16,
        mockupAmount: 16,
        value: 'R$ 15,00',
        valueEditable: 'R$ 30,00',
        image: `${process.env.PUBLIC_URL}/camisetasLaCasaDePapel.jpeg`,
        url: 'https://www.facebook.com/groups/285138669211755/posts/459339688458318/',
        category: 'series',
      },
      {
        name: 'Street Fighter - Canecas',
        artAmount: 13,
        mockupAmount: 13,
        value: 'R$ 13,00',
        valueEditable: 'R$ 30,00',
        image: `${process.env.PUBLIC_URL}/canecasStreetFighter.jpeg`,
        url: 'https://www.facebook.com/groups/285138669211755/posts/458295211896099/',
        category: 'jogos',
      },
      {
        name: 'Space Jam 2 (Looney Tunes) - Canecas',
        artAmount: 13,
        mockupAmount: 13,
        value: 'R$ 13,00',
        valueEditable: 'R$ 30,00',
        image: `${process.env.PUBLIC_URL}/canecasSpaceJam.jpeg`,
        url: 'https://www.facebook.com/groups/285138669211755/posts/448116839580603/',
        category: 'filmes/livros',
      },
      {
        name: 'Matrix 4 (Resurrections) - Canecas',
        artAmount: 10,
        mockupAmount: 10,
        value: 'R$ 10,00',
        valueEditable: 'R$ 20,00',
        image: `${process.env.PUBLIC_URL}/matrixCanecas.jpg`,
        url: 'https://www.facebook.com/groups/285138669211755/posts/499822197743400/',
        category: 'filmes/livros',
      },
      {
        name: 'Boku no Hero - My Hero Academia - Canecas',
        artAmount: 16,
        mockupAmount: 16,
        value: 'R$ 15,00',
        valueEditable: 'R$ 30,00',
        image: `${process.env.PUBLIC_URL}/boku_no_hero_canecas.jpeg`,
        url: 'https://www.facebook.com/groups/285138669211755/posts/443347003390920/',
        category: 'animes',
      },
      {
        name: 'Jujutsu Kaisen - Canecas',
        artAmount: 12,
        mockupAmount: 12,
        value: 'R$ 13,00',
        valueEditable: '-',
        image: `${process.env.PUBLIC_URL}/canecasJujutsuKaisen.jpeg`,
        url: 'https://www.facebook.com/groups/285138669211755/posts/420331635692457',
        category: 'animes',
      },
      {
        name: 'Kimetsu no Yaiba - Demon Slayer - Canecas',
        artAmount: 15,
        mockupAmount: 15,
        value: 'R$ 15,00',
        valueEditable: 'R$ 25,00',
        image: `${process.env.PUBLIC_URL}/canecasKimetsuNoYaiba.jpeg`,
        url: 'https://www.facebook.com/groups/285138669211755/permalink/405724163819871/',
        category: 'animes',
      },
      {
        name: 'Boruto - Canecas',
        artAmount: 13,
        mockupAmount: 13,
        value: 'R$ 13,00',
        valueEditable: 'R$ 25,00',
        image: `${process.env.PUBLIC_URL}/canecasBoruto.jpeg`,
        url: 'https://www.facebook.com/groups/285138669211755/permalink/412543986471222/',
        category: 'animes',
      },
      {
        name: 'Saint Seiya - Canecas',
        artAmount: 10,
        mockupAmount: 10,
        value: 'R$ 13,00',
        valueEditable: 'R$ 25,00',
        image: `${process.env.PUBLIC_URL}/canecasSaintSeya.jpg`,
        url: 'https://www.facebook.com/groups/285138669211755/permalink/374327420292879/',
        category: 'animes',
      },
      {
        name: 'Games Clássicos - Canecas',
        artAmount: 10,
        mockupAmount: 10,
        value: 'R$ 13,00',
        valueEditable: 'R$ 25,00',
        image: `${process.env.PUBLIC_URL}/canecasGamesClassicos.jpg`,
        url: 'https://www.facebook.com/groups/285138669211755/permalink/383657196026568/',
        category: 'jogos',
      },
      {
        name: 'Saint Seiya Gold - Canecas',
        artAmount: 13,
        mockupAmount: 13,
        value: 'R$ 13,00',
        valueEditable: 'R$ 25,00',
        image: `${process.env.PUBLIC_URL}/canecasSaintSeiyaGold.jpeg`,
        url: 'https://www.facebook.com/groups/285138669211755/permalink/375753340150287/',
        category: 'animes',
      },
      {
        name: 'Greys Anatomy 1.0 - Canecas',
        artAmount: 17,
        mockupAmount: 17,
        value: 'R$ 15,00',
        valueEditable: 'R$ 30,00',
        image: `${process.env.PUBLIC_URL}/canecasGreys01.jpg`,
        url: 'https://www.facebook.com/groups/285138669211755/permalink/362690511456570/',
        category: 'series',
      },
      {
        name: 'Greys Anatomy 2.0 - Canecas',
        artAmount: 15,
        mockupAmount: 15,
        value: 'R$ 15,00',
        valueEditable: 'R$ 30,00',
        image: `${process.env.PUBLIC_URL}/canecasGreys02.jpg`,
        url: 'https://www.facebook.com/groups/285138669211755/permalink/377739816618306/',
        category: 'series',
      },
      {
        name: 'One Piece - Canecas',
        artAmount: 10,
        mockupAmount: 10,
        value: 'R$ 10,00',
        valueEditable: 'R$ 22,00',
        image: `${process.env.PUBLIC_URL}/canecasOnePiece.jpg`,
        url: 'https://www.facebook.com/groups/285138669211755/permalink/356334978758790/',
        category: 'animes',
      },
      {
        name: 'Shingeki no Kyojin - Camisetas',
        artAmount: 41,
        mockupAmount: 41,
        value: 'R$ 25,00',
        valueEditable: '-',
        image: `${process.env.PUBLIC_URL}/camiseta-shingeki.jpeg`,
        url: 'https://www.facebook.com/groups/285138669211755/permalink/398683694523918/',
        category: 'animes',
      },
      {
        name: 'Futebol - Camisetas',
        artAmount: 12,
        mockupAmount: 12,
        value: 'R$ 12,00',
        valueEditable: 'R$ 25,00',
        image: `${process.env.PUBLIC_URL}/canecas-futebol.jpeg`,
        url: 'https://www.facebook.com/groups/285138669211755/permalink/367459414313013/',
        category: 'futebol',
      },
      {
        name: 'Shingeki no Kyojin - Canecas',
        artAmount: 15,
        mockupAmount: 15,
        value: 'R$ 15,00',
        valueEditable: 'R$ 30,00',
        image: `${process.env.PUBLIC_URL}/canecasShingeki.jpg`,
        url: 'https://www.facebook.com/groups/285138669211755/permalink/397398431319111/',
        category: 'animes',
      },
      {
        name: 'Dia dos Namorados - Canecas',
        artAmount: 10,
        mockupAmount: 10,
        value: 'R$ 10,00',
        valueEditable: 'R$ 20,00',
        image: `${process.env.PUBLIC_URL}/canecasNamorados.jpg`,
        url: 'https://www.facebook.com/groups/285138669211755/permalink/395446344847653/',
        category: 'datasComemorativas',
      },
      {
        name: 'Naruto 1.0 - Canecas',
        artAmount: 13,
        mockupAmount: 13,
        value: 'R$ 13,00',
        valueEditable: 'R$ 25,00',
        image: `${process.env.PUBLIC_URL}/canecasNaruto01.jpg`,
        url: 'https://www.facebook.com/groups/285138669211755/permalink/353013639090924/',
        category: 'animes',
      },
      {
        name: 'Naruto Draw 1.0 - Canecas',
        artAmount: 26,
        mockupAmount: 26,
        value: 'R$ 25,00',
        valueEditable: 'R$ 35,00',
        image: `${process.env.PUBLIC_URL}/canecasNarutoDraw.jpg`,
        url: 'https://www.facebook.com/groups/285138669211755/posts/505963953795891/',
        category: 'animes',
      },
      {
        name: 'Naruto 2.0 - Canecas',
        artAmount: 14,
        mockupAmount: 14,
        value: 'R$ 14,00',
        valueEditable: 'R$ 26,00',
        image: `${process.env.PUBLIC_URL}/canecasNaruto02.jpg`,
        url: 'https://www.facebook.com/groups/285138669211755/permalink/358852728507015/',
        category: 'animes',
      },
      {
        name: 'Naruto 3.0 - Canecas',
        artAmount: 14,
        mockupAmount: 14,
        value: 'R$ 14,00',
        valueEditable: 'R$ 26,00',
        image: `${process.env.PUBLIC_URL}/canecasNaruto03.jpg`,
        url: 'https://www.facebook.com/groups/285138669211755/permalink/365466994512255/',
        category: 'animes',
      },
      {
        name: 'Dragonball Super - Canecas',
        artAmount: 13,
        mockupAmount: 13,
        value: 'R$ 13,00',
        valueEditable: 'R$ 25,00',
        image: `${process.env.PUBLIC_URL}/canecasDragonballSuper.jpg`,
        url: 'https://www.facebook.com/groups/285138669211755/permalink/353162289076059/',
        category: 'animes',
      },
      {
        name: 'Harry Potter - Canecas',
        artAmount: 13,
        mockupAmount: 13,
        value: 'R$ 13,00',
        valueEditable: 'R$ 25,00',
        image: `${process.env.PUBLIC_URL}/canecasHarryPotter.jpg`,
        url: 'https://www.facebook.com/groups/285138669211755/permalink/354897472235874/',
        category: 'filmes/livros',
      },
      {
        name: 'Senhor dos Anéis - Canecas',
        artAmount: 13,
        mockupAmount: 13,
        value: 'R$ 13,00',
        valueEditable: 'R$ 25,00',
        image: `${process.env.PUBLIC_URL}/canecasSenhorDosAneis.jpeg`,
        url: 'https://www.facebook.com/groups/285138669211755/permalink/355531465505808/',
        category: 'filmes/livros',
      },
    ],
  };

  function sort(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  const initialSortedPacks = packsData.packs.sort((a, b) => sort(a, b));

  const [packs, setPacks] = useState(initialSortedPacks);
  const [category, setCategory] = useState('todos');
  const [search, setSearch] = useState('');

  function handleSearch(data) {
    setSearch(data.target.value);
    setCategory('todos');
  }

  useEffect(() => {
    if (!(category === 'todos')) {
      const data = packsData.packs.filter((pack) => pack.category.includes(category));
      const dataSorted = data.sort((a, b) => sort(a, b));
      setPacks(dataSorted);
    } else {
      setSearch(search.toUpperCase());
      const regExpression = search;
      const data = packsData.packs.filter((pack) =>
        pack.name.toUpperCase().match(regExpression)
      );
      const dataSorted = data.sort((a, b) => sort(a, b));
      setPacks(dataSorted);
    }
  }, [category, search]);

  useEffect(() => {
    setSearch('');
  }, [category]);

  return (
    <Container>
      <MenuContainer activeCategory={category}>
        <ul>
          <button
            type="button"
            onClick={() => setCategory('todos')}
            style={
              category === 'todos' ? { color: '#ffffff' } : { color: '#bababa' }
            }
          >
            <li>TODOS</li>
          </button>
          <button
            type="button"
            onClick={() => setCategory('animes')}
            style={
              category === 'animes'
                ? { color: '#ffffff' }
                : { color: '#bababa' }
            }
          >
            <li>ANIMES</li>
          </button>
          <button
            type="button"
            onClick={() => setCategory('series')}
            style={
              category === 'series'
                ? { color: '#ffffff' }
                : { color: '#bababa' }
            }
          >
            <li>SÉRIES</li>
          </button>

          <button
            type="button"
            onClick={() => setCategory('jogos')}
            style={
              category === 'jogos' ? { color: '#ffffff' } : { color: '#bababa' }
            }
          >
            <li>JOGOS</li>
          </button>

          <button
            type="button"
            onClick={() => setCategory('filmes/livros')}
            style={
              category === 'filmes/livros'
                ? { color: '#ffffff' }
                : { color: '#bababa' }
            }
          >
            <li>FILMES / LIVROS</li>
          </button>

          <button
            type="button"
            onClick={() => setCategory('desenhos')}
            style={
              category === 'desenhos'
                ? { color: '#ffffff' }
                : { color: '#bababa' }
            }
          >
            <li>DESENHOS</li>
          </button>

          <button
            type="button"
            onClick={() => setCategory('datasComemorativas')}
            style={
              category === 'datasComemorativas'
                ? { color: '#ffffff' }
                : { color: '#bababa' }
            }
          >
            <li>DATAS COMEMORATIVAS</li>
          </button>
          <button
            type="button"
            onClick={() => setCategory('futebol')}
            style={
              category === 'futebol'
                ? { color: '#ffffff' }
                : { color: '#bababa' }
            }
          >
            <li>FUTEBOL</li>
          </button>
          <button
            type="button"
            onClick={() => setCategory('musica')}
            style={
              category === 'musica'
                ? { color: '#ffffff' }
                : { color: '#bababa' }
            }
          >
            <li>MÚSICA</li>
          </button>
          <button
            type="button"
            onClick={() => setCategory('frases')}
            style={
              category === 'frases'
                ? { color: '#ffffff' }
                : { color: '#bababa' }
            }
          >
            <li>FRASES</li>
          </button>
        </ul>
        <div className="payment">
          <p>O PAGAMENTO É VIA PIX</p>
          <p>
            Celular: <strong>11964279420</strong>
            <br />
            (Claudio, Nubank)
          </p>
        </div>
      </MenuContainer>

      <ContentContainer>
        <div className="msgContainer">
          <p>
            Todos os packs foram feitos no Photoshop, portanto os editáveis são
            em formato .PSD para Photoshop!
          </p>
        </div>

        <TextField
          id="filled-basic"
          label="Qual pack você procura?"
          variant="filled"
          margin="normal"
          value={search}
          onChange={handleSearch}
          fullWidth
          color="secondary"
        />

        <div className="packsContainer">
          {packs.map((pack) => (
            <div className="packBox" key={pack.name}>
              <a
                href={pack.url}
                alt={pack.name}
                target="_blank"
                rel="noreferrer"
              >
                <img src={pack.image} alt={pack.name} />
              </a>

              <h1>{pack.name}</h1>
              <p>
                <strong>Total de Artes:</strong> {pack.artAmount}
              </p>
              <p>
                <strong>Total de Mockups:</strong> {pack.mockupAmount}
              </p>
              <p>
                {' '}
                <strong>Valor:</strong> {pack.value}
              </p>
              <br />
              <p>
                {pack.frase ? pack.frase : '* Agora os editáveis irão junto pelo mesmo valor =)'}
              </p>
            </div>
          ))}
        </div>
        <WhatsButton />
      </ContentContainer>
    </Container>
  );
}
