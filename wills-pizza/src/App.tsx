import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <div className="h-screen" id="about">
        about
      </div>
      <div className="h-screen" id="projects">
        projects
      </div>
      <div className="h-screen" id="contact">
        contact
      </div>
    </div>
  );
}

export default App;
