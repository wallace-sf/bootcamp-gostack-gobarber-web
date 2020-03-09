import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto 0 auto;
  max-width: 600px;

  form {
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    input {
      margin-bottom: 10px;
      padding: 0 15px;
      height: 44px;
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    hr {
      height: 1px;
      border: 0;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin-bottom: 10px;
      font-weight: bold;
    }

    button {
      margin-top: 5px;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.04, '#3b9eff')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }

  > button {
    margin-top: 10px;
    height: 44px;
    width: 100%;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#f64c75')};
    }
  }
`;
