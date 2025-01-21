import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/login" element={<div>Login page</div>}/>
        <Route path="/test" element={<div>Test page</div>}/>
      </Routes>
    </BrowserRouter>
    <NavBar />
      <h1 className="text-3xl font-bold">Hello Devs</h1>
    </>
  );
}

export default App;
