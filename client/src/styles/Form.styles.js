import styled from 'styled-components';

export default styled.form`
  margin: 2rem;

  &,
  label {
    display: grid;
  }

  label {
    span {
      font-size: 1.2rem;
      font-weight: bold;
    }

    input,
    textarea {
      border: 2px solid lightslategray;
      border-radius: 5px;
      padding-left: 0.5rem;
    }

    input:focus,
    textarea:focus {
      border: 4px solid royalblue;
    }

    input {
      height: 2rem;
    }

    textarea {
      height: 5rem;
      max-width: 100%;
      padding-top: 0.15rem;
    }

    width: 100%;
    justify-self: center;

    row-gap: 0.5rem;
  }

  h2 {
    text-align: center;
    font-size: 2rem;
  }

  button {
    border: none;
    border-radius: 10px;
    background-color: skyblue;
    font-size: 1.1rem;
    font-weight: bold;
    width: 100%;
    padding: 0.5rem 0;
  }

  #submit {
    border: none;
    border-radius: 10px;
    margin-top: 1rem;
    padding: 0.75rem;

    background-color: royalblue;
    color: white;

    font-size: 1.25rem;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
