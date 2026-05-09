import { Routes, Route } from "react-router-dom";
import LatestBlogs from "./blogs/LatestBlogs";
import { BlogRoutes } from "./routes/BlogRoutes";


function App() {
  return (
    <Routes>
      <Route path="/Blogs" element={<LatestBlogs />} />
      {BlogRoutes()}
    </Routes>
  );
}

export default App;
