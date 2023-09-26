import About from "./components/About";
import AddIssue from "./components/AddIssue";
import NavigationMneu from "./components/NavigationMenu";

function App() {
  return (
    <div className="App">
      <NavigationMneu />
      <About />
      <AddIssue />
    </div>
  );
}

export default App;
