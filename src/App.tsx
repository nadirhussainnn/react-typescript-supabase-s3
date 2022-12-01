import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import './app.scss'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

type Props = {}

export default function App({ }: Props) {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>

    </Routes>
  )
}