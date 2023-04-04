import Home from "./routes/home";
import Detail from "./routes/Detail";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/movie/:id"} element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
