import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import RecommondedSongs from "./Components/RecommondedSongs";
import InstallApp from "./Components/InstallApp";

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/songs" element={<RecommondedSongs />}></Route>
        {/* <Route path="/installapp" Component={InstallApp}></Route>  */}
        <Route path="*"></Route>
      </Routes>
    </>
  );

 
}
export default App;
