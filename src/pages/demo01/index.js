import { useState } from 'react'

function Demo01 () {

  const [num, setNum] = useState(0)

  function sub () {
    setNum(num + 1)
  }
  return (
    <div>
      <div>{num}</div>
      <button onClick={sub}>+</button>
    </div>
  )
}

export default Demo01