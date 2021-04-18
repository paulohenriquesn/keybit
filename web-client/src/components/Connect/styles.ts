import styled from 'styled-components'

export const Container = styled.form`
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;

  .section {
    background: #151A21;
    padding: 20px;
    color: #DDE2E8;
    margin-bottom: 10px;
  }

  input {
    background: #151A21;
    color: #DDE2E8;
    border: none;
    width: 250px;
    padding: 15px 20px;
    margin-bottom: 20px;
    font-size: 16px;
  }

  button {
    background: #721BE1;
    margin-bottom: 10px;
    color: #DDE2E8;
    font-size: 18px;
    border: none;
    padding: 15px 20px;
    width: 250px;
    cursor: pointer;
    transition: transform 400ms;

    :hover {
      transform: translateX(5px)
    }
  }
`;