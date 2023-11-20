import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment, init } from '../redux/CounterSlice'

export default function Operations() {


    const dispatch = useDispatch()

  return (
    <div>
        <button onClick={() => dispatch(increment(3))}>Incrementer</button>
        <button onClick={() => dispatch(decrement(2))}>Incrementer</button>
        <button onClick={() => dispatch(init(9))}>Incrementer</button>
    </div>
  )
}
