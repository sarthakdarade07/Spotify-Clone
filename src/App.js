import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import RecommondedSongs from "./Components/RecommondedSongs";

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/songs" element={<RecommondedSongs />}></Route>
      </Routes>
    </>
  );

 
}
export default App;
