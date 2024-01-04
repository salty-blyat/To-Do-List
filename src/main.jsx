import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppStateProvider } from "./components/AppStateContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { PageContext } from "./components/Path.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PageContext.Provider> {/* Use PageContext.Provider here */}
      <BrowserRouter>
        <AppStateProvider>
          <App />
        </AppStateProvider>
      </BrowserRouter>
    </PageContext.Provider> {/* Close the PageContext.Provider tag */}
  </React.StrictMode>
);
