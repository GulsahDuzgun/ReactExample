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
            <ul>{
                   this.props.items.map((element, index)=>{
                    return(
                            <TodoItem key={index} item ={element}/>
                    )}
                   )}
            </ul>
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

class TodoApp extends React.Component {
    render(){
        const data = {
         header: "Todo Application",
         description: "Bekleyen Görevler",
         task:["Gorev1","Gorev2","Gorev3"]

        }
        return(
   
            <div>
                <Header title = {data.header}/>
                <ShowMessage message = {data.description}/>
                <TodoList items = {data.task} />

            </div>
        );
    }
}

root.render(<TodoApp/>)