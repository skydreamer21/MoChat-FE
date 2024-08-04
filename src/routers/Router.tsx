import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage/MainPage";
import MorePage from "../pages/MorePage/MorePage";
import FallbackPage from "../pages/FallbackPage/FallbackPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/more" element={<MorePage />}></Route>
        <Route path="/*" element={<FallbackPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
