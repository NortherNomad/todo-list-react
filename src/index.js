import React from "react"
import ReactDom from 'react-dom'

//const element = React.createElement('hi', null, 'Hello React World');

const element = (
  <div>
    <h1>My Todo List</h1>
    <input placeholder="search" />
    <ul>
      <li>Install React</li>
      <li>Study React</li>
      <li>Use React</li>
      <li>Build React App</li>
    </ul>
  </div>
)

ReactDom.render(
  element,
  document.getElementById('root')
)