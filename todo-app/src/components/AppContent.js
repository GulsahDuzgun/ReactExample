import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

function AppContent() {
  const todoList = useSelector(state => state.todo.todoList)
  //console.log(todoList)
  const sortedList = [...todoList]
  sortedList.sort((a, b) => new Date(b.time)- new Date(a.time));
  
  return (
    <div>
      {
        sortedList && sortedList.length > 0 ?
        sortedList.map((item) => <TodoItem todo={item} key={item.id}/>)
        :
        'not found'
      }
    </div>
  )
}

export default AppContent
