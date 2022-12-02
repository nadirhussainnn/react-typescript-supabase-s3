import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import './app.scss'
import Home from './pages/Home'

type Props = {}

export default function App({ }: Props) {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
     
    </Routes>
  )
}