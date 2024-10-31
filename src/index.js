import React from "react"
import ReactDOM from 'react-dom'

//const element = React.createElement('hi', null, 'Hello React World');

const TodoList = () => {
  return (
    <ul>
      <li>Install React</li>
      <li>Study React</li>
      <li>Use React</li>
      <li>Build React App</li>
    </ul>
    )
}

const AppHeader = () => {
  return <h1>My Todo List</h1>
}

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root'))