import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeMode from "#components/themeMode";
import { Links } from "#data/links";
import Error from "#page/error";
import Home from "#page/home";



function App() {
  const home = Links.find((Links) => {
    return Links.label === "home";
  });

  if (home) {
    return (
      <BrowserRouter>
        <ThemeMode />
        <Routes>
          <Route path={home.url} element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return <Error id="1337" error="Error system !" />;
  }
}

export default App;
