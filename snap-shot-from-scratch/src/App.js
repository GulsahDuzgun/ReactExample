import './App.css';
import Introduction from './components/Introduction';
import { useState } from 'react';

function App() {
  let [searchText, setSearchText] = useState()

   const handleSetText = (val) => {
    //console.log(val)
    setSearchText(searchText = val)
    //console.log(searchText)
  }

  return (
    <div className="App">
      <Introduction handleSearch={handleSetText} />
    </div>
  );
}

export default App;
