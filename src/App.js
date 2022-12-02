import React, { Suspense, lazy } from "react";
import "./style/app.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Design from "./components/pages/Design";
import FrontEnd from "./components/pages/FrontEnd";
import Blogs from "./components/pages/Blogs";
import ScrollTop from "./components/ui/ScrollTop";
import Spinner from "./components/ui/Spinner";

const Home = lazy(() => import("./components/pages/Home"));
function App() {
  return (
    <div className="app">
      <Suspense fallback={<Spinner />}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/design" element={<Design />} />
            <Route path="/front" element={<FrontEnd />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
        <ScrollTop />
      </Suspense>
    </div>
  );
}
export default App;
