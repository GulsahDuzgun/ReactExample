import { useRef, useState } from 'react';
import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';
import styles from './styles/modules/app.module.scss'

function App() {
  
  const todoRef = useRef(null)
  const [ todoList, setTodoList ] = useState([])
  const [checkFlag, setCheckFlag] = useState(false)

  const addItem = () => {
    let tempTodo = todoRef.current.value;
    let list = JSON.parse(localStorage.getItem("TodoList"))
    
    if(!list) {
       localStorage.setItem("TodoList", JSON.stringify([]))
       list = []
    }

    if( tempTodo ) {

        let newTodo = {
          id:new Date(),
          mission:tempTodo,
          isCheck: false
        }
        let newList= [...list, newTodo]
        setTodoList(newList)
        localStorage.setItem("TodoList",JSON.stringify(newList))

      }      
  }

  const setCheckbox = (item) => {
    todoList.filter( i => {
      if(i.id === item.id) {
        i.isCheck = (!item.isCheck)
        setCheckFlag(i.isCheck)
      }
      return i;
    })
    setTodoList(todoList)
    localStorage.setItem("TodoList",JSON.stringify(todoList))
  }

  const onSearch = () => {
    let list = JSON.parse(localStorage.getItem("TodoList"))
    let searchText = todoRef.current.value
    let searchList = list.filter( (item) =>{
      return item.mission.includes(searchText) === true
    })
    setTodoList(searchList)
  }

  const listAllTodos = () => {
    let list = JSON.parse(localStorage.getItem("TodoList"))
    if(list.length > 0) {
      setTodoList(list)
    }
  }

  const activeTodos = () => {
    let list = JSON.parse(localStorage.getItem("TodoList"))
    if(list.length > 0) {
      let activeList = list.filter(i => i.isCheck === false)
      setTodoList(activeList)
    }
  }

  const completeTodos = () => {
    let list = JSON.parse(localStorage.getItem("TodoList"))
    if(list.length > 0) {
      let completeList = list.filter( i => i.isCheck === true)
      setTodoList(completeList)
    }
  }

  return (
    <div className="App">
      <div className="container offset-3 col-6  my-5 todo">
        <PageTitle>THINGS TO DO</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader/>
        </div>
      </div>
    </div>
  );
}

export default App;
