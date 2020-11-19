import styled from 'styled-components';

export default styled.div`
  img {
    width: 100%;
    padding: 1rem;
  }

  border: 2px solid black;
  border-radius: 10px;
  max-width: 20rem;

  .content {
    display: flex;
    flex-direction: column;
    h3 {
      text-align: center;
      text-transform: capitalize;
    }
    padding: 0.5rem 1rem;
  }
`;
