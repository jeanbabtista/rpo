import React from 'react'
import { Btn } from './styles'

const Square = (props) => (
  <div>
    <Btn onClick={() => props.onClick()}>{props.value}</Btn>
  </div>
)

export default Square
