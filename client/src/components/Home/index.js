import React from 'react'
import { isAuth } from '../../helpers/auth'
import Auth from '../Auth'

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      {!isAuth() && <Auth />}
    </>
  )
}
