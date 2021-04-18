import styled from 'styled-components'

export const Container = styled.div`
  width: 450px;
  padding: 20px;

  .section {
    background: #151A21;
    padding: 10px;
    color: #DDE2E8;
    margin-bottom: 10px;
  }

  .list {
    height: 540px;
    overflow: auto;

    .player {
      background: #0f1317;
      margin-bottom: 10px;
      padding: 10px 15px;
    }

    h3 {
      display: flex;
      align-items: center;
    }

    .player-info {
      margin-bottom: 20px;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }

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