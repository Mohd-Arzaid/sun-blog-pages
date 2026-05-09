import { Routes, Route } from "react-router-dom";
import LatestBlogs from "./blogs/LatestBlogs";

function App() {
  return (
    <Routes>
      <Route path="/Blogs" element={<LatestBlogs />} />
    </Routes>
  );
}

export default App;
