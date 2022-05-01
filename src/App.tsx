import { Routes, Route } from "react-router-dom";

import { RequireAuth } from "./components/RequireAuth";
import { VerifyAuth } from "./components/VerifyAuth";
import { AsideWrapper } from "./components/AsideWrapper";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { Management } from "./pages/Management";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth nivel_acesso="funcionario">
              <AsideWrapper>
                <Home />
              </AsideWrapper>
            </RequireAuth>
          }
        />
        <Route
          path="/signin"
          element={
            <VerifyAuth>
              <SignIn />
            </VerifyAuth>
          }
        />
        <Route
          path="/management"
          element={
            <RequireAuth nivel_acesso="administrador">
              <AsideWrapper>
                <Management />
              </AsideWrapper>
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
