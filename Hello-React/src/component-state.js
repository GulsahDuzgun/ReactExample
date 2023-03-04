var root = ReactDOM.createRoot(document.querySelector("#content"))

class User extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            name:"Rose",
            email:"rose.Info@gmail.com"
        }       
        this.changeEmail = this.changeEmail.bind(this)
    }
    changeEmail(){
        //this.state.email = "rose.info@hotmail.com"
        this.setState({
            name:"Ash",
            email: "rose.info@hotmail.com"
        })
        console.log(this.state.email);
    }
    render(){
        return(
            <div>
                <h2> {this.state.name }</h2>
                <p>{ this.state.email }</p>
                <button onClick ={this.changeEmail}>Change Email</button>
            </div>
        )
    }
}
root.render(<User/>);

