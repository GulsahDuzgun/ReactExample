import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import styles from '../styles/modules/app.module.scss'

function AppContent() {
  const todoList = useSelector(state => state.todo.todoList)
  const sortedList = [...todoList]
  const filterStatus = useSelector((state) => state.todo.filterStatus)
  
  sortedList.sort((a, b) => new Date(b.time)- new Date(a.time));

  const filterArr = sortedList.filter((item) => {
    if(filterStatus === "all") {
      return true;
    }

    return item.status === filterStatus
  })

  return (
    <div className={ styles.content__wrapper }>
      {
        filterArr && filterArr.length > 0 ?
        filterArr.map((item) => <TodoItem todo={ item } key={ item.id }/>)
        :
        <h3>Not found 404 </h3>
      }
    </div>
  )
}

export default AppContent
