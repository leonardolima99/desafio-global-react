import { Routes, Route } from "react-router-dom";

import { RequireAuth } from "./components/RequireAuth";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { Management } from "./pages/Management";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/management"
          element={
            <RequireAuth>
              <Management />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
