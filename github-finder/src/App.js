import Navbar from './components/Navbar';
import User from'./components/User';
function App() {
  return (
    <div className="">
      <Navbar title="Github Finder" />
      <div className="container mt-3">
          <User/>
      </div>
    </div>
  );
}

export default App;
