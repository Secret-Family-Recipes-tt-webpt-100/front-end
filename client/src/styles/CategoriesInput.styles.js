import styled from "styled-components";

export default styled.div`
  border-bottom: 1px solid black;
  padding: 1rem 0;
  margin-bottom: 1rem;

  display: grid;
  row-gap: 1rem;

  .category-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    column-gap: 0.5rem;
    row-gap: 0.5rem;

    align-items: center;
    span {
      padding: 0.5rem;
      border-radius: 10px;
      background: salmon;
      color: black;

      text-align: center;

      min-width: 3rem;
      min-height: 2rem;
    }
  }
`;
