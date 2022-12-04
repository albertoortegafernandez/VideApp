import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store/store";
import App from "./App";

import "./app.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
 
    <Provider store={store}>
    <HashRouter>
        <App />
    </HashRouter>
    </Provider>
  
);
