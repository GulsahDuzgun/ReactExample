import { useRef, useState } from 'react'

function App() {
  
  const todoRef = useRef(null)
  let list = JSON.parse(localStorage.getItem("TodoList"))
  const [ todoList, setTodoList ] = useState(list)
  const [checkFlag, setCheckFlag] = useState(false)

  const addItem = () => {
    let tempTodo = todoRef.current.value;
    
    if( tempTodo ) {

        let newTodo = {
          id:new Date(),
          mission:tempTodo,
          isCheck: false
        }
      
        setTodoList([...list, newTodo])
        localStorage.setItem("TodoList",JSON.stringify(todoList))

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
    let searchText = todoRef.current.value
    let searchList = list.filter( (item) =>{
      return item.mission.includes(searchText) === true
    })
    setTodoList(searchList)
  }

  const listAllTodos = () => {
    setTodoList(list)
  }

  const activeTodos = () => {
    setTodoList(list.filter( i => i.isCheck === false))
  }

  const completeTodos = () => {
    setTodoList(list.filter( i=> i.isCheck === true))
  }

  return (
    <div className="App">
      <div className="container offset-3 col-6  my-5 todo">
        <h1 className="text-center">THINGS TO DO</h1>
        <div className="my-3">
        <input type="text" className="form-control" placeholder="Add New" ref={todoRef} />
        </div>
        <ul>
          {todoList.map((item, index) => {
            return (
              <li className="p-3" key={index}>
                <input className="form-check-input me-3" type="checkbox" id={`doneCheck${index}`} checked={item.isCheck} value={checkFlag}  onChange={()=>setCheckbox(item)} />
                <label className="form-check-label" htmlFor={`doneCheck${index}`} >{item.mission}</label>
              </li>
            )}
          )}
        </ul>
        <div className="d-flex justify-content-between p-2 mx-3">
          <div>
            <button className="btn btn-outline-success me-1" htmlFor="todo"  onClick={addItem} >Ekle</button>
            <button className="btn btn-outline-primary" onClick={onSearch} >Search</button>  |  {todoList.length} items left
          </div>
          <div>
            <button className="btn btn-secondary me-1" onClick={listAllTodos}>All</button>
            <button className="btn btn-success me-1" onClick={activeTodos}>Active</button>
            <button className="btn btn-danger" onClick={completeTodos}>Completed</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
