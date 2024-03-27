import React from "react";
import {Provider} from "react-redux";
import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {persistor, store} from "./API/store/store";
import {router} from "./API/Router";
import {PersistGate} from "redux-persist/integration/react";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "src/Utils/theme/theme";

const reactRoot = createRoot(
    document.getElementById("root")!,
)

reactRoot.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={router}/>
            </ThemeProvider>
        </PersistGate>
    </Provider>
);