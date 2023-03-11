import { useState } from "react"
const NodeList = ()=>{
    const [nodeList,setNodes] = useState([
        {id:1, title:"Node 1"},
        {id:2, title:"Node 2"},
        {id:3, title:"Node 3"}
    ])
    const addItem =()=>{
        setNodes([...nodeList ,{id:4, title:"Node 4"}])
    }
    return(
        <div>
            <ul>
                {
                nodeList.map((item, index)=>{
                    return(
                        <li key={index}>{item.title}</li>
                        )
                    })
                }
            </ul>
            <button className="btn" onClick={addItem}>Node Ekle</button>
        </div>
    )
}
export default NodeList;