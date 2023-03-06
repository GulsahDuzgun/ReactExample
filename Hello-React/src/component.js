var root = ReactDOM.createRoot(document.querySelector("#content"));

function Header(props){
    return (<h1>{ props.title}</h1>);
}

function ShowMessage(props){
    return(
        <p>{ props.message}</p>
    );
}

class TodoList extends React.Component{
    render(){
        return(
            <div>
                <ul>{
                   this.props.items.map((element, index)=>{
                    return(
                            <TodoItem key= {index} item= {element} delete ={this.props.deleteItem}/>
                        )}
                   )}
                </ul>
                <button onClick = {this.props.clear}>Veriyi Temizle</button>
            </div>            
        )
    }
}

class TodoItem extends React.Component{
    constructor(props){
        super(props)
        this.deleteIt = this.deleteIt.bind(this)
    }
    deleteIt(){
        this.props.delete(this.props.item)
    }
    render(){
        return(
            <li>{ this.props.item }
            <button onClick = {this.deleteIt}>X</button>
            </li>
        );
    }
}

class NewItem extends React.Component{
    constructor(props){
        super(props)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.state={
            errorMessage: ""
        }
    }
    onFormSubmit(e){
        e.preventDefault();
        const item = e.target.elements.txtItem.value.trim();
        if(item){
           const err = this.props.addItem(item)
           this.setState({
              errorMessage:err
            })
        }
    
        e.target.elements.txtItem.value = ""
    }
    render(){
        return(
            <div>
            {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
            <form onSubmit={this.onFormSubmit}>
                <input type="text" name="txtItem" />
                <button type="submit">Ekle</button>
            </form>
            </div>
        )
    }
}

class TodoApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            task:["Gorev1","Gorev2","Gorev3"]
        }
        this.clearItems = this.clearItems.bind(this)
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }
    clearItems(){
        this.setState({
            task : []
        })
    }
    addItem(value){
        if(this.state.task.indexOf(value)>-1){
            return "Aynı görev bilgisi girilemez"
        }
        this.setState((prevState)=>{
            return {task:prevState.task.concat(value)}
        })
    }
    deleteItem(item){
        this.setState((prevState)=>{
            let resultArray = prevState.task.filter((element)=> element != item )
            return { task : resultArray}
        })
        
    }
    render(){
        const data = {
         header: "Todo Application",
         description: "Bekleyen Görevler",

        }
        return(
            <div>
                <Header title = {data.header}/>
                <ShowMessage message = {data.description}/>
                <TodoList items = {this.state.task}  clear ={this.clearItems} deleteItem ={this.deleteItem} />
                <NewItem addItem = {this.addItem}></NewItem>
            </div>
        );
    }
}

root.render(<TodoApp/>)