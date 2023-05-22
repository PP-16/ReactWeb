import "./App.css";
import Main from "./layout/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicRoute } from "./route/Route";
import { MainPrivate } from "./private/layout/Main";
import {PrivateRoute} from "./route/PrivateRoute"

function App() {
  const status =0;
  return (
    <BrowserRouter>
    {status === 0 ? <Main>
      <Routes>
        {PublicRoute.map((item) => (
          <Route
            key={item.id}
            path={item.path}
            element={item.element}
          />
        ))}
      </Routes>
      </Main>:
      <MainPrivate>
      <Routes>
        {PrivateRoute.map((item) => (
          <Route
            key={item.id}
            path={item.path}
            element={item.element}
          />
        ))}
      </Routes>
      </MainPrivate>}
      
    </BrowserRouter>
  );
}

export default App;
