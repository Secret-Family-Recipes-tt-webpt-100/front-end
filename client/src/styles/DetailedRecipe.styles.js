import styled from 'styled-components';

export default styled.div`
  .ingredients,
  .categories,
  & {
    display: grid;
  }

  .instructions,
  .ingredients {
    background-color: lightgrey;
    padding: 0.5rem;
  }

  img {
    object-fit: cover;
    min-width: 10rem;
    max-height: 30rem;
    margin: 0 auto;
    grid-area: img;
    border: 3px solid black;
    border-radius: 10px;
  }

  h1 {
    text-align: center;
    grid-area: title;
    font-weight: bold;
  }

  .instructions,
  .ingredients {
    h3 {
      margin-bottom: 1rem;
    }
  }

  .instructions {
    p {
      font-size: 1.15rem;
    }
  }

  .ingredients {
    grid-area: ingredients;
    padding-left: 1rem;
    ul {
      list-style-type: circle;
      padding: 0 1.75rem;
    }
  }

  grid-template-columns: 2fr 1fr;

  grid-template-areas:
    'img img'
    'title title'
    'instructions ingredients';

  row-gap: 2rem;
  /* column-gap: 1rem; */
  max-width: 60rem;
  margin: 1rem auto;
  padding: 2rem;

  border: 1px solid black;
  background-color: tan;
`;
