import { TopBar } from "./components";
import { Home, Settings, Single, Write, Login, Register } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const currentUser = true;
  return (
    <div>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/posts" element={<Home />} />
          <Route
            path="/register"
            element={currentUser ? <Home /> : <Register />}
          />
          <Route path="/login" element={currentUser ? <Home /> : <Login />} />
          <Route path="/post/:id" element={<Single />} />
          <Route path="/write" element={currentUser ? <Write /> : <Login />} />
          <Route
            path="/settings"
            element={currentUser ? <Settings /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
