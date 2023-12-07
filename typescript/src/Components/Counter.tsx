import React from 'react'

type Props={
    count:number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
}

const Counter:React.FC<Props> = ({count,setCount}) => {
  return (
    <>
    <button onClick={()=>setCount(count+1)}>+</button>
    <span>{count}</span>
    <button  onClick={()=>setCount(count-1)}>-</button>
    </>
  )
}

export default Counter