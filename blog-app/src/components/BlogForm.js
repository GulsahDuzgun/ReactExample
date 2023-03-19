import React, { Component }  from "react";

export default class BlogForm extends Component  {
    
    constructor(props){
        super(props)
        
        this.state = {
            title: "",
            description: "",
            error: ""
        }
        this.onTitleChange = this.onTitleChange.bind(this)
    }

    onTitleChange(e) {
        const title =  e.target.value;
        this.setState(() => ({ title }))
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}))
    }

    onSubmit = (e) => {
        e.preventDefault()

        if( !this.state.title || !this.state.description ) {
            
            this.setState({
                error: "Lütfen alanları doldurunuz"
            })           

        }else {
            
            this.setState({ error: "" })
            this.props.addBlogInfo({
                title: this.state.title,
                description: this.state.description,
                dateAdded: Date.now
            })        
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    { this.state.error && <p>{ this.state.error }</p>}
                    <div>
                        <input type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChange} />
                    </div>
                    <div>
                        <textarea placeholder="Description" value={this.state.description} onChange={this.onDescriptionChange} ></textarea>
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}
