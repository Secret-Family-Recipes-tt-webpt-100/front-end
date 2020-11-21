import styled from 'styled-components';

export default styled.div`
  img {
    height: 12rem;
    width: 16rem;
    margin: 1rem auto;
    border-radius: 10px;

    object-fit: cover;
    /* padding: 0.5rem; */
    justify-self: baseline;
  }

  .content {
    display: grid;
    grid-gap: 1rem;
    h3 {
      display: grid;
      align-items: center;
      text-align: center;
      text-transform: capitalize;
      height: 5rem;
    }
    padding: 0 1rem 1rem 1rem;
  }

  button {
    border: none;
    border-radius: 10px;
    background: royalblue;
    color: white;
    padding: 0.75rem;
  }

  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 10px;
  width: 20rem;
  min-height: 20rem;
  justify-content: space-between;
`;
