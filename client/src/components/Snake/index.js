import React, { useState, useEffect, useCallback } from 'react'
import Snake from './Snake'
import Food from './Food'

import { GameArea } from './styles'

const random = (min, max) => Math.floor((Math.random() * (max - min + 1) + min) / 4) * 4
const getRandomCoordinates = () => [random(1, 98), random(1, 98)]

const initialState = {
  speed: 130,
  food: getRandomCoordinates(),
  direction: 'DESNO',
  snakeDots: [
    [0, 0],
    [4, 0],
  ],
}

const SnakeGame = () => {
  const [state, setState] = useState(initialState)

  const handleKeyPress = (e) => {
    e = e || window.event

    switch (e.keyCode) {
      case 38:
        if (!['GOR', 'DOL'].includes(state.direction)) setState({ ...state, direction: 'GOR' })
        break
      case 40:
        if (!['GOR', 'DOL'].includes(state.direction)) setState({ ...state, direction: 'DOL' })
        break
      case 37:
        if (!['LEVO', 'DESNO'].includes(state.direction)) setState({ ...state, direction: 'LEVO' })
        break
      case 39:
        if (!['LEVO', 'DESNO'].includes(state.direction)) setState({ ...state, direction: 'DESNO' })
        break
      default:
        break
    }
  }

  const moveSnake = () => {
    const snakeDots = [...state.snakeDots]

    let head = snakeDots[snakeDots.length - 1]
    switch (state.direction) {
      case 'DESNO':
        head = [head[0] + 4, head[1]]
        break
      case 'LEVO':
        head = [head[0] - 4, head[1]]
        break
      case 'DOL':
        head = [head[0], head[1] + 4]
        break
      case 'GOR':
        head = [head[0], head[1] - 4]
        break
      default:
        break
    }

    snakeDots.push(head)
    snakeDots.shift()

    setState({ ...state, snakeDots })
  }

  const onGameOver = useCallback(() => {
    alert('over')
    setState(initialState)
  }, [])

  const checkIfOutOfBorders = useCallback(() => {
    const head = state.snakeDots[state.snakeDots.length - 1]
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) onGameOver()
  }, [state, onGameOver])

  const checkIfCollapsed = useCallback(() => {
    const snake = [...state.snakeDots]
    const head = snake[snake.length - 1]

    snake.pop()
    snake.forEach((dot) => {
      if (head[0] === dot[0] && head[1] === dot[1]) onGameOver()
    })
  }, [state, onGameOver])

  const checkIfEat = useCallback(() => {
    const head = state.snakeDots[state.snakeDots.length - 1]
    const { food } = state

    if (head[0] === food[0] && head[1] === food[1]) {
      setState({ ...state, food: getRandomCoordinates() })

      // enlarge snake
      const snakeDots = [...state.snakeDots]
      snakeDots.unshift([])
      setState({ ...state, snakeDots })
    }
  }, [state])

  useEffect(() => {
    const interval = setInterval(moveSnake, state.speed)
    document.onkeydown = handleKeyPress
    return () => clearInterval(interval)
  }, [state, moveSnake])

  useEffect(() => {
    checkIfOutOfBorders()
    checkIfCollapsed()
    checkIfEat()
  }, [checkIfOutOfBorders, checkIfCollapsed, checkIfEat])

  return (
    <GameArea>
      <Snake snakeDots={state.snakeDots} />
      <Food dot={state.food} />
    </GameArea>
  )
}

export default SnakeGame
