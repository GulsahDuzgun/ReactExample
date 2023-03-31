import EmojiResults from "./components/EmojiResults";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchInput/>
      <EmojiResults/>
    </div>
  );
}

export default App;
