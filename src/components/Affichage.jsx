import React from 'react'
import { useSelector } from 'react-redux'

export default function Affichage() {

    const counter = useSelector(state => state.counter.counter)
  return (
    <div>{counter}</div>
  )
}
