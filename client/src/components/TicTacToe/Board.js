import React, { useState } from 'react'
import Square from './Square'

// styles
import { BoardRow, StyledBoard, StatusText, RestartBtn, CenterDiv } from './styles'

//x in y
let x_score = 0
let y_score = 0

const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null))
  const [x, setX] = useState(true)

  const winner = calculateWinner(square)
  let end_of_game = false

  let status
  if (winner) {
    status = 'Winner: ' + winner
    end_of_game = true
  } else {
    status = 'Player turn: ' + (x ? 'X' : 'O')
  }

  if (end_of_game) {
    if (winner === 'X') {
      x_score += 1
    } else {
      y_score += 1
    }
  }

  const renderSquare = (i) => {
    return <Square value={square[i]} onClick={() => handleClick(i)} />
  }

  let score
  score = 'X: ' + x_score + ' | O: ' + y_score

  function reset_all() {
    for (let i = 0; i < 10; i++) {
      const squares = square.slice()
      square[i] = null
      setSquare(squares)
    }
    if (x === false) {
      setX(!x)
    }
    return alert('NextGame')
  }

  const handleClick = (i) => {
    const squares = square.slice()

    if (!end_of_game) {
      if (squares[i] === null) {
        squares[i] = x ? 'X' : 'O'
        setSquare(squares)
        setX(!x)
      } else {
        alert('Nepravilna poteza')
      }
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  return (
    <StyledBoard>
      <StatusText>SCORE</StatusText>
      <StatusText> {score} </StatusText>

      <BoardRow>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </BoardRow>

      <BoardRow>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </BoardRow>

      <BoardRow>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </BoardRow>

      <StatusText>{status}</StatusText>
      <CenterDiv>
        <RestartBtn onClick={() => reset_all()}> NEXT GAME </RestartBtn>
      </CenterDiv>
    </StyledBoard>
  )
}

export default Board
