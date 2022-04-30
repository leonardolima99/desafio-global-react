import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { Management } from "./pages/Management";
import { Error404 } from "./pages/Error404";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/management" element={<Management />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
