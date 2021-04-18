import styled from 'styled-components'

export const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  padding-top: 20px;

  .section {
    background: #151A21;
    padding: 20px;
    color: #DDE2E8;
    margin-bottom: 10px;
  }

  #start {
    background: #721BE1;
    color: #DDE2E8;
    border: none;
    width: 100%;
    padding: 23px;
    cursor: pointer;
    transition: opacity 400ms;

    :hover {
      opacity: 0.8;
    }
  }

  .tutorial {
    height: 450px;
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