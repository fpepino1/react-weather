import "./App.css";

import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <a href="https://github.com/fpepino1/react-weather">
            © FARRAH PEPINO 2023
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
