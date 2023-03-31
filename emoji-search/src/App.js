import { useState } from "react";
import EmojiResults from "./components/EmojiResults";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import EmojiArr from './data/emojiList.json'
import './App.css';

function App() {
  const [searchText, setText] = useState("")
  const [showEmoji, setShowEmojiArr] = useState(EmojiArr.slice(0,20))

  const  handleSearch = (e) => {
    let val= e.target.value;
    setText(val)
   
    setShowEmojiArr(EmojiArr.filter(i => i.title.includes(val)===true).slice(0,20))
    
  }

  return (
    <div className="App">
      <Header/>
      <div className="appPage">
        <SearchInput search={handleSearch}/>
        <EmojiResults emojiData={showEmoji}/>
      </div>
      
    </div>
  );
}

export default App;
