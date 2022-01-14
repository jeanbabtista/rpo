import React, { useState, useEffect, useRef } from 'react'

// icons
import Blank from '../../assets/snake/blank.png'
import Snake from '../../assets/snake/snake.png'
import Food from '../../assets/snake/food.png'
import HeadDown from '../../assets/snake/head_d.png'
import HeadUp from '../../assets/snake/head_u.png'
import HeadLeft from '../../assets/snake/head_l.png'
import HeadRight from '../../assets/snake/head_r.png'

// styles
import { Box, Grid } from '@mui/material'

// components
import BackToGamesButton from '../BackToGamesButton'

const SnakeBoard = () => {
  const width = 12
  const height = 12
  let initialRows = []
  let head = 'headright'

  for (let i = 0; i < 12; i++) {
    initialRows.push([])
    for (let k = 0; k < 12; k++) initialRows[i].push('blank')
  }

  const randomPosition = () => ({
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height),
  })

  const [rows, setRows] = useState(initialRows)
  const [snake, setSnake] = useState([
    { x: 0, y: 0 },
    { x: 1, y: 0 },
  ])
  const [direction, setDirection] = useState('right')
  const [food, setFood] = useState(randomPosition)

  const displaySnake = () => {
    const newRows = initialRows
    newRows[food.x][food.y] = 'food'
    snake.forEach((cell) => (newRows[cell.x][cell.y] = 'snake'))
    newRows[snake[0].x][snake[0].y] = head
    setRows(newRows)
  }

  const changeDirectionWithKeys = (e) => {
    const { keyCode } = e

    switch (keyCode) {
      case 37:
        setDirection('left')
        break
      case 38:
        setDirection('top')
        break
      case 39:
        setDirection('right')
        break
      case 40:
        setDirection('bottom')
        break
      default:
        break
    }
  }

  document.addEventListener('keydown', changeDirectionWithKeys, false)

  const moveSnake = () => {
    const newSnake = []

    switch (direction) {
      case 'right':
        newSnake.push({ x: snake[0].x, y: (snake[0].y + 1) % width })
        head = 'headright'
        break
      case 'left':
        newSnake.push({ x: snake[0].x, y: (snake[0].y - 1 + width) % width })
        head = 'headleft'
        break
      case 'top':
        newSnake.push({ x: (snake[0].x - 1 + height) % height, y: snake[0].y })
        head = 'headup'
        break
      case 'bottom':
        newSnake.push({ x: (snake[0].x + 1) % height, y: snake[0].y })
        head = 'headdown'
        break
      default:
        break
    }

    snake.forEach((cell) => newSnake.push(cell))

    if (snake[0].x === food.x && snake[0].y === food.y) setFood(randomPosition)
    else newSnake.pop()

    setSnake(newSnake)
    displaySnake()
  }

  useInterval(moveSnake, 150)

  function useInterval(callback, delay) {
    const savedCallback = useRef()

    useEffect(() => {
      savedCallback.current = callback
    }, [callback])

    useEffect(() => {
      const tick = () => savedCallback.current()

      if (delay) {
        const id = setInterval(tick, delay)
        return () => clearInterval(id)
      }
    }, [delay])
  }

  return (
    <>
      <Grid container justifyContent="center">
        <div>
          {rows.map((row, i) => (
            <Box key={i} sx={{ lineHeight: 0 }}>
              {row.map((e) => {
                switch (e) {
                  case 'food':
                    return <img src={Food} alt="snake-icon" />
                  case 'snake':
                    return <img src={Snake} alt="snake-icon" />
                  case 'headright':
                    return <img src={HeadRight} alt="snake-icon" />
                  case 'headleft':
                    return <img src={HeadLeft} alt="snake-icon" />
                  case 'headup':
                    return <img src={HeadUp} alt="snake-icon" />
                  case 'headdown':
                    return <img src={HeadDown} alt="snake-icon" />
                  case 'blank':
                  default:
                    return <img src={Blank} alt="snake-icon" />
                }
              })}
            </Box>
          ))}
        </div>
      </Grid>

      <BackToGamesButton />
    </>
  )
}

export default SnakeBoard
