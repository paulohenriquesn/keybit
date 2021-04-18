import styled from 'styled-components'

interface ContainerProps {
  hp: string;
}


export const Container = styled.div<ContainerProps>`
  margin: 0 auto;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  #counter {
    font-weight: bold;
    font-size: 300px;
    line-height: 250px;
    color: white;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    border: 20px solid ${props => props.hp};

    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    color: #DDE2E8;
    margin-top: 20px;
  }

  h4 {
    color: #DDE2E8;
  }

  .bottom {
    margin-top: 20px;

    display: flex;
  }

  .attribute:last-child {
    margin-left: 40px;
  }

  .attribute {
    color: white;

    display: flex;
    flex-direction: column;
    align-items: center;

    .value {
      height: 100px;
      width: 100px;
      border-radius: 50%;
      border: 8px solid #721BE1;
      color: #10B664;
      font-size: 36px;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .combo {
        color: #FFB800;
      }
  }
`;