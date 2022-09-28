import { Route, Routes } from "react-router-dom";
import { Blog } from "./pages/Blog";
import { Home } from "./pages/Home";
import { ProjectDetail } from "./pages/ProjectDetail";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<ProjectDetail />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};
