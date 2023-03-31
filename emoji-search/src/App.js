import { useState } from "react";
import EmojiResults from "./components/EmojiResults";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";

function App() {
  const [searchText, setText] = useState("")
  //console.log(searchText)

  return (
    <div className="App">
      <Header/>
      <SearchInput search={setText}/>
      <EmojiResults emojiData={[
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
          ]}/>
    </div>
  );
}

export default App;
