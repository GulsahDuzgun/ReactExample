import React from 'react'
import ReactDOM from 'react-dom/client'

var root = ReactDOM.createRoot(document.querySelector("#content"));

function Header(props) {
    return (<h1 className="text-center h3">{ props.title}</h1>);
}

function ShowMessage(props) {
    return(
        <p className="m-2 h6 ">{ props.message}</p>
    );
}

function TodoList(props) {
    return(
        <div>
            <ul className ="list-group">{
               props.items.map((element, index)=>{
                return(
                        <TodoItem key= {index} item= {element} delete ={props.deleteItem}/>
                    )}
               )}
            </ul>
            {
                props.items.length > 0
                ?
                <p>
                <button className="btn btn-outline-danger float-end m-2"  onClick = {props.clear}>Veriyi Temizle</button>
                </p>   
                :
                <div className="alert alert-warning">
                    Görev Ekleyiniz
                </div>

            }
          
        </div>            
    )        
}

const TodoItem = (props) => {
    return(
        <li className="list-group-item" >{props.item }
            <button className ="btn btn-sn btn-danger float-end" onClick = {()=> props.delete(props.item)}>X</button>
        </li>
    );    
}

class NewItem extends React.Component{
    constructor(props) {
        super(props)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.state= {
            errorMessage: ""
        }
    }
    
    onFormSubmit(e) {
        e.preventDefault();
        const item = e.target.elements.txtItem.value.trim();
       
        if(item) {
           const err = this.props.addItem(item)
           this.setState({
              errorMessage:err
            })
        }
    
        e.target.elements.txtItem.value = ""
    }

    componentDidUpdate() {
        console.log("Component güncellendi New Item")
    }

    render() {
        return(
            <div>
            {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
            <form onSubmit={this.onFormSubmit}>
                <div className="input-group">
                    <input className="form-control" type="text" name="txtItem" />
                    <button className="btn btn-primary" type="submit">Ekle</button>
                </div> 
            </form>
            </div>
        )
    }
}

class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            task:["Gorev1","Gorev2","Gorev3"]
        }
        this.clearItems = this.clearItems.bind(this)
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }

    clearItems() {
        this.setState({
            task : []
        })
    }

    addItem(value) {
        if(this.state.task.indexOf(value)>-1) {
            return "Aynı görev bilgisi girilemez"
        }

        this.setState((prevState) => {
            return {task:prevState.task.concat(value)}
        })
    }

    deleteItem(item) {
        this.setState((prevState) => {
            let resultArray = prevState.task.filter((element)=> element != item )
            return { task : resultArray}
        })
        
    }

    componentDidMount(){ 
        const jsonTask = JSON.parse(localStorage.getItem("items"))
        console.log(typeof jsonTask)
        if(jsonTask){
            this.setState({
                task:jsonTask
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.task.length !== this.state.task.length){
            const taskArr = JSON.stringify(this.state.task)
            //console.log(taskArr, typeof taskArr)
            localStorage.setItem("items",taskArr)
        }
    }

    render() {
        const data = {
         header: "Todo Application",
         description: "Bekleyen Görevler",

        }
        
        return(
            <div className = "container my-3">
                <div className="card">
                    <div className="card-header">
                        <Header title = {data.header}/>
                    </div>
                    <div className="car-body">
                        <ShowMessage message = {data.description}/>
                        <TodoList items = {this.state.task}  clear ={this.clearItems} deleteItem ={this.deleteItem} />
                    </div>
                    <div className="card-footer">
                        <NewItem addItem = {this.addItem}></NewItem>
                    </div>
                </div>
            </div>
        );
    }
}

root.render(<TodoApp/>)