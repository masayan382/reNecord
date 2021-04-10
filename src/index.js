import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store, history } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { ConnectedRouter } from "connected-react-router";

import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();
