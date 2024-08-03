import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import {
  InterFontModule,
  PoppinsFontModule,
  PublicSansFontModule,
  GlobalStylesModule,
} from "./assets";

InterFontModule;
PoppinsFontModule;
PublicSansFontModule;
GlobalStylesModule;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
