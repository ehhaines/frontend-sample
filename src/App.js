import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import AddComponent from "./Add";
import ListComponent from "./List";

function App() {
  return (
    <BrowserRouter>
      <div className="App container mt-2">
        <Routes>
          <Route index element={<ListComponent/>}/>
          <Route path="/add" element={<AddComponent/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
