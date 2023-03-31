import EmojiResults from "./components/EmojiResults";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchInput/>
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
