import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage/MainPage";
import MorePage from "../pages/MorePage/MorePage";
import FallbackPage from "../pages/FallbackPage/FallbackPage";
import GroupPage from "../pages/GroupPage/GroupPage";
import NewGroupPage from "../pages/GroupPage/NewGroupPage";
import GroupSuccessPage from "../pages/GroupPage/GroupSuccessPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/more" element={<MorePage />}></Route>
        <Route path="/group" element={<GroupPage />}></Route>
        <Route path="/group/post" element={<NewGroupPage />}></Route>
        <Route path="/group/success" element={<GroupSuccessPage />}></Route>
        <Route path="/*" element={<FallbackPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
