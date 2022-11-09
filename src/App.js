import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import  { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import memberReducer from "./reducers/member-reducer";
import AddComponent from "./Add";
import ListComponent from "./List";

const store = configureStore({
  reducer: {member: memberReducer}
})

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App container mt-2">
          <Routes>
            <Route index element={<ListComponent/>}/>
            <Route path="/add" element={<AddComponent/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
