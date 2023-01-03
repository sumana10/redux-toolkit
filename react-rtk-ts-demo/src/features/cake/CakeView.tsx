import React, {useState} from 'react'
// import {useSelector, useDispatch} from 'react-redux'
import { ordered, restocked } from './cakeSlice'
import { useAppSelector,useAppDispatch } from '../../app/hooks'


const CakeView = () => {
    const [value, setValue] = useState(1)
    const cakes = useAppSelector(state => 
        state.cake.numOfCakes
    )
    const dispatch = useAppDispatch()
    
  return (
    <div>
      <h2>Number of cakes - {cakes}</h2>
      <button onClick={()=>dispatch(ordered())}>Order cake</button>
      <input value={value} onChange={e => setValue(parseInt(e.target.value))}/>
      <button onClick={()=>dispatch(restocked(value))}>Restock cake</button>
    </div>
  )
}

export default CakeView