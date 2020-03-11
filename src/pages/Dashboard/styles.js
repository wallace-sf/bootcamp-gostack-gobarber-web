import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px auto 0 auto;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  max-width: 600px;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: none;
      background: none;
    }

    strong {
      margin: 0 15px;
      color: #fff;
      font-size: 24px;
    }
  }

  ul {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
  }
`;

export const Time = styled.div`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${props => (props.available ? '#999' : '#7159c1')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    margin-top: 3px;
    display: block;
    color: ${props => (props.available ? '#999' : '#666')};
  }
`;
