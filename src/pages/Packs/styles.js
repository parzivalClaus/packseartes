import styled from 'styled-components';
import bg from '../../assets/bg.jpg';

export const Container = styled.div`
  background: url(${bg});
  background-size: cover;
  height: 100vh;
  width: 100%;
  position: fixed;

  @media (max-width: 1024px) {
    background: url(${bg}) fixed;
    height: 100%;
    overflow-y: scroll;
  }

  display: flex;
  flex-direction: row;
  height: 100vh;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  overflow-y: scroll;

  @media (max-width: 1024px) {
    overflow: unset;
  }

  padding: 25px;

  div.packsContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 25px;
    margin-bottom: 25px;

    @media (max-width: 1024px) {
      display: block;
    }

    div.packBox {
      display: block;
      height: max-content;
      background: #fff;
      padding: 20px;
      border-radius: 20px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      &:hover {
        opacity: 0.8;
        transform: scale(1.05);
      }

      @media (max-width: 1024px) {
        margin-bottom: 20px;
      }

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

    @media (max-width: 1024px) {
      display: inline-block;
      text-align: center;
      margin-bottom: 10px;
    }

    button {
      background: none;
      border: 0;
      color: #333;
      font-weight: bold;
      text-align: left;
      font-size: 18px;
      margin: 10px 0;

      &:hover {
        color: #fff !important;
      }

      @media (max-width: 1024px) {
        margin: 8px 10px;
        padding: 2px 0px;
        font-size: 16px;
        border-bottom: 2px solid #fff;
      }
    }
  }

  div.payment {
    background: #ffc700;
    border-radius: 20px;
    padding: 0 28px;
    font-weight: bold;
    text-align: center;
    font-size: 15px;

    &:hover {
      opacity: 0.8;
      transform: scale(1.05);
    }

    @media (max-width: 1024px) {
      padding: 10px;
    }
  }

  p {
    margin: 20px 0;

    @media (max-width: 1024px) {
      margin: 5px;
    }

    strong {
      color: #a6171f;
    }
  }
`;
