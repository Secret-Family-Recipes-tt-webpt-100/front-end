import styled from "styled-components";

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
      padding-left: 1rem;
    }

    input {
      height: 1.75rem;
    }

    textarea {
      height: 5rem;
      max-width: 100%;
    }

    margin-top: 1rem;
    width: 100%;
    justify-self: center;

    row-gap: 0.5rem;
  }

  h2 {
    text-align: center;
    font-size: 2rem;
  }

  #submit {
    border: none;
    border-radius: 10px;
    margin-top: 1rem;
    padding: 0.75rem;

    background-color: royalblue;
    color: white;

    font-size: 1.25rem;
    text-transform: uppercase;
  }
`;
