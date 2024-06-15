import React from 'react'
import Countdown from 'react-countdown';
const CountComponent = () => {
    const timeleft='2024-07-17T01:02:03'
  return (
    <Countdown date={timeleft} />
  )
}
export default CountComponent
