import React from 'react'
import ReactDOM from 'react-dom'

const Content = (props) => {
  return (
    <div>
      <Part>
        {props.part1} {props.exercises1}
      </Part>
      <Part>
        {props.part2} {props.exercises2}
      </Part>
      <Part>
        {props.part3} {props.exercises3}
      </Part>
    </div>
  )
}

export default Content