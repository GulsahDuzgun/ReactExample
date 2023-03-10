import React, { Component } from 'react'

export class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            keyword:''
        }
        this.onSubmit= this.onSubmit.bind(this)
    }
    //arrow fonks. ile bir kapsam tanımlanmadığından dolayı oluşan this objesine bind edilir
  onChange=(event)=>{
    this.setState({keyword:event.target.value})
  }
  onSubmit(e){
    //Submit ile yenilenen sayfada veri kaybını engellemek için e.preventDefault kullanılır
    e.preventDefault();//Submit edilen sayfa yenilenir ve server tarafına gidip gelerek tekrardan ekranda görünür
   // console.log(this.state.keyword) onChange ile her değişiklik keyworde aktarılır click edildiğinde keyword zaten günceldir.
   this.props.onSearch(this.state.keyword);
   this.setState({keyword:''});
  }
    
  render() {
    return (
      <div className='my-3 col-md-3 me-4'>
        <form onSubmit={this.onSubmit}>
            <div className='input-group'>
                <input type="text" className='form-control'value={this.state.keyword}  onChange={this.onChange} placeholder="Search" />
                <button className="btn btn-secondary"  type="submit" >Ara</button>
                <button className="btn btn-dark btn-sm" onClick={this.props.deleteUsers}  type="button" >Verileri Temizle</button>
            </div>
         </form>
      </div>
    )
  }
}

export default Search