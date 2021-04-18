import styled from 'styled-components'

interface PingProps {
  color: string;
}

export const Ping = styled.div<PingProps>`
  padding: 20px;
  color: #DDE2E8;
  position: fixed;

  display: flex;
  align-items: center;

  div {
    margin-right: 4px;
    width: 10px;
    height: 10px;
    background-color: ${props => props.color};
  }
`

export const Social = styled.div`
  position: fixed;
  padding: 20px;
  bottom: 0;

  svg {
    cursor: pointer;

    :hover {
      opacity: 0.6;
    }
  }
`