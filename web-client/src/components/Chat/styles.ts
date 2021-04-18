import styled from 'styled-components'

export const Container = styled.div`
  width: 450px;
  padding: 20px;

  .section {
    background: #151A21;
    padding: 20px;
    color: #DDE2E8;
    margin-bottom: 10px;
  }

  .invite {
    position: fixed;
    margin: 20px;
    top: 0;
    right: 0;

    button {
      background: #721BE1;
      border: none;
      padding: 4px 10px;
      color: #DDE2E8;
      cursor: pointer;
      transition: transform 400ms;

      :hover {
        transform: translateX(-10px)
      }
    }
  }

  .emoji-mart-dark, .emoji-mart-dark .emoji-mart-category-label span{
    border-color: #212832;
    background-color: #151a21;
  }
  .emoji-mart-dark .emoji-mart-search input {
    background-color: #212832;
  }
  .emoji-mart-search input{
    padding: 5px 10px ;
  }
  .emoji-mart-anchor-bar{
    background-color: #721BE1 !important;
  }
  .emoji-mart-anchor-selected {
    color: #721BE1 !important;
  }

  form {
    position: relative;

    input {
      background: #151A21;
      color: #DDE2E8;
      border: none;
      height: 100%;
      width: 100%;
      padding: 20px;
      margin-bottom: 10px;
      font-size: 16px;
      padding-right: 40px;
    }

    #emoji-wrapper {
      position: absolute;
      right: 15px;
      top: 14px;
    }

    button {
      cursor: pointer;
      border: none;
      background-color: #212832;
      height: 35px;
      width: 35px;
      border-radius: 50%;
      color: #721BE1;
      transition: opacity 400ms;

      display: flex;
      justify-content: center;
      align-items: center;
      
      :hover {
        opacity: 0.8;
      }
    }

    .emoji-mart {
      position: absolute;
      top: -430px;
      right: -160px;
    }
  }

  #start {
    background: #721BE1;
    color: #DDE2E8;
    border: none;
    height: 100%;
    width: 100%;
    padding: 20px;
    cursor: pointer;
  }

  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .chat {
    height: 460px;
    word-wrap: break-word;
    overflow: auto;
    overflow-x: hidden;

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

interface PlayerProps {
  status: boolean | undefined
}

export const Player = styled.div<PlayerProps>`
  font-size: 18px;

  display: flex;
  align-items: center;

  div {
    width: 10px;
    height: 10px;
    background: ${props => props.status ? 'green' : 'red'};
    margin-right: 5px;
  }
`

interface MessageProps {
  isMe: boolean
}

export const Message = styled.div<MessageProps>`
  margin-bottom: 15px;

  span {
    color: #454545;
    margin-right: 5px;
  }

  b {
    color: ${props => props.isMe ? '#FF8A00' : '#721BE1'};
    margin-right: 5px;
  }
`