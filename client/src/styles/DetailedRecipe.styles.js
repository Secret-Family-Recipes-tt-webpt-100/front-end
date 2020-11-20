import styled from 'styled-components';

export default styled.div`
  .ingredients,
  .categories,
  & {
    display: grid;
  }

  img {
    object-fit: cover;
    min-width: 30rem;
    height: 30rem;
    margin: 0 auto;
    grid-area: img;
  }

  h1 {
    text-align: center;
    grid-area: title;
  }

  .ingredients {
    grid-area: ingredients;
  }

  ul {
    list-style-type: circle;
  }

  grid-template-columns: 2fr 1fr;

  grid-template-areas:
    'img img'
    'title title'
    'instructions ingredients';

  row-gap: 2rem;
  column-gap: 1rem;
  width: 50rem;
  margin: 1rem auto;
  padding: 0.5rem 2rem;

  border: 1px solid black;
`;
