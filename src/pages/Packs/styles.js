import styled from 'styled-components';
import bg from '../../assets/bg.jpg';

export const Container = styled.div`
  background: url(${bg});
  background-size: cover;

  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const ContentContainer = styled.div`
  flex: 1;

  padding: 25px;
  overflow-y: scroll;

  div.packsContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 25px;
    margin-bottom: 25px;

    div.packBox {
      display: block;
      height: max-content;
      background: #fff;
      padding: 20px;
      border-radius: 20px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      h1 {
        font-size: 18px;
        margin-bottom: 10px;
        margin-top: 5px;
      }

      p {
        line-height: 20px;
        font-size: 15px;
        color: #a6171f;

        strong {
          color: #333;
        }
      }
    }
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export const MenuContainer = styled.div`
  background: rgb(0, 0, 0, 0.7);
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ul {
    display: flex;
    flex-direction: column;

    button {
      background: none;
      border: 0;
      color: #333;
      font-weight: bold;
      text-align: left;
      font-size: 18px;
      margin: 10px 0;
    }
  }

  div.payment {
    background: #ffc700;
    border-radius: 20px;
    padding: 0 28px;
    font-weight: bold;
    text-align: center;
    font-size: 15px;
  }

  p {
    margin: 20px 0;

    strong {
      color: #a6171f;
    }
  }
`;
