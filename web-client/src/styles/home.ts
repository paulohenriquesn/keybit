import styled from 'styled-components'

export const Container = styled.form`
  background: #0B0E11;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: bold;
    font-size: 70px;
    color: white;
    margin-bottom: 20px;
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