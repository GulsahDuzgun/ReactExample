var root = ReactDOM.createRoot(document.querySelector("#content"));

function Header(props){
    return (<h1>TODO WEB PAGE</h1>);
}

function Todo(props){
    return(
         <ul>
            <li>Gorev1</li>
            <li>Gorev2</li>
            <li>Gorev3</li>
        </ul>
    );
}

class TodoClass extends React.Component{
    render(){
        return(
        <ul>
            <li>Gorev1</li>
            <li>Gorev2</li>
            <li>Gorev3</li>
        </ul>  
        )
    }
}
class Footer extends React.Component{
    render(){
        return(
            <h2>iletişim kısmı</h2>
        )
    }
}

var template = <div>
        <Header/>
        <Todo />
        <TodoClass/>
        <Footer/>
    </div>;

root.render(template)