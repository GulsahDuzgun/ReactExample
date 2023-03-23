function App() {
  return (
    <div className="App">
      <div className="container offset-3 col-6  my-5 todo">
        <h1 className="text-center">THINGS TO DO</h1>
        <div className="my-3">
        <input type="text" className="form-control" placeholder="Add New" />
        </div>
        <ul>
          <li className="p-3">
            <input className="form-check-input me-3" type="checkbox" id="doneCheck" />
            <label className="form-check-label" for="doneCheck">item</label>
          </li>
        </ul>
        <div className="d-flex justify-content-between p-2 mx-3">
          <div>
            <button className="btn btn-outline-success me-1">Ekle</button>
            <button className="btn btn-outline-primary">Search</button>  |  length items left
          </div>
          <div>
            <button className="btn btn-secondary me-1">All</button>
            <button className="btn btn-success me-1">Active</button>
            <button className="btn btn-danger">Completed</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
