import "./App.css";
import { getMoviesByName, getMovieDetailsById } from "./utils";

function App() {
  getMoviesByName("batman");
  getMovieDetailsById("tt0112462");
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
