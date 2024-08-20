import Header from "./Components/Header";
import Main from "./Components/Main";
import "./styles/components/App.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const darkTheme = true; 
  return (
    <div className={`App-${darkTheme ? "dark" : "light"}`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;

