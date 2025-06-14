import { Route, Routes } from "react-router-dom";
import RecommondedSongs from "./RecommondedSongs";

function Songs(){
    return (
      <>
        <Routes>
          <Route path="/songs" element={<RecommondedSongs/>}></Route>
        </Routes>
      </>
    );
}
export default Songs;