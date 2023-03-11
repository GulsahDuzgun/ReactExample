import React, { useState } from 'react'
//class componet React.Component kalıtım aldığı için içerisinde state, lifecycle methodları kullanılabilir
//Fuction component içerisinde state-life-cycle gibi özellikleri hooks ile kullanabiliriz. 

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       counter:0
//     }
//   }
//   render(){
//     return(
//       <div className="container">
//         <p>Buttona {this.state.counter} kez basıldı </p>
//         <button className='btn btn-primary' onClick={()=>this.setState({counter:this.state.counter+1})} >+1</button>
//       </div>
//     )
//   }
// }

function App(props) {
  const [counter,setCounter] = useState(0)
  const [text,setText] = useState(props.text)
  const [counter1,setCounter1] = useState(props.val)
  return (
    <div>
      <p>Bu butona {counter} kez basıldı</p>
      <button className='btn' onClick={()=>setCounter(counter+1)}>+1</button><br></br>
      <hr></hr>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
      <p>{text}</p>s
      <hr></hr>
      <p>Propstan gelen veri {counter1}</p>
      <button className='btn' onClick={()=>setCounter1(counter1+1)}>Veriyi arttır</button>
      <button className='btn' onClick={()=>{setCounter1(counter1-1)}}>Veriyi azalt</button>
    </div>
  );
}

export default App;
