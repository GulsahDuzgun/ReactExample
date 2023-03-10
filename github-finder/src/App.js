import Navbar from './components/Navbar';
import User, { UserList } from'./components/UserList';
function App() {
  return (
    <div className="">
      <Navbar title="Github Finder" />
      <div className="container mt-3">
          <UserList/>
      </div>
    </div>
  );
}

export default App;
