import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import PageListContributors from "../pages/dashboard/contributors/List";
import PageReadContributor from "../pages/dashboard/contributors/Read";
import PageCreateContributor from "../pages/dashboard/contributors/Create";
import PageEditContributor from "../pages/dashboard/contributors/Edit";
import PageLogin from "../pages/Login";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/contributors" element={<PageListContributors />} />
        <Route
          path="/contributors/view/:id"
          element={<PageReadContributor />}
        />
        <Route
          path="/contributors/edit/:id"
          element={<PageEditContributor />}
        />
        <Route
          path="/contributors/create"
          element={<PageCreateContributor />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
