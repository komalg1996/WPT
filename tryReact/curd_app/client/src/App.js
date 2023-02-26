import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Crud Application</h1>
      <div className="form">
        <lable>Movie Name</lable>
        <input type="text" name="movieName"></input>
        <lable>Review</lable>
        <input type="text" name="Review"></input>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default App;
