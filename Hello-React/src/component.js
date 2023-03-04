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
                            <TodoItem key= {index} item= {element}/>
                        )}
                   )}
                </ul>
                <button onClick = {this.props.clear}>Veriyi Temizle</button>
            </div>
            
        )
    }
}

class TodoItem extends React.Component{
    render(){
        return(
            <p>{ this.props.item }</p>
        );
    }
}

class NewItem extends React.Component{
    onFormSubmit(e){
        e.preventDefault();
        const item = e.target.elements.txtItem.value.trim();
        if(item){
            console.log(item);
        }
        e.target.elements.txtItem.value = ""
    }
    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <input type="text" name="txtItem" />
                <button type="submit">Ekle</button>
            </form>
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
    }
    clearItems(){
        this.setState({
            task : []
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
                <TodoList items = {this.state.task}  clear ={this.clearItems} />
                <NewItem></NewItem>
            </div>
        );
    }
}

root.render(<TodoApp/>)