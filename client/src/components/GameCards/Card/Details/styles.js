import styled from 'styled-components'

export const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 6px 0 6px;
  line-height: 1.4;
`

export const PlayButton = styled.button`
  padding: 10px 16px;
  background-color: ${(props) => props.bg || '#fbbe01'};
  color: #000;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;
  &:hover {
    background-color: transparent;
    color: #fff;
    border: 3px solid ${(props) => props.bg || '#fbbe01'};
  }
`
