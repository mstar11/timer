import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import TimerOne from './TimerOne'
import TimerThree from './TimerThree'
import TimerTwo from './TimerTwo'

const App = () => {
  const [counter, setCounter] = useState([0, 0, 0])
  const [timer, setTimer] = useState([true, false, false])
  // const [timer1, setTimer1] = useState(true)
  // const [timer2, setTimer2] = useState(false)
  // const [timer3, setTimer3] = useState(false)

  useEffect(() => {
    const time = timer[0]
      ? setInterval(() => {
          setCounter((prev) => {
            const temp = [...prev]
            temp[0] = temp[0] + 1
            return [...temp]
          })
        }, 100)
      : timer[1]
      ? setInterval(() => {
          setCounter((prev) => {
            const temp = [...prev]
            temp[1] = temp[1] + 1
            return [...temp]
          })
        }, 100)
      : timer[2] &&
        setInterval(() => {
          setCounter((prev) => {
            const temp = [...prev]
            temp[2] = temp[2] + 1
            return [...temp]
          })
        }, 100)

    return () => {
      clearInterval(time)
    }
  }, [timer[1], timer[2], timer[2]])

  const start = (timer1, timer2, timer3, num1, num2) => {
    setCounter((prev) => {
      const temp = [...prev]
      temp[num1] = temp[num2]
      return [...temp]
    })
    setTimer([timer1,timer2,timer3])
  
  }

  return (
    <Container style={{ display: 'flex', justifyContent: 'space-around' }}>
      <TimerOne
        start={start}
        counter={counter[0]}
        timer1={timer[0]}
        setCounter={setCounter}
      />
      <TimerTwo
        start={start}
        counter={counter[1]}
        timer2={timer[1]}
        setCounter={setCounter}
      />
      <TimerThree
        start={start}
        counter={counter[2]}
        timer3={timer[2]}
        setCounter={setCounter}
      />
    </Container>
  )
}

export default App
