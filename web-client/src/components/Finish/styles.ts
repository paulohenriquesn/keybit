import styled from 'styled-components'

export const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  padding-top: 20px;
  color: #DDE2E8;

  .winner {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    color: white;
    background: #721BE1;
    padding: 2px 10px;
    margin-bottom: 20px;
  }

  .section {
    background: #151A21;
    padding: 20px;
    color: #DDE2E8;
  }

  .player {
    background: #0f1317;
    margin-bottom: 10px;
    padding: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .back {
    text-align: center;
    margin-top: 40px;
  }

  .rank {
    height: 400px;
    overflow: auto;

    /* width */
    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #242C37; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #3C4755; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #5E6C80; 
    }
  }
`