import { useState } from "react";
import EmojiResults from "./components/EmojiResults";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";

function App() {

  const EmojiArr = [
    {
      title: 'Fire',
      symbol: '🔥',
    },
    {
      title: 'Grinning',
      symbol: '😀',
    },
    {
      title: 'Smile Cat',
      symbol: '😺',
    }
  ]
  const [searchText, setText] = useState("")
  const [showEmoji, setShowEmojiArr] = useState(EmojiArr)

  const  handleSearch = (e) => {
    let val= e.target.value;
    setText(val)
   
    setShowEmojiArr(EmojiArr.filter(i => i.title.includes(val)===true))
    
  }

  return (
    <div className="App">
      <Header/>
      <SearchInput search={handleSearch}/>
      <EmojiResults emojiData={showEmoji}/>
    </div>
  );
}

export default App;
